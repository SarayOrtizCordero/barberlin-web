"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
  icon,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wider transition-all duration-300";
  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };
  const variants = {
    primary: "bg-gradient-gold text-primary hover:shadow-gold hover:brightness-110",
    secondary: "border-2 border-gold text-gold hover:bg-gold hover:text-primary",
    dark: "bg-primary text-white hover:bg-primary-light",
    ghost: "text-gold hover:text-gold-light",
  };

  const classes = cn(base, sizes[size], variants[variant], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon && icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {icon && icon}
      {children}
    </button>
  );
}
