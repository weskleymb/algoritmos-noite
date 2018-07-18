function piramide(numero) {
    let resposta = '';
    if (!isNaN(numero)) {
        for (let i = 1; i <= numero; i++) {
            for (let j = 1; j <= i; j++) {
                //resposta += i + ' ';
                for (let k = 1; k <= j; k++) {

                    alert(i + " " + j + " " + k);
                }
            }
            //resposta += '\n';
        }
        return resposta;
    }
    return -1;
}
