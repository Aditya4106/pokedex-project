import { useNavigate } from "react-router-dom";
import React from "react";
import "./Cards.css";

const Cards = ({ name, sprite, type, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${id}`);
  };

  // Determine type styling for Pokemon card
  const getTypeColor = (type) => {
    const typeColors = {
      fire: "#f44336",
      water: "#2196f3",
      grass: "#4caf50",
      electric: "#ffeb3b",
      psychic: "#9c27b0",
      bug: "#8bc34a",
      poison: "#9c27b0",
      ground: "#795548",
      rock: "#607d8b",
      ghost: "#607d8b",
      dragon: "#ff5722",
      dark: "#000000",
      steel: "#607d8b",
      fairy: "#e91e63",
      ice: "#03a9f4",
      normal: "#9e9e9e",
    };

    return typeColors[type] || "#9e9e9e"; // Default color
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="heading">
        <p className="card-name">{name}</p>
      </div>
      <img className="pokemon-sprite" src={sprite} alt={name} />
      <p className="pokemon-type" style={{ backgroundColor: getTypeColor(type) }}>
        {type}
      </p>
    </div>
  );
};

export default Cards;
