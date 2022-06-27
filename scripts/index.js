let popupOpened = document.querySelector('.popap');
let profileEdit = document.querySelector('.profile__btn-edit');
let popapClose = document.querySelector('.popap__close');

let inputAutor = document.querySelector('.popap__input_value_autor');
let inputProf = document.querySelector('.popap__input_value_prof');



let formElement = document.querySelector('.popap__form');
let nameInput = document.querySelector('.profile__autor');
let jobInput = document.querySelector('.profile__text');


profileEdit.addEventListener('click', function () {
  popupOpened.classList.add('popup_opened')

  let inputAutor = document.querySelector('.popap__input_value_autor')
  let inputProf = document.querySelector('.popap__input_value_prof')
  let nameInput = document.querySelector('.profile__autor');
  let jobInput = document.querySelector('.profile__text');

  inputAutor.value = nameInput.textContent
  inputProf.value = jobInput.textContent

})

popapClose.addEventListener('click', function () {
  popupOpened.classList.remove('popup_opened')

})


function renameInput(evt) {
  evt.preventDefault();

  let inputAutor = document.querySelector('.popap__input_value_autor')
  let inputProf = document.querySelector('.popap__input_value_prof')
  let nameInput = document.querySelector('.profile__autor')
  let jobInput = document.querySelector('.profile__text')

  nameInput.textContent = inputAutor.value
  jobInput.textContent = inputProf.value
  popupOpened.classList.remove('popup_opened')


}

formElement.addEventListener('submit', renameInput);


