import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'drag' | 'card'>('default');
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on desktop/laptops with fine pointers (mouse) and no reduced motion
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        ringX = mouseX;
        ringY = mouseY;
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isCanvas = target.closest('canvas') || target.closest('[aria-label*="Rook"]');
      const isCard = target.closest('#services .group') || target.closest('#work .group');
      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer');

      if (isCanvas) {
        setCursorState('drag');
      } else if (isCard) {
        setCursorState('card');
      } else if (isInteractive) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    const render = () => {
      // Smooth lerp for outer follower ring
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const getRingDimensions = () => {
    if (cursorState === 'drag') {
      return 'w-16 h-16 bg-[#FF4D38]/15 border-[#FF4D38]';
    }
    if (cursorState === 'card') {
      return 'w-14 h-14 bg-[#141518]/10 border-[#141518]/60';
    }
    if (cursorState === 'hover') {
      return 'w-12 h-12 bg-[#FF4D38]/15 border-[#FF4D38] scale-110';
    }
    return 'w-8 h-8 bg-transparent border-[#FF4D38]/50';
  };

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border transition-[width,height,background-color,border-color,transform] duration-200 ease-out flex items-center justify-center ${getRingDimensions()} ${
          isClicking ? 'scale-75' : ''
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {/* Dynamic Context Label */}
        {cursorState === 'drag' && (
          <span
            ref={textRef}
            className="text-[9px] font-black uppercase tracking-wider text-[#FF4D38] select-none animate-pulse"
          >
            Drag
          </span>
        )}
        {cursorState === 'card' && (
          <span className="text-[9px] font-black uppercase tracking-wider text-[#141518] select-none">
            View
          </span>
        )}
      </div>

      {/* Center Precise Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-transform duration-75 ease-out ${
          cursorState === 'drag'
            ? 'w-1.5 h-1.5 bg-[#FF4D38]'
            : cursorState === 'hover'
            ? 'w-2 h-2 bg-[#FF4D38] scale-125'
            : 'w-2 h-2 bg-[#FF4D38]'
        } ${isClicking ? 'scale-150' : ''}`}
        style={{
          willChange: 'transform',
          boxShadow: '0 0 8px rgba(255, 77, 56, 0.45)',
        }}
      />
    </div>
  );
};
