function soma(valor1, valor2=0, valor3=0) {
    let resultado = -1;
    if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3)) {
        resultado = valor1 + valor2 + valor3;
    }
    return resultado;
}

function soma_vezes(numeros) {
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            return -1;
        }
        resultado += numeros[i];
    }
    return resultado;
}
