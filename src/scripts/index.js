const authorization = document.querySelector('.authorization');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close')

function togglePopup(){
  console.log('click')
  popup.classList.toggle('popup_is-opened')
  
}



authorization.addEventListener('click',togglePopup);
closePopup.addEventListener('click',togglePopup)