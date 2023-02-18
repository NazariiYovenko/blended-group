import { formatDistanceToNow } from 'date-fns';

export function formatDate(date) {
  const formatedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
  return formatedDate;
}
