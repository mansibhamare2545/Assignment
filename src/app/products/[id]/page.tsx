import Image from "next/image";
import { fetchProductById } from "../../../lib/api";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProductById(params.id);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Image src={product.image} alt={product.title} width={512} height={256} className="h-64 mx-auto object-contain" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.category}</p>
      <p className="mt-4">{product.description}</p>
      <p className="text-xl font-semibold mt-4">₹{product.price}</p>
    </div>
  );
}
