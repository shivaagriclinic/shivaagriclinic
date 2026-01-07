import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "fade-up-stagger";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const animationClasses: Record<AnimationType, { initial: string; animated: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    animated: "opacity-100 translate-y-0",
  },
  "fade-in": {
    initial: "opacity-0",
    animated: "opacity-100",
  },
  "slide-left": {
    initial: "opacity-0 translate-x-8",
    animated: "opacity-100 translate-x-0",
  },
  "slide-right": {
    initial: "opacity-0 -translate-x-8",
    animated: "opacity-100 translate-x-0",
  },
  "scale": {
    initial: "opacity-0 scale-95",
    animated: "opacity-100 scale-100",
  },
  "fade-up-stagger": {
    initial: "opacity-0 translate-y-8",
    animated: "opacity-100 translate-y-0",
  },
};

export const ScrollAnimation = ({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  className = "",
  once = true,
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once]);

  const { initial, animated } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? animated : initial,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
