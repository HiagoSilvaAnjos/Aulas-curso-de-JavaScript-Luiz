const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // GET
        xhr.open(obj.method, obj.url, true);
        // POST
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        })
    })
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
    }
})

async function loadPage(el) {
    const href = el.getAttribute('href');

    const config = {
        method: 'GET',
        url: href,
    }

    try {
        const response = await request(config);
        loadResult(response);
    } catch (error) {
        console.log(error)
    }
}

function loadResult(response) {
    const div = document.querySelector('.result');
    div.innerHTML = response;
}