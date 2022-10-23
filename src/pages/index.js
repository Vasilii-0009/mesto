import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { initialCards } from '../utils/cards.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js'
import './index.css';


const popupFormEdit = document.querySelector('.popup__form-edit');
const profileBtnEdit = document.querySelector('.profile__btn-edit');
const popupEdit = document.querySelector('.popup-edit');
const inputAutor = document.querySelector('.popup__input_value_autor');
const inputProf = document.querySelector('.popup__input_value_prof');
const nameInput = document.querySelector('.profile__autor');
const jobInput = document.querySelector('.profile__text');
const addCardButton = document.querySelector('.profile__add');
const popupPlus = document.querySelector('.popup-add');
const popupCloseImg = document.querySelector('.popup-photo__btn');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoImg = document.querySelector('.popup-photo__img');
const popupPhotoText = document.querySelector('.popup-photo__text');
const formPlus = document.querySelector('.popup-add__form');
const popupText = document.querySelector('.popup-add__input_value_autor');
const popupImg = document.querySelector('.popup-add__input_value_prof');
const elements = document.querySelector('.elements');
const popups = document.querySelectorAll('.popup');


const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const profileEditFormValidator = new FormValidator(config, popupFormEdit)
profileEditFormValidator.enableValidation()


const addCardFormValidator = new FormValidator(config, formPlus)
addCardFormValidator.enableValidation()




const popupWithImage = new PopupWithImage('.popup-photo')
popupWithImage.setEventListener()

//popupWithFormPlus//
const popupWithFormPlus = new PopupWithForm('.popup-add', handleFormSubmit)
popupWithFormPlus.setEventListener()

function handleFormSubmit(formData) {
  initCards.setItem(creatCard(formData))
  popupWithFormPlus.close()
}

//popupWithFormEdit//
const popupWithFormEdit = new PopupWithForm('.popup-edit', handleFormSubmitEdit)
popupWithFormEdit.setEventListener()
function handleFormSubmitEdit(formData) {
  userInfo.setUserInfo(formData.inputAutor, formData.inputProf)
  popupWithFormEdit.close()
}


const userInfo = new UserInfo({ name: '.profile__autor', prof: '.profile__text' })






// edit
profileBtnEdit.addEventListener('click', function openPopupProfile() {

  profileEditFormValidator.resetValidationErrors()
  profileEditFormValidator.disableButton()
  popupWithFormEdit.open()
  userInfo.getUserInfo({ nameInput: inputAutor, profInput: inputProf })

}

)
//plus
addCardButton.addEventListener('click', function openPopupProfile() {
  addCardFormValidator.resetValidationErrors()
  addCardFormValidator.disableButton()
  popupWithFormPlus.open()

}

)



function handleCardClick(name, link) {

  popupWithImage.open(name, link)

}
function creatCard(data) {
  const form = new Card(data, '#elements__element', handleCardClick)
  return form.generateCard()
}


const initCards = new Section({
  data: initialCards,
  renderer: (cardItem) => {
    initCards.setItem(creatCard(cardItem))
  },
},
  '.elements'
)
initCards.renderItems()

