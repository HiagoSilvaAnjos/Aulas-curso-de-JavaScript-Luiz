// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => loadElementsPage(json))
//     .catch(err => console.error(err));

axios('pessoas.json')
    .then(response => loadElementsPage(response.data))
    .catch(err => console.log("Not Found"));

function loadElementsPage(dateJson) {
    dateJson.filter(date => createDivDatesElements(date.nome, date.email, date.cpf));
}

function createDivDatesElements(name, email, cpf) {
    const resultDate = document.querySelector('.result');
    const div = document.createElement('div');
    div.innerHTML += `<br>`;
    div.innerHTML += `<p>${name}</p>`;
    div.innerHTML += `<p>${email}</p>`;
    div.innerHTML += `<p>${cpf}</p>`;

    resultDate.appendChild(div);
}