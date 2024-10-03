var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')

function somar() {
    soma = Number(n1.value) + Number(n2.value)
    resultado.innerHTML = `Sua soma é ${soma}.`
}

function multiplicar() {
    multiplicação = Number(n1.value) * Number(n2.value)
    resultado.innerHTML = `Sua multiplicação é ${multiplicação}.`
}

function dividir() {
    divisão = Number(n1.value) / Number(n2.value)
    resultado.innerHTML = `Sua divisão é ${divisão}.`
}