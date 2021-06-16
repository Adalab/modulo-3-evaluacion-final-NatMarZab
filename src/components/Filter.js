import React from "react";
const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <form className="form">
      <label></label>
      <input
        className="input-text"
        type="text"
        name="filter"
        id=""
        value={props.filteredCharacter}
        onChange={handleChange}
      ></input>
    </form>
  );
};
export default Filter;
