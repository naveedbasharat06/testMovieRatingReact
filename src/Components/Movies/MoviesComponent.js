import React, { useEffect, useState } from "react";
import moviesData from "../../Mock/moviesData.json";
import "./MoviesComponent.css";
import _ from 'lodash';
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Movie from "../Movie/Movie";

const MoviesComponent = () => {
  const [movies, setMovies] = useState([
    { title: "The Matrix", rating: 7.5, category: "Action" },
    { title: "Focus", rating: 6.9, category: "Comedy" },
    { title: "The Lazarus Effect", rating: 6.4, category: "Thriller" },
    { title: "Everly", rating: 5.0, category: "Action" },
    { title: "Maps to the Stars", rating: 7.5, category: "Drama" }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [focused,setFocused]=useState(false)

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  useEffect(() => {
    setFilteredMovies(filterMovies());
  }, [searchTerm, selectedRatings, selectedGenres]);

  const filterMovies = () => {
    let filtered = _.filter(movies, movie =>
      _.includes(_.lowerCase(movie.title), _.lowerCase(searchTerm))
    );

    if (selectedRatings.length > 0) {
      filtered = _.filter(filtered, movie =>
        _.includes(selectedRatings, movie.rating)
      );
    }

    if (selectedGenres.length > 0) {
      filtered = _.filter(filtered, movie =>
        _.includes(selectedGenres, movie.category)
      );
    }

    return filtered;
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setFocused={setFocused}
          focused={focused}
        />
        <Filter
          selectedRatings={selectedRatings}
          setSelectedRatings={setSelectedRatings}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      </div>
      {focused ? (
        <div className="moviesData">
          {filteredMovies.map((movie, index) => (
            <Movie
              key={index}
              title={movie.title}
              rating={movie.rating}
              category={movie.category}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MoviesComponent;
