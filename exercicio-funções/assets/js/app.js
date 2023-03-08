function calculate() {
    const input = document.querySelector('.display');
    const buttonClear = document.querySelector('#buttonClear');
    const buttonDeleteOneValue = document.querySelector('#deleteOneValue');
    const buttonShowResult = document.querySelector('#buttonShowResult');


    document.addEventListener('click', (event) => {
        const character = event.target.innerHTML;
        const validateCharacter = event.target.getAttribute('data-character') ? true : false;

        if (validateCharacter) {
            input.classList.remove('dateInvalid');
            return input.value += character
        };
    });

    buttonClear.addEventListener('click', () => input.value = '');
    buttonDeleteOneValue.addEventListener('click', () => input.value = input.value.slice(0, -1));
    buttonShowResult.addEventListener('click', () => {

        let count = input.value;

        try {
            count = eval(count);

            if (!count) {
                alert('Conta Iválida');
                input.classList.add('dateInvalid')
                return input.value = '';
            }

            input.value = count;
        }
        catch (error) {
            console.log(typeof count)
            alert("Conta Inválida");
            input.classList.add('dateInvalid')
            return input.value = '';
        }

    });
}

calculate();