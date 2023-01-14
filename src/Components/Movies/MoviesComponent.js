import React, { useEffect, useState } from "react";
import "./MoviesComponent.css";
import _ from "lodash";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Movie from "../Movie/Movie";

const MoviesComponent = () => {
  const [movies, setMovies] = useState([
    { title: "The Matrix", rating: 7.5, category: "Action" },
    { title: "Focus", rating: 6.9, category: "Comedy" },
    { title: "The Lazarus Effect", rating: 6.4, category: "Thriller" },
    { title: "Everly", rating: 5.0, category: "Action" },
    { title: "Maps to the Stars", rating: 7.5, category: "Drama" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  useEffect(() => {
    setFilteredMovies(filterMovies());
  }, [searchTerm, selectedRatings, selectedGenres]);

  useEffect(() => {
    console.log(filteredMovies);
    // console.log(filterMovies)
  }, [filteredMovies]);

  const filterMovies = () => {
    let rFlag = false;
    let filtered = _.filter(movies, (movie) =>
      _.includes(_.lowerCase(movie.title), _.lowerCase(searchTerm))
    );

    if (selectedRatings.length > 0) {
      let fmovies = [];
      selectedRatings.map((r) => {
        if (r === "0") {
          fmovies = movies;
          return;
        } else {
          movies.map((movie) => {
            if (movie.rating === parseInt(r)) {
              rFlag = true;
              fmovies.push(movie);
            }
          });
        }
      });
      filtered = fmovies ? fmovies : null;
    }

    if (selectedGenres.length > 0) {
      let fmovies = [];
      selectedGenres.map((r) => {
        if (r === "any") {
          if (rFlag === false) {
            fmovies = movies;
            return;
          }
        } else {
          if (rFlag) {
            filteredMovies.map((movie) => {
              if (movie.category === r) {
                fmovies.push(movie);
              }
            });
          } else {
            movies.map((movie) => {
              if (movie.category === r) {
                fmovies.push(movie);
              }
            });
          }
        }
      });
      filtered = fmovies?.length > 0 ? fmovies : filtered;
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
          {filteredMovies?.length > 0
            ? filteredMovies.map((movie, index) => (
                <Movie
                  key={index}
                  title={movie.title}
                  rating={movie.rating}
                  category={movie.category}
                />
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default MoviesComponent;
