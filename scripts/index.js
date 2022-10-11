import { Card } from './card.js'
import { FormValidator } from './formValidator.js'
import { initialCards } from './cards.js'

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



popups.forEach((popupItem) => {
  popupItem.addEventListener('click', (evt) => {
    if (evt.target === popupItem || evt.target === popupItem.querySelector('.popup__close')) {
      closePopup(popupItem)
    }
  })
})

//общая функция открытия попапов и удаление по esc

function closePopupEsc(evt) {

  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup)

  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc)
}



// edit
profileBtnEdit.addEventListener('click', function openPopupProfile() {

  profileEditFormValidator.resetValidationErrors()
  profileEditFormValidator.disableButton()
  openPopup(popupEdit)

  inputAutor.value = nameInput.textContent
  inputProf.value = jobInput.textContent
}

)
//plus
addCardButton.addEventListener('click', function openPopupProfile() {
  addCardFormValidator.resetValidationErrors()
  addCardFormValidator.disableButton()
  openPopup(popupPlus)
}

)

//  функция удаления попапа
function closePopup(closePopup) {
  closePopup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupEsc)

}

//edit
function submitProfileEditForm(evt) {
  evt.preventDefault();
  nameInput.textContent = inputAutor.value
  jobInput.textContent = inputProf.value
  closePopup(popupEdit)

}

popupFormEdit.addEventListener('submit', submitProfileEditForm)





// photoAdd

// const templatePhoto = document.querySelector('#elements__element').content;


// function createPhoto(itemCard, itemText) {

//   const newTemplateCard = templatePhoto.querySelector('.elements__element').cloneNode(true)
//   newTemplateCard.querySelector('.elements__title').textContent = itemText
//   newTemplateCard.querySelector('.elements__img').src = itemCard
//   newTemplateCard.querySelector('.elements__img').alt = itemText
//   const buttonLike = newTemplateCard.querySelector('.elements__like')
//   buttonLike.addEventListener('click', () => {
//     buttonLike.classList.toggle('elements__img-heart')
//   })


//   const deleteBtn = newTemplateCard.querySelector('.elements__basket')
//   deleteBtn.addEventListener('click', () => {
//     deleteBtn.closest('.elements__element').remove()
//   })
//   const openImg = newTemplateCard.querySelector('.elements__img')
//   openImg.addEventListener('click', () => {
//     openPopup(popupPhoto)
//     popupPhotoImg.src = newTemplateCard.querySelector('.elements__img').src
//     popupPhotoImg.alt = newTemplateCard.querySelector('.elements__title').textContent
//     popupPhotoText.textContent = newTemplateCard.querySelector('.elements__title').textContent
//   })

//   return newTemplateCard
// }

formPlus.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const newCard = {
    name: popupText.value,
    link: popupImg.value,
  }

  console.log(newCard.name)
  const card = creatCard(newCard)

  elements.prepend(card)


  // addCardFormValidator.resetValidationErrors()
  //addCardFormValidator.disableButton()
  closePopup(popupPlus)
  formPlus.reset()
})




function handleOpenPopup(name, link) {
  openPopup(popupPhoto)
  popupPhotoImg.src = link,
    popupPhotoImg.alt = name,
    popupPhotoText.textContent = name

}
function creatCard(data) {
  const form = new Card(data, '#elements__element', handleOpenPopup)
  return form.generateCard()
}
initialCards.forEach((initialCardsItem) => {

  elements.append(creatCard(initialCardsItem))
})