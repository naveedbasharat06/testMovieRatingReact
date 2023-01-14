import React, { useState } from "react";
import genreData from "../../Mock/genreData.json";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "./GenreDropdown.css";

const GenreDropdown = ({ handleGenreChange }) => {
  const [optionSelected, setOptionSelected] = useState(false);

  const Option = (props) => {
    const [tmpGenre, setTmpGenre] = useState(genreData);

    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={
              tmpGenre.filter((genre) => genre.value === props.value)[0]
                .isSelected
            }
            onChange={() => {
              tmpGenre.map((genre) => {
                if (genre.value === props.value) {
                  genre.isSelected = !genre.isSelected;
                  return handleGenreChange(genre);
                }
              });
            }}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  return (
    <span
      className="d-inline-block"
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please selecet account(s)"
    >
      <ReactSelect
        className="genre"
        options={genreData}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option,
        }}
        onChange={(options) => {}}
        allowSelectAll={true}
        value={optionSelected}
      />
    </span>
  );
};

export default GenreDropdown;
