const profile = document.querySelector('.profile');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const formElement = document.querySelector('.popup__form');
let popupName = formElement.querySelector('.popup__area_name');
let popupDescription = formElement.querySelector('.popup__area_profession');
let popupCardPlace = document.querySelector('.popup__area_place');
let popupCardLink = document.querySelector('.popup__area_link');
const popupEdit = document.querySelector('#popup-edit');
const closeEdit = document.querySelector('#editClose');
const popupAdd = document.querySelector('#popup-add');
const closeAdd = document.querySelector('#addClose');
const newElement = document.querySelector('#newElem');
const elements = document.querySelector('.elements');
const cardListBox = document.querySelector('#cardElement').content;
const popupPic = document.querySelector('#picture');
const popupPicFull = document.querySelector('.popup__picture_fullscreen');
const popupPicInfo = document.querySelector('.popup__picture_info');
const closePic = document.querySelector('#pictureClose');

const initialCards = [
  {
  name: 'New York',
  link: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
},
{
  name: 'Washington, D.C.',
  link: 'https://images.unsplash.com/photo-1581097543550-b3cbe2e6ea6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
},
{
  name: 'San Francisco',
  link: 'https://images.unsplash.com/photo-1538230637133-83ec5249faa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
},
{
  name: 'Chicago',
  link: 'https://images.unsplash.com/photo-1549533948-77ab8a0d9878?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
},
{
  name: 'Los Angeles',
  link: 'https://images.unsplash.com/photo-1506184106046-1e6e90c0222d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
},
{
  name: 'Alaska',
  link: 'https://images.unsplash.com/photo-1535025287458-e3badca98021?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
}
];

function popupOpenClose(popup) {
  popup.classList.toggle('popup_opened')
}

function textAdd() {
  const textTitle = profileTitle.textContent;
  const textSubtitle = profileSubtitle.textContent;
  popupName.value = `${textTitle}`;
  popupDescription.value = `${textSubtitle}`;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  const addPopupName = popupName.value;
  const addPopupDescription = popupDescription.value;
  profileTitle.textContent = `${addPopupName}`;
  profileSubtitle.textContent = `${addPopupDescription}`;
  popupOpenClose(popupEdit);
}

const openPicture = (event) => {
  popupPicFull.src = event.target.src;
  popupPicInfo.textContent = event.target.alt;
  popupOpenClose(popupPic);
};

const removeCard = function (cardCopy) {
  cardCopy.remove();
};

const like = (evt) => {
  evt.target.classList.toggle('card__like-button_active');
};

function getNewCard(name, picture) {
  const cardCopy = cardListBox.firstElementChild.cloneNode(true);
  const cardPicture = cardCopy.querySelector('.card__picture');
  const cardTitle = cardCopy.querySelector('.card__title');
  const cardLike = cardCopy.querySelector('.card__like-button');
  const cardRemove = cardCopy.querySelector('.card__remove');
  cardPicture.src = picture;
  cardPicture.alt = name;
  cardTitle.textContent = name;
  cardLike.addEventListener('click', like);
  cardPicture.addEventListener('click', openPicture);
  cardRemove.addEventListener('click', () => removeCard(cardCopy), {
    once: true
  });
  return cardCopy;
}

const addCards = function (item) {
  elements.append(getNewCard(item.name, item.link));
};

function newAddForm(evt) {
  evt.preventDefault();
  popupOpenClose(popupAdd);
  elements.prepend(getNewCard(popupCardPlace.value, popupCardLink.value));
  popupCardPlace.value = '';
  popupCardLink.value = '';
};

function editPopup() {
  popupOpenClose(popupEdit);
  textAdd();
}

profileEditButton.addEventListener('click', editPopup);
profileAddButton.addEventListener('click', () => popupOpenClose(popupAdd));
formElement.addEventListener('submit', formSubmitHandler);
initialCards.forEach(addCards);
closeEdit.addEventListener('click', () => popupOpenClose(popupEdit));
newElement.addEventListener('submit', newAddForm);
closeAdd.addEventListener('click', () => popupOpenClose(popupAdd));
closePic.addEventListener('click', () => popupOpenClose(popupPic));

