
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Cards.css"

const Cards = ({ name, sprite, type,id}) => {


  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="heading">
      <p>Name: {name}</p></div>
      <img src={sprite} alt={name} />
      <p>Type: {type}</p>
    </div>
    
  );
};

export default Cards;
