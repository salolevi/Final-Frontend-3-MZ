import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const agregarFavorito = () => {
    let esFav = false;
    let favs = JSON.parse(localStorage.getItem("favs") || "[]");

    favs.forEach((e) => {
      if (e.id === id) {
        esFav = true;
        let index = favs.indexOf(e);
        favs.splice(index, 1);
      }
    });

    if (esFav === false) {
      favs.push({
        name: name,
        username: username,
        id: id,
      });
      localStorage.setItem("favs", JSON.stringify(favs));
      alert(`${name} se agregó a favoritos`);
    } else {
      localStorage.setItem("favs", JSON.stringify(favs));
      alert(`${name} eliminado de favoritos`);
    }
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="doctor-img" />
      <h2 className="dentist-name">
        <Link to={`/${id}`}>{name}</Link>
      </h2>
      <h3 className="dentist-username">{username}</h3>
      <button onClick={agregarFavorito} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
