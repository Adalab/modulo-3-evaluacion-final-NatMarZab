import "../stylesheet/App.scss";

import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filter from "./Filter";

import getDataFromApi from "../services/Api";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacter, setFilteredCharacter] = useState("");

  useEffect(() => {
    if (characters.length === "") {
      getDataFromApi().then((charactersData) => {
        setCharacters(charactersData.results);
        console.log(characters);
      });
    }
  }, []);

  const handleEvent = (data) => {
    if (data.key === "name") {
      setFilteredCharacter(data.value);
    }
  };

  return (
    <>
      <header>
        <h1 className="title">Rick and Morty</h1>
      </header>
      <main>
        <section>
          <Filter handleFilter={handleEvent} filterName={filteredCharacter} />
          <CharacterList dataList={characters} />
        </section>
      </main>
    </>
  );
};

export default App;
