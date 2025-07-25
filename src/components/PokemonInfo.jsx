import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./PokemonInfo.module.css";

const PokemonInfo = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [weight, setWeight] = useState("");
  const [newHeight, setNewHeight] = useState("");
  const [newHeight2, setNewHeight2] = useState("");

  const converter = (height) => {
    let x = (height * 10) / 30.48;
    const y = Math.floor(x);
    x = Math.floor((x - y) * 100);
    setNewHeight(x);
    setNewHeight2(y);
  };

  const weightSet = (weight) => {
    let x = weight / 10;
    setWeight(x);
  };

  const typeColors = {
    grass: "green",
    poison: "#b97fc9",
    fire: "#fd7d24",
    ice: "#51c4e7",
    psychic: "#f366b9",
    bug: "#729f3f",
    normal: "#a4acaf",
    electric: "#eed535",
    ground: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
    fairy: "#fdb9e9",
    water: "#4592c4",
    fighting: "#d56723",
    rock: "#a38c21",
    steel: "#9eb7b8",
    flying: "linear-gradient(180deg, rgb(23,198,251) 50%, rgb(193,191,191) 50%)",
    dragon: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const result = await response.json();
        setPokemon(result);
        converter(result.height);
        weightSet(result.weight);
      } catch (error) {
        console.error("Error fetching Pokemon details", error);
      }
    };
    fetchPokemon();
  }, [id]);

  useEffect(() => {
    document.documentElement.classList.add(styles.htmlbackground);
    document.body.classList.add(styles.bodybackground);

    return () => {
      document.documentElement.classList.remove(styles.htmlbackground);
      document.body.classList.remove(styles.bodybackground);
    };
  }, []);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.h1}>{pokemon.name.toUpperCase()}</h1>
        <div className={styles.pokemoninfo}>
          <div className={styles.box_img}>
            <img
              src={pokemon.sprites.front_default}
              width="290rem"
              alt={pokemon.name}
            />
          </div>
          <div className={styles.textbox}>
            <div className={styles.box_content}>
              <div className="info_left">
                <h3>
                  Height : <br />
                  {newHeight2}'{newHeight}"
                </h3>
                <h3>
                  Weight : <br /> {weight} Kgs
                </h3>
              </div>
              <div className={styles.info_right}>
                <h3>
                  Abilities : <br />
                  {pokemon.abilities
                    .map((item) => item.ability.name)
                    .join(", ")}
                </h3>
              </div>
            </div>
            <div className="types">
              <h2 className={styles.h2}>Types</h2>
              <div className={styles.type_boxes}>
                {pokemon.types.map((item) => {
                  const typename = item.type.name;
                  let bgcolor = typeColors[typename] || "#888";

                  return (
                    <div
                      key={typename}
                      style={{
                        background: bgcolor,
                        color: "white",
                        height: "2rem",
                        width: "7rem",
                        textAlign: "center",
                        fontSize: "1.3rem",
                        borderRadius: "8%",
                      }}
                    >
                      {typename}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stats_img}>
          <div className={styles.stats}>
            <ul>
              {pokemon.stats.map((item, index) => (
                <li key={index}>
                  <strong>{item.stat.name.toUpperCase()}:</strong>{" "}
                  <strong>{item.base_stat}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.back_img}>
            <img
              src={pokemon.sprites.back_default}
              width="259rem"
              alt={pokemon.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
 
