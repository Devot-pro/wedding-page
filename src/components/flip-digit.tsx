'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';


interface FlipDigitProps {
  digit: string;
}

export default function FlipDigit({ digit }: FlipDigitProps) {
  const [prevDigit, setPrevDigit] = useState(digit);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (digit !== prevDigit) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setFlipping(false);
        setPrevDigit(digit);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-12 h-16 perspective">
      <div
        className={clsx(
          'absolute inset-0 flex items-center justify-center text-3xl rounded-md border border-gray-700 bg-gray-900 text-white transition-transform duration-300 ease-in-out',
          flipping ? 'rotate-x-animation' : ''
        )}
      >
        {digit}
      </div>
    </div>
  );
}
