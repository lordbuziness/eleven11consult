import { useEffect, useRef, useState } from "react";
import "./Stats.css";

interface Stat {
    value: number;
    suffix: string;
    label: string;
}

const stats: Stat[] = [
    {
        value: 10,
        suffix: "+",
        label: "Years of Industry Experience",
    },
    {
        value: 6,
        suffix: "",
        label: "Core Service Sectors",
    },
    {
        value: 5,
        suffix: "+",
        label: "Active Industry Verticals",
    },
    {
        value: 100,
        suffix: "+",
        label: "Projects Delivered",
    },
];

function Stats() {
    const [counts, setCounts] = useState<number[]>(
        stats.map(() => 0)
    );

    const statsRef = useRef<HTMLElement | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const section = statsRef.current;

        if (!section) return;

        const animateCounters = () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }

            const startTime = performance.now();
            const duration = 1800;

            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Smooth ease-out
                const easedProgress =
                    1 - Math.pow(1 - progress, 3);

                setCounts(
                    stats.map((stat) =>
                        Math.floor(
                            stat.value * easedProgress
                        )
                    )
                );

                if (progress < 1) {
                    animationRef.current =
                        requestAnimationFrame(animate);
                }
            };

            animationRef.current =
                requestAnimationFrame(animate);
        };

        const resetCounters = () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }

            setCounts(stats.map(() => 0));
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animateCounters();
                } else {
                    resetCounters();
                }
            },
            {
                threshold: 0.35,
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();

            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <section
            className="stats"
            ref={statsRef}
        >
            <div className="stats__container">
                {stats.map((stat, index) => (
                    <div
                        className="stats__item"
                        key={stat.label}
                    >
                        <div className="stats__value">
                            {counts[index]}
                            {stat.suffix}
                        </div>

                        <span className="stats__label">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;