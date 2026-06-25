import React, { useEffect, useRef } from "react";

interface LightRay {
  x: number;
  y: number;
  angle: number; // in radians
  width: number;
  length: number;
  speed: number;
  opacity: number;
  color: string;
  phase: number;
}

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    // Track mouse coordinates to skew/bend the spotlights slightly for responsiveness
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Create a set of premium vertical and diagonal light beams (similar to the reference photo)
    const rays: LightRay[] = [
      {
        x: width * 0.1,
        y: 0,
        angle: Math.PI / 8, // slight diagonal slant
        width: 140,
        length: height * 1.5,
        speed: 0.001,
        opacity: 0.22,
        color: "rgba(16, 185, 129, 0.12)", // soft emerald/green sweep from the photo
        phase: 0,
      },
      {
        x: width * 0.25,
        y: 0,
        angle: Math.PI / 12,
        width: 180,
        length: height * 1.6,
        speed: 0.0015,
        opacity: 0.18,
        color: "rgba(6, 182, 212, 0.15)", // electric cyan glow
        phase: Math.PI / 3,
      },
      {
        x: width * 0.05,
        y: 0,
        angle: Math.PI / 6,
        width: 80,
        length: height * 1.3,
        speed: 0.002,
        opacity: 0.12,
        color: "rgba(0, 255, 0, 0.09)", // bright neon emerald/green streak
        phase: Math.PI,
      },
      {
        x: width * 0.7,
        y: 0,
        angle: -Math.PI / 10,
        width: 260,
        length: height * 1.7,
        speed: 0.0008,
        opacity: 0.15,
        color: "rgba(30, 41, 59, 0.25)", // slate dark shadow/contrast beam
        phase: Math.PI / 2,
      },
      {
        x: width * 0.4,
        y: 0,
        angle: Math.PI / 9,
        width: 220,
        length: height * 1.6,
        speed: 0.0012,
        opacity: 0.14,
        color: "rgba(6, 182, 212, 0.08)",
        phase: Math.PI * 1.5,
      }
    ];

    const drawRay = (c: CanvasRenderingContext2D, ray: LightRay, time: number) => {
      c.save();
      
      // Calculate dynamic drift based on sin waves
      const driftX = Math.sin(time * ray.speed + ray.phase) * 60;
      const progressX = ray.x + driftX + (mouseX - width / 2) * 0.08;
      
      // Volumetric spotlight polygon points
      const startXTop = progressX - ray.width / 2;
      const startXBottom = progressX + ray.width / 2;
      
      // Bottom of the ray spans wider (spotlight effect)
      const endXLeft = progressX + Math.sin(ray.angle) * ray.length - ray.width * 2.8;
      const endXRight = progressX + Math.sin(ray.angle) * ray.length + ray.width * 2.8;
      const endY = ray.length;

      // Create a gorgeous gradient representing light fading down
      const grading = c.createLinearGradient(progressX, 0, progressX + Math.sin(ray.angle) * ray.length * 0.6, endY);
      
      // Pulse opacity softly
      const currentOpacity = ray.opacity * (0.85 + Math.sin(time * 0.002 + ray.phase) * 0.15);
      
      grading.addColorStop(0, ray.color.replace(/[\d.]+\)$/, `${currentOpacity})`));
      grading.addColorStop(0.35, ray.color.replace(/[\d.]+\)$/, `${currentOpacity * 0.7})`));
      grading.addColorStop(0.7, ray.color.replace(/[\d.]+\)$/, `${currentOpacity * 0.25})`));
      grading.addColorStop(1, "rgba(0, 0, 0, 0)");

      c.fillStyle = grading;
      
      // Soft screen blend mode for luxurious overlays
      c.globalCompositeOperation = "screen";
      
      c.beginPath();
      c.moveTo(startXTop, 0);
      c.lineTo(startXBottom, 0);
      c.lineTo(endXRight, endY);
      c.lineTo(endXLeft, endY);
      c.closePath();
      
      c.fill();
      c.restore();
    };

    let time = 0;

    const renderLoop = () => {
      // Clear with elegant pure black, fading out dynamically
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse coordinate tracking
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      time += 1;

      // Draw each volumetric light ray
      rays.forEach((ray) => {
        drawRay(ctx, ray, time);
      });

      // Draw secondary horizontal/ambient dark overlays to enhance cinematic lighting
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      
      // Mouse dynamic spotlight halo (matches our CSS, but on canvas too for deeper fidelity)
      const haloGlow = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        Math.max(400, width * 0.35)
      );
      haloGlow.addColorStop(0, "rgba(16, 185, 129, 0.08)"); // electric lime green
      haloGlow.addColorStop(0.5, "rgba(6, 182, 212, 0.04)"); // soft cyan details
      haloGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      
      ctx.fillStyle = haloGlow;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // Soft vignette around borders
      const borderVignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        width * 0.3,
        width / 2,
        height / 2,
        width * 0.75
      );
      borderVignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      borderVignette.addColorStop(1, "rgba(0, 0, 0, 0.95)");
      ctx.fillStyle = borderVignette;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full block"
      style={{ pointerEvents: "none" }}
    />
  );
}
