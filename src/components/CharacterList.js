import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const charactersInfo = props.dataList.map((character) => {
    return (
      <li key={character.id} className="character-list">
        <CharacterCard character={character} />
      </li>
    );
  });
  return props.dataList.length === 0 ? (
    <p>There is not character that matches the word {props.filteredName}</p>
  ) : (
    <ul>{charactersInfo}</ul>
  );
};
export default CharacterList;
