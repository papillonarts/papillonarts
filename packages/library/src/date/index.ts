export function getLocaleDateTimeString(date: Date) {
  return date
    ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    : null;
}

export function getRandomDate(
  start: Date = new Date(2013, 1, 1),
  end: Date = new Date()
) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
