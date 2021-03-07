export default (time) => {
  const [hour, minute] = time.split(':');
  return `${hour}:${minute}`;
};
