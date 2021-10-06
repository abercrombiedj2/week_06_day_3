const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleList = function () {
  const titles = this.films.map((film) => {
    return film.title;
  });
  return titles;
};

Cinema.prototype.filmByTitle = function (title) {
  const found = this.films.find((film) => {
    return film.title === title;
  });
  return found;
};

Cinema.prototype.filterByGenre = function (genre) {
  const filtered = this.films.filter((film) => {
    return film.genre === genre;
  });
  return filtered;
};

Cinema.prototype.filterByYear = function (year) {
  const filtered = this.films.filter((film) => {
    return film.year === year;
  });
  return filtered;
};

Cinema.prototype.findByYear = function (year) {
  const found = this.films.some((film) => {
    return film.year === year;
  });
  return found;
};

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
};

Cinema.prototype.checkOverLength = function (length) {
  const filtered = this.films.some((film) => {
    return film.length >= length;
  });
  return filtered;
};

module.exports = Cinema;