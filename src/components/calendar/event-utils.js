let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

console.log(todayStr);

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "27,000",
    start: "2024-02-22",
  },
  {
    id: createEventId(),
    title: "0",
    start: "2024-02-23",
  },
  {
    id: createEventId(),
    title: "27,000",
    start: "2024-02-24",
  },
  {
    id: createEventId(),
    title: "27,000",
    start: "2024-02-25",
  },
  {
    id: createEventId(),
    title: "27,000",
    start: "2024-02-26",
  },
  {
    id: createEventId(),
    title: "27,000",
    start: "2024-02-27",
  },
  {
    id: createEventId(),
    title: "27,000",
    start: "2024-02-28",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
