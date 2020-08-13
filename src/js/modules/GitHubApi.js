export default class GitHubApi {
    constructor(url) {
        this.url = url
    }
    getResponseJson(data) {
        if (data.ok) {
            return data.json();
        }
        return Promise.reject(console.log(data.status))
    }

    async getCommits() {
        try {
            const result = await fetch(this.url, {

                method: 'GET',

            })
            return this.getResponseJson(result);
        } catch (err) {
            throw new Error(err);
        }
    }
}