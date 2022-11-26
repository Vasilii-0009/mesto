

class Section {
  constructor(renderer, containerSelector) {

    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems(obj) {
    obj.forEach(item => this._renderer(item));
  }

  setItem(element) {
    this._containerSelector.prepend(element);
  }

}
export { Section }