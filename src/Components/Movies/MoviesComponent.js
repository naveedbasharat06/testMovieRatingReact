import React, { useEffect, useState } from "react";
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

  const filterMovies = () => {
    let rFlag = false;
    let sFlag = false;
    let filtered = [];

    if (searchTerm.length > 0) {
      filtered = [];
      movies.forEach((movie) => {
        if (
          movie.title
            .toLocaleLowerCase()
            .search(searchTerm.toLocaleLowerCase()) > -1
        ) {
          sFlag = true;
          filtered.push(movie);
        }
      });
    }

    if (selectedRatings.length > 0) {
      let fmovies = [];
      let tFlag = false;
      for (let k = 0; k < selectedRatings.length; k++) {
        let r = selectedRatings[k];

        if (r === "0" && !sFlag) {
          fmovies = movies;
          rFlag = true;
          tFlag = true;
          break;
        } else if (r !== "0" && sFlag) {
          filtered.map((movie) => {
            if (movie.rating === parseInt(r)) {
              rFlag = true;
              tFlag = true;
              fmovies.push(movie);
            }
          });
        } else if (r !== "0" && !sFlag) {
          movies.map((movie) => {
            if (movie.rating === parseInt(r)) {
              rFlag = true;
              tFlag = true;
              fmovies.push(movie);
            }
          });
        }
      }
      if (tFlag) {
        filtered = fmovies?.length > 0 ? fmovies : [...filtered];
      } else {
        filtered = selectedRatings.find((sr) => sr === "0") ? filtered : null;
      }
    }

    if (selectedGenres.length > 0) {
      let fmovies = [];
      let tFlag = false;
      for (let k = 0; k < selectedGenres.length; k++) {
        let r = selectedGenres[k];
        // selectedGenres.forEach((r) => {
        if (r === "any" && !sFlag && !rFlag) {
          fmovies = movies;
          tFlag = true;
          break;
        } else {
          if (r !== "any") {
            if (rFlag || sFlag) {
              filtered.map((movie) => {
                if (movie.category === r) {
                  fmovies.push(movie);
                  tFlag = true;
                }
              });
            } else {
              movies.map((movie) => {
                if (movie.category === r) {
                  tFlag = true;
                  fmovies.push(movie);
                }
              });
            }
          }
        }
      }
      if (tFlag) {
        filtered = fmovies?.length > 0 ? fmovies : filtered;
      } else {
        filtered = selectedGenres.find((g) => g === "any") ? filtered : null;
      }
    }

    if (
      searchTerm.length === 0 &&
      selectedRatings.length === 0 &&
      selectedGenres.length === 0
    ) {
      filtered = movies;
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
