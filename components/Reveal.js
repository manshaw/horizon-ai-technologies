'use client';
import { useEffect, useRef, useState } from 'react';

// Fades and lifts an element into view when it scrolls onto the screen.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setOn(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`${className} rv${on ? ' in' : ''}`} style={{ '--d': `${delay}s` }} {...rest}>
      {children}
    </Tag>
  );
}
