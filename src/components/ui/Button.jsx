export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-3 py-1 rounded-md text-white hover:text-blue-400 transition-colors ${className}`}
    >
      {children}
    </button>
  )
}
