function converter(tempo) {
    let arr_tempo = tempo.split(":");
    let hora = parseInt(arr_tempo[0]);
    let minuto = parseInt(arr_tempo[1]);

    if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59) {
        return -1;
    }

    let ampm = '';

    if (hora == 0) {
        ampm = 'AM';
        hora = 12;
    } else if (hora == 12) {
        ampm = 'PM';
    } else if (hora < 12) {
        ampm = 'AM';
    } else {
        ampm = 'PM';
        hora = hora % 12;
    }

    return hora + ":" + minuto + ampm;

}