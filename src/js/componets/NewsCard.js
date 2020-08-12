import { TRANSLATED_WORDS } from '../constants/TRANSLATED_WORDS';
export default class NewsCard {


    renderCard(newsObj) {

        return this._fillTemplate(newsObj);
    }

    _fillTemplate(newsObj) {

        const cardTemplate = document.querySelector('.search__result-cards')
        cardTemplate.insertAdjacentHTML('afterend',
            `<a href="${newsObj.url}" class="search-result__card">
            <img src="${newsObj.urlToImage}" alt="news-image" class="search-result__image">
            <span class="search-result__date">${newsObj.publishedAt}</span>
            <h3 class="search-result__card-title">${newsObj.title}</h3>
            <p class="search-result__text">${newsObj.source.name}</p>
            <span class="search-result__author">meduza</span>
          </a>
          
        `)
        return cardTemplate;
    }

    _switchDate(puplicationDate) {
        const date = puplicationDate.split('').slice(0, 10).join('').split('-');
        const switchedDate = [];
        date.map(function(item, index) {
            if (index === 0) {
                switchedDate.push(item);
            }
            if (index === 1) {
                switch (item) {
                    case '01':
                        item = `${TRANSLATED_WORDS.months.jan},`;
                        switchedDate.unshift(item);
                        break;
                    case '02':
                        item = `${TRANSLATED_WORDS.months.feb},`;
                        switchedDate.unshift(item);
                        break;
                    case '03':
                        item = `${TRANSLATED_WORDS.months.mar},`;
                        switchedDate.unshift(item);
                        break;
                    case '04':
                        item = `${TRANSLATED_WORDS.months.apr},`;
                        switchedDate.unshift(item);
                        break;
                    case '05':
                        item = `${TRANSLATED_WORDS.months.may},`;
                        switchedDate.unshift(item);
                        break;
                    case '06':
                        item = `${TRANSLATED_WORDS.months.jun},`;
                        switchedDate.unshift(item);
                        break;
                    case '07':
                        item = `${TRANSLATED_WORDS.months.jul},`;
                        switchedDate.unshift(item);
                        break;
                    case '08':
                        item = `${TRANSLATED_WORDS.months.aug},`;
                        switchedDate.unshift(item);
                        break;
                    case '09':
                        item = `${TRANSLATED_WORDS.months.sep},`;
                        switchedDate.unshift(item);
                        break;
                    case '10':
                        item = `${TRANSLATED_WORDS.months.oct},`;
                        switchedDate.unshift(item);
                        break;
                    case '11':
                        item = `${TRANSLATED_WORDS.months.nov},`;
                        switchedDate.unshift(item);
                        break;
                    case '12':
                        item = `${TRANSLATED_WORDS.months.dec},`;
                        switchedDate.unshift(item);
                        break;
                }
            }
            if (index === 2) {
                if (item[0] === '0') {
                    const day = item.split('').pop();
                    switchedDate.unshift(day)
                } else {
                    switchedDate.unshift(item);
                }
            }
        })
        return switchedDate.join(' ');
    }
}