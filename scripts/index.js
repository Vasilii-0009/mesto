
const formElement = document.querySelector('.popap__form');
const profileEdit = document.querySelector('.profile__btn-edit');
const popupEdit = document.querySelector('.popap-edit');
const inputAutor = document.querySelector('.popap__input_value_autor');
const inputProf = document.querySelector('.popap__input_value_prof');
const nameInput = document.querySelector('.profile__autor');
const jobInput = document.querySelector('.profile__text');
const pluseAdd = document.querySelector('.profile__add');
const popapPlus = document.querySelector('.popap-plus');

const popapCloseImg = document.querySelector('.popap-photo__btn');
const popapPhot = document.querySelector('.popap-photo');
const popapClosePlus = document.querySelector('.popap-plus__close');
const popapPhotImg = document.querySelector('.popap-photo__img');
const popapPhotText = document.querySelector('.popap-photo__text');
const formPlus = document.querySelector('.popap-plus__form');
const popapText = document.querySelector('.popap-plus__input_value_autor');
const popapImg = document.querySelector('.popap-plus__input_value_prof');
const element = document.querySelector('.elements');
const popapsCloses = document.querySelectorAll('.popap__close');



//общая функция открытия попапов 
function openPopap(popup) {
  popup.classList.add('popup_opened')
}
// edit
profileEdit.addEventListener('click', function openPopupProfile() {
  openPopap(popupEdit)
  inputAutor.value = nameInput.textContent
  inputProf.value = jobInput.textContent
})
//plus
pluseAdd.addEventListener('click', function openPopupProfile() {
  openPopap(popapPlus)
})

// общая функция удаления попапа
const popapClose = document.querySelector('.popap-edit__close');
function closePopap(closePopap) {
  closePopap.classList.remove('popup_opened')
}

//edit
function renameInput(evt) {
  evt.preventDefault();
  nameInput.textContent = inputAutor.value
  jobInput.textContent = inputProf.value
  closePopap(popupEdit)

}
formElement.addEventListener('submit', renameInput)

popapsCloses.forEach((button) => {
  const closeButton = button.closest('.popap')
  closeButton.addEventListener('click', () => closePopap(closeButton))
})
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'

  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



// photoAdd
const templatePhoto = document.querySelector('#elements__element').content;


function creatPhoto(itemImg, itemText) {

  const cloneTemplatePhoto = templatePhoto.querySelector('.elements__element').cloneNode(true)
  cloneTemplatePhoto.querySelector('.elements__title').textContent = itemText
  cloneTemplatePhoto.querySelector('.elements__img').src = itemImg
  cloneTemplatePhoto.querySelector('.elements__img').alt = itemText

  const clickLike = cloneTemplatePhoto.querySelector('.elements__like')
  clickLike.addEventListener('click', () => {
    clickLike.classList.toggle('elements__img-heart')
  })
  const deleteImg = cloneTemplatePhoto.querySelector('.elements__basket')
  deleteImg.addEventListener('click', () => {
    const parentBacket = deleteImg.closest('.elements__element')
    parentBacket.remove()
  })

  const openImg = cloneTemplatePhoto.querySelector('.elements__img')
  openImg.addEventListener('click', () => {
    openPopap(popapPhot)
    popapPhotImg.src = cloneTemplatePhoto.querySelector('.elements__img').src
    popapPhotImg.alt = cloneTemplatePhoto.querySelector('.elements__title').textContent
    popapPhotText.textContent = cloneTemplatePhoto.querySelector('.elements__title').textContent

  })

  return cloneTemplatePhoto

}

formPlus.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const creatPhotoValue = creatPhoto(popapImg.value, popapText.value)
  element.prepend(creatPhotoValue);
  closePopap(popapPlus)
})

initialCards.forEach((initialCardsItemx) => {
  const createCaritem = creatPhoto(initialCardsItemx.link, initialCardsItemx.name)
  element.append(createCaritem);

})



