import { Chat } from "@/components/chat";
import { getProducts } from "@/lib/products/get-products";

export default async function Home() {
  const products = await getProducts(5);

  return (
    <main>
      <h1>AI Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}: {product.price} USD
          </li>
        ))}
      </ul>
      <Chat />
    </main>
  );
}
