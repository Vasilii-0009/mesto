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
    elemntImg.alt = this._link

    elemntLike.addEventListener('click', () => {
      this._addLike(elemntLike)
    })

    elemntBascket.addEventListener('click', () => {
      this._deleteCard(elemntBascket)
    })


    elemntImg.addEventListener('click', () => {
      this._openPopups()
    })

    // conteiner.append(this._element)
    return this._element
  }

  _addLike(elemntLike) {
    elemntLike.classList.toggle('elements__img-heart')
  }

  _deleteCard(elemntBascket) {
    elemntBascket.closest('.elements__element').remove()
  }

  _openPopups() {
    const popupImg = this._openPopup
    popupImg(this._name, this._link)
  }

}

export { Card }

