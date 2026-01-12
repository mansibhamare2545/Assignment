"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/product";
import FavoritesToggle from "./FavoritesToggle";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded p-4 flex flex-col">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={128}
          className="mx-auto object-contain"
        />
        <h3 className="mt-2 font-medium">{product.title}</h3>
      </Link>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="font-bold mt-auto">₹{product.price}</p>
      <FavoritesToggle productId={product.id} />
    </div>
  );
}
