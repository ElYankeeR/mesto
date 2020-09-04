const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
const popupCloseButton = popup.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let popupAreaName = popup.querySelector('.popup__area_name');
let popupAreaProfession = popup.querySelector('.popup__area_profession');

const popupToggle = function() {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupAreaName.value;
  profileSubtitle.textContent = popupAreaProfession.value;
  popupToggle();
}

profileEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);
