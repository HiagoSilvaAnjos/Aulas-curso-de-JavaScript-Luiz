function calculate() {
    const input = document.querySelector('.display');
    console.log(input);

    document.addEventListener('click', (event) => {
        const character = event.target.getAttribute('data-character');
        
        if(character !== null) input.value += character;
    });
}

calculate();