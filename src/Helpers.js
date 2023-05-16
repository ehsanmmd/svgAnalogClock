export function degreeToRadian(degree) {
  return (degree * Math.PI) / 180;
}

export function useSecondAngle(date) {
  return date.getSeconds() * 6;
}

export function useMinuteAngle(date) {
  return date.getMinutes() * 6 + date.getSeconds() * 0.1;
}

export function useHourAngle(date) {
  return (date.getHours() % 12) * 30 + date.getMinutes() * 0.5;
}
