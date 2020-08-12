import "./vendor/normalize.css";
import "./style.css";
import SearchNews from './js/componets/SearchNews';
import NewsCardList from './js/componets/NewsCardList';
import NewsCard from './js/componets/NewsCard';

import NewsApi from './js/modules/NewsApi';
import Store from './js/modules/Store';
import FormValid from './js/modules/FormValid';

import { NEWS_API_KEY } from './js/constants/NEWS_API_KEY';
import { getCurrentDate } from './js/utils/getCurrentDate';
import { getPreviosDate } from './js/utils/getPreviosDate';


const form = document.forms.news;

const store = new Store();
const newsApi = new NewsApi(NEWS_API_KEY, getPreviosDate(7), getCurrentDate());
const newsCard = new NewsCard();
const formValid = new FormValid(form);


const newsCardList = new NewsCardList(document.querySelector('.search__result-cards'), store, newsCard);
const searchNews = new SearchNews(form, newsCardList, formValid, newsApi, store);

searchNews.addEventListener('submit', searchNews.renderNewsCard);
newsCardList.addEventListener('click', newsCardList.showMoreCards);