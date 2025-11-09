
"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const DPR = Math.min(2, window.devicePixelRatio || 1);
    function resize(){
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }
    resize();
    window.addEventListener("resize", resize);

    // init particles
    const COUNT = Math.floor((window.innerWidth * window.innerHeight) / 24000);
    const particles = Array.from({length: COUNT}).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.12 * DPR,
      vy: (Math.random() - 0.5) * 0.12 * DPR,
      r: Math.random() * 1.6 * DPR + 0.6 * DPR,
      a: 0.3 + Math.random() * 0.4
    }));

    function step(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(const p of particles){
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(124,157,255,${p.a})`;
        ctx.fill();
      }
      // connection lines
      const maxDist = 140 * DPR;
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d2 = dx*dx + dy*dy;
          if(d2 < maxDist*maxDist){
            const alpha = 0.12 * (1 - Math.sqrt(d2)/maxDist);
            ctx.strokeStyle = `rgba(71,230,161,${alpha})`;
            ctx.lineWidth = 0.8 * DPR;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="particles-canvas" ref={ref} />;
}
