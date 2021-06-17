import "../stylesheet/App.scss";

import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

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
    return character.name.toLowerCase().includes(filteredName.toLowerCase());
  });

  const renderCharacterDetail = (routerProps) => {
    const routeCharacterId = routerProps.match.params.characterId;
    const characterFound = characters.find(
      (character) => character.id === parseInt(routeCharacterId)
    );
    if (characterFound) {
      return (
        <CharacterDetail specificCharacter={characterFound}></CharacterDetail>
      );
    } else {
      return <p>The character you are looking for does not exist</p>;
    }
  };

  return (
    <>
      <header>
        <h1 className="title">Rick and Morty</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <section>
              <Filter handleFilter={handleEvent} filteredName={filteredName} />
              <CharacterList
                dataList={filteredCharacters}
                filteredName={filteredName}
              />
            </section>
          </Route>
          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          ></Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
