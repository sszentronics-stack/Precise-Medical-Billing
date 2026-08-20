import React, { useEffect, useState } from "react";
import { useReveal } from "./Reveal.jsx";

const CountUp = ({ value, prefix = "", suffix = "", decimals, duration = 1600 }) => {
  const [ref, visible] = useReveal(0.4);
  const [display, setDisplay] = useState(0);
  const dp = decimals !== undefined ? decimals : value % 1 !== 0 ? 1 : 0;

  useEffect(() => {
    if (!visible) return;
    let start;
    let raf;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, duration]);

  return (
    <span ref={ref} className="font-mono-data">
      {prefix}
      {display.toFixed(dp)}
      {suffix}
    </span>
  );
};

export default CountUp;
