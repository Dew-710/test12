"use client"

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">Danh Mục</h2>
      <nav className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? "bg-blue-500 text-white"
                : "text-zinc-700 hover:bg-gray-200 hover:text-zinc-900"
            }`}
          >
            <span>{category.name}</span>
            <span className={`text-xs ${selectedCategory === category.id ? "text-blue-100" : "text-gray-400"}`}>
              {category.count}
            </span>
          </button>
        ))}
      </nav>
    </div>
  )
}
