import React from 'react';
import './Movie.css'
import Rating from '@mui/material/Rating';
import styled from '@emotion/styled';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#000000',
  }
});

const Movie = ({ title, rating, category }) => (
  <>
    <div className="movie">
      <div>{title}</div>
      <div>{category}</div>
    </div>
    <StyledRating name="half-rating-read" value={rating} precision={0.5} readOnly max={10} />
    </>
);

export default Movie;