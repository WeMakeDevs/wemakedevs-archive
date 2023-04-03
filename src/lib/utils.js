import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export default function clsxm(...classes) {
  return twMerge(clsx(...classes));
}

// Time

export function getTime(time) {
  return `${new Date(time).toLocaleTimeString('en-US', {
    timeStyle: 'short',
  })}`;
}

// get Date
export function getDate(time) {
  return `${new Date(time).toLocaleDateString('en-US', {
    dateStyle: 'medium',
  })}`;
}

// get TimeZone
export function getTimeZone(time) {
  return `${/\((.*)\)/
    .exec(new Date(time).toString())[1]
    .split(' ')
    .map((i) => i[0].toUpperCase())
    .join('')}`;
}

// get Date and Time
export function getDateTime(time) {
  return `${getDate(time)} ${getTime(time)} ${getTimeZone(time)}`;
}
