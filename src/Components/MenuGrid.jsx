import { MenuCard } from "./MenuCard"

const menuItems = [
  {
    id: 1,
    name: "Phở Bò",
    category: "main-course",
    price: 85000,
    image: "/vietnamese-beef-pho-noodle-soup.jpg",
    description: "Phở bò truyền thống với nước dùng hầm xương 12 tiếng",
  },
  {
    id: 2,
    name: "Bánh Mì Thịt",
    category: "appetizers",
    price: 35000,
    image: "/vietnamese-banh-mi-sandwich.jpg",
    description: "Bánh mì giòn rụm với nhân thịt đầy đặn",
  },
  {
    id: 3,
    name: "Gỏi Cuốn",
    category: "appetizers",
    price: 45000,
    image: "/vietnamese-fresh-spring-rolls.png",
    description: "Gỏi cuốn tươi với tôm, thịt và rau thơm",
  },
  {
    id: 4,
    name: "Bún Chả",
    category: "main-course",
    price: 75000,
    image: "/vietnamese-bun-cha-grilled-pork.jpg",
    description: "Bún chả Hà Nội với thịt nướng thơm lừng",
  },
  {
    id: 5,
    name: "Cơm Tấm",
    category: "main-course",
    price: 65000,
    image: "/vietnamese-broken-rice-com-tam.jpg",
    description: "Cơm tấm sườn nướng đặc biệt",
  },
  {
    id: 6,
    name: "Chè Ba Màu",
    category: "desserts",
    price: 30000,
    image: "/vietnamese-three-color-dessert.jpg",
    description: "Chè ba màu mát lạnh, ngọt dịu",
  },
]

export function MenuGrid({ selectedCategory, onAddToCart }) {
  const filteredItems =
    selectedCategory === "all" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}
