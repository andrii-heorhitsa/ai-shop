import { describe, expect, it } from "vitest";
import { ProductSchema } from "./schema";

const validProduct = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  price: 9.99,
  category: "beauty",
  thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.webp",
  rating: 4.94,
};

describe("ProductSchema", () => {
  it("accepts a valid product", () => {
    const result = ProductSchema.safeParse(validProduct);
    expect(result.success).toBe(true);
  });

  it("rejects a product with a string price", () => {
    const result = ProductSchema.safeParse({ ...validProduct, price: "9.99" });
    expect(result.success).toBe(false);
  });
});
