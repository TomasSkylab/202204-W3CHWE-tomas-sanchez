import Component from "../Component";

class NavComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "header", "header");

    this.render();
  }

  render() {
    this.element.innerHTML = `<h1 class="header__text">Pokemon</h1>
        <nav>
          <ul class="header__nav">
            <li><a href="">Pokemon list</a></li>
            <li><a href="">Pokemon fav</a></li>
          </ul>
        </nav> `;
  }
}

export default NavComponent;
