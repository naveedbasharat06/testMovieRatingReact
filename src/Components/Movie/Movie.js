import React from 'react';
import './Movie.css'
const Movie = ({ title, rating, category }) => (
  <>
    <div className="movie">
      <div>{title}</div>
      <div>{category}</div>
    </div>
    <div className="Stars" style={{ "--rating": rating }} />
    </>
  // <div className="moviesData">
  //   {moviesData.map((movie) => {
  //     return (
  // <div>
  //   <div className="movie">
  //     <div>{movie.title}</div>
  //     <div>{movie.category}</div>
  //   </div>
  //   <div className="Stars" style={{ "--rating": movie.rating }} />
  // </div>
  //     );
  //   })}
  // </div>
);

export default Movie;