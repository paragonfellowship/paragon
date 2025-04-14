"use client";

import { ComponentProps, useEffect, useRef, useState, useCallback } from "react";

export default function Carousel({
  children,
  speed = 100000, // ADJUSTED DEFAULT SPEED: Pixels per second. Increase/decrease as needed.
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Speed in pixels per second
} & ComponentProps<"div">) {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const currentScrollRef = useRef(0);

  const calculateWidth = useCallback(() => {
    if (contentRef.current?.children.length) {
      const firstChildContainer = contentRef.current.children[0] as HTMLElement;
      if (firstChildContainer) {
        const newWidth = firstChildContainer.offsetWidth;
        // Only update and reset if the width actually changes significantly
        if (Math.abs(newWidth - contentWidth) > 1) {
            setContentWidth(newWidth);
            if (contentRef.current) {
                contentRef.current.style.transform = `translateX(0px)`;
            }
            currentScrollRef.current = 0;
            lastTimeRef.current = null;
        } else if (contentWidth === 0 && newWidth > 0) {
             // Handle initial calculation case where contentWidth starts at 0
             setContentWidth(newWidth);
        }
      }
    }
  }, [contentWidth]); // Dependency on contentWidth to compare new vs old

  useEffect(() => {
    calculateWidth();

    const handleResize = () => {
        calculateWidth();
    };

    // Use ResizeObserver if available for better performance than 'resize' event
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && outerContainerRef.current) {
        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(outerContainerRef.current);
    } else {
        // Fallback for older browsers
        window.addEventListener('resize', handleResize);
    }


    return () => {
        if (resizeObserver && outerContainerRef.current) {
            resizeObserver.unobserve(outerContainerRef.current);
        } else {
             window.removeEventListener('resize', handleResize);
        }
    };
  }, [calculateWidth, children]);


  useEffect(() => {
    if (!contentWidth || !contentRef.current) return;

    const element = contentRef.current;

    const step = (timestamp: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      // Prevent large jumps if tab was inactive
      if (deltaTime > 100) { // If more than 100ms passed (e.g., tab inactive), skip large jump
         animationFrameRef.current = requestAnimationFrame(step);
         return;
      }


      const scrollIncrement = speed * (deltaTime / 1000);
      currentScrollRef.current = (currentScrollRef.current + scrollIncrement) % contentWidth;
      element.style.transform = `translateX(-${currentScrollRef.current}px)`;

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [speed, contentWidth]);

  return (
    <div
      ref={outerContainerRef}
      className={`w-full mx-auto h-52 relative overflow-hidden ${className}`}
      {...props}
    >
      <div
        ref={contentRef}
        className="flex items-center h-full absolute left-0 top-0"
      >
        <div className="flex items-center h-full flex-shrink-0">
          {children}
        </div>
        <div className="flex items-center h-full flex-shrink-0">
          {children}
        </div>
      </div>
      {/* Optional Fades */}
      {/* <div className='absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none' /> */}
      {/* <div className='absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none' /> */}
    </div>
  );
}