const popupFormEdit = document.querySelector('.popup__form-edit');
const profileBtnEdit = document.querySelector('.profile__btn-edit');
const popupEdit = document.querySelector('.popup-edit');
const inputAutor = document.querySelector('.popup__input_value_autor');
const inputProf = document.querySelector('.popup__input_value_prof');
const nameInput = document.querySelector('.profile__autor');
const jobInput = document.querySelector('.profile__text');
const paddCardButton = document.querySelector('.profile__add');
const popupPlus = document.querySelector('.popup-add');

const popupCloseImg = document.querySelector('.popup-photo__btn');
const popupPhoto = document.querySelector('.popup-photo');
const popupCloseAddBtn = document.querySelector('.popup-add__close');
const popupPhotoImg = document.querySelector('.popup-photo__img');
const popupPhotoText = document.querySelector('.popup-photo__text');
const formPlus = document.querySelector('.popup-add__form');
const popupText = document.querySelector('.popup-add__input_value_autor');
const popupImg = document.querySelector('.popup-add__input_value_prof');
const element = document.querySelector('.elements');
const closePopupButtons = document.querySelectorAll('.popup__close-too');
const popups = document.querySelectorAll('.popup');
const popup = document.querySelector('.popup__close')
const popupContainers = document.querySelectorAll('.popup-container')
const popupButtons = document.querySelector('.popup-add__btn')

closePopupButtons.forEach((popupItem) => {
  const popup = popupItem.closest('.popup')
  popupItem.addEventListener('click', () => closepopup(popup))
})




popupContainers.forEach((popupContainerItem) => {
  popupContainerItem.addEventListener('click', (evt) => {
    evt.stopPropagation()
  })
}

) //общая функция открытия попапов 

function openpopup(popup) {
  popup.classList.add('popup_opened')
}

// edit
profileBtnEdit.addEventListener('click', function openPopupProfile() {
  openpopup(popupEdit)
  inputAutor.value = nameInput.textContent
  inputProf.value = jobInput.textContent
}

) //plus

paddCardButton.addEventListener('click', function openPopupProfile() {
  openpopup(popupPlus)
}

) //  функция удаления попапа
// const popupClose = document.querySelector('.popup-edit__close');

function closepopup(closepopup) {
  closepopup.classList.remove('popup_opened')
}

//edit
function submitProfileEditForm(evt) {
  evt.preventDefault();
  nameInput.textContent = inputAutor.value
  jobInput.textContent = inputProf.value
  closepopup(popupEdit)
}

popupFormEdit.addEventListener('submit', submitProfileEditForm)

// closePopupButtons.forEach((button) => {
//   const popup = button.closest('.popup')
//   button.addEventListener('click', () => closepopup(popup))
// })

function activItem(pop) {
  pop.forEach((popItem) => {
    if (popItem.classList.contains('popup_opened')) {
      popItem.classList.remove('popup_opened')

    }
  })

}
document.addEventListener('keydown', (evt) => {

  if (evt.key === 'Escape') {
    activItem(popups)
  }

})



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


function creatPhoto(itemCard, itemText) {

  const newTemplateCard = templatePhoto.querySelector('.elements__element').cloneNode(true)
  newTemplateCard.querySelector('.elements__title').textContent = itemText
  newTemplateCard.querySelector('.elements__img').src = itemCard
  newTemplateCard.querySelector('.elements__img').alt = itemText
  const buttonLike = newTemplateCard.querySelector('.elements__like')
  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('elements__img-heart')
  }

  )
  const deleteBtn = newTemplateCard.querySelector('.elements__basket')
  deleteBtn.addEventListener('click', () => {
    deleteBtn.closest('.elements__element').remove()
  }

  )
  const openImg = newTemplateCard.querySelector('.elements__img')
  openImg.addEventListener('click', () => {
    openpopup(popupPhoto)
    popupPhotoImg.src = newTemplateCard.querySelector('.elements__img').src
    popupPhotoImg.alt = newTemplateCard.querySelector('.elements__title').textContent
    popupPhotoText.textContent = newTemplateCard.querySelector('.elements__title').textContent
  }

  )
  return newTemplateCard
}

formPlus.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const newCard = creatPhoto(popupImg.value, popupText.value)
  element.prepend(newCard);
  creatPhoto(popupImg.value = "", popupText.value = "")
  popupButtons.setAttribute('disabled', true)
  popupButtons.classList.add('popup__button_disabled');
  closepopup(popupPlus)
}

)
initialCards.forEach((initialCardsItemx) => {
  const newCard = creatPhoto(initialCardsItemx.link, initialCardsItemx.name)
  element.append(newCard);

}

)
enableValidation(config)