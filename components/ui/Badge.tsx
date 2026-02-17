import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "red" | "pink" | "blue" | "green" | "purple" | "amber" | "gray";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Badge({
  children,
  variant = "gray",
  size = "md",
  className = "",
}: BadgeProps) {
  const baseClasses = [
    "inline-flex",
    "items-center",
    "font-medium",
    "rounded-full",
    "transition-all",
    "duration-300",
  ];

  const variantClasses = {
    red: ["bg-red-50", "text-red-700"],
    pink: ["bg-pink-50", "text-pink-700"],
    blue: ["bg-blue-50", "text-blue-700"],
    green: ["bg-green-50", "text-green-700"],
    purple: ["bg-purple-50", "text-purple-700"],
    amber: ["bg-amber-50", "text-amber-700"],
    gray: ["bg-gray-50", "text-gray-700"],
  };

  const sizeClasses = {
    sm: ["px-2", "py-1", "text-xs"],
    md: ["px-3", "py-1", "text-sm"],
    lg: ["px-4", "py-2", "text-base"],
  };

  const classes = [
    ...baseClasses,
    ...variantClasses[variant],
    ...sizeClasses[size],
    className,
  ].join(" ");

  return <span className={classes}>{children}</span>;
}
