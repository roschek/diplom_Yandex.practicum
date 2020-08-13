export default class NewsApi {
    constructor(key, from, to) {
        this._key = key;
        this._from = from;
        this._to = to;
    }

    _createUrl(keyWord) {
        return `https://newsapi.org/v2/everything?q=${keyWord}&from=${this._from}&to=${this._to}&sortBy=publishedAt&pageSize=100&language=ru`;
    }

    getResponseJson(data) {
        if (data.ok) {
            return data.json();

        }
        Promise.reject(data.status);
    }

    async getNews(keyWord) {
        const url = this._createUrl(keyWord);
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