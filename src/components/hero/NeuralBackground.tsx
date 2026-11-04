import React, { useEffect, useRef } from 'react';

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates for interactive wave & magnetic pull
    let mouse = { x: width * 0.7, y: height * 0.4, isHovering: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Node count adapted to screen resolution - subtle density reduced by ~50%
    const nodeCount = Math.min(Math.floor((width * height) / 36000), 24);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 0.9 + 1.0,
      colorIndex: Math.floor(Math.random() * 4),
      baseX: 0,
      baseY: 0,
    }));

    // Floating subtle sparkles - reduced count & low brightness
    const sparkles = Array.from({ length: 8 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.8,
      speedY: Math.random() * 0.2 + 0.08,
      alpha: Math.random() * 0.12 + 0.06,
      pulseSpeed: Math.random() * 0.02 + 0.008,
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.008; // Very slow and gentle animation
      ctx.clearRect(0, 0, width, height);

      // =========================================================
      // 1. Concentric Ultrasonic Frequency Waves (Subtle Background)
      // =========================================================
      const waveCenter = {
        x: width > 1024 ? width * 0.72 : width * 0.5,
        y: height > 700 ? height * 0.45 : height * 0.4,
      };

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const waveRadius = 160 + i * 110 + Math.sin(time * 0.8 + i * 0.6) * 14;
        ctx.arc(waveCenter.x, waveCenter.y, waveRadius, 0, Math.PI * 2);
        
        const colors = [
          'rgba(142, 132, 212, 0.07)', // Soft Lavender
          'rgba(93, 146, 196, 0.06)',  // Baby Blue
          'rgba(94, 168, 136, 0.05)',  // Soft Mint
        ];
        
        ctx.strokeStyle = colors[i % colors.length];
        ctx.lineWidth = 0.75;
        ctx.setLineDash(i % 2 === 0 ? [6, 10] : [3, 6]);
        ctx.stroke();
      }
      ctx.setLineDash([]); // Reset dash

      // =========================================================
      // 2. High-Tech Neural Network Nodes & Constellation Lines (Low Opacity)
      // =========================================================
      const palette = [
        'rgba(142, 132, 212, 0.18)', // Crisp Lavender
        'rgba(93, 146, 196, 0.16)',  // Azure Sky
        'rgba(94, 168, 136, 0.16)',  // Emerald Mint
        'rgba(216, 126, 155, 0.14)', // Rose Quartz
      ];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Motion physics
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Gentle interactive mouse magnetic attraction
        if (mouse.isHovering) {
          const dxMouse = mouse.x - node.x;
          const dyMouse = mouse.y - node.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < 140) {
            node.x += (dxMouse / distMouse) * 0.3;
            node.y += (dyMouse / distMouse) * 0.3;
          }
        }

        // Connect nearby nodes with thin, ultra-subtle lines (5-8% opacity)
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.08; // Max 8% opacity
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(155, 135, 200, ${alpha})`;
            ctx.lineWidth = 0.5; // Thin connecting lines
            ctx.stroke();
          }
        }

        // Render small subtle node dot (10-18% opacity, no heavy glow)
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = palette[node.colorIndex];
        ctx.fill();
      }

      // =========================================================
      // 3. Floating Luminous Sparkles (Ambient Iridescence)
      // =========================================================
      for (let s = 0; s < sparkles.length; s++) {
        const sp = sparkles[s];
        sp.y -= sp.speedY;
        if (sp.y < 0) {
          sp.y = height;
          sp.x = Math.random() * width;
        }

        const currentAlpha = sp.alpha * (0.5 + 0.5 * Math.sin(time * 2 + sp.phase));

        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(155, 135, 200, ${currentAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-90"
      aria-hidden="true"
    />
  );
};
