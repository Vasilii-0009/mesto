import { Popup } from './Popup.js'
class PopupWithConfirmation extends Popup {
  constructor(popupSelector, deleteCard) {
    super(popupSelector)
    this._deleteCard = deleteCard
  }

  fixCardInfo(id, elementCard) {
    this._id = id
    this._elementCard = elementCard
  }

  setEventListener() {
    super.setEventListener()
    this._elementPopup.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._deleteCard(this._id, this._elementCard)
    })
  }
}

export { PopupWithConfirmation }