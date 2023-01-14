import React from 'react'
import GenreDropdown from '../../Components/GenreDropdown/GenreDropdown'
import MoviesComponent from '../../Components/Movies/MoviesComponent'
import RatingDropdown from '../../Components/Rating/RatingDropdown'
import SearchBar from '../../Components/SearchBar/SearchBar'
import './MainPage.css'
const MainPage = () => {
  return (
    <div className="Main">
      {/* <SearchBar/>
      <RatingDropdown/>
      <GenreDropdown/> */}
      <MoviesComponent/>
    </div>
  )
}

export default MainPage