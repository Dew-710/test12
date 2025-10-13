"use client"

import { Plus } from "lucide-react"
import { Button } from "./Button"

export function MenuCard({ item, onAddToCart }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 transition-all hover:border-zinc-700">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-white">{item.name}</h3>
        <p className="text-sm text-zinc-400 mb-3 line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">{item.price.toLocaleString("vi-VN")}₫</span>
          <Button size="sm" onClick={() => onAddToCart(item)} className="gap-1">
            <Plus className="h-4 w-4" />
            Thêm
          </Button>
        </div>
      </div>
    </div>
  )
}
