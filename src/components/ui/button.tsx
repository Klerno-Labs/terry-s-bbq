import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-sm font-oswald uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg hover:-translate-y-1": variant === "primary",
            "bg-secondary text-white hover:bg-secondary/80": variant === "secondary",
            "border-2 border-white bg-transparent text-white hover:bg-white hover:text-background": variant === "outline",
            "text-muted hover:text-white": variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-8 py-4 text-base": size === "md",
            "px-10 py-5 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }