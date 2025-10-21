"use client"

import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom";

export default function MenuHeader({ cartItemCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-xl font-bold text-white">V</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900">Menu</h1>
            </div>
          </div>

          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-gray-200"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Giỏ hàng</span>
            {cartItemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}