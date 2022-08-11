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


popups.forEach((popupItem) => {
  popupItem.addEventListener('click', (evt) => {
    if (evt.target === popupItem || evt.target === popupItem.querySelector('.popup__close')) {
      closePopup(popupItem)
    }
  })
})

//общая функция открытия попапов и удаление по esc

function closePopupEsc(evt,) {
  const openPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openPopup)

  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc)
}



// edit
profileBtnEdit.addEventListener('click', function openPopupProfile() {
  openPopup(popupEdit)
  inputAutor.value = nameInput.textContent
  inputProf.value = jobInput.textContent
}

)
//plus
addCardButton.addEventListener('click', function openPopupProfile() {
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


const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'

}

  ,
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}

  ,
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}

  ,
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}

  ,
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}

  ,
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}

];


// photoAdd
const templatePhoto = document.querySelector('#elements__element').content;


function createPhoto(itemCard, itemText) {

  const newTemplateCard = templatePhoto.querySelector('.elements__element').cloneNode(true)
  newTemplateCard.querySelector('.elements__title').textContent = itemText
  newTemplateCard.querySelector('.elements__img').src = itemCard
  newTemplateCard.querySelector('.elements__img').alt = itemText
  const buttonLike = newTemplateCard.querySelector('.elements__like')
  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('elements__img-heart')
  })


  const deleteBtn = newTemplateCard.querySelector('.elements__basket')
  deleteBtn.addEventListener('click', () => {
    deleteBtn.closest('.elements__element').remove()
  })
  const openImg = newTemplateCard.querySelector('.elements__img')
  openImg.addEventListener('click', () => {
    openPopup(popupPhoto)
    popupPhotoImg.src = newTemplateCard.querySelector('.elements__img').src
    popupPhotoImg.alt = newTemplateCard.querySelector('.elements__title').textContent
    popupPhotoText.textContent = newTemplateCard.querySelector('.elements__title').textContent
  })

  return newTemplateCard
}

formPlus.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const newCard = createPhoto(popupImg.value, popupText.value)
  elements.prepend(newCard);
  createPhoto(popupImg.value = "", popupText.value = "")
  popupButtons.setAttribute('disabled', true)
  popupButtons.classList.add('popup__button_disabled');
  closePopup(popupPlus)
})

initialCards.forEach((initialCardsItemx) => {
  const newCard = createPhoto(initialCardsItemx.link, initialCardsItemx.name)
  elements.append(newCard);

})

enableValidation(config)
