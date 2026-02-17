import { ReactNode } from "react";
import Image from "next/image";
import Badge from "./Badge";

interface CardProps {
  children?: ReactNode;
  className?: string;
  hover?: boolean;
  image?: string;
  imageAlt?: string;
  badge?: {
    text: string;
    variant?: "red" | "pink" | "blue" | "green" | "purple" | "amber" | "gray";
  };
  title?: string;
  description?: string;
}

export default function Card({
  children,
  className = "",
  hover = true,
  image,
  imageAlt = "",
  badge,
  title,
  description,
}: CardProps) {
  const baseClasses = [
    "bg-white",
    "border",
    "border-gray-200",
    "rounded-lg",
    "overflow-hidden",
    "shadow",
    "transition-all",
    "duration-500",
    hover ? "hover:shadow-xl card-hover group" : "",
  ].filter(Boolean);

  const classes = [...baseClasses, className].join(" ");

  return (
    <div className={classes}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`object-cover transition-transform duration-700 ${
              hover ? "group-hover:scale-110" : ""
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-all duration-300 ${
              hover ? "group-hover:from-black/30" : ""
            }`}
          ></div>
          {badge && (
            <div className="absolute bottom-4 left-4">
              <Badge
                variant={badge.variant}
                className={`transition-all duration-300 ${
                  hover ? "group-hover:scale-105" : ""
                }`}
              >
                {badge.text}
              </Badge>
            </div>
          )}
        </div>
      )}

      {(title || description || children) && (
        <div className="p-6">
          {title && (
            <h3
              className={`text-xl font-semibold text-gray-900 mb-3 transition-colors ${
                hover ? "group-hover:text-blue-800" : ""
              }`}
            >
              {title}
            </h3>
          )}

          {description && <p className="text-gray-600 mb-4">{description}</p>}

          {children}
        </div>
      )}
    </div>
  );
}
