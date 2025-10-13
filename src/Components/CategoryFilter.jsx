"use client"

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
      <h2 className="text-lg font-semibold mb-4 text-white">Danh mục</h2>
      <div className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`w-full flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
              selectedCategory === category.id
                ? "bg-zinc-800 text-white font-medium"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            <span>{category.name}</span>
            <span className="text-xs">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
