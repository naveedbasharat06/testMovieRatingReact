import React from "react";
import GenreDropdown from "../GenreDropdown/GenreDropdown";
import RatingDropdown from "../Rating/RatingDropdown";
const Filter = ({ selectedRatings, setSelectedRatings, selectedGenres, setSelectedGenres }) => {
    const handleRatingChange = event => {
      debugger
        setSelectedRatings([...event]);
    };
  
    const handleGenreChange = event => {
      const genre = event.target.value;
      if (event.target.checked) {
        setSelectedGenres([...selectedGenres, genre]);
      } else {
        setSelectedGenres(selectedGenres.filter(g => g !== genre));
      }
    };
  
    return (
      <div style={{display:'flex',marginLeft:'20px'}}>
        <RatingDropdown handleRatingChange={handleRatingChange}/>
        {/* <h3>Filter by Rating:</h3>
        <label>
          <input type="checkbox" value={1} onChange={handleRatingChange} /> 1 Star
        </label>
        <label>
          <input type="checkbox" value={2} onChange={handleRatingChange} /> 2 Stars
        </label>
        //...and so on */}
        <GenreDropdown handleGenreChange={handleGenreChange}/>
        {/* <h3>Filter by Genre:</h3>
        <label>
          <input type="checkbox" value="Action" onChange={handleGenreChange} /> Action
        </label>
        <label>
          <input type="checkbox" value="Comedy" onChange={handleGenreChange} /> Comedy
        </label>
        //...and so on */}
      </div>
    );
  };
  
  export default Filter;