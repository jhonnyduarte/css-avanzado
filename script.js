
console.log('Hola Mundo');


const btnEstilosNoCriticos = document.getElementById('cargarEstilos');

btnEstilosNoCriticos.addEventListener('click', () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "lazyLoadingNoCriticos.css";
    document.head.appendChild(link);
    btnEstilosNoCriticos.disabled = true;
})
