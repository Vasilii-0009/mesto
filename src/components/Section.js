

class Section {
  constructor({ data, renderer }, containerSelector) {
    this._cards = data;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this._cards.forEach(item => this._renderer(item));
  }

  setItem(element) {
    this._containerSelector.prepend(element);
  }

}
export { Section }