import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
}

// Map HTMLMotionProps to ButtonProps to allow motion features (like whileTap) if wrapped
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm font-semibold transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-blue-600 text-white hover:bg-blue-500": variant === "primary",
            "bg-white text-black hover:bg-zinc-200": variant === "secondary",
            "border border-white/20 bg-transparent text-white hover:bg-white/10": variant === "outline",
            "bg-transparent text-white hover:bg-white/10": variant === "ghost",
            "glow-blue": glow && variant === "primary",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
            "h-16 px-10 text-xl font-bold": size === "xl",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
