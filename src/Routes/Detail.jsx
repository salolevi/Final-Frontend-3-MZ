import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ContextGlobal } from "../Components/utils/GlobalContext";
import axios from "axios";

const Detail = () => {
  const params = useParams();

  const [dentista, setDentista] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      axios(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(
        (res) => setDentista(res.data)
      );
    };
    fetchData();
  });

  const { Theme } = useContext(ContextGlobal);

  return (
    <div
      className="detail"
      style={{ background: Theme.backgroundHome, color: Theme.color }}
    >
      <h1>Detalles Dentista ID: {dentista.id} </h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Página Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.email}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
