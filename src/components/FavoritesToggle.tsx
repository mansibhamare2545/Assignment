"use client";

import { useEffect, useState } from "react";
import { getFavorites, toggleFavorite } from "../lib/favorites";

export default function FavoritesToggle({ productId }: { productId: number }) {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFavorites(getFavorites());
  }, []);

  const isFav = favorites.includes(productId);

  return (
    <button
      onClick={() => setFavorites(toggleFavorite(productId))}
      className="mt-2 text-sm"
    >
      {isFav ? "★ Remove Favorite" : "☆ Add Favorite"}
    </button>
  );
}
