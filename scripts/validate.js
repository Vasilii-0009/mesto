const config = ({
  formSelector: '.popap__form',
  inputSelector: '.popap__input',
  submitButtonSelector: '.popap__button',
  inactiveButtonClass: 'popap__button_disabled',
  inputErrorClass: 'popap__input_type_error',
  errorClass: 'popap__error_visible',
});


const showInputError = (forlmElementParam, formInputParam, errorMessage, { inputErrorClass, errorClass, }) => {
  const errorElement = forlmElementParam.querySelector(`.${formInputParam.id}-error`)
  formInputParam.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass)
}
const hidenInputError = (forlmElementParam, formInputParam, { inputErrorClass, errorClass, }) => {
  const errorElement = forlmElementParam.querySelector(`.${formInputParam.id}-error`)
  formInputParam.classList.remove(inputErrorClass)
  errorElement.classList.remove(errorClass)
  errorElement.textContent = '';
}
const isValid = (forlmElementParam, formInputParam, { ...rest }) => {
  if (!formInputParam.validity.valid) {
    showInputError(forlmElementParam, formInputParam, formInputParam.validationMessage, rest)
  } else {
    hidenInputError(forlmElementParam, formInputParam, rest)
  }
}




function setEventListeners(forlmElementParam, { inputSelector, submitButtonSelector, ...rest }) {
  const inputList = Array.from(forlmElementParam.querySelectorAll(inputSelector))
  const buttonElement = forlmElementParam.querySelector(submitButtonSelector)
  console.log(buttonElement)
  toggleButtonState(inputList, buttonElement, rest)
  inputList.forEach((formInputParam) => {
    formInputParam.addEventListener('input', function () {
      isValid(forlmElementParam, formInputParam, rest)
      toggleButtonState(inputList, buttonElement, rest)
    })
  })
}

//buttonm
function hasInvalidInput(inputList) {
  return inputList.some((formInputParam) => {
    return !formInputParam.validity.valid;
  })

}

function toggleButtonState(inputList, buttonElement, { inactiveButtonClass }) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true)
    buttonElement.classList.add(inactiveButtonClass);

  } else {
    buttonElement.removeAttribute('disabled', true)
    buttonElement.classList.remove(inactiveButtonClass);
  }
}



function enableValidation({ formSelector, ...rest }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((forlmElementParam) => {
    forlmElementParam.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(forlmElementParam, rest);
  });
}
enableValidation(config)


