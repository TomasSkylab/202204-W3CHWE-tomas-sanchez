import ButtonFooterComponent from "./Components/ButtonFooterComponent/ButtonFooterComponent.js";
import MainComponent from "./Components/MainComponent/MainComponent.js";
import NavComponent from "./Components/NavComponent/NavComponent.js";
import PokemoListComponent from "./Components/PokemonListComponent/PokemonListComponent.js";

const getPokemon = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  const pokemonData = await response.json();
  return pokemonData;
};

(async () => {
  const pokemon = await getPokemon();
  return pokemon;
})();

const container = document.querySelector(".container");
new NavComponent(container);
new PokemoListComponent(container);
new MainComponent(container);
new ButtonFooterComponent(container);
