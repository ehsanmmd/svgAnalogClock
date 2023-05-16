import React from 'react';

export default function ClockLines(props) {
  const lines = [];
  let majorLine = false;

  for (let i = 0; i < 60; i++) {
    const majorLine = i % 5 === 0;
    const startPoint = majorLine ? 95 : 100;
    const color = majorLine ? 'black' : 'gray';
    const width = majorLine ? '4' : '3';

    lines.push({
      x1: props.offset + startPoint * Math.cos(((i * 6) / 180) * Math.PI),
      y1: props.offset + startPoint * Math.sin(((i * 6) / 180) * Math.PI),
      x2: props.offset + 110 * Math.cos(((i * 6) / 180) * Math.PI),
      y2: props.offset + 110 * Math.sin(((i * 6) / 180) * Math.PI),
      color: color,
      width: width,
    });
  }

  return lines.map((line, index) => {
    return (
      <line
        key={index}
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={line.color}
        strokeWidth={line.width}
      />
    );
  });
}
