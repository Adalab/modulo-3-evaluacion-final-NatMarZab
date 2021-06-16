import "../stylesheet/App.scss";

import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filter from "./Filter";

import getDataFromApi from "../services/Api";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredName, setFilteredName] = useState("");

  useEffect(() => {
    if (characters.length === 0) {
      getDataFromApi().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);
  //handles
  const handleEvent = (data) => {
    if (data.key === "name") {
      return setFilteredName(data.value);
    }
  };
  //render
  const filteredCharacters = characters.filter((character) => {
    character.name.toLowerCase().includes(filteredName.toLowerCase());
  });

  return (
    <>
      <header>
        <h1 className="title">Rick and Morty</h1>
      </header>
      <main>
        <section>
          <Filter handleFilter={handleEvent} filteredName={filteredName} />
          <CharacterList filteredCharacters={filteredCharacters} />
        </section>
      </main>
    </>
  );
};

export default App;
