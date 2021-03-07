export default (date) => {
  const strDate = date.substring(0, 10);
  const splittedDate = strDate.split('-');
  const day = splittedDate[2];

  const d = new Date(date);
  const weekday = d.toLocaleString('fr', { weekday: 'long' });
  const month = d.toLocaleString('fr', { month: 'short' });

  return `${weekday} ${day} ${month}`;
};
