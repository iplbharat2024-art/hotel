import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Properties Sold' },
  { value: 200, suffix: '+', label: 'Happy Families' },
  { value: 4.6, suffix: '★', label: 'Google Rating', isFloat: true },
  { value: 6, suffix: '+', label: 'Bank Partners' }
];

function AnimatedNumber({ target, suffix, isFloat, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isFloat ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, isFloat]);

  return (
    <span className="stat-value">
      {isFloat ? count.toFixed(1) : count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <AnimatedNumber
              target={stat.value}
              suffix={stat.suffix}
              isFloat={stat.isFloat}
              inView={inView}
            />
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
