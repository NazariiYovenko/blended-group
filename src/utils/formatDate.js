import { formatDistanceToNow, format } from 'date-fns';

export function formatDate(date) {
  const formatedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
  return formatedDate;
}

export function dateTask(date) {
  return format(new Date(date), 'Pp');
}
