'use client';
import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      ref.current.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div id="pb" ref={ref} />;
}
