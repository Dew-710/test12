"use client"

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">Danh Mục</h2>
      <nav className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? "bg-amber-500 text-white"
                : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            <span>{category.name}</span>
            <span className={`text-xs ${selectedCategory === category.id ? "text-amber-100" : "text-zinc-500"}`}>
              {category.count}
            </span>
          </button>
        ))}
      </nav>
    </div>
  )
}
