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
        const isValidPassword = this.isValidPassword();

        if (isValid && isValidPassword) {
            alert("Formulário enviado com sucesso!");
            this.form.submit();
        }
    }

    isValidPassword() {
        let valid = true;

        const password = this.form.querySelector('.password');
        const repeatPassword = this.form.querySelector('.repeat-password');

        if (password.value !== repeatPassword.value) {
            this.error(password, "Campos senhas e repetir senha precisam ser iguais.");
            this.error(repeatPassword, "Campos senhas e repetir senha precisam ser iguais.");
            valid = false;
        }

        if (password.value.length < 6 || password.value.length > 12) {
            this.error(password, "A senha precisa estar entre 6 e 12 caracteres.");
            valid = false;
        }

        return valid;
    }

    isValidInputs() {
        let valid = true;
        const input = this.form.querySelectorAll('.validate');

        for (let error of this.form.querySelectorAll('.invalid-inputs')) {
            error.remove();
        }

        for (let inputElement of input) {
            let label = inputElement.previousElementSibling.innerText;

            if (!inputElement.value) {
                this.error(inputElement, `Campo "${label}" não pode estar vazio.`);
                valid = false;
            }

            if (inputElement.classList.contains('cpf')) {
                if (!this.validCPF(inputElement)) valid = false;
            };

            if (inputElement.classList.contains('user')) {
                if (!this.validUser(inputElement)) valid = false;
            };
        }

        return valid;
    }

    validUser(input) {
        const nameUser = input.value;
        let valid = true;

        if (nameUser.length < 3 || nameUser.length > 12) {
            this.error(input, "Usuário precisa ter entre 3 e 12 caracteres.");
            valid = false;
        }
        if (!nameUser.match(/[a-zA-Z0-9]+/g)) {
            this.error(input, "Usuário precisa conter apenas letras e números.");
            valid = false;
        }

        return valid;
    }

    validCPF(input) {
        const cpf = new validCPF(input.value);

        if (!cpf.valid()) {
            this.error(input, "CPF Inválido.");
            return false;
        }

        return true;

    }

    error(element, msg) {
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('invalid-inputs')
        element.insertAdjacentElement('afterend', div);
    }

}

const teste = new Autentication();
