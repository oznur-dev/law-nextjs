import { ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "blue" | "gradient";
  padding?: "sm" | "md" | "lg";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  animated?: boolean;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn";
  delay?: number;
}

export default function Section({
  children,
  className = "",
  background = "white",
  padding = "md",
  maxWidth = "lg",
  animated = false,
  animation = "fadeInUp",
  delay = 0,
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-blue-800",
    gradient: "bg-gradient-to-br from-blue-900 to-gray-800",
  };

  const paddingClasses = {
    sm: "py-8",
    md: "py-16",
    lg: "py-24",
  };

  const maxWidthClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-screen-2xl",
    full: "max-w-none",
  };

  const sectionClasses = [
    backgroundClasses[background],
    paddingClasses[padding],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const containerClasses = [
    maxWidthClasses[maxWidth],
    "mx-auto",
    "px-4",
    "sm:px-6",
    "lg:px-8",
  ].join(" ");

  const content = (
    <section className={sectionClasses}>
      <div className={containerClasses}>{children}</div>
    </section>
  );

  if (animated) {
    return (
      <AnimatedSection animation={animation} delay={delay}>
        {content}
      </AnimatedSection>
    );
  }

  return content;
}
