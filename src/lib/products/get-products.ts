import { z } from "zod";
import { ProductSchema, type Product } from "./schema";
import { cacheLife } from "next/cache";

const ProductsResponseSchema = z.object({
  products: z.array(ProductSchema),
});

const API_URL = "https://dummyjson.com/products";

export async function getProducts(limit = 30): Promise<Product[]> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${API_URL}?limit=${limit}`);

  if (!res.ok) {
    throw new Error(`Failed to load products: HTTP ${res.status}`);
  }

  const data: unknown = await res.json();
  return ProductsResponseSchema.parse(data).products;
}
