class Popup {
  constructor(popupSelector) {
    this._elementPopup = document.querySelector(popupSelector)
    document.removeEventListener('keydown', this._handleEscClose.bind(this))
    document.addEventListener('keydown', this._handleEscClose.bind(this))
  }

  close() {
    this._elementPopup.classList.remove('popup_opened')
  }

  open() {
    this._elementPopup.classList.add('popup_opened')
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