class FormValidator {
  constructor(config, popupFormItem) {
    this._popupInputSelector = config.inputSelector;
    this._popupSubmitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._popupFormItem = popupFormItem;
    this._popupInputList = Array.from(this._popupFormItem.querySelectorAll(this._popupInputSelector))
    this._popupButton = this._popupFormItem.querySelector(this._popupSubmitButtonSelector)
  }

  _showInputError(inputList) {
    const showMessageError = this._popupFormItem.querySelector(`.${inputList.id}-error`)
    showMessageError.classList.add(this._errorClass)
    showMessageError.textContent = inputList.validationMessage
    inputList.classList.add(this._inputErrorClass)
  }

  _hidenInputError(inputList) {
    const showMessageError = this._popupFormItem.querySelector(`.${inputList.id}-error`)
    showMessageError.classList.remove(this._errorClass)
    showMessageError.textContent = ''
    inputList.classList.remove(this._inputErrorClass)
  }

  _isValid(inputList) {

    if (!inputList.validity.valid) {
      this._showInputError(inputList)
    } else {
      this._hidenInputError(inputList)
    }
  }

  _setEventListener() {

    this._popupInputList.forEach((inputList) => {
      inputList.addEventListener('input', () => {
        this._isValid(inputList)
        this._toggleButtonState()
      })
    })
  }

  _toggleButtonState() {

    if (this._hasInvalidInput()) {
      this.disableButton()
    } else {
      this._enableBatton()
    }
  }

  _hasInvalidInput() {
    return this._popupInputList.some((formInputParam) => {
      return !formInputParam.validity.valid;

    })
  }
  _enableBatton() {
    this._popupButton.removeAttribute('disabled', true)
    this._popupButton.classList.remove(this._inactiveButtonClass);

  }

  disableButton() {
    this._popupButton.setAttribute('disabled', true)
    this._popupButton.classList.add(this._inactiveButtonClass);
  }

  resetValidationErrors = () => {
    this._enableBatton();
    this._popupInputList.forEach((inputElement) => {
      this._hidenInputError(inputElement);
    });
  };

  enableValidation() {
    this._setEventListener()
  }
}

export { FormValidator }