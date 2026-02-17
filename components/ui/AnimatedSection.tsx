"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = {
    fadeInUp: "opacity-0 translate-y-8",
    fadeInLeft: "opacity-0 -translate-x-8",
    fadeInRight: "opacity-0 translate-x-8",
    fadeIn: "opacity-0",
    scaleIn: "opacity-0 scale-95",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${animationClass} transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
