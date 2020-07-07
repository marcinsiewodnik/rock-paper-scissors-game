class Statistics {

    constructor() {

        this.gameResult = [];
    }

    addGameToStatistics(user, ai, result) {

        const objToSave = { user, ai, result }

        this.gameResult.push(objToSave);
    }

    showGameStatistics() {

        const total = this.gameResult.length;

        const won = this.gameResult.filter(game => game.result === "won").length;
        const lost = this.gameResult.filter(game => game.result === "lost").length;
        const drawed = this.gameResult.filter(game => game.result === "drawed").length;

        return { total, won, lost, drawed }
    }
}