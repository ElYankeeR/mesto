const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
const popupCloseButton = popup.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let popupAreaName = popup.querySelector('.popup__area_name');
let popupAreaProfession = popup.querySelector('.popup__area_profession');

function popupIsOpened() {
  popup.classList.add('popup_opened');
  popupAreaName.value = profileTitle.textContent;
  popupAreaProfession.value = profileSubtitle.textContent;
}

function popupIsClosed() {
  popup.classList.remove('popup_opened')
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupAreaName.value;
  profileSubtitle.textContent = popupAreaProfession.value;
  popupIsClosed();
}

profileEditButton.addEventListener('click', popupIsOpened);
popupCloseButton.addEventListener('click', popupIsClosed);
formElement.addEventListener('submit', formSubmitHandler);

