export class Card {
    constructor(title, link, id, date, text, author, img) {
        this.title = title;
        this.link = link;
        this.date = date;
        this.id = id;
        this.text = text;
        this.author = author;
        this.img = img;
    }



    _createNewCard() {

        const cardContainer = `<a href=${this.link} class="search-result__card">
            <img src="<%=require(${this.img}).default%>" alt="news-image" class="search-result__image">
            <span class="search-result__date">${this.date}</span>
            <h3 class="search-result__card-title">${this.title}</h3>
            <p class="search-result__text">${this.text}</p>
            <span class="search-result__author">${this.author}</span>
          </a>`

        return cardContainer;



    }
}