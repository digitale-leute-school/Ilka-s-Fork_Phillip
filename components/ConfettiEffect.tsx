"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiEffect() {
  useEffect(() => {
    const fire = () =>
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });

    fire();
    const interval = setInterval(fire, 5000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
