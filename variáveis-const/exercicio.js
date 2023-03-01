const firstName = "Luiz Otávio";
const lastName = "Miranda";
const age = 30;
const weight = 84;
const height = 1.80;
let indexBodyMass;
let yearBith;

indexBodyMass = weight / (height * height);
yearBith = 2022 - age ;

console.log(
`${firstName} ${lastName} tem ${age} anos, pesa ${weight}kg.
Tem ${height} de altura e seu IMC é de ${indexBodyMass.toFixed(2)}.
${firstName} nasceu em ${yearBith}.`
)