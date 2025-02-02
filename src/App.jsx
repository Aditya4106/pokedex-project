import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import PokemonInfo from "./components/PokemonInfo";
import Toast from "./components/Toast";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [audioPlayed, setAudioPlayed] = useState(false);

  const POKEMON_COUNT = 150; // Define the number of Pokémon

  // Function to fetch Pokémon data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          Array.from({ length: POKEMON_COUNT }, (_, index) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`).then((res) =>
              res.json()
            )
          )
        );
        setData(results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to play Pikachu sound
  const playPikachuSound = () => {
    if (!audioPlayed) {
      const audio = new Audio(
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg"
      );
      audio.play();
      setAudioPlayed(true);
    }
  };

  // Play Pikachu sound on user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      playPikachuSound();
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  // Toast logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter Pokémon data based on search
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // React Router setup
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <Navbar
              searchQuery={searchQuery}
              handleSearchChange={(e) => setSearchQuery(e.target.value)}
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
    ],
    {
      basename: "/pokedex-project",
    }
  );

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
        {/* Optional: Add a spinner graphic */}
      </div>
    );
  }

  return (
    <>
      {showToast && <Toast message="Welcome to the Pokémon World!" />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
