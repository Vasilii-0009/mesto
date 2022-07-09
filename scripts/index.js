const profileEdit = document.querySelector('.profile__btn-edit');

const popupOpened = document.querySelector('.popap');
const popapClose = document.querySelector('.popap__close');


const inputAutor = document.querySelector('.popap__input_value_autor');
const inputProf = document.querySelector('.popap__input_value_prof');

const nameInput = document.querySelector('.profile__autor');
const jobInput = document.querySelector('.profile__text');


const formElement = document.querySelector('.popap__form');


profileEdit.addEventListener('click', function () {
  popupOpened.classList.add('popup_opened')
  // let inputAutor = document.querySelector('.popap__input_value_autor')
  // let inputProf = document.querySelector('.popap__input_value_prof')
  // let nameInput = document.querySelector('.profile__autor');
  // let jobInput = document.querySelector('.profile__text');

  inputAutor.value = nameInput.textContent
  inputProf.value = jobInput.textContent

})

popapClose.addEventListener('click', function () {
  popupOpened.classList.remove('popup_opened')

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




// plus
const pluseAdd = document.querySelector('.profile__add');
const plusClose = document.querySelector('.popap-plus__close')
const popapPllusOpened = document.querySelector('.popap-plus')

pluseAdd.addEventListener('click', () => {
  popapPllusOpened.classList.add('popap-plus_opened')
})

plusClose.addEventListener('click', () => {
  popapPllusOpened.classList.remove('popap-plus_opened')
})

// template.add

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

  element.append(contentTemplate)

  // popapPhoto
  const templateImage = contentTemplate.querySelector('.elements__img');
  const popatPhtoOpen = document.querySelector('.popap-photo')
  const popapPhotClose = document.querySelector('.popap-photo__btn')

  templateImage.addEventListener('click', function () {

    popatPhtoOpen.classList.add('popap-photo_open')
    const popapImg = document.querySelector('.popap-phot__img')
    const poapText = document.querySelector('.popap-photo__text')
    popapImg.src = initialCardsItemx.link
    poapText.textContent = initialCardsItemx.name
  })

  popapPhotClose.addEventListener('click', function () {
    popatPhtoOpen.classList.remove('popap-photo_open')
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

// renameElemnt
const formPlus = document.querySelector('.popap-plus__form')
function formPopapPlus(evt) {
  evt.preventDefault()

  const inputPlusText = document.querySelector('.popap-plus__input_value_autor')
  const inputPlusImg = document.querySelector('.popap-plus__input_value_prof')

  const templateText = document.querySelector('.elements__title').textContent = inputPlusText.value
  const templateImg = document.querySelector('.elements__img').src = inputPlusImg.value

  popapPllusOpened.classList.remove('popap-plus_opened')

}

formPlus.addEventListener('submit', formPopapPlus);



