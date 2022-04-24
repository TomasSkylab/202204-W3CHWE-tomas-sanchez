import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";
import PokeApiService from "../../PokeApiService/PokeApiService.js";
import Component from "../Component.js";

class PokemoListComponent extends Component {
  name;
  type;
  image;

  constructor(parentElement, name, image, type) {
    super(parentElement, "ul", "main__list");
    this.name = name;
    this.image = image;
    this.type = type;
    this.render();
  }

  async render() {
    const pokemonApiService = new PokeApiService();
    const { results } = await pokemonApiService.getPokemonPaginated();

    const pokemonList = Promise.all(
      results.map(async ({ name }) => {
        const pokemon = await pokemonApiService.getPokemonByName(name);
        return pokemon;
      })
    );
    (await pokemonList).forEach((pokemon) => {
      try {
        new PokemonCardComponent(this.element, pokemon);
      } catch (error) {
        throw new Error(
          "Could not render pokemonComponent @ pokemonListComponent"
        );
      }
    });
  }
}

export default PokemoListComponent;
