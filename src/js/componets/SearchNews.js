export default class SearchInput {
    constructor(domElement, newsCardList, validation, newsApi, store) {
        this.domElement = domElement;
        this.newsCardList = newsCardList;
        this.validation = validation;
        this.newsApi = newsApi;
        this.store = store;
        this.renderNewsCard = this.renderNewsCard.bind(this);
    }

    addEventListener(...args) {
        this.domElement.addEventListener(...args);
    }

    renderNewsCard() {
        event.preventDefault();

        const keyWord = this._getFormValue();
        if (keyWord) {
            this._toggleNotFoundblock(false);
            this.newsCardList.hideList();
            this._togglePreloaderBlock(true);
            this._toggleForm(false);
            this._saveApiData(keyWord);
            document.querySelector('.search-result__button').classList.add('search-result__button-active')
        }
    }

    async _saveApiData(keyWord) {

        try {
            const result = await this.newsApi.getNews(keyWord);
            if (result && result.totalResults !== 0) {
                this.store.save(keyWord, result);

                this.newsCardList.renderList(false);
            } else {
                this._toggleNotFoundblock(true, false);
            }
        } catch (err) {
            console.error(err);
            this._toggleNotFoundblock(true, true);
        } finally {
            this._togglePreloaderBlock(false);
            this._toggleForm(true);
        }
    }

    _getFormValue() {
        this._toggleErrorBlock(false);
        const result = this.validation.sendForm();
        if (!result) {
            this._toggleErrorBlock(true);
        } else {
            this.store.deletePreviousData();
        }
        this._clearInput();
        return result;
    }

    _toggleErrorBlock(isActivated) {
        if (isActivated) {
            document.querySelector('.form-error').classList.add('form-error-active');
        } else {
            document.querySelector('.form-error').classList.remove('form-error-active');
        }
    }

    _togglePreloaderBlock(isActivated) {
        if (isActivated) {
            document.querySelector('.preload').classList.add('preload__active');

        } else {
            document.querySelector('.preload').classList.remove('preload__active');
        }
    }

    _toggleForm(isActivated) {
        if (isActivated) {
            this.domElement.elements.namedItem('submit').disabled = false;
        } else {
            this.domElement.elements.namedItem('submit').disabled = true;
        }
    }

    _toggleNotFoundblock(isActivated, ) {
        if (isActivated) {
            document.querySelector('.error').classList.add('error__active');

        } else {
            document.querySelector('.error').classList.remove('error__active');
        }
    }

    _clearInput() {
        this.domElement.elements.news.value = '';
    }
}