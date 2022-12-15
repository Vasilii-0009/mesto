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
const btnDeleteCard = document.querySelector('.popup-delet__btn')
const avatarConteiner = document.querySelector('.profile__container-img')
const popupAvatar = document.querySelector('.popup-avatar')
const avatar = document.querySelector('.profile__img')
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

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
const dataApi = new Api(configApi)

//getInfoUser with api
let userId = ''

Promise.all([dataApi.getInfoUser(), dataApi.getTasks()]).then(([getInfoUser, getTasks]) => {
  userId = getInfoUser._id,
    userInfo.setUserInfo(getInfoUser.name, getInfoUser.about, getInfoUser.avatar),
    initCards.renderItems(getTasks)
}).catch((err) => {
  console.log(`Данные не сохранились на сервере (код ошибки): ${err}`)

});

//creatCards
function createCard(data) {
  const card = new Card(data, '#elements__element', handleCardClick, handelAddleLike, handlerRemoveLike, userId, handlerRomoveCards)
  return card.generateCard()
}

const initCards = new Section((card) => {
  initCards.appendItem(createCard(card))
}, '.elements')


//Function handelToggleLike
function handelAddleLike(id, elementNumber) {
  dataApi.addLike(id).then((data) => {
    elementNumber.textContent = data.likes.length
  }).catch((err) => {
    console.log(`Лайк не добавлен (код ошибки): ${err}`)
  })
}

//Function handlerRemoveLike
function handlerRemoveLike(id, elementNumber) {
  dataApi.deleteLike(id).then((data) => {
    elementNumber.textContent = data.likes.length
  }).catch((err) => {
    console.log(`Лайк не удален (код ошибки): ${err}`)
  })
}

//popupAddCard//
const popupAddCard = new PopupWithForm('.popup-add', handleAddCardSubmit)
popupAddCard.setEventListener()

function handleAddCardSubmit(formData) {
  //popupAddCard with API//
  popupAddCard.renderLoading(true)
  dataApi.creatCard(formData.name, formData.link).then(res => {
    initCards.setItem(createCard(res))
    popupAddCard.close()
  }).catch((err) => {
    console.log(`Карточка не сохранена  (код ошибки): ${err}`)
      .finally(() => {
        popupAddCard.renderLoading(false)
      })
  })
}


//popupWithFormEdit
const popupWithFormEdit = new PopupWithForm('.popup-edit', handleFormSubmitEdit)
popupWithFormEdit.setEventListener()

function handleFormSubmitEdit(formData) {
  //userInfo with Api
  popupWithFormEdit.renderLoading(true)
  dataApi.saveInfoUser(formData.inputName, formData.inputProf).then(data => {
    userInfo.setUserInfo(data.name, data.about)
    popupWithFormEdit.close()
  }).catch((err) => {
    console.log(`Данные пользователя не сохранены (код ошибки): ${err}`)
    popupWithFormEdit.renderLoading(false)
      .finally(() => {
        popupWithFormEdit.renderLoading(false)
      })
  })
}

const userInfo = new UserInfo({ nameSelector: '.profile__autor', profSelector: '.profile__text', avatarSelector: '.profile__img', })

//PopupWithConfirmation//
const popupConfirmation = new PopupWithConfirmation('.popup-delet', deleteCard)
popupConfirmation.setEventListener()

//Function handlerRemoveCards
function handlerRomoveCards(id, elementCard) {
  popupConfirmation.open()
  popupConfirmation.fixCardInfo(id, elementCard)
}

function deleteCard(data, elementCard) {
  dataApi.deleteCard(data).then(() => {
    popupConfirmation.close()
    elementCard.remove()
  }).catch((err) => {
    console.log(`Карточка не удалена (код ошибки): ${err}`)
  })
}

//popupWithFormEdit avatar api//
const popupWithFormAvatar = new PopupWithForm('.popup-avatar', handleFormSubmitAvatar)
popupWithFormAvatar.setEventListener()

function handleFormSubmitAvatar(formData) {
  popupWithFormAvatar.renderLoading(true)
  dataApi.updateAvatar(formData.inputAvatar).then((data) => {
    avatar.src = data.avatar
    popupWithFormAvatar.close()
  }).catch((err) => {
    console.log(`Аватар не поменялся (код ошибки): ${err}`)
      .finally(() => {
        popupWithFormAvatar.renderLoading(false)
      })
  })
}

// edit
profileBtnEdit.addEventListener('click', function openPopupProfile() {
  popupWithFormEdit.renderLoading(false)
  profileEditFormValidator.resetValidationErrors()
  profileEditFormValidator.disableButton()
  popupWithFormEdit.open()
  const getUserInfo = userInfo.getUserInfo()
  inputAutor.value = getUserInfo.userName
  inputProf.value = getUserInfo.userDescription
})

//plus
addCardButton.addEventListener('click', function openPopupProfile() {
  popupAddCard.renderLoading(false)
  addCardFormValidator.resetValidationErrors()
  addCardFormValidator.disableButton()
  popupAddCard.open()

})

// edit avatar 
avatarConteiner.addEventListener('click', () => {
  popupWithFormAvatar.renderLoading(false)
  avatarFormValidator.disableButton()
  popupWithFormAvatar.open()
})

//popupWithImage
const popupWithImage = new PopupWithImage('.popup-photo')
popupWithImage.setEventListener()

function handleCardClick(name, link) {
  popupWithImage.open(name, link)
}



