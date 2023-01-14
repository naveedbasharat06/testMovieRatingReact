import React from "react";
import "./SearchBar.css";
const SearchBar = ({ searchTerm, setSearchTerm, setFocused, focused }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={handleSearch}
        value={searchTerm}
        onFocus={() => setFocused(true)}
      />
    </div>
  );
};

export default SearchBar;
