import { useEffect, useRef } from 'react';
import './Hero.css';

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 1;
    this.vy = (Math.random() - 0.5) * 1;
    this.radius = Math.random() * 1.5 + 0.5;
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) {
      this.vx = -this.vx * 0.9;
      if (this.x < 0) this.x = 0;
      if (this.x > width) this.x = width;
    }
    if (this.y < 0 || this.y > height) {
      this.vy = -this.vy * 0.9;
      if (this.y < 0) this.y = 0;
      if (this.y > height) this.y = height;
    }

    this.vx += (Math.random() - 0.5) * 0.04;
    this.vy += (Math.random() - 0.5) * 0.04;

    const maxVel = 1.5;
    const vel = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (vel > maxVel) {
      this.vx = (this.vx / vel) * maxVel;
      this.vy = (this.vy / vel) * maxVel;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.fill();
  }
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const getParticleCount = () => {
      const area = window.innerWidth * window.innerHeight;
      return Math.min(Math.floor(area / 10000), 150);
    };

    const createParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const maxDistance = 150;
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
            ctx.lineWidth = opacity * 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hero">
      <canvas ref={canvasRef} className="particles-canvas" />
      <div className="hero-content">
        <img src="/ieee-logo.png" alt="IEEE Logo" className="ieee-logo" />
        <h1>Advancing Technology for Humanity</h1>
        <button className="whats-new-btn">What's New?</button>
      </div>
    </div>
  );
};

export default Hero; 