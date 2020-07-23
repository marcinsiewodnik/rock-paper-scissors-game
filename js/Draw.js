class Draw {

    constructor() {

        this.options = ["paper", "rock", "scissors"];

        // Achieving encapsulation

        let _result = this.draw();

        this.getDrawResult = () => _result;
    }

    draw() {

        const index = Math.floor(Math.random() * this.options.length);

        return this.options[index];
    }

}

