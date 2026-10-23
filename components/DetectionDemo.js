'use client';
import { useEffect, useState } from 'react';

// Shows the original drone image, then a scan line reveals the AI detections. Repeats every 10 seconds.
export default function DetectionDemo() {
  const [run, setRun] = useState(false);
  const [label, setLabel] = useState('Original drone image');

  useEffect(() => {
    let timers = [];
    const cycle = () => {
      setRun(false);
      setLabel('Original drone image');
      timers.push(setTimeout(() => { setRun(true); setLabel('Running AI detection...'); }, 900));
      timers.push(setTimeout(() => setLabel('Detections found'), 4700));
    };
    cycle();
    const id = setInterval(cycle, 10000);
    return () => { clearInterval(id); timers.forEach(clearTimeout); };
  }, []);

  return (
    <div className={`ba${run ? ' run' : ''}`}>
      <img src="/images/original.jpg" alt="Potato field, original drone image" />
      <div className="det"><img src="/images/detected.jpg" alt="Potato field with AI detections" /></div>
      <div className="sl" />
      <span className="tg" style={{ left: 14 }}>{label}</span>
    </div>
  );
}
