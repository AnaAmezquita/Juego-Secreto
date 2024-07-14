let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento() {
    //input representa la caja blanca
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        //para poner en funcionamiento el boton 'nuevo juego'.
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //se pone el # para referenciar el id.
     document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    //Si ya sorteamos todos los numeros
    if(listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.')
    } else{
        //Si el numero generado esta incluido en la lista hacemos una operacion
        //includes verifica si el numero existe en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        //push añade un elemento a la lista
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    //Mensajes
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    
    //Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    
    //inicializar el numero de intentos
    intentos = 1;

}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();

    //indicar mensaje de intervalo de numeros
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');    
}

condicionesIniciales();

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);

/*Para arreglos, listas o vector: []
ejemplo:    let numeroSorteado = [];

Para hacer una insercion a una lista: (al inicio o al final)
al final:   numeroSorteado.push(5);
            console.log(numeroSorteado);

para saber la cantidad de elementos de la lista:
console.log(numeroSorteado.length);

para acceder a un elemento particular: primer posicion siempre es 0
console.log(numeroSorteado[0]);

ultima posicion:
console.log(numeroSorteado[numeroSorteado.length-1]);
*/

