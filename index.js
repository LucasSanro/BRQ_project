
let hours = new Date()

function timer() {
  const h = hours.getHours()
  const m = hours.getMinutes()
  let time = String(h).padStart(2,0) + ':' + String(m).padStart(2,0)
  return time

}

const time = document.querySelector('#time')
const setaCimaEsq = document.querySelector('#setaCimaEsq')
const setaCimaDir = document.querySelector('#setaCimaDir')
const setaBaixoEsq = document.querySelector('#setaBaixoEsq')
const setaBaixoDir = document.querySelector('#setaBaixoDir')
const leftSide = document.querySelector('#leftSide')
const rigthSide = document.querySelector('#rigthSide')


function displayL(tempLeftSide) {
  leftSide.textContent = String(tempLeftSide)
}

function displayR(tempeRigthSide) {
  rigthSide.textContent = String(tempeRigthSide)
}

setaCimaEsq.addEventListener('click', function () {
  let temp = Number(leftSide.textContent) + 1
  if (temp > 28) {
    alert('Temperatura Interna muito alta!')
    return
  }
  displayL(temp)
})

setaCimaDir.addEventListener('click', function () {
  let temp = Number(rigthSide.textContent) + 1
  if (temp > 28) {
    alert('Temperatura Interna muito alta!')
    return
  }
  displayR(temp)
})
setaBaixoEsq.addEventListener('click', function () {
  let temp = Number(leftSide.textContent) - 1
  if (temp < 8) {
    alert('Temperatura Interna já abaixo de 10°!')
    return
  }
  displayL(temp)
})

setaBaixoDir.addEventListener('click', function () {
  let temp = Number(rigthSide.textContent) - 1
  if (temp < 8) {
    alert('Temperatura Interna já abaixo de 10°!')
    return
  }
  displayR(temp)
})


time.textContent = timer()
