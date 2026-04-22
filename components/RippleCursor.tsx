'use client';
import { useEffect, useRef } from 'react';

class Ripple {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  opacity: number;
  speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = 0;
    this.maxSize = Math.random() * 40 + 60; // 60 to 100px
    this.opacity = 0.5;
    this.speed = 2; // Fixed speed or responsive to movement
  }

  update() {
    this.size += this.speed;
    this.opacity -= 0.01;
  }

  draw(ctx: CanvasRenderingContext2D, isLight: boolean) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    const color = isLight ? `rgba(0,0,0, ${this.opacity})` : `rgba(255,255,255, ${this.opacity})`;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

export default function RippleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isLight = document.documentElement.dataset.theme === 'light';
    const observer = new MutationObserver(() => {
      isLight = document.documentElement.dataset.theme === 'light';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const handleResize = () => {
      const dpr = globalThis.devicePixelRatio || 1;
      canvas.width = globalThis.innerWidth * dpr;
      canvas.height = globalThis.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    handleResize();
    globalThis.addEventListener('resize', handleResize);

    const handleMouseMove = (e: PointerEvent) => {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const dist = dx * dx + dy * dy;

      if (dist > 400) { // 20px squared
        ripplesRef.current.push(new Ripple(e.clientX, e.clientY));
        lastMousePos.current = { x: e.clientX, y: e.clientY };
      }
    };
    globalThis.addEventListener('pointermove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const ripple = ripplesRef.current[i];
        ripple.update();
        if (ripple.opacity <= 0) {
          ripplesRef.current.splice(i, 1);
        } else {
          ripple.draw(ctx, isLight);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      globalThis.removeEventListener('resize', handleResize);
      globalThis.removeEventListener('pointermove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999, // Above everything
      }}
    />
  );
}
