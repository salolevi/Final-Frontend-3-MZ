import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/GlobalContext";
import {useContext} from 'react';

const Card = ({ name, username, id }) => {

  const {Theme, favs, setFavs} = useContext(ContextGlobal);

  const agregarFavorito = (e) => {
    e.preventDefault();
    let esFav = false;

    if (!favs.find(fav => fav.id === id)) {
      // favs.push({
      //   name,
      //   username: username,
      //   id: id,
      // });
      setFavs([...favs, {name, username, id}])
      localStorage.setItem("favs", JSON.stringify(favs));
      console.table(favs);
      alert(`${name} se agregó a favoritos`);
    } else {
      setFavs(favs.filter(fav => fav.id !== id));
      console.table(favs);
      localStorage.setItem("favs", JSON.stringify(favs));
      alert(`${name} se elimino a favoritos`);
    }
  };

  return (
    <Link to={`/${id}`} className="card" style={{background: Theme.cardBackground}}>
      <img src="/images/doctor.jpg" alt="doctor-img" />
      <h2 className="dentist-name">
        {/* <Link to={`/${id}`}>{name}</Link> */}
        {name}
      </h2>
      <h3 className="dentist-username">{username}</h3>
      <button onClick={agregarFavorito} className="favButton">
        ⭐
      </button>
    </Link>
  );
};

export default Card;
