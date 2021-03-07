const years = [];
const maxYear = new Date().getFullYear() - 18;
const minYear = new Date().getFullYear() - 35;
for (let n = minYear; n <= maxYear; n += 1) {
  years.push(n);
}

module.exports = years;
