module.exports = (str) => {
  if (str) {
    const splitStr = str.toLowerCase().split(' ');
    const capitalized = splitStr.map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1)
    );
    return capitalized.join(' ');
  }
  return false;
};
