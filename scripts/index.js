
const formElement = document.querySelector('.popap__form');

const openPopape = document.querySelector('.popap')
// sconst openPopapes = document.querySelector('.popap')
// функиция открытие попапа edit
const profileEdit = document.querySelector('.profile__btn-edit');
const popupOpened = document.querySelector('.popap-edit');
//переменые для инпутов 
const inputAutor = document.querySelector('.popap__input_value_autor');
const inputProf = document.querySelector('.popap__input_value_prof');
const nameInput = document.querySelector('.profile__autor');
const jobInput = document.querySelector('.profile__text');

//общая функция для попапов 
function openPopap(popup) {
  popup.classList.add('popup_opened')
}

profileEdit.addEventListener('click', function openPopupProfile() {
  openPopap(popupOpened)
  inputAutor.value = nameInput.textContent
  inputProf.value = jobInput.textContent
})

// общая функция удаления попапа
const popapClose = document.querySelector('.popap-edit__close');
function closePopap(closePopap) {
  closePopap.classList.remove('popup_opened')
}
//удаление попапа edit

// popapClose.forEach((popapCloses) => {
//   popapCloses.addEventListener('click', function closePopaps() {
//     closePopap(popupOpened)
//   })
// })

// openPopape.forEach((openPopaps) => {
//   openPopaps.addEventListener('click', function openPopapsd() {
//     openPopaps.classList('popup_opened')
//   })
// })
popapClose.addEventListener('click', function closePopapProfile() {
  closePopap(popupOpened)

})

function renameInput(evt) {
  evt.preventDefault();

  // let inputAutor = document.querySelector('.popap__input_value_autor')
  // let inputProf = document.querySelector('.popap__input_value_prof')
  // let nameInput = document.querySelector('.profile__autor')
  // let jobInput = document.querySelector('.profile__text')

  nameInput.textContent = inputAutor.value
  jobInput.textContent = inputProf.value
  popupOpened.classList.remove('popup_opened')
}


formElement.addEventListener('submit', renameInput)



//  открытие попапа  plus
const pluseAdd = document.querySelector('.profile__add');
const popapPlus = document.querySelector('.popap-plus')

pluseAdd.addEventListener('click', function openPopupProfile() {
  openPopap(popapPlus)
})

// удаление попапа plus
const popapClosePlus = document.querySelector('.popap-plus__close')
popapClosePlus.addEventListener('click', function closePopapProfile() {
  closePopap(popapPlus)

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

const template = document.querySelector('#elements__element').content;
const element = document.querySelector('.elements')


// const contentTemplate = template.querySelector('.elements__element').cloneNode(true)

initialCards.forEach((initialCardsItemx) => {

  const contentTemplate = template.querySelector('.elements__element').cloneNode(true)

  contentTemplate.querySelector('.elements__title').textContent = initialCardsItemx.name
  contentTemplate.querySelector('.elements__img').src = initialCardsItemx.link

  element.append(contentTemplate);

  // popapPhoto
  const templateImage = contentTemplate.querySelector('.elements__img');
  const popatPhtoOpen = document.querySelector('.popap-photo')
  const popapPhotClose = document.querySelector('.popap-photo__btn')

  templateImage.addEventListener('click', function openPopupProfile() {
    openPopap(popatPhtoOpen)
    const popapImg = document.querySelector('.popap-photo__img')
    const poapText = document.querySelector('.popap-photo__text')
    poapText.textContent = initialCardsItemx.name
    popapImg.src = initialCardsItemx.link



  })


  // like
  const likes = contentTemplate.querySelector('.elements__like')

  likes.addEventListener('click', () => {
    likes.classList.toggle('elements__img-heart')
  })

  // delete
  const btnBacket = contentTemplate.querySelector('.elements__basket')

  btnBacket.addEventListener('click', () => {
    const parentBacket = btnBacket.closest('.elements__element')
    parentBacket.remove()
  })

})

// удаление попапа popapImg
const popapCloseImg = document.querySelector('.popap-photo__btn')
const popapPhot = document.querySelector('.popap-photo')
popapCloseImg.addEventListener('click', function closePopapProfile() {
  closePopap(popapPhot)

})


// photoAdd
const formPlus = document.querySelector('.popap-plus__form')
const popapText = document.querySelector('.popap-plus__input_value_autor')
const popapImg = document.querySelector('.popap-plus__input_value_prof')
const templatePhoto = document.querySelector('#elements__element').content;

formPlus.addEventListener('submit', function (evt) {
  evt.preventDefault()
  const cloneTemplatePhoto = templatePhoto.querySelector('.elements__element').cloneNode(true)
  cloneTemplatePhoto.querySelector('.elements__title').textContent = popapText.value
  cloneTemplatePhoto.querySelector('.elements__img').src = popapImg.value

  element.prepend(cloneTemplatePhoto);
  // closepopa
  // popapPllusOpened.classList.remove('popap-plus_opened')
  popapPlus.classList.remove('popup_opened')


  // likeAdd
  const likeAdd = cloneTemplatePhoto.querySelector('.elements__like')
  likeAdd.addEventListener('click', () => {
    likeAdd.classList.toggle('elements__img-heart')
  })


});






