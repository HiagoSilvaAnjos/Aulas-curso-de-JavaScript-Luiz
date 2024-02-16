const request = object => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(object.method, object.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                return resolve(xhr.responseText);
            }

            return reject(xhr.statusText);
        })
    })
}

document.addEventListener("click", (event) => {
    const element = event.target;
    const tagName = element.tagName.toLowerCase();

    if (tagName === "a") {
        event.preventDefault();

        return loadPage(element);
    }
})


async function loadPage(tagName) {
    const href = tagName.getAttribute("href");

    configMethod = {
        method: "GET",
        url: href,
    }

    try {

        const resultPage = await request(configMethod);
        return page(resultPage);

    } catch (error) {
        console.log(error);
    }



}

function page(resultPage) {

    const div = document.querySelector(".result");
    div.innerHTML = resultPage;

}