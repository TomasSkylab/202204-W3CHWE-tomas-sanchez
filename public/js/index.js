const getPokemon = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const pokemonData = await response.json();
  return pokemonData;
};

(async () => {
  const pokemon = await getPokemon();
  return pokemon;
})();
