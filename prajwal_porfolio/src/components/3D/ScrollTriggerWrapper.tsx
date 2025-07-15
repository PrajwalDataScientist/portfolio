import React, { useEffect, useRef, useState } from 'react';

interface ScrollTriggerWrapperProps {
  children: React.ReactNode;
  animation: 'zoom-in-3d' | 'slide-in-space' | 'burst-forward';
  delay?: number;
  className?: string;
}

const ScrollTriggerWrapper: React.FC<ScrollTriggerWrapperProps> = ({
  children,
  animation,
  delay = 0,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollTriggerWrapper;