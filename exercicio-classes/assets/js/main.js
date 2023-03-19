class Autentication {
    constructor() {
        this.form = document.querySelector('form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => this.handleSubmit(e))
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.isValidInputs();
    }

    isValidInputs() {
        let valid = true;
        const input = this.form.querySelectorAll('.validate');

        for (let error of this.form.querySelectorAll('.invalid-inputs')) {
            error.remove();
        }

        for (let inputElement of input) {
            let label = inputElement.previousElementSibling.innerText;

            if (!inputElement.value) this.error(inputElement, `Campo "${label}" não pode estar vazio`);
            valid = false;
        }
    }

    error(element, msg) {
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('invalid-inputs')
        element.insertAdjacentElement('afterend', div);
    }

}

const teste = new Autentication();
