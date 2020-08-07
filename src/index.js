import "./vendor/normalize.css";
import "./style.css";
import { FormVlaidate } from './js/modules/FormValidate.js';
import { Api } from './js/modules/Api.js';
import { Store } from './js/modules/Store.js';
import { getCurrentDate } from './js/utils/getCurrentDate';
import { getPreviosDate } from './js/utils/getPreviosDate'


const form = document.forms.news;
const errorMessage = 'Заполните это поле,иначе ничего не случится';
const submit = document.querySelector('.form-news__submit');
const input = document.querySelector('#news');
const error = document.querySelector('#news-error');
const preloader = document.querySelector('.preload')

const API_KEY_NEWS = '78f3c52971204c5d92246aefbcaea4f2'
const store = new Store();
const newsApi = new Api(API_KEY_NEWS, getCurrentDate(), getPreviosDate(7));


function takeNews(value) {
    newsApi.getNews(value)
        .then((data) => {
            const news = JSON.stringify(data)
            const newsArr = JSON.parse(news)
            return newsArr
        })
        .then(preloader.classList.add('preload__active'))
        .then((newsArr) => console.log(newsArr))
        .then(preloader.classList.remove('preload__active'))
        .catch(err => { console.log(`Упc, что-то пошло не так, например это ${err}`) })
    form.reset();
}




submit.addEventListener('click', function(evt) {
    evt.preventDefault()
    if (input.validity.valueMissing || input.value.trim().length === 0) {
        error.textContent = errorMessage;
    } else { takeNews(input.value) }
})

input.addEventListener('click', function() {
    error.textContent = '';
})