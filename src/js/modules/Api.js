export class Api {
    constructor(key, prvDate, endDate) {
        this._key = key,
            this._prvDate = prvDate,
            this._endDate = endDate
    }


    _newsUrl(newsAsk) {
        return `https://newsapi.org/v2/everything?q=${newsAsk}&from=${this._prvDate}&to=${this._endDate}&sortBy=publishedAt&pageSize=100&language=ru`;
    }

    getResponseJson(data) {
        if (data.ok) {
            return data.json();
        }
        Promise.reject(data.status);
    }

    async getNews(newsAsk) {
        const url = this._newsUrl(newsAsk);
        try {
            const result = await fetch(url, {
                method: 'GET',
                headers: {
                    authorization: this._key
                },
            })
            return this.getResponseJson(result)
        } catch (err) {
            throw new Error(err);
        }
    }
}