import React, { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/villains.json";
import { CharacterLayout } from "../sw-character-layout";
import { CharacterList } from "../sw-character-list";

import { Select } from "../sw-select";

export const Content = () => {
  const [tab, setTab] = useState("Villains");

  const handleChangeTab = (e) => {
    setTab(e.target.value);
  };


  return (
    <div className="content-layout">
      <Select tab={tab} handleChangeTab={handleChangeTab} />

      {tab === "Protagonists" &&
        swCharacters.map((hero) => (
          <CharacterLayout key={hero.name} item={hero}>
            <CharacterList label="Hero Name: " item={hero.name} />
            <CharacterList label="Universe: " item={hero.club} />
          </CharacterLayout>
        ))}

      {tab === "Villains" &&
        swPlanets.map((villain) => (
          <CharacterLayout key={villain.name} item={villain}>
            <CharacterList label="Villain Name: " item={villain.name} />
              <CharacterList label="Universe: " item={villain.club} />
          </CharacterLayout>
        ))}
    </div>
  );
};
