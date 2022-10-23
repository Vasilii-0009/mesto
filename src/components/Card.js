class Card {
  constructor(data, templateElement, openPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateElement = templateElement,
      this._openPopup = openPopup
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateElement).content
    const cardItem = cardElement.querySelector('.elements__element').cloneNode(true)
    return cardItem
  }

  generateCard() {
    this._element = this._getTemplate()
    const elemntImg = this._element.querySelector('.elements__img')
    const elemntLike = this._element.querySelector('.elements__like')
    const elemntBascket = this._element.querySelector('.elements__basket')
    const elemntTitle = this._element.querySelector('.elements__title')

    elemntTitle.textContent = this._name
    elemntImg.src = this._link
    elemntImg.alt = this._name

    this._setEventListeners(elemntLike, elemntBascket, elemntImg)
    return this._element
  }

  _setEventListeners(elemntLike, elemntBascket, elemntImg) {
    elemntLike.addEventListener('click', () => {
      this._addLike(elemntLike)
    })

    elemntBascket.addEventListener('click', () => {
      this._deleteCard(elemntBascket)
    })

    elemntImg.addEventListener('click', () => {
      this._openImagePopup()
    })

  }

  _addLike(elemntLike) {
    elemntLike.classList.toggle('elements__img-heart')
  }

  _deleteCard(elemntBascket) {
    elemntBascket.closest(this._element.remove())
  }

  _openImagePopup() {
    this._openPopup(this._name, this._link)
  }
}

export { Card }

