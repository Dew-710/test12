"use client"

import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "./Button"

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-zinc-950 border-l border-zinc-800 z-50 transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 p-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-white" />
            <h2 className="text-lg font-semibold text-white">Giỏ hàng</h2>
            <span className="text-sm text-zinc-400">({items.length})</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-zinc-600 mb-4" />
              <p className="text-zinc-400">Giỏ hàng trống</p>
              <p className="text-sm text-zinc-500 mt-1">Thêm món ăn vào giỏ hàng để tiếp tục</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-lg border border-zinc-800 p-3 bg-black">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm mb-1 truncate text-white">{item.name}</h3>
                    <p className="text-sm font-semibold mb-2 text-white">{item.price.toLocaleString("vi-VN")}₫</p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 text-white bg-transparent"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center text-white">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 text-white bg-transparent"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-auto text-red-400 hover:text-red-300 h-7 px-2"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        Xóa
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-zinc-800 p-4 space-y-3">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-zinc-400">
                <span>Tạm tính:</span>
                <span>{subtotal.toLocaleString("vi-VN")}₫</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Thuế (10%):</span>
                <span>{tax.toLocaleString("vi-VN")}₫</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-lg font-semibold pt-2 border-t border-zinc-800">
              <span className="text-white">Tổng cộng:</span>
              <span className="text-white">{total.toLocaleString("vi-VN")}₫</span>
            </div>
            <Button className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200" size="lg">
              Thanh toán
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
