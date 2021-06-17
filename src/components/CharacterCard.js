import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
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
    </Link>
  );
};
export default CharacterCard;
