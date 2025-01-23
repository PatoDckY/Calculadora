"use strict";
let resultado = 0;
let resultadoE = document.getElementById("resultado");
function resta() {
    let val1 = parseFloat(document.getElementById("num1").value);
    let val2 = parseFloat(document.getElementById("num2").value);
    resultado = val1 - val2;
    return resultadoE.innerText = "Resultado: " + resultado;
}
const division = () => {
    let val1 = parseFloat(document.getElementById("num1").value);
    let val2 = parseFloat(document.getElementById("num2").value);
    if (val2 == 0)
        return resultadoE.innerText = "Error matematico";
    else {
        resultado = val1 / val2;
        return resultadoE.innerText = "Resultado: " + resultado;
    }
};
function suma() {
    let val1 = parseFloat(document.getElementById("num1").value);
    let val2 = parseFloat(document.getElementById("num2").value);
    resultado = val1 + val2;
    return resultadoE.innerText = "Resultado: " + resultado;
}
function multi() {
    let val1 = parseFloat(document.getElementById("num1").value);
    let val2 = parseFloat(document.getElementById("num2").value);
    resultado = val1 * val2;
    return resultadoE.innerText = "Resultado: " + resultado;
}
