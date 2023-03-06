// Declaração de função (Function hoisting)
function falarOi () {return 'OI';}
console.log(falarOi());

// First-class objects (Objetos de primeira classe)
// function expression
const souUmDado = function () {console.log("Sou um dado")}
souUmDado();

// Arrow Function
const funcaoArrow = () => console.log("Sou uma arrow function");
funcaoArrow();