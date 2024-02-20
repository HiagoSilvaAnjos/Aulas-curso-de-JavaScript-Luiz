// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         // GET
//         xhr.open(obj.method, obj.url, true);
//         // POST
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         })
//     })
// }

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    // Verifica se o elemento clicado é um link (<a>)
    if (tag === 'a') {
        e.preventDefault(); // Impede o comportamento padrão de seguir o link
        loadPage(el); // Chama a função para carregar a página associada ao link
    }
})

// Função assíncrona para carregar a página associada ao link clicado
async function loadPage(el) {
    try {
        const href = el.getAttribute('href'); // Obtém o atributo href do link clicado

        // Realiza uma requisição assíncrona para obter o conteúdo da página vinculada ao link
        const response = await fetch(href);

        // Verifica se o status da resposta não é 200 (OK)
        if (response.status !== 200) throw new Error("Erro de status");

        const html = await response.text(); // Extrai o conteúdo da resposta como texto

        loadResult(html);
    } catch (error) {
        console.error(error);
    }
}

function loadResult(response) {
    const div = document.querySelector('.result');
    div.innerHTML = response;
}
