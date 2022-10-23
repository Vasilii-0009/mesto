import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { initialCards } from '../utils/cards.js'
import { Section } from '../components/Section.js'
//import { Popup } from './Popup.js';
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


// const renderPopup = new Popup('.popup')
// renderPopup.setEventListener()

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




// popups.forEach((popupItem) => {
//   popupItem.addEventListener('click', (evt) => {
//     if (evt.target === popupItem || evt.target === popupItem.querySelector('.popup__close')) {
//       closePopup(popupItem)
//     }
//   })
// })

//общая функция открытия попапов и удаление по esc

// function closePopupEsc(evt) {

//   if (evt.key === 'Escape') {
//     const openPopup = document.querySelector('.popup_opened');
//     closePopup(openPopup)

//   }
// }

// function openPopup(popup) {
//   popup.classList.add('popup_opened')
//    document.addEventListener('keydown', closePopupEsc)
// }



// edit
profileBtnEdit.addEventListener('click', function openPopupProfile() {

  profileEditFormValidator.resetValidationErrors()
  profileEditFormValidator.disableButton()
  popupWithFormEdit.open()
  userInfo.getUserInfo({ nameInput: inputAutor, profInput: inputProf })

  // editPopup.open()
  //userInfo.setUserInfo({ inputName: '.popup__input_value_autor', inpuprof: '.popup__input_value_prof' })
  //openPopup()

  // inputAutor.value = nameInput.textContent
  // inputProf.value = jobInput.textContent
}

)
//plus
addCardButton.addEventListener('click', function openPopupProfile() {
  addCardFormValidator.resetValidationErrors()
  addCardFormValidator.disableButton()
  popupWithFormPlus.open()
  // openPopup(popupPlus)
}

)

//  функция удаления попапа
// function closePopup(closePopup) {
//   closePopup.classList.remove('popup_opened')
//   document.removeEventListener('keydown', closePopupEsc)

// }

//edit
// function submitProfileEditForm(evt) {
//   evt.preventDefault();
//   nameInput.textContent = inputAutor.value
//   jobInput.textContent = inputProf.value
//   closePopup(popupEdit)

// }

//popupFormEdit.addEventListener('submit', submitProfileEditForm)



///????//
// formPlus.addEventListener('submit', (evt) => {
//   evt.preventDefault()

//   const newCard = {
//     name: popupText.value,
//     link: popupImg.value,
//   }


//   const card = creatCard(newCard)

//   elements.prepend(card)

//   closePopup(popupPlus)
//   formPlus.reset()
// })
//???///

function handleCardClick(name, link) {

  popupWithImage.open(name, link)

}
function creatCard(data) {
  const form = new Card(data, '#elements__element', handleCardClick)
  return form.generateCard()
}
// initialCards.forEach((initialCardsItem) => {

//   elements.append(creatCard(initialCardsItem))
// })

const initCards = new Section({
  data: initialCards,
  renderer: (cardItem) => {
    // const form = new Card(cardItem, '#elements__element', handleOpenPopup)
    // const genrerateCards = form.generateCard()
    initCards.setItem(creatCard(cardItem))
  },
},
  '.elements'
)


initCards.renderItems()
//
