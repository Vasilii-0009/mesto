class Card {
  constructor(data, templateElement, openPopup, userInfo, dataApi, PopupConfirmDeletCard) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id
    this._owner = data.owner
    this._dataApi = dataApi
    this._userInfo = userInfo
    this._likes = data.likes
    this._templateElement = templateElement,
      this._openPopup = openPopup
    this._popupConfirmDeletCard = PopupConfirmDeletCard
    this._btnConfirDelete = document.querySelector('.popup-delet__btn')

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




    if (this._userInfo._elementName.textContent != this._owner.name) {
      elemntBascket.remove()
    }

    this._setEventListeners(elemntLike, elemntBascket, elemntImg)
    return this._element



  }

  _setEventListeners(elemntLike, elemntBascket, elemntImg) {
    const elementNumber = this._element.querySelector('.elements__number')
    elementNumber.textContent = this._likes.length


    elemntLike.addEventListener('click', (evt) => {

      this._addLike(elemntLike)
      if (elemntLike.classList.contains('elements__img-heart')) {
        console.log('yes')
        this._dataApi.addLike(this._id).then((data) => {
          elementNumber.textContent = data.likes.length
        })
          .catch((err) => Promise.reject(`Лайк не добавлен (код ошибки): ${err}`))
      } else {
        console.log('no')
        this._dataApi.deleteLike(this._id).then((data) => {
          elementNumber.textContent = data.likes.length
        })
          .catch((err) => Promise.reject(`Лайк не удалился (код ошибки): ${err}`))
      }
    })


    elemntBascket.addEventListener('click', () => {
      //this._deleteCard(elemntBascket)
      this._handleFormSubmitDelet()
    })

    elemntImg.addEventListener('click', () => {
      this._openImagePopup()
    })

  }

  _addLike(elemntLike) {
    elemntLike.classList.toggle('elements__img-heart')
  }


  // _deleteLike(elemntLike) {
  //   elemntLike.classList.remove('elements__img-heart')
  // }


  // _deleteCard(elemntBascket) {
  //   elemntBascket.closest(this._element.remove())
  // }


  _deleteCard() {
    this._dataApi.deleteCard(this._id).then(() => {
      this._element.remove()
    })

  }

  _handleFormSubmitDelet() {
    this._popupConfirmDeletCard.open()

    this._btnConfirDelete.addEventListener('click', () => {
      this._deleteCard()
      this._popupConfirmDeletCard.close()
    })
  }

  _openImagePopup() {
    this._openPopup(this._name, this._link)
  }
}

export { Card }

