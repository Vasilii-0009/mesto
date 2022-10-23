import { Popup } from './Popup.js'

class PopupWithForm extends Popup {
  constructor(SelectPopup, handleFormSubmit) {
    super(SelectPopup)
    this._handleFormSubmit = handleFormSubmit
    this._elementForm = this._elementPopup.querySelector('.popup__form')
  }

  open() {
    super.open()

  }
  close() {
    super.close()
    this._elementForm.reset()
  }

  _getInputValues() {
    this._inputList = this._elementPopup.querySelectorAll('.popup__input');

    this._inputValues = {}

    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  setEventListener() {
    super.setEventListener()
    this._elementPopup.addEventListener('submit', (evt) => {
      evt.preventDefault()

      this._handleFormSubmit(this._getInputValues())
    })
  }
}

export { PopupWithForm }