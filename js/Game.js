class Game {

    constructor() {

        // Dane dotyczące aktualnej gry

        this.state = {

            ai: "",
            user: "",
            result: "",
        }

        this.statistics = new Statistics();

        // Left panel 

        this.yourChoice = document.querySelector("[data-summary='your-choice']");
        this.aiChoice = document.querySelector("[data-summary='ai-choice']");
        this.result = document.querySelector("[data-summary='result']");

        // Right panel

        this.totalNumber = document.querySelector("[data-summary='total-number']");
        this.wonNumber = document.querySelector("[data-summary='won-number']");
        this.lostNumber = document.querySelector("[data-summary='lost-number']");
        this.drawsNumber = document.querySelector("[data-summary='draws-number']");

        // button -> play

        this.buttonPlay = document.querySelector(".play")

        // renderowanie po wejściu na stronę 

        this.render();

        // Umieszczenie funkcjonalności 

        this.buttonPlay.addEventListener('click', this.handleStart.bind(this));

        // Options 

        this.options = document.querySelectorAll('[data-option]');

        this.options.forEach(option => option.addEventListener('click', this.handleSelect.bind(this)))
    }

    render() {

        this.yourChoice.textContent = this.state.user;
        this.aiChoice.textContent = this.state.ai;
        this.result.textContent = this.state.result;

        const statisticsData = this.statistics.showGameStatistics();

        this.totalNumber.textContent = statisticsData.total;
        this.wonNumber.textContent = statisticsData.won;
        this.lostNumber.textContent = statisticsData.lost;
        this.drawsNumber.textContent = statisticsData.drawed;

    }

    handleSelect(e) {

        this.options.forEach(option => {

            option.classList.remove("active");
        })

        const clicked = e.target;

        this.state.user = clicked.dataset.option;

        clicked.classList.add("active");
    }

    handleStart() {

        const userChoice = this.state.user;

        if (userChoice === "") return alert("Value is empty!");

        const aiChoice = new Draw().getDrawResult();
        const result = new Result(userChoice, aiChoice).getResullt();

        this.state.ai = aiChoice;
        this.state.result = result;

        this.statistics.addGameToStatistics(userChoice, aiChoice, result);

        this.render();

        this.state.user = "";
        this.state.ai = "";
        this.state.result = "";

        this.options.forEach(option => {

            option.classList.remove("active");
        })

    }
}