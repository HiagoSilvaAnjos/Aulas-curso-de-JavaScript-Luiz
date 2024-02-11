class Calculator {
    constructor() {
        // Atributos
        this.display = document.querySelector(".display");

        // Métodos
        this.startCalculator = () => {
            handleClickedButtons();
            pressEnter();
        };

        // Funções internas
        const handleClickedButtons = () => {
            document.addEventListener("click", event => {
                const elementTarget = event.target;

                if (elementTarget.classList.contains("button-key-num")) addButtonDisplay(elementTarget.innerText);
                if (elementTarget.classList.contains("button-key-clear")) clearDisplay();

                if (elementTarget.classList.contains("button-key-del")) deleteLastCharacter();

                if (elementTarget.classList.contains("button-key-eq")) displayResult();
            });
        };

        const addButtonDisplay = (value) => this.display.value += value;

        const clearDisplay = () => this.display.value = '';

        const deleteLastCharacter = () => this.display.value = this.display.value.slice(0, -1);

        const displayResult = () => {
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

        };

        const pressEnter = () => {
            this.display.addEventListener('keyup', (event) => {
                if (event.keyCode === 13) return displayResult();
            })
        };

    }
}

const calculatorApp = new Calculator();
calculatorApp.startCalculator();