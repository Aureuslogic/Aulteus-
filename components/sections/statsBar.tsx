'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

function useCounter(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return value;
}

function StatItem({ target, suffix, label, format, delay }: {
  target: number;
  suffix: string;
  label: string;
  format: (n: number) => string;
  delay: number;
  active: boolean;
}) {
  const { ref, inView } = useInView();
  const count = useCounter(target, inView, 1400);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="sr sr-scale"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`sr-scale ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
        <div className="stat-num">{inView ? format(count) : format(0)}</div>
        <div className="stat-lbl">{label}</div>
      </div>
    </div>
  );
}

const STATS = [
  { target: 10000, suffix: '+', label: 'Traders Reached',  format: (n: number) => `${(n / 1000).toFixed(0)},000+`, delay: 0 },
  { target: 500,   suffix: '+', label: 'Active Members',   format: (n: number) => `${n}+`,                         delay: 100 },
  { target: 5,     suffix: '',  label: 'Framework Layers', format: (n: number) => String(n),                       delay: 200 },
  { target: 20,    suffix: 's', label: 'Decision Window',  format: (n: number) => `${n}s`,                         delay: 300 },
];

export default function StatsBar() {
  const { ref: barRef, inView } = useInView();

  return (
    <div
      className="stat-bar"
      ref={barRef as React.RefObject<HTMLDivElement>}
      aria-label="Aulteus Logic key statistics"
    >
      <div className="stat-bar-inner">
        {STATS.map((s, i) => {
          return (
            <Counter
              key={s.label}
              {...s}
              active={inView}
              divider={i < STATS.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

function Counter({ target, label, format, delay, active, divider }: {
  target: number; label: string; format: (n: number) => string;
  delay: number; active: boolean; divider: boolean;
}) {
  const count = useCounter(target, active, 1400);
  return (
    <div
      className={`sr-scale${active ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms`, ...(divider ? { borderRight: '1px solid var(--border-dim)' } : {}) }}
    >
      <div className="stat-num">{active ? format(count) : format(0)}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}
