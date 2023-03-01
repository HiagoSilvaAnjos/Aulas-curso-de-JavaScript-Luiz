const inputWeightUser = document.querySelector('#input-weight');
const inputHeigthUser = document.querySelector('#input-height');
const buttonResult = document.querySelector('#submit');
const imcContent = document.querySelector('.imc-container');
const imcLevels = ['Abaixo do peso', // 0
                   'Peso Saudável', // 1
                   'Sobrepeso (Pré-Obsidade)', // 2
                   'Obsidade grau 1', // 3
                   'Obsidade grau 2', // 4
                   'Obsidade grau 3' //5
                    ];
let errorMensager = '';
let level = '';

inputWeightUser.addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
});

inputHeigthUser.addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
});

buttonResult.addEventListener('click', checkUserData);

// checar dados
function checkUserData(event) {
    event.preventDefault();

    let weight = Number(inputWeightUser.value);
    let height = Number(inputHeigthUser.value);

    if (!validateDataUser(weight, height)) {
        return invalidDataMessage(imcContent);
    }

    const imcUser = calculateImc(weight, height);
    const statesIMC = checkStates(imcUser);
    

    addResult(imcUser, imcContent, statesIMC);
}

// validar dados digitados
function validateDataUser(weight, height) {
    let isValid = true;

    if(weight <= 0 && height <= 0) {
        errorMensager = 'Dados inválidos'
        return isValid = false;
    }

    if(weight <= 0) {
        errorMensager = 'Peso Inválido'
        return isValid = false;
    }

    if(height <= 0) {
        errorMensager = 'Altura Inválida'
        return isValid = false;
    }

    return isValid
}

// vericard o estado do imc
function checkStates(imcUser) {

    if(imcUser < 18.5) return level = imcLevels[0];

    if(imcUser <= 25) return level = imcLevels[1];

    if(imcUser <= 30) return level = imcLevels[2];

    if(imcUser <= 35) return level = imcLevels[3];

    if(imcUser <= 40) return level = imcLevels[4];

    if(imcUser > 40) return level = imcLevels[5];
}

// adicionar resultado
function addResult (imcUser, divContent, statesIMC) { 
    const textMsgElement =  addTextParagraph();
    textMsgElement.innerText = `Seu imc é ${imcUser}
                                ${statesIMC}`;

    divContent.style = "display: flex";
    divContent.classList.add('isValid');
    divContent.appendChild(textMsgElement);
}

// criar parágrafo
function addTextParagraph() {
    const paragraph = document.querySelector('#text-imc');
    return paragraph;
}

// calcular imc
function calculateImc(weightUser, heightUser) {
   return (weightUser / (heightUser * heightUser)).toFixed(2);
}

// mensagem de error 
function invalidDataMessage(elementDiv) {
    const textMsgElement =  addTextParagraph();

    elementDiv.classList.forEach(function (elementClass) {
        if(elementClass == 'isValid') {
            elementDiv.classList.remove(elementClass);
        }
    })

    elementDiv.style = "display: flex";
    elementDiv.classList.add('isInvalid');
    elementDiv.appendChild(textMsgElement);
    textMsgElement.innerText = errorMensager;
}
