"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "./Button"

export function MenuHeader({ cartItemCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 font-bold text-lg">
              R
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Restaurant</h1>
              <p className="text-xs text-zinc-400">Nhà hàng cao cấp</p>
            </div>
          </div>

          <Button variant="outline" size="default" onClick={onCartClick} className="relative text-white bg-transparent">
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 text-xs font-bold">
                {cartItemCount}
              </span>
            )}
            <span className="ml-2 hidden sm:inline">Giỏ hàng</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
