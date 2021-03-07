const years = () => {
  const maxYear = new Date().getFullYear() - 18;
  const minYear = new Date().getFullYear() - 35;
  const yearTab = [];
  for (let n = minYear; n <= maxYear; n += 1) {
    yearTab.push(n);
  }
  return yearTab;
};

export default years;
