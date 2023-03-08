function calculate() {
    const input = document.querySelector('.display');
    const buttonClear = document.querySelector('#buttonClear');
    const buttonDeleteOneValue = document.querySelector('#deleteOneValue');
    const buttonShowResult = document.querySelector('#buttonShowResult');

    document.addEventListener('click', (event) => {

        const character = event.target.getAttribute('data-character');
        if (character !== null) input.value += character;

    });

    function calculateCount(value) {

        let count = value;

        try {
            count = eval(count);

            if (!count) {
                alert('Conta Iválida');
                return;
            }

            input.value = count;
        }
        catch (error) {
            console.log(typeof count)
            alert("Conta Inválida");
            return;
        }

    }

    buttonClear.addEventListener('click', () => input.value = '');
    buttonDeleteOneValue.addEventListener('click', () => input.value = input.value.slice(0, -1));
    buttonShowResult.addEventListener('click', () => calculateCount(input.value));
}

calculate();