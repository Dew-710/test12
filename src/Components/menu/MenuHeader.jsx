"use client"

import { ShoppingCart } from "lucide-react"

export default function MenuHeader({ cartItemCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <span className="text-xl font-bold text-white">V</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Vietnamese Kitchen</h1>
              <p className="text-xs text-zinc-400">Ẩm thực Việt Nam</p>
            </div>
          </div>

          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Giỏ hàng</span>
            {cartItemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
