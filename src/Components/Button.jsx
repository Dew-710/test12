"use client"

export function Button({ children, onClick, variant = "default", size = "default", className = "", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    outline: "border border-zinc-800 bg-transparent hover:bg-zinc-800 hover:text-zinc-100",
    ghost: "hover:bg-zinc-800 hover:text-zinc-100",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
