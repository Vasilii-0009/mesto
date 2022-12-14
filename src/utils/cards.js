const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoImg = document.querySelector('.popup-photo__img');
const popupPhotoText = document.querySelector('.popup-photo__text');

const popupText = document.querySelector('.popup-add__input_value_autor');
const popupImg = document.querySelector('.popup-add__input_value_prof');

const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  number: 6,

}
  ,
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  number: 2,
}
  ,
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  number: 1,
}
  ,
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  number: 3,
}
  ,
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  number: 4,
}
  ,
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  number: 5,
}];

export { popupImg, popupPhoto, popupPhotoImg, popupPhotoText, initialCards }