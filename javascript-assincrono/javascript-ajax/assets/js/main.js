// Função para fazer uma requisição HTTP usando XMLHttpRequest e retornar uma Promise
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // Abre a requisição com o método e a URL especificados no objeto 'obj'
        xhr.open(obj.method, obj.url, true);

        // Envia a requisição (no caso de método 'GET', não envia dados adicionais)
        xhr.send();

        // Evento 'load' é disparado quando a requisição é concluída
        xhr.addEventListener('load', () => {
            // Verifica se o status da resposta está na faixa de sucesso (200-299)
            if (xhr.status >= 200 && xhr.status < 300) {
                // Se for bem-sucedida, resolve a Promise com o texto da resposta
                resolve(xhr.responseText);
            } else {
                // Se ocorrer algum erro, rejeita a Promise com o status da resposta
                reject(xhr.statusText);
            }
        })
    })
}

// Evento de clique no documento
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    // Verifica se o elemento clicado é um link (<a>)
    if (tag === 'a') {
        // Impede o comportamento padrão do link (redirecionamento)
        e.preventDefault();
        // Carrega o conteúdo da página vinculada ao link clicado
        loadPage(el);
    }
})

// Função assíncrona para carregar o conteúdo da página
async function loadPage(el) {
    // Obtém o atributo 'href' do elemento clicado para obter a URL da página
    const href = el.getAttribute('href');

    // Configuração da requisição (método 'GET' e URL obtida)
    const config = {
        method: 'GET',
        url: href,
    }

    try {
        // Faz a requisição AJAX usando a função 'request' e aguarda a resposta
        const response = await request(config);
        // Carrega o conteúdo da resposta na página
        loadResult(response);
    } catch (error) {
        // Se ocorrer um erro, exibe no console
        console.log(error)
    }
}

// Função para carregar o conteúdo da resposta na página
function loadResult(response) {
    // Encontra o elemento com a classe '.result'
    const div = document.querySelector('.result');
    // Define o conteúdo HTML desse elemento como a resposta recebida
    div.innerHTML = response;
}
