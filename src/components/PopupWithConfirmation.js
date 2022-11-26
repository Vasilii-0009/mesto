import { Popup } from './Popup.js'
class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  close() {
    super.close()

  }

  open() {
    super.open()
  }
  setEventListener() {
    super.setEventListener()
    this._elementPopup.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
  }

}

export { PopupWithConfirmation }