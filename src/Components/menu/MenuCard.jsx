"use client"

import { Plus } from "lucide-react"
import { useCart } from "../../contexts/CartContext"

export default function MenuCard({ item }) {
  const { addItem } = useCart()

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  return (
    <div className="group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:shadow-lg hover:shadow-amber-500/10">
      <div className="aspect-[4/3] overflow-hidden bg-zinc-800">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
        <p className="text-sm text-zinc-400 mb-3 line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-amber-500">{formatPrice(item.price)}</span>

          <button
            onClick={() => addItem(item)}
            className="flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600"
          >
            <Plus className="h-4 w-4" />
            <span>Thêm</span>
          </button>
        </div>
      </div>
    </div>
  )
}
