class ValidateForm {
    constructor() {
        // Seleciona o formulário HTML
        this.form = document.querySelector("form");
        // Inicia os eventos do formulário
        return this.eventsForm();
    }

    // Métodos

    // Adiciona eventos ao formulário
    eventsForm() {
        // Adiciona um ouvinte de evento para o envio do formulário
        this.form.addEventListener("submit", event => this.handleSubmit(event));
    }

    // Manipula o envio do formulário
    handleSubmit(event) {
        // Previne o comportamento padrão de envio do formulário
        event.preventDefault();
        // Valida o formulário
        const form = this.ValidateForm();

        // Se o formulário for válido, envia após um segundo
        if (form) {
            setTimeout(() => {
                return this.form.submit();
            }, 1000);
        }

        return false;
    }

    // Valida o formulário
    ValidateForm() {
        let valid = true;
        const inputsForm = this.form;
        let password;

        // Remove mensagens de erro anteriores
        for (let error of inputsForm.querySelectorAll(".invalid-inputs")) {
            error.remove();
        }

        // Percorre todos os campos do formulário
        for (let input of inputsForm.querySelectorAll(".validate")) {
            const label = input.previousElementSibling.innerText;

            // Verifica se o campo está vazio
            if (!input.value) {
                this.createError(input, `O campo ${label} não pode estar vazio`);
                valid = false;
            }

            // Valida o CPF se o campo tiver a classe "cpf"
            if (input.classList.contains("cpf")) {
                if (!this.validCpf(input)) valid = false;
            }

            // Valida o usuário se o campo tiver a classe "user"
            if (input.classList.contains("user")) {
                if (!this.validUser(input)) valid = false;
            }

            // Valida a senha se o campo tiver a classe "password"
            if (input.classList.contains("password")) {
                password = input.value;
                if (!this.validPassword(input)) valid = false;
            }

            // Verifica a repetição da senha se o campo tiver a classe "repeat-password"
            if (input.classList.contains("repeat-password")) {
                if (!this.checkRepeatPassword(input, password)) valid = false;
            }
        }

        return valid;
    }

    // Valida o CPF
    validCpf(input) {
        let cpf = new validCPF(input.value);

        if (!cpf.valid) {
            this.createError(input, `CPF inválido!`);
            return false;
        };

        return true;
    }

    // Valida o usuário
    validUser(input) {
        const user = input.value;
        const regexUserName = /^[a-zA-Z0-9]*$/;
        let valid = true;

        if (user.length < 3 || user.length > 12) {
            return this.createError(input, `O usuário precisa ter entre 3 a 12 caracteres!`);
        }

        if (!regexUserName.test(user)) {
            return this.createError(input, `O usuário precisa ter apenas letras e/ou números!`);
        }

        return valid;
    }

    // Valida a senha
    validPassword(input) {
        let password = input.value;

        if (password.length < 6 || password.length > 12) {
            this.createError(input, `Sua senha precisa ter entre 6 a 12 caracteres!`);
            return false;
        }

        return true;
    }

    // Verifica se a senha repetida é igual à senha original
    checkRepeatPassword(copyPassword, originPassword) {
        let checkRepeatPassword = copyPassword.value === originPassword;

        if (!checkRepeatPassword) {
            this.createError(copyPassword, `As senhas precisam ser iguais!`);
            return false;
        }

        return true;
    }

    // Cria mensagens de erro
    createError(input, message) {
        const divErrors = document.createElement("div");
        divErrors.innerText = message;
        divErrors.classList.add("invalid-inputs");
        input.insertAdjacentElement("afterend", divErrors);
    }

}

// Cria uma instância da classe ValidateForm
const form = new ValidateForm();
