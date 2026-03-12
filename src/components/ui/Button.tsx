"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: &quot;button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled,
  className,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-sm border-b-4";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark border-b-primary-dark active:border-b-0 active:translate-y-1",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary active:border-b-0 active:translate-y-1",
    tertiary: "bg-transparent text-accent hover:text-white underline decoration-accent underline-offset-4 border-b-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}