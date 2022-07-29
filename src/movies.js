// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(item => item.director);
    return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenSpielberg = moviesArray.filter(item => item.director === "Steven Spielberg" && item.genre.includes("Drama"));
    return stevenSpielberg.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    let allScoresAverage = moviesArray.reduce((accumulator, item) => {

        if (item.score) {
             return accumulator + item.score;
         } else {
             return accumulator;
         }
 
         }, 0);

   let calculateAverageScore = allScoresAverage / moviesArray.length;
   let average = calculateAverageScore.toFixed(2);
   return Number(average);
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArray =moviesArray.filter(item => item.genre.includes("Drama"));
    let dramaScoresAverage = dramaArray.reduce((accumulator, item) => {

        if (item.score) {
             return accumulator + item.score;
         } else {
             return accumulator;
         }
 
         }, 0);

         if (dramaArray.length === 0) {
            return 0;
         }

   let calculateDramaAverageScore = dramaScoresAverage / dramaArray.length;
   let average = calculateDramaAverageScore.toFixed(2);
   return Number(average);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayClone = [...moviesArray];
    moviesArrayClone.sort(function (a , b) {
        if (a.year < b.year) return -1; 
        if (a.year > b.year) return 1; 
        if (a.year === b.year)
            if (a.title<b.title) return -1;
            else return 1;
      });
    return moviesArrayClone;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    let moviesArrayClone = moviesArray.map((movie)=>movie.title).sort(function (a, b) {
        if (a< b) return -1; 
        if (a > b) return 1; 
        else return 0;
    });
    let firstTwenty= moviesArrayClone.slice(0,20);
    return firstTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
