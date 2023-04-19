let listElements = document.querySelectorAll('.list__button--click')

// Variable que almacena la opción seleccionada actualmente
let currentOption = null

listElements.forEach((listElement) => {
  listElement.addEventListener('click', () => {
    // Comprobar si se seleccionó la opción 1
    if (listElement.id === 'opcion1') {
      // Cerrar las otras opciones
      listElements.forEach((otherElement) => {
        if (otherElement.id !== 'opcion1') {
          otherElement.classList.remove('arrow')
          otherElement.nextElementSibling.style.height = '0px'
        }
      })
    } else {
      // Cerrar la opción seleccionada actualmente si está abierta
      if (currentOption !== null && currentOption !== listElement) {
        currentOption.classList.remove('arrow')
        currentOption.nextElementSibling.style.height = '0px'
      }
    }

    // Abrir o cerrar la opción seleccionada
    listElement.classList.toggle('arrow')
    let height = 0
    let menu = listElement.nextElementSibling
    if (menu.clientHeight === 0) {
      height = menu.scrollHeight
    }
    menu.style.height = `${height}px`

    // Actualizar la opción seleccionada actualmente
    currentOption = listElement
  })
})

const opcion1 = document.querySelector('#Svalor-presente')
const titulo = document.querySelector('header h1')
const contenido = document.querySelector('.content')

function mostrarContenidointeresSimple() {
  titulo.textContent = 'Interés Simple'
  contenido.innerHTML = '<div class="boxSValorSimple"></div>'
}
opcion1.addEventListener('click', mostrarContenidointeresSimple)
