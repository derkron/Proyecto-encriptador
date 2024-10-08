const output = document.querySelector(".contenidoSalida");
const input = document.querySelector(".contenidoEntrada");

const matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function botonEncriptar() {
    output.value = encriptar(input.value);
    output.style.backgroundImage = "none";
}

function botonDesencriptar() {
    output.value = desencriptar(input.value);
    output.style.backgroundImage = "none";
}

function limpiar() {
    input.value = '';
    output.value = '';
}

function copiar() {
    output.select();
    document.execCommand("copy");
}

function encriptar(texto) {
    for (let i = 0; i < matriz.length; i++) {
        if (texto.includes(matriz[i][0])) {
            texto = texto.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return texto;
}

function desencriptar(texto) {
    for (let i = 0; i < matriz.length; i++) {
        if (texto.includes(matriz[i][1])) {
            texto = texto.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return texto;
}

input.addEventListener('input', function (e) {
    this.value = this.value.replace(/[^a-z0-9\s]/g, '').toLowerCase();
});