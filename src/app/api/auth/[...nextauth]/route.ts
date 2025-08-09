import { User } from "@/generated/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "@/lib/db";
import bcrypt from "bcrypt";
import NextAuth, { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface CredentialsProps {
  email: string;
  password: string;
}

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(
        credentials: CredentialsProps | undefined,
        _req
      ): Promise<User | any> {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma?.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("Invalid Input");
        }
        const isCorrectPass = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isCorrectPass) {
          throw new Error("Invalid Input");
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
    jwt({ token, user }: { token: any; user: any }) {
      if (user) token.isAdmin = user.isAdmin;
      return token;
    },
    session({ session, token }: any) {
      session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POT };
