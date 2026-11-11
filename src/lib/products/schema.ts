import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  category: z.string(),
  thumbnail: z.url(),
  rating: z.number(),
});

export type Product = z.infer<typeof ProductSchema>;
