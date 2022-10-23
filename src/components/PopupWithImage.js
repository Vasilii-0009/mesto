import { Popup } from './Popup.js'

class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector)
    this.imageSrc = this._elementPopup.querySelector('.popup-photo__img')
    this.imageName = this._elementPopup.querySelector('.popup-photo__text')
  }
  open(name, link) {
    super.open()
    this.imageSrc.src = link,
      this.imageName.textContent = name,
      this.imageSrc.alt = name
  }
}

export { PopupWithImage }