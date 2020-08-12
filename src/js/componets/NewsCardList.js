export default class NewsCardList {
    constructor(domElement, store, newsCard) {
        this.domElement = domElement;
        this.store = store;
        this.newsCard = newsCard;
        this._counter = 3;
        this.renderList = this.renderList.bind(this);
        this.showMoreCards = this.showMoreCards.bind(this);
    }

    addEventListener(...args) {
        document.querySelector('.search-result__button').addEventListener(...args);
    }

    renderList(isShowMoreBttn) {
        if (isShowMoreBttn) {
            this._counter += 3;
        } else {
            this._counter = 3;
        }
        this.clearNews();

        this.store.getSavedNews().forEach((elem, index) => {
            if (index < this._counter) {
                document.querySelector('.card__wrapper').append(this.newsCard.renderCard(elem))
            }
        });

        if (this._counter >= this.store.getSavedNews().length && this.store.getSavedNews().length > 3) {
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
        this.domElement.children.forEach(elem => {
            if (elem.className === 'search__result-cards') {
                for (let i = elem.children.length - 1; i >= 0; i -= 1) {
                    elem.children[i].remove();
                }
            }
        })
    }

    removeShowMoreBttn() {
        this.showMoreBttn.classList.remove('search-result__button-active');
    }

    showMoreCards() {
        this.renderList(true);
    }
}