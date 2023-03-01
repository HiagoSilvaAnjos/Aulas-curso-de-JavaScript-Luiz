try {
    // Executa quando não há erro
} catch (e) {
    // Executa quando houver algum error
} finally {
    // Sempre
}

const showHours = (data) => {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando a instância de date');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    console.log(showHours())
} catch(e) {
    console.log('Digite uma data');
} finally {
    console.log('Tenha um bom dia')
}
