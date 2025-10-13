"use client"

import { useState } from "react"
import MenuHeader from "../Components/menu/MenuHeader"
import CategoryFilter from "../Components/menu/CategoryFilter"
import MenuGrid from "../Components/menu/MenuGrid"
import Cart from "../Components/menu/Cart"
import { useCart } from "../contexts/CartContext"

const MENU_ITEMS = [
  {
    id: 1,
    name: "Phở Bò",
    category: "main",
    price: 65000,
    image: "/vietnamese-beef-pho.jpg",
    description: "Phở bò truyền thống với nước dùng hầm xương 12 tiếng",
  },
  {
    id: 2,
    name: "Bánh Mì Thịt",
    category: "appetizer",
    price: 25000,
    image: "/banh-mi-sandwich.jpg",
    description: "Bánh mì giòn với thịt nguội, pate và rau sống",
  },
  {
    id: 3,
    name: "Gỏi Cuốn",
    category: "appetizer",
    price: 35000,
    image: "/vietnamese-spring-rolls.png",
    description: "Gỏi cuốn tôm thịt tươi ngon với nước chấm đặc biệt",
  },
  {
    id: 4,
    name: "Bún Chả Hà Nội",
    category: "main",
    price: 55000,
    image: "/bun-cha-hanoi.jpg",
    description: "Bún chả Hà Nội chính gốc với thịt nướng thơm lừng",
  },
  {
    id: 5,
    name: "Cơm Tấm Sườn",
    category: "main",
    price: 50000,
    image: "/grilled-pork-chop-rice.jpg",
    description: "Cơm tấm sườn nướng với trứng ốp la",
  },
  {
    id: 6,
    name: "Chè Ba Màu",
    category: "dessert",
    price: 20000,
    image: "/vietnamese-three-color-dessert.jpg",
    description: "Chè ba màu mát lạnh với đậu, thạch và nước cốt dừa",
  },
  {
    id: 7,
    name: "Bánh Flan",
    category: "dessert",
    price: 18000,
    image: "/caramel-flan.png",
    description: "Bánh flan caramel mềm mịn, ngọt dịu",
  },
  {
    id: 8,
    name: "Cà Phê Sữa Đá",
    category: "drink",
    price: 22000,
    image: "/vietnamese-iced-coffee.png",
    description: "Cà phê phin truyền thống với sữa đặc",
  },
  {
    id: 9,
    name: "Trà Đào Cam Sả",
    category: "drink",
    price: 28000,
    image: "/peach-tea-with-lemongrass.jpg",
    description: "Trà đào cam sả tươi mát, thanh nhiệt",
  },
  {
    id: 10,
    name: "Sinh Tố Bơ",
    category: "drink",
    price: 30000,
    image: "/avocado-smoothie.jpg",
    description: "Sinh tố bơ béo ngậy, bổ dưỡng",
  },
  {
    id: 11,
    name: "Bò Lúc Lắc",
    category: "main",
    price: 85000,
    image: "/shaking-beef.jpg",
    description: "Bò lúc lắc với khoai tây chiên giòn",
  },
  {
    id: 12,
    name: "Chả Giò Giòn",
    category: "appetizer",
    price: 40000,
    image: "/crispy-fried-spring-rolls.jpg",
    description: "Chả giò chiên giòn rụm với nhân thịt tôm",
  },
]

const CATEGORIES = [
  { id: "all", name: "Tất Cả", count: MENU_ITEMS.length },
  { id: "appetizer", name: "Món Khai Vị", count: MENU_ITEMS.filter((item) => item.category === "appetizer").length },
  { id: "main", name: "Món Chính", count: MENU_ITEMS.filter((item) => item.category === "main").length },
  { id: "dessert", name: "Tráng Miệng", count: MENU_ITEMS.filter((item) => item.category === "dessert").length },
  { id: "drink", name: "Đồ Uống", count: MENU_ITEMS.filter((item) => item.category === "drink").length },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const filteredItems =
    selectedCategory === "all" ? MENU_ITEMS : MENU_ITEMS.filter((item) => item.category === selectedCategory)

  const { items = [] } = useCart() || {} // Ensure `items` has a default value
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-zinc-950">
      <MenuHeader cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <CategoryFilter
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </aside>

          <div className="flex-1">
            <MenuGrid items={filteredItems} />
          </div>
        </div>
      </main>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
