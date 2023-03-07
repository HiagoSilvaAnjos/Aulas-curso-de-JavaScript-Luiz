document.addEventListener('click', (event) => {
    const character = event.target.getAttribute('data-character');
    console.log(character)
})