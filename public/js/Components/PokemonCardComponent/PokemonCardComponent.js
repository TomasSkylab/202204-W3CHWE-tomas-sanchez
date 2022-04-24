import Component from "../Component";

class PokemonCardComponent extends Component {
  name;

  type;

  image;

  constructor(parenElement, name, image, type) {
    super(parenElement, "ul", "pokemonCard");
    this.name = name;
    this.image = image;
    this.type = type;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <li class="pokemonCard">
            <p>1</p>
            <img
              class="pokemonCard__image"
              src="${this.image}"
              alt="Dibujo animado de la serie Pokemon"
            />
            <h3 class="pokemonCard__name">${this.name}</h3>
            <p class="pokemonCard__info">Type:${this.type}</p>
          </li>
    `;
  }
}

export default PokemonCardComponent;
