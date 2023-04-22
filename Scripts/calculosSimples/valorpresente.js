export function calcular() {
  // obtener los valores de los inputs y select
  const monto = document.getElementById('monto').value
  const tasa = document.getElementById('tasa').value
  const periodos = document.getElementById('periodos').value
  const unidadPeriodo = document.getElementById('unidad-periodo').value

  // calcular el resultado
  let resultado
  if (unidadPeriodo === 'anios') {
    resultado = monto * (1 + (tasa / 100) * periodos)
  } else {
    resultado = monto * (1 + (tasa / 100 / 12) * periodos)
  }

  // mostrar el resultado en el elemento con id "resultado"
  document.getElementById(
    'resultado'
  ).innerHTML = `El resultado es: ${resultado}`
}
