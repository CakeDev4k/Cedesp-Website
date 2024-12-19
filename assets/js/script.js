// Função para animar o contador
document.addEventListener('DOMContentLoaded', () => {
    const impactoSection = document.querySelector('.impacto-social');
    const counters = document.querySelectorAll('.count');

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target'); //obtém o valor alvo
                let current = +counter.innerText; //obtem o valor atual mostrado
                const increment = target / 100; //Incremento por cada atualização

                if (current < target) {
                    current = Math.ceil(current + increment);  // Aumenta o contador
                    counter.innerText = `+${current}`;  // Adiciona o "+" na frente enquanto cresce
                    setTimeout(updateCounter, 15);
                } else {
                    counter.innerText = `+${target}`;
                }
            };

    updateCounter(); //Inicia a animação
});
};

// Configuração do IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters(); // Inicia os contadores
            observer.disconnect(); // Para de observar depois que os números começam
        }
    });
});

observer.observe(impactoSection); // Observa a seção Impacto Social
});