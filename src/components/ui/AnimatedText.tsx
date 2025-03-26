
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  speed?: number;
  as?: React.ElementType;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  delay = 0,
  speed = 0.05,
  as: Component = 'span',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !animatedRef.current)) {
            animatedRef.current = true;
            
            const spans = Array.from(container.children) as HTMLSpanElement[];
            
            spans.forEach((span, i) => {
              setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
              }, delay + i * (speed * 1000));
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [text, once, delay, speed]);

  return (
    <Component className={cn('inline-block relative overflow-hidden', className)}>
      <span 
        ref={containerRef} 
        className="inline"
        aria-label={text}
      >
        {text.split('').map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="inline-block opacity-0 transform translate-y-[8px] transition-all duration-300"
            style={{
              transitionDelay: `${i * speed}s`,
              transitionProperty: 'opacity, transform',
            }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </Component>
  );
};

export default AnimatedText;
