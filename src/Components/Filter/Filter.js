import React from "react";
import GenreDropdown from "../GenreDropdown/GenreDropdown";
import RatingDropdown from "../Rating/RatingDropdown";
const Filter = ({
  selectedRatings,
  setSelectedRatings,
  selectedGenres,
  setSelectedGenres,
}) => {
  const handleRatingChange = (event) => {
    const rating = event.value;
    if (event.isSelected) {
      setSelectedRatings([...selectedRatings, rating]);
    } else {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    }
  };

  const handleGenreChange = (event) => {
    const genre = event.value;
    if (event.isSelected) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    }
  };

  return (
    <div style={{ display: "flex", marginLeft: "20px" }}>
      <RatingDropdown handleRatingChange={handleRatingChange} />
      <GenreDropdown handleGenreChange={handleGenreChange} />
    </div>
  );
};

export default Filter;
