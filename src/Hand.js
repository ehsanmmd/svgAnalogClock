import React from 'react';
import { degreeToRadian } from './Helpers';

const types = {
  second: {
    color: '#FF7133',
    width: '3',
    length: 90,
  },
  minute: {
    color: '#999',
    width: '5',
    length: 80,
  },
  hour: {
    color: '#444',
    width: '10',
    length: 70,
  },
};

export default function Hand(props) {
  return (
    <line
      x1={props.offset}
      y1={props.offset}
      x2={
        props.offset +
        types[props.type].length * Math.cos(degreeToRadian(props.angel - 90))
      }
      y2={
        props.offset +
        types[props.type].length * Math.sin(degreeToRadian(props.angel - 90))
      }
      stroke={types[props.type].color}
      strokeWidth={types[props.type].width}
    />
  );
}
