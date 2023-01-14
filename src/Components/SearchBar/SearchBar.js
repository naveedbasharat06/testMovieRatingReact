import React from "react";
import data from "../../Mock/moviesData.json";
import './SearchBar.css'
const SearchBar = ({ searchTerm, setSearchTerm,setFocused,focused }) => {
    const handleSearch = event => {
        setSearchTerm(event.target.value);
      };
  const hanldeChange = (e) => {
    let arr = [...data];
  };
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search for a movie" onChange={handleSearch} value={searchTerm} onFocus={()=>setFocused(true)}/>
    </div>
    // <div className="searchBar">
    //   <input
    //     type="text"
    //     name="search-bar"
    //     id="search-bar"
    //     placeholder="Enter Movie Name"
    //     // value={prefix}
    //     onChange={hanldeChange}
    //     // onKeyDown={handleKeyDown}
    //   />
    // </div>
  );
};

export default SearchBar;
