import Component from "../Component.js";

class PokemoListComponent extends Component {
  pokemon;

  constructor(parentElement, pokemon) {
    super(parentElement, "li", "pokemonCard");
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    
             
            <img
              class="pokemonCard__image"
              src="${this.pokemon.sprites.front_default}"
              alt="Dibujo animado de la serie Pokemon"
            />
            <img
              class="pokemonCard__image"
              src="${this.pokemon.sprites.back_default}"
              alt="Dibujo animado de la serie Pokemon"
            />
            <h3 class="pokemonCard__name">${this.pokemon.name}</h3>
            <p class="pokemonCard__info">weight:${this.pokemon.weight}</p>
            <p class="pokemonCard__info">heightt:${this.pokemon.height}</p>
            <p>${this.pokemon.id}</p>
    `;
  }
}

export default PokemoListComponent;
