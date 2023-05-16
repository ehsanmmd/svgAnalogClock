import * as React from 'react';
import { useState, useEffect } from 'react';
import Hand from './Hand';
import ClockLines from './ClockLines';
import { useMinuteAngle, useSecondAngle, useHourAngle } from './Helpers';

export default function App() {
  const [date, setDate] = useState(new Date());
  const offset = 120;

  useEffect(() => {
    let interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg height="240" width="240">
      <ClockLines offset={offset} />
      <Hand angel={useHourAngle(date)} type="hour" offset={offset} />
      <Hand angel={useMinuteAngle(date)} type="minute" offset={offset} />
      <Hand angel={useSecondAngle(date)} type="second" offset={offset} />
      <circle
        cx={offset}
        cy={offset}
        r="7"
        stroke="#FF7133"
        strokeWidth="3"
        fill="#555"
      />
    </svg>
  );
}
