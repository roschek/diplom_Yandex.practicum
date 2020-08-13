// класс списка карточек коммитов

export default class CommitCardList {
    constructor(domElem, commitCard, gitHubApi) {
        this.domElem = domElem;
        this.commitCard = commitCard;
        this.gitHubApi = gitHubApi;
        this._renderCardList = this._renderCardList.bind(this);
    }

    async render() {
        try {
            const commits = await this.gitHubApi.getCommits();
            this._renderCardList(commits);
        } catch (error) {
            throw new Error(error);
        }
    }

    _renderCardList(commitsArr) {
        commitsArr.forEach((card, index) => {
            if (index <= 20) {
                const renderedCard = this.commitCard.renderCard(card);
                this.domElem.append(renderedCard);
            }
        });
    }
}