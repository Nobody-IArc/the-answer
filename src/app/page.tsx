'use client';

import { useState } from 'react';
import descriptions from '../lib/description';
import './globals.css';
import MatrixRain42 from '../components/floating.number';

export default function Home() {
    const [count, setCount] = useState(0);

    const isAnswer = count >= 42;
    const description = descriptions[count] ?? 'End?';
    const text = isAnswer ? 'Stop!' : 'Click';

    const handleClick = () => {
        if (count < 42) {
            setCount((prev) => prev + 1);
        } else {
            alert('정답에 도달했습니다. 정답을 받아들이십시오.');
        }
    };

    return (
        <main
            className={`relative
    min-h-screen flex flex-col items-center justify-center transition-all duration-300
    ${isAnswer ? 'invert-theme flicker shake-screen text-red-400 bg-transparent' : ''}
  `}
        >

            {isAnswer && <MatrixRain42 />}



        <h1 className={`text-6xl font-bold ${isAnswer ? 'glitch scale-125' : ''}`}>
                {count}
            </h1>

            <p className={`text-2xl mt-20   mb-10 text-center max-w-md transition-all duration-300 ${isAnswer ? 'glitch' : ''}`}>
                {description}
            </p>

            <button
                onClick={handleClick}
                className={`
                    px-6 py-3 rounded-lg font-semibold transition-transform duration-200 
                    ${isAnswer ? 'bg-red-800 hover:bg-red-900 text-white rotate-1'
                    : 'bg-blue-300 hover:bg-blue-400 text-black'}
                    ${count >= 42 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
                `}
            >
                {text}
            </button>
        </main>
    );
}
