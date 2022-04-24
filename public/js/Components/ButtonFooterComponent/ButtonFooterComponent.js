import Component from "../Component.js";

class buttonFooterComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "footer", "footer");

    this.render();
  }

  render() {
    this.element.innerHTML = ` <div class="footerlist">
          <button class="footerList__previous">Previous page</button>
          <button class="footerList__next">Next page</button>
        </div>`;
  }
}

export default buttonFooterComponent;
