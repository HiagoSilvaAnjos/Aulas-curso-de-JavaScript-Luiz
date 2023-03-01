document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    let divFather = createDiv();
    
    elementsTags.forEach((tagElement) => {

       let tag = createTag(tagElement.tag, tagElement.valueTag);
       divFather.appendChild(tag);

    });

    container.appendChild(divFather);
})

const elementsTags = [
    {tag: 'p', valueTag: 'Frase 01'},
    {tag: 'div', valueTag: 'Frase 02'},
    {tag: 'footer', valueTag: 'Frase 03'},
    {tag: 'section', valueTag: 'Frase 04'},
];

const createTag = (tag, text) => {
    const element = document.createElement(tag);
    element.innerHTML = text;
    return element;
}

const createDiv = () => {
    const div = document.createElement('div');
    return div;
};