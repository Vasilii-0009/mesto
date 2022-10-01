



import { popupPhoto, popupPhotoImg, popupPhotoText, openPopup, } from './index.js'

const elements = document.querySelector('.elements');
const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'

}
  ,
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}

  ,
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}

  ,
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}

  ,
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}

  ,
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}

];





class Card {
  constructor(data, templateSelector,) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const cardElemntTemplate = document.querySelector(this._templateSelector).content;
    const cardElement = cardElemntTemplate.querySelector('.elements__element').cloneNode(true)
    return cardElement
  }

  generateCard() {
    this._elemnt = this._getTemplate()
    this._setEventListeners()
    this._elemnt.querySelector('.elements__title').textContent = this._name
    this._elemnt.querySelector('.elements__img').src = this._link
    return this._elemnt
  }

  _setEventListeners() {
    this._elemnt.querySelector('.elements__img').addEventListener('click', () => {
      this._openImgPopup()

    })

    this._elemnt.querySelector('.elements__like').addEventListener('click', () => {
      this._addLike()
    })

    this._elemnt.querySelector('.elements__basket').addEventListener('click', () => {
      this.__deleteItemCard()
    })



  }
  _openImgPopup() {
    openPopup(popupPhoto)
    popupPhotoImg.src = this._link;
    popupPhotoText.textContent = this._name;
  }

  _deleteItemCard() {
    this._elemnt.querySelector('.elements__basket').closest('.elements__element').remove()
  }

  _addLike() {
    this._elemnt.querySelector('.elements__like').classList.toggle('elements__img-heart')
  }

}


initialCards.forEach((initialCardsItems) => {
  const cardItem = new Card(initialCardsItems, '#elements__element')
  const initialCardsItem = cardItem.generateCard()
  elements.append(initialCardsItem)
})



export { Card }