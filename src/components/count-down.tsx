'use client';

import { useEffect, useState } from 'react';
import FlipDigit from './flip-digit';


interface CountdownProps {
  to: Date;
}

const pad = (num: number) => String(num).padStart(2, '0');

export default function Countdown({ to }: CountdownProps) {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = to.getTime() - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [to]);

  const timeUnits = [
    { label: 'Days', value: pad(timeLeft.days) },
    { label: 'Hours', value: pad(timeLeft.hours) },
    { label: 'Minutes', value: pad(timeLeft.minutes) },
    { label: 'Seconds', value: pad(timeLeft.seconds) },
  ];

  return (
    <div className="flex gap-2 md:gap-4 justify-center items-center font-mono text-white">
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="flex gap-0.5 md:gap-1">
            {value.split('').map((char, i) => (
              <FlipDigit key={i} digit={char} />
            ))}
          </div>
          <span className="mt-1 md:mt-2 text-xs md:text-sm uppercase tracking-wide text-gray-400">{label}</span>
        </div>
      ))}
    </div>
  );
}


