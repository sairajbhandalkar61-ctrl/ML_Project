import React, { useEffect, useState, useRef } from 'react';

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let animationFrameId: number;
    const render = () => {
      // Smooth lerp
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Dynamic hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor-project]');
      if (projectCard) {
        setIsHovered(true);
        setCursorText('VIEW PROJECT →');
        return;
      }

      const clickable = target.closest('a, button, [role="button"], input, textarea');
      if (clickable) {
        setIsClickable(true);
        setIsHovered(false);
        setCursorText('');
        return;
      }

      setIsHovered(false);
      setIsClickable(false);
      setCursorText('');
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 -ml-2 -mt-2 will-change-transform"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      {isHovered ? (
        <div className="flex items-center gap-1.5 rounded-full bg-[#111111] px-4 py-1.5 text-[10px] font-mono tracking-widest text-[#EDE9DF] shadow-xl uppercase animate-in fade-in zoom-in-90 duration-200">
          <span>{cursorText}</span>
        </div>
      ) : isClickable ? (
        <div className="h-9 w-9 -ml-2.5 -mt-2.5 rounded-full border border-[#111111]/80 bg-[#111111]/10 backdrop-blur-[1px] transition-all duration-200" />
      ) : (
        <div className="h-3.5 w-3.5 rounded-full bg-[#111111] transition-all duration-150" />
      )}
    </div>
  );
};
