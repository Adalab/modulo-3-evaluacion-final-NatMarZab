import React from "react";
import "../stylesheet/layout/_filter.scss";
const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="labelInput"></label>
      <input
        className="input-text"
        type="text"
        name="filter"
        id=""
        value={props.filteredName}
        onChange={handleChange}
      ></input>
    </form>
  );
};
export default Filter;
