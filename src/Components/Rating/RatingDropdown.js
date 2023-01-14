import React, { useEffect, useState } from "react";
import ratings from '../../Mock/ratingData.json'
import './RatingDropdown.css'
import { default as ReactSelect } from "react-select";
import { components } from "react-select";







const RatingDropdown = ({handleRatingChange}) => {
 const [optionSelected,setOptionSelected]=useState(null);


 const [tmpRatings, setTmpRatings] = useState(ratings)
 useEffect(() => {
  handleRatingChange(tmpRatings)
 }, [tmpRatings])




 const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={tmpRatings.filter(rating => rating.value == props.value)[0].isSelected}
          onChange={(event) => {
            debugger;
            
            setTmpRatings([
              ...tmpRatings.map((rating) => {
                if (rating.value == props.value) rating.isSelected = !rating.isSelected;
                return rating
              })
            ]);
          }}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};



    return (
      <span
        class="d-inline-block"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          className="rating"
          options={tmpRatings}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={(options) => {}}
          allowSelectAll={true}
          value={optionSelected}
        />
      </span>
    );
}

export default RatingDropdown