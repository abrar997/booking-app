import bcrypt from "bcryptjs";
import NextAuth, { SessionStrategy } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "@/lib/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { string } from "zod";

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { password, email } = credentials;
        const user = await db.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) {
          throw new Error("Invalid user");
        }
        const isCorrectPass = await bcrypt.compare(password, user.password);

        if (!isCorrectPass) {
          throw new Error("Invalid password");
        } else {
          const { password, ...currentUser } = user;
          return currentUser;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin;
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.is as string;
        session.user.isAdmin = token.isAdmin as boolean;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
