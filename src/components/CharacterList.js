import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const charactersInfo = props.filteredCharacters.map((character) => {
    return (
      <li key={character.id} className="character-list">
        <CharacterCard character={character} />
      </li>
    );
  });
  return <ul>{charactersInfo}</ul>;
};
export default CharacterList;
