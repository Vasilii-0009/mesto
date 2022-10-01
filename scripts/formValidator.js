const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const popupForm = document.querySelectorAll('.popup__form')

class formValidator {
  constructor(config, popupFormItem) {
    this._popupForm = config.formSelector;
    this._popupInput = config.inputSelector;
    this._popupSubmitButton = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._popupFormItem = popupFormItem
  }
  _showInputError = (forlmElementParam, formInputParam, errorMessage) => {
    const errorElement = forlmElementParam.querySelector(`.${formInputParam.id}-error`)
    formInputParam.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass)
  }
  _hidenInputError = (forlmElementParam, formInputParam) => {
    const errorElement = forlmElementParam.querySelector(`.${formInputParam.id}-error`)
    formInputParam.classList.remove(this._inputErrorClass)
    errorElement.classList.remove(this._errorClass)
    errorElement.textContent = '';
  }
  _isValid = (forlmElementParam, formInputParam) => {
    if (!formInputParam.validity.valid) {
      this._showInputError(forlmElementParam, formInputParam, formInputParam.validationMessage)
    } else {
      this._hidenInputError(forlmElementParam, formInputParam)
    }
  }
  _setEventListeners(forlmElementParam) {
    const inputList = Array.from(forlmElementParam.querySelectorAll(this._popupInput))
    const buttonElement = forlmElementParam.querySelector(this._popupSubmitButton)
    this._toggleButtonState(inputList, buttonElement)
    inputList.forEach((formInputParam) => {
      formInputParam.addEventListener('input', () => {
        this._isValid(forlmElementParam, formInputParam)
        this._toggleButtonState(inputList, buttonElement)

      })
    })


  }
  //buttom
  _hasInvalidInput(inputList) {
    return inputList.some((formInputParam) => {
      return !formInputParam.validity.valid;
    })

  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true)
      buttonElement.classList.add(this._inactiveButtonClass);


    } else {
      buttonElement.removeAttribute('disabled', true)
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }
  enableValidation() {
    this._setEventListeners(this._popupFormItem)
  }
}
popupForm.forEach((popupFormItem) => {
  const resFormValidator = new formValidator(config, popupFormItem)
  resFormValidator.enableValidation()
})
export { formValidator }