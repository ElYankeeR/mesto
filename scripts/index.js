const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const popupAreaName = popup.querySelector('.popup__area_name');
const popupAreaProfession = popup.querySelector('.popup__area_profession');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupToggle = function() {
  popup.classList.toggle('popup_opened');
}

profileEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupAreaName.value;
  profileSubtitle.textContent = popupAreaProfession.value;
  popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);
