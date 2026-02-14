const inputEjercicio1 = document.getElementById('input_hackaton03');
const btn_hackaton03 = document.getElementById('btn_hackaton03');
const contenedorSolucionHackaton01 = document.getElementById('contenedor_solucion_hackaton01');

// console.log('Valores del Input: ', inputEjercicio1.value);

btn_hackaton03.addEventListener('click', () => {
    // 
    const valor = Number(inputEjercicio1.value);
    
    if(isNaN(valor)) {
        return alert('No es numero')
    }

    if(valor >= 100 || valor <= 999) {
        alert('El numero tiene 3 cifras.')

        contenedorSolucionHackaton01.classList.remove('hidden');
        
    }
})

