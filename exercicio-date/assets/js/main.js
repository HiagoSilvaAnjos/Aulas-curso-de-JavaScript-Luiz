document.addEventListener("DOMContentLoaded", () => {
    getdateToDay();
})

const elementTextDate = document.querySelector('#elementTextDate');

setInterval(() => {
    getdateToDay();
}, 1000)

function getdateToDay() {
    const dateToDay = new Date();
    const date = createDate(dateToDay);
   elementTextDate.innerText = date; 
}

function createDate(date) {
    let day = date.getDay();
    let dayMonth = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let hours = fomartarHora(date.getHours());
    let minutes = fomartarHora(date.getMinutes());
    let seconds = fomartarHora(date.getSeconds());

    const dayWeek = createDayWeek(day);
    const monthYear = createMonthYear(month);

    return `${dayWeek}, ${dayMonth} de ${monthYear} de ${year} ${hours}:${minutes}:${seconds}`;
}

// dia da semana
function createDayWeek (day) {
    if (day === 0) return 'Domindo';
    
    if (day === 1) return 'Segunda-Feira';
    
    if (day === 2) return 'Terça-Feira';
    
    if (day === 3) return 'Quarta-Feira';
    
    if (day === 4) return 'Quinta-Feira';
    
    if (day === 5) return 'Sexta-Feira';
    
    if (day === 6) return 'Sábado';
    
}

// mês
function createMonthYear (month) {
    if (month === 1) return 'Janeiro';
    
    if (month === 2) return 'Fevereiro';
    
    if (month === 3) return 'Março';
    
    if (month === 4) return 'Abril';
    
    if (month === 5) return 'Maio';
    
    if (month === 6) return 'Junho';
    
    if (month === 7) return 'Julho';

    if (month === 8) return 'Agosto';

    if (month === 9) return 'Setembro';

    if (month === 10) return 'Outubro';

    if (month === 11) return 'Novembro';

    if (month === 12) return 'Dezembro';
}

function fomartarHora (hours) {
   return hours >= 10 ? hours : `0${hours}`;
}