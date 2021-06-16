import React from "react";
const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    }); //Esto viene de App, hacer el cableado
  };
  return (
    <form className="form">
      <label></label>
      <input
        className="input-text"
        type="text"
        name="filter"
        id=""
        value={props.filterName} //Esto viene del estado de App, ojo.Hay que hacerlo controlado
        onChange={handleChange}
      ></input>
    </form>
  );
};
export default Filter;
