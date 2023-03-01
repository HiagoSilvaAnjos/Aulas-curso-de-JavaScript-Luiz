let inputPrimaryNumber = prompt("Digite um número:");
let inputSecondaryNumber = prompt("Digite outro número");

inputPrimaryNumber = Number(inputPrimaryNumber);
inputSecondaryNumber = Number(inputSecondaryNumber);

const result = () => {
    let resultInput = inputPrimaryNumber + inputSecondaryNumber;
    alert(`A soma dos valores foi ${resultInput}`);
}

const validateInputs = () => {
    const numberPrimary = Number(inputPrimaryNumber) ? true : false;
    const numberSecondary = Number(inputSecondaryNumber) ? true : false;

    if (!numberPrimary) {
        alert("Invalid primary number");
    }
    else if (!numberSecondary) {
        alert("Invalid secundary number");
    }
    else {
        result();
    }

}


validateInputs();