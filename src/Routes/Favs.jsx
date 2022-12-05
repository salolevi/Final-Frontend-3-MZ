import React from "react";
import { useContext, useState } from "react";
import { ContextGlobal } from "../Components/utils/GlobalContext";
import Card from "../Components/Card";

const Favs = () => {
  const { Theme, favs, setFavs } = useContext(ContextGlobal);

  // const [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favs") || []));

  return (
    <div
      className="favs"
      style={{ background: Theme.backgroundHome, color: Theme.color }}
    >
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favs?.map((dentista) => {
          return (
            <Card key={dentista.id} id={dentista.id} name={dentista.name} username={dentista.username}/>
          );
        })}
      </div>
    </div>
  );
};

export default Favs;
