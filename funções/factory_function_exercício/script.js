function createCaculator() {
    return {
        // Atributos
        display: document.querySelector(".display"),

        // Métodos
        startCalculator() {
            this.handleClickedButtons();
            this.pressEnter();
        },

        handleClickedButtons() {
            document.addEventListener("click", event => {
                const elementTarget = event.target;

                if (elementTarget.classList.contains("button-key-num")) {
                    return this.addButtonDisplay(elementTarget.innerText);
                };

                if (elementTarget.classList.contains("button-key-clear")) {
                    return this.display.value = '';
                };

                if (elementTarget.classList.contains("button-key-del")) {
                    return this.display.value = this.display.value.slice(0, -1);
                };

                if (elementTarget.classList.contains("button-key-eq")) {
                    return this.displayResult();
                };
            });
        },

        addButtonDisplay(value) { this.display.value += value; },

        displayResult() {
            let resultOfDisplay = this.display.value;

            try {
                resultOfDisplay = eval(resultOfDisplay);

                if (!resultOfDisplay) {
                    alert("Conta inválida!");
                    return;
                }

                this.display.value = resultOfDisplay;

            } catch (err) {
                alert("Conta inválida!!");
                return;
            }

        },

        pressEnter() {
            this.display.addEventListener('keyup', (event) => {
                if (event.keyCode === 13) {
                    return this.displayResult();
                }
            })
        }
    }
};

const calculator = createCaculator();
calculator.startCalculator();