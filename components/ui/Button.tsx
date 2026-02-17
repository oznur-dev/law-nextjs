import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "phone" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  href,
  onClick,
  type = "button",
  className = "",
  icon,
}: ButtonProps) {
  const baseClasses = [
    "btn-enhanced",
    "inline-flex",
    "items-center",
    "justify-center",
    "font-medium",
    "rounded-md",
    "transition-all",
    "duration-300",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    disabled || loading ? "opacity-50 cursor-not-allowed" : "",
    fullWidth ? "w-full" : "",
  ].filter(Boolean);

  const variantClasses = {
    primary: [
      "bg-blue-800",
      "text-white",
      "hover:bg-blue-900",
      "focus:ring-blue-500",
      "shadow-lg",
    ],
    secondary: [
      "border",
      "border-gray-300",
      "text-gray-700",
      "bg-white",
      "hover:bg-gray-50",
      "focus:ring-blue-500",
    ],
    phone: [
      "border",
      "border-blue-100",
      "text-white",
      "bg-transparent",
      "hover:bg-blue-700",
      "focus:ring-blue-500",
    ],
    outline: [
      "border",
      "border-blue-800",
      "text-blue-800",
      "bg-transparent",
      "hover:bg-blue-800",
      "hover:text-white",
      "focus:ring-blue-500",
    ],
  };

  const sizeClasses = {
    sm: ["px-4", "py-2", "text-sm"],
    md: ["px-6", "py-3", "text-base"],
    lg: ["px-8", "py-4", "text-lg"],
  };

  const classes = [
    ...baseClasses,
    ...variantClasses[variant],
    ...sizeClasses[size],
    className,
  ].join(" ");

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {icon && <span className="mr-2">{icon}</span>}
      {loading ? (
        <span className="flex items-center">
          Gönderiliyor<span className="loading-dots"></span>
        </span>
      ) : (
        children
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  );
}
