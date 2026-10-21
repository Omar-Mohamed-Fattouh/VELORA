import React from "react"

export function Input({ type = "text", placeholder = "Enter text...", className = "", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...props}
      className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  )
}
