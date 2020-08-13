export default class NewsCardList {
    constructor(domElement, container, moreBttn, store, newsCard) {
        this.domElement = domElement;
        this.container = container;
        this.moreBttn = moreBttn;
        this.store = store;
        this.newsCard = newsCard;
        this._counter = 3;
        this.renderList = this.renderList.bind(this);
        this.showMoreCards = this.showMoreCards.bind(this);
    }

    addEventListener(...args) {
        this.moreBttn.addEventListener(...args);
    }

    renderList(isShowMoreBttn) {
        if (isShowMoreBttn) {
            this._counter += 3; //количество карточек при нажатии на кнопку
        } else {
            this._counter = 3; //начальное количество карточек
        }
        this.clearNews();

        this.store.getSavedNews().forEach((elem, index) => {
            if (index < this._counter) {
                this.container.append(this.newsCard.renderCard(elem))
            }
        });

        if (this._counter >= this.store.getSavedNews().length || this.store.getSavedNews().length < 3) {
            this.removeShowMoreBttn()
            this._counter = 3;
        }
        if (this.store.getSavedNews().length < 3) {
            this._counter = 0;
        }

    }
    hideList() {
        this.clearNews();
        this.domElement.classList.remove('result_active');
    }

    clearNews() {
        this.container.children.forEach(elem => {
            if (elem.children.length !== 0) {
                elem.remove()
            }
        })

    }

    removeShowMoreBttn() {
        this.moreBttn.classList.remove('search-result__button-active');
    }

    showMoreCards() {
        this.renderList(true);
    }
}