import { ERROR_MESSAGES } from '../constants/ERROR_MESSAGES';

export default class Store {
    constructor() {
        this.getSavedNews = this.getSavedNews.bind(this);
    }

    save(newsTitle, newsList) {
        this._saveNewsTitle(newsTitle)
        this._saveAllNews(newsList)
        this._saveNewsCount(newsList)
    }

    getLength() {
        return localStorage.length;
    }

    getSavedNews() {

        const savedNews = JSON.parse(localStorage.getItem('newsList'));
        if (savedNews !== null || savedNews !== undefined || savedNews !== '') {
            return savedNews;
        }
        throw new Error(`${ERROR_MESSAGES.devErroros.noData}`);
    }

    getSavedTitle() {
        const title = localStorage.getItem('title');
        if (title !== null || title !== undefined || title !== '') {
            return title;
        }
        throw new Error(`${ERROR_MESSAGES.devErroros.noData}`);
    }

    getSavedNewsCount() {
        const newsCount = JSON.parse(localStorage.getItem('newsCount'));
        if (newsCount !== '' && Number.isInteger(newsCount)) {
            return newsCount
        }
        throw new Error(`${ERROR_MESSAGES.devErroros.noData}`);
    }

    deletePreviousData() {
        localStorage.clear();
    }

    _saveAllNews(newsList) {
        const propsList = newsList.articles
        localStorage.setItem('newsList', JSON.stringify(propsList))
    }

    _saveNewsTitle(newstitle) {
        localStorage.setItem('title', newstitle);
    }

    _saveNewsCount(newsList) {
        const newsCount = newsList.totalResults
        localStorage.setItem('newsCount', newsCount);
    }
}