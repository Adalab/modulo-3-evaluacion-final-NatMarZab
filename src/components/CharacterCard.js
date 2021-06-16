import React from "react";

const CharacterCard = (props) => {
  return (
    <article className="characterArticle">
      <img
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        className="characterImage"
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="characterTitle">{props.character.name}</h4>
      <p className="species">{props.character.species}</p>
    </article>
  );
};
export default CharacterCard;
