import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { initialCards } from '../utils/cards.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js'
import { UserInfo } from '../components/UserInfo.js'
import { Api } from '../components/Api.js'
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

//new const 
const avatarConteiner = document.querySelector('.profile__container-img')
const popupAvatar = document.querySelector('.popup-avatar')
const avatar = document.querySelector('.profile__img')
const btnConfirDelete = document.querySelector('.popup-delet__btn')
const elementPoupBtn = document.querySelector('.popup__button')
const btnAddCard = document.querySelector('.popup-add__btn')
const btnEditProf = document.querySelector('.popup-edit__btn')
const btnAvatar = document.querySelector('.popup-avatar__btn')
const btnDelet = document.querySelector('.popup-delet__btn')

// FormValidator popupFormEdit
const profileEditFormValidator = new FormValidator(config, popupFormEdit)
profileEditFormValidator.enableValidation()

// FormValidator formPlus
const addCardFormValidator = new FormValidator(config, formPlus)
addCardFormValidator.enableValidation()

// FormValidator avatar
const avatarFormValidator = new FormValidator(config, popupAvatar)
avatarFormValidator.enableValidation()

//class API
const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-52',
  headers: {
    'Content-Type': 'application/json',
    authorization: 'f2aec418-693a-4d30-9fa0-f227bcec820c'
  },
}

//creatCards with api
const dataApi = new Api(configApi)
dataApi.getTasks().then((response) => {
  // const itemCard = Response.slice(0, 4)
  initCards.renderItems(response)
})
  .catch((err) => Promise.reject(`Картинки не добавлены (код ошибки): ${err}`));

//creatCards
function createCard(data) {
  const card = new Card(data, '#elements__element', handleCardClick, userInfo, dataApi, popupConfirmation)
  return card.generateCard()
}

const initCards = new Section((card) => {
  initCards.setItem(createCard(card))
},
  '.elements')

//getInfoUser with api
dataApi.getInfoUser().then((formData) => {
  userInfo.apiUserInfo(formData.name, formData.about, formData.avatar)
})
  .catch((err) => Promise.reject(`Данные не получены с сервира (код ошибки) : ${err}`));

//popupAddCard//
const popupAddCard = new PopupWithForm('.popup-add', handleAddCardSubmit)
popupAddCard.setEventListener()

function handleAddCardSubmit(formData) {
  //popupAddCard with API//
  dataApi.creatCard(formData.name, formData.link).then(res => {
    initCards.setItem(createCard(res))
  })
    .catch((err) => Promise.reject(`Карточка не добавались (код ошибки): ${err}`));
  setTimeout(closePopupTimer, 1000, popupAddCard)
  //popupAddCard.close()

}

//popupWithFormEdit
const popupWithFormEdit = new PopupWithForm('.popup-edit', handleFormSubmitEdit)
popupWithFormEdit.setEventListener()

function handleFormSubmitEdit(formData) {
  // userInfo with Api

  dataApi.saveInfoUser(formData.inputName, formData.inputProf).then(data => {
    userInfo.setUserInfo(data.name, data.about)

  })
    .catch((err) => Promise.reject(`Поля не заполнены(код шибки): ${err}`))
  setTimeout(closePopupTimer, 1000, popupWithFormEdit)
  // popupWithFormEdit.close()
}
const userInfo = new UserInfo({ name: '.profile__autor', prof: '.profile__text', avatar: '.profile__img' })

//PopupWithConfirmation//
const popupConfirmation = new PopupWithConfirmation('.popup-delet')
popupConfirmation.setEventListener()

//popupWithFormEdit avatar api//
const popupWithFormAvatar = new PopupWithForm('.popup-avatar', handleFormSubmitAvatar)
popupWithFormAvatar.setEventListener()

function handleFormSubmitAvatar(formData) {

  dataApi.updateAvatar(formData.inputAvatar).then((data) => {
    avatar.src = data.avatar
  })
    .catch((err) => Promise.reject(`Ввели не коректный URl(код ошибки): ${err}`))
  setTimeout(closePopupTimer, 1000, popupWithFormAvatar)
  //popupWithFormAvatar.close()
}

// edit
profileBtnEdit.addEventListener('click', function openPopupProfile() {
  profileEditFormValidator.resetValidationErrors()
  profileEditFormValidator.disableButton()
  btnEditProf.textContent = 'Сохранить'
  popupWithFormEdit.open()

  userInfo.getUserInfo({ nameInput: inputAutor, profInput: inputProf })

})

//plus
addCardButton.addEventListener('click', function openPopupProfile() {
  addCardFormValidator.resetValidationErrors()
  addCardFormValidator.disableButton()
  btnAddCard.textContent = 'Создать'
  popupAddCard.open()

})
// edit avatar 
avatarConteiner.addEventListener('click', () => {
  avatarFormValidator.disableButton()
  btnAvatar.textContent = 'Сохранить'
  popupWithFormAvatar.open()
})

//popupWithImage
const popupWithImage = new PopupWithImage('.popup-photo')
popupWithImage.setEventListener()

function handleCardClick(name, link, number) {
  popupWithImage.open(name, link, number)
}

// const initCards = new Section({
//   data: initialCards,
//   renderer: (cardItem) => {
//     initCards.setItem(creatCard(cardItem))
//   },
// },
//   '.elements'
// )
// initCards.renderItems()



function closePopupTimer(elementPopup) {
  elementPopup.close()
}


