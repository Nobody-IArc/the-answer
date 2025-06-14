'use client';

import { JSX, useEffect, useState } from 'react';

function getRandomColor() {
    const colors = [
        '#FF1A1A',
        '#00FF00',
        '#00FFFF',
        '#FF00FF',
        '#FFFF00',
        '#FFFFFF',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

export default function MatrixRain42() {
    const [drops, setDrops] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const newDrops = Array.from({ length: 30 }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = 4 + Math.random() * 4;
            const color = getRandomColor();

            return (
                <span
                    key={i}
                    className="matrix-char"
                    style={{
                        left: `${left}vw`,
                        animationDuration: `${duration}s`,
                        animationDelay: `${delay}s`,
                        color: color,
                        textShadow: `0 0 8px ${color}`,
                    }}
                >
          42
        </span>
            );
        });

        setDrops(newDrops);
    }, []);

    return <>{drops}</>;
}
