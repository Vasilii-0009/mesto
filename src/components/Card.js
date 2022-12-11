class Card {
  constructor(data, templateElement, openPopup, userInfo, handelAddleLike, handlerRemoveLike, userId, handlerRomoveCards) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id
    this._owner = data.owner
    this._data = data
    this._arraryLikes = data.likes
    this._userInfo = userInfo
    this._likes = data.likes
    this._templateElement = templateElement,
      this._openPopup = openPopup
    this._handelAddleLike = handelAddleLike
    this._handlerRemoveLike = handlerRemoveLike
    this._userId = userId
    this._handlerRomoveCards = handlerRomoveCards


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

    // if (this._userInfo._elementName.textContent != this._owner.name) {

    //   elemntBascket.remove()
    // }



    this._setEventListeners(elemntLike, elemntBascket, elemntImg, this._userId,)
    if (this._owner._id != this._userId) {

      elemntBascket.remove()

    }
    this._checkLikes(this._userId, elemntLike)
    return this._element

  }

  _checkLikes(userId, elemntLike) {
    const resArrayLikes = this._arraryLikes.some(function (item) {

      return item._id === userId
    })
    if (resArrayLikes) {
      this._addLike(elemntLike)

    } else {
      this._deleteLike(elemntLike)
    }

  }
  _setEventListeners(elemntLike, elemntBascket, elemntImg,) {
    this._elementNumber = this._element.querySelector('.elements__number')
    this._elementNumber.textContent = this._likes.length

    elemntLike.addEventListener('click', () => {

      if (elemntLike.classList.contains('elements__img-heart')) {
        this._deleteLike(elemntLike)
        this._handlerRemoveLike(this._id, this._elementNumber)
      } else {
        this._addLike(elemntLike)
        this._handelAddleLike(this._id, this._elementNumber)
      }

    })


    elemntBascket.addEventListener('click', () => {
      //this._deleteCard(elemntBascket)
      // this._handleFormSubmitDelet()
      this._handlerRomoveCards(this._id, this._element)
    })

    elemntImg.addEventListener('click', () => {
      this._openImagePopup()
    })

  }



  _addLike(elemntLike) {
    elemntLike.classList.add('elements__img-heart')
  }


  _deleteLike(elemntLike) {
    elemntLike.classList.remove('elements__img-heart')
  }


  // _deleteCard(elemntBascket) {
  //   elemntBascket.closest(this._element.remove())
  // }


  _deleteCard() {
    // this._handlerRomoveCards(this._id)
    //this._element.remove()
  }

  _handleFormSubmitDelet() {



  }

  _openImagePopup() {
    this._openPopup(this._name, this._link)
  }

}

export { Card }

