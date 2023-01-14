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
);

export default Movie;