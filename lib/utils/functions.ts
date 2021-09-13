import { parseDateType } from '../types/date';

// Parse a date
export const parseDate = (date: Date): parseDateType => {
  function formatHours(hours: number) {
    return hours < 10 ? `0${hours}` : hours;
  }
  function formatMinutes(minutes: number) {
    return minutes < 10 ? `0${minutes}` : minutes;
  }
  function formatDate(day: number) {
    return day < 10 ? `0${day}` : day;
  }
  function formatMonth(month: number) {
    return month < 10 ? `0${month}` : month;
  }

  const time = `${formatHours(date.getHours())}:${formatMinutes(date.getMinutes())}`;
  const formattedDate = `${formatDate(date.getDate())}-${formatMonth(
    date.getMonth() + 1
  )}-${date.getFullYear()}`;

  return { time, formattedDate };
};
