"use client";

import { useEffect, useRef } from "react";

export default function SmokeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext(&quot;2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      life: number;
    }> = [];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100, // Start below viewport
        vx: (Math.random() - 0.5) * 0.5, // Slight horizontal drift
        vy: -Math.random() * 1 - 0.5, // Upward movement
        size: Math.random() * 50 + 50, // Large puffs
        alpha: 0,
        life: Math.random() * 200 + 100, // Lifespan
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add new particles occasionally
      if (particles.length < 50) {
        particles.push(createParticle());
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Physics
        p.x += p.vx;
        p.y += p.vy;
        p.size += 0.2; // Expand as it rises
        p.life--;
        
        // Fade in then out
        if (p.life > 150) {
          p.alpha = Math.min(p.alpha + 0.005, 0.3); // Max opacity 0.3
        } else if (p.life < 50) {
          p.alpha = Math.max(p.alpha - 0.005, 0);
        }

        // Draw
        if (p.alpha > 0) {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          gradient.addColorStop(0, `rgba(45, 36, 30, ${p.alpha})`);
          gradient.addColorStop(1, `rgba(45, 36, 30, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Remove dead particles
        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener(&quot;resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />;
}