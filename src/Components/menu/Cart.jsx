"use client"

import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "../../contexts/CartContext"

export default function Cart({ isOpen, onClose }) {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart()

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  const subtotal = total
  const tax = total * 0.1
  const totalWithTax = subtotal + tax

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={onClose} />}

      {/* Cart Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-6 w-6 text-blue-500" />
              <h2 className="text-xl font-bold text-zinc-900">Giỏ Hàng</h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-500">Giỏ hàng trống</p>
                <p className="text-sm text-gray-600 mt-2">Thêm món ăn vào giỏ hàng để tiếp tục</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-zinc-900">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      <p className="text-sm font-medium text-blue-500 mb-3">{formatPrice(item.price)}</p>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-zinc-900 transition-colors hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="w-8 text-center font-medium text-zinc-900">{item.quantity}</span>

                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-zinc-900 transition-colors hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tạm tính</span>
                  <span className="text-zinc-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Thuế (10%)</span>
                  <span className="text-zinc-900">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2">
                  <span className="font-semibold text-zinc-900">Tổng cộng</span>
                  <span className="text-xl font-bold text-blue-500">{formatPrice(totalWithTax)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert("Chức năng thanh toán đang được phát triển!")
                  clearCart()
                  onClose()
                }}
                className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
              >
                Thanh Toán
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
