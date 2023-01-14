import React, { useState } from "react";
import genreData from '../../Mock/genreData.json'
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import './GenreDropdown.css'
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={()=>{
            console.log(props)
            debugger
          }}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};


const GenreDropdown = (handleGenreChange) => {
 const [optionSelected,setOptionSelected]=useState(false);

    return (
      <span
        class="d-inline-block"
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
            Option
          }}
          onChange={handleGenreChange}
          allowSelectAll={true}
          value={optionSelected}
        />
      </span>
    );
}

export default GenreDropdown