class Component {
  element;

  constructor(parenElement, tag, className) {
    this.element = document.createElement(tag);
    this.element.className = className;

    parenElement.append(this.element);
  }
}

export default Component;
