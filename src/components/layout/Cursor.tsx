import React, { useEffect, useState, useRef } from 'react';

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch screens to preserve native mobile performance
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let lastTime = performance.now();
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 144Hz Framerate-Independent Lerp Loop
    const render = (currentTime: number) => {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Exponential damping formula: locked pacing regardless of 60Hz, 120Hz, or 144Hz+ displays
      const factor = 1 - Math.exp(-28 * delta);
      currentX += (mouseX - currentX) * factor;
      currentY += (mouseY - currentY) * factor;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Throttled Hover Target Detection
    let hoverTimeout: number | null = null;
    const handleMouseOver = (e: MouseEvent) => {
      if (hoverTimeout) return;
      hoverTimeout = window.setTimeout(() => {
        hoverTimeout = null;
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
      }, 16);
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 -ml-2 -mt-2 will-change-transform transform-gpu"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        backfaceVisibility: 'hidden',
      }}
    >
      {isHovered ? (
        <div className="flex items-center gap-1.5 rounded-full bg-[#111111] px-4 py-1.5 text-[10px] font-mono tracking-widest text-[#EDE9DF] shadow-xl uppercase transition-transform duration-100 ease-out">
          <span>{cursorText}</span>
        </div>
      ) : isClickable ? (
        <div className="h-9 w-9 -ml-2.5 -mt-2.5 rounded-full border border-[#111111]/80 bg-[#111111]/10 backdrop-blur-[1px] transition-all duration-150 ease-out" />
      ) : (
        <div className="h-3.5 w-3.5 rounded-full bg-[#111111] transition-all duration-100 ease-out" />
      )}
    </div>
  );
};
