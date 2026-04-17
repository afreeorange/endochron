/**
 * NOTE: Would use this in the Real World™
 * https://github.com/samhirtarif/react-audio-visualize?tab=readme-ov-file
 */

import { useEffect, useRef } from "react";

const BAR_W = 3;
const GAP = 2;
const STEP = BAR_W + GAP;
const BAR_INTERVAL_MS = 60;

interface Props {
  isActive: boolean;
  color?: string;
  height?: number;
}

export const WaveformVisualizer = ({
  isActive,
  color = "#f472b6",
  height = 24,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const stateRef = useRef({ bars: [] as number[], lastBarTime: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio ?? 1;
    const cssWidth = canvas.getBoundingClientRect().width;
    canvas.width = cssWidth * dpr;
    canvas.height = height * dpr;

    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    if (!isActive) {
      stateRef.current.bars = [];
      stateRef.current.lastBarTime = 0;
      ctx.clearRect(0, 0, cssWidth, height);
      return;
    }

    const maxBars = Math.ceil(cssWidth / STEP) + 2;

    const draw = (ts: number) => {
      const { bars } = stateRef.current;

      if (ts - stateRef.current.lastBarTime > BAR_INTERVAL_MS) {
        // Layered sines + noise mimics a voice envelope
        const t = ts / 1000;
        const wave =
          0.28 * Math.sin(t * 4.1) +
          0.18 * Math.sin(t * 9.3) +
          0.1 * Math.sin(t * 17.7);
        const noise = (Math.random() - 0.5) * 0.18;
        const h = Math.max(0.04, Math.min(0.96, 0.48 + wave + noise));
        bars.push(h);
        if (bars.length > maxBars) bars.shift();
        stateRef.current.lastBarTime = ts;
      }

      ctx.clearRect(0, 0, cssWidth, height);

      const cy = height / 2;
      bars.forEach((h, i) => {
        const x = cssWidth - (bars.length - i) * STEP;
        if (x < -STEP) return;
        const barH = Math.max(2, h * height * 0.92);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.roundRect(x, cy - barH / 2, BAR_W, barH, BAR_W / 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isActive, color, height]);

  return <canvas ref={canvasRef} style={{ width: "100%", height }} />;
};
