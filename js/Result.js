class Result {

    constructor(user, ai) {

        this.user = user;
        this.ai = ai;

        let _result = this.checkResult();

        this.getResullt = () => {

            return _result;
        }

        this.getResultData = () => {

            const obj = {

                user: this.user,
                ai: this.ai,
                result: _result,
            }

            return obj;
        }
    }

    checkResult() {

        if (this.user === this.ai) return 'drawed';

        if ((this.user === "paper" && this.ai === "rock") || (this.user === "scissors" && this.ai === "paper") || (this.user === "rock" && this.ai === "scissors")) return "won";

        return 'lost';
    }
}