import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PokemonInfo from "./components/PokemonInfo";
import Toast from "./components/Toast";

function App() {
  const [data, setData] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 1000); // Show the toast after 1 second

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Function to play Pikachu sound
  const playPikachuSound = () => {
    if (!audioPlayed) {
      const audio = new Audio("https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg");
      audio.play();
      setAudioPlayed(true); // Set to true so it doesn't play again
    }
  };

  // Play sound on user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      playPikachuSound();
      document.removeEventListener('click', handleUserInteraction); // Remove listener after first click
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction); // Cleanup listener
    };
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
          />
          <Home />
          <div className="card-container">
            {filteredData.map((item) => (
              <Cards
                key={item.id}
                id={item.id}
                name={item.name}
                sprite={item.sprites.front_default}
                type={item.types.map((type) => type.type.name).join(", ")}
              />
            ))}
          </div>
        </>
      ),
    },
    {
      path: "/pokemon/:id",
      element: <PokemonInfo />,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const results = [];
      for (let i = 1; i <= 150; i++) {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          const result = await response.json();
          results.push(result); // Accumulate results in the array
        } catch (error) {
          console.error("Error fetching data", error);
        }
      }

      setData(results);
      // Set the state with the full array
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      {showToast && <Toast message="Welcome to the Pokémon World!" />}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
