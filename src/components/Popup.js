class Popup {
  constructor(popupSelector) {
    this._elementPopup = document.querySelector(popupSelector)
    this._handlerEscClose = this._handleEscClose.bind(this)
  }

  close() {
    this._elementPopup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handlerEscClose)
  }

  open() {
    this._elementPopup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handlerEscClose)
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListener() {
    this._elementPopup.addEventListener('click', (evt) => {
      if (evt.target === this._elementPopup || evt.target === this._elementPopup.querySelector('.popup__close')) {
        this.close()
      }
    })
  }
}

export { Popup }