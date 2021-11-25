function retirarCaracteresNaoDigitos(position) {
  const inputElem = document.querySelector(`#container-inputs-numeros :nth-child(${position})`)
  const valueInput = inputElem.value
  const numberSemLetras = valueInput.replace(/[^0-9]/g,'');
  if(numberSemLetras.length > 0) {
    inputElem.value = numberSemLetras
    return numberSemLetras
  }
  inputElem.value = '0'
  return '0'
}

const getNumeros = () => ({
  numero1: parseInt(retirarCaracteresNaoDigitos('1'), 10),
  numero2: parseInt(retirarCaracteresNaoDigitos('3'), 10)
})

function printarResultado(resultado) {
  document.getElementById('resultado').innerHTML = '' + resultado
}

function somar() {
  const { numero1, numero2 } = getNumeros()
  printarResultado(numero1 + numero2)
}

function subtrair() {
  const { numero1, numero2 } = getNumeros()
  printarResultado(numero1 - numero2)
}

function multiplicar() {
  const { numero1, numero2 } = getNumeros()
  printarResultado(numero1 * numero2)
}

function dividir() {
  const { numero1, numero2 } = getNumeros()
  printarResultado(numero1 / numero2)
}