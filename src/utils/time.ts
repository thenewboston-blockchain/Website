import {TimeFormat} from 'types/tutorials';

export const getFormattedTime = (secondsInput: number, timeFormat: TimeFormat): string => {
  const h = Math.floor(secondsInput / 3600);
  const m = Math.floor((secondsInput % 3600) / 60);
  const s = Math.floor((secondsInput % 3600) % 60);

  let hours = '';
  let minutes = '';
  let seconds = '';

  if (timeFormat === TimeFormat.digital) {
    if (h > 0) {
      hours = h < 10 ? `0${h}:` : `${h}:`;
    }

    if (m > 0 || h > 0) {
      minutes = m < 10 ? `0${m}:` : `${m}:`;
    }

    if (m > 0 || h > 0 || s > 0) {
      seconds = s < 10 ? `0${s}` : `${s}`;
    }

    return (hours + minutes + seconds).trim();
  }

  if (h > 0) {
    hours = `${h}h `;
  }

  if (m > 0 || h > 0) {
    minutes = `${m}m `;
  }

  if (m > 0 || h > 0 || s > 0) {
    seconds = `${s}s`;
  }

  return (hours + minutes + seconds).trim();
};
