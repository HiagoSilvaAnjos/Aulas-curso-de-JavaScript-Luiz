document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.querySelector('.paragraphs');
    const ps = paragraph.querySelectorAll('p');
    const styleBody = getComputedStyle(document.body);
    const backgroundColorBody = styleBody.backgroundColor;

    createStyleParagraph(ps, backgroundColorBody);
})

const createStyleParagraph = (ps, backgroundColorBody) => {
    ps.forEach((element) => {
        element.style.backgroundColor = backgroundColorBody;
        element.style.color = 'white';
    })
}