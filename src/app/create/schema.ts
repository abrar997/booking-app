import { optionLocations, optionTypes } from "@/data/data";
import z from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  desc: z.string().min(1, { message: "Description is required!" }),
  beds: z.coerce.number().min(1, { message: "Beds are required !" }),
  hasFreeWifi: z.boolean().optional(),
  type: z.enum(optionTypes.map(({ value }) => value)),
  location: z.enum(optionLocations.map(({ value }) => value)),
  priceNight: z.coerce
    .number()
    .min(15, { message: "Price must be above $15" })
    .max(50555, { message: "Price can't be above 50000" }),
});

export { schema };
