document.addEventListener('DOMContentLoaded', () => {
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer = null;

    // Criar segundos
    const createTimeOfSeconds = (seconds) => {
        const data = new Date(seconds * 1000);

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT',
        })

    }

    function initializeclock() {
        timer = setInterval(() => {
            seconds++;
            clock.innerHTML = createTimeOfSeconds(seconds);
            clock.style.color = 'black';
        }, 1000);
    }

    document.addEventListener('click', (e) => {
        const element = e.target;

        if (element.classList.contains('start')) {
            clearInterval(timer);
            initializeclock();
        }

        if (element.classList.contains('stop')) {
            clock.style.color = 'red';
            clearInterval(timer);
        }

        if (element.classList.contains('reset')) {
            clearInterval(timer);
            clock.style.color = 'black';
            clock.innerHTML = '00:00:00'
            seconds = 0;
        }
    })
});
