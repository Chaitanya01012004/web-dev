const movies = [
  { movieName: 'Movie A', movieHero: 'Hero A', movieGenre: 'Action', releaseDate: '2020-01-15' },
  { movieName: 'Movie B', movieHero: 'Hero B', movieGenre: 'Drama',  releaseDate: '2019-06-10' },
  { movieName: 'Movie C', movieHero: 'Hero C', movieGenre: 'Comedy', releaseDate: '2021-12-25' },
  { movieName: 'Movie D', movieHero: 'Hero D', movieGenre: 'Horror', releaseDate: '2018-04 05' } // note the space
];

// Function to sort by date (ascending)
function sortByReleaseDate(arr) {
  return arr.sort((a, b) => {
    // Fix possible bad format like '2018-04 05' -> '2018-04-05'
    const d1 = new Date(a.releaseDate.replace(' ', '-'));
    const d2 = new Date(b.releaseDate.replace(' ', '-'));
    return d1 - d2;
  });
}

const sortedMovies = sortByReleaseDate(movies);
console.log(sortedMovies);