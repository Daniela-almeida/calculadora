

const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')


const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// dataset pega os atributos de data
document.querySelectorAll('.charKey').forEach(function (charkeyBtn){
  charkeyBtn.addEventListener('click', function () {
    const value = charkeyBtn.dataset.value  
    input.value += value
  })
}) 

// c - clear
document.getElementById('clear').addEventListener('click', function() {
  input.value = ''
  input.focus()
})


// keydown tecla clicada
input.addEventListener('keydown', function (ev) { 
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  // funcionar apagar
  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }
  // funcionar enter
  if(ev.key === 'Enter') {
    calculate()
  }
})  

// Eval" é uma função em JavaScript que é usada para avaliar uma string contendo código JavaScript. Quando você chama a função "eval" com uma string contendo código JavaScript válido, o interpretador JavaScript analisa e executa esse código como se ele tivesse sido inserido diretamente no local em que a chamada "eval" foi feita.
document.getElementById('equal').addEventListener('click', calculate)
function calculate() {
    const result = eval(input.value)
    resultInput.value = result
}


function calculate() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove("error")
}


document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
})

// trocar tema

document.getElementById('themeSwitcher').addEventListener("click", function () {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#ff8fa3')
    root.style.setProperty('--border-color', '#555')
    root.style.setProperty('--font-color', '#212519')
    root.style.setProperty('--primary-color', '#000814')
    main.dataset.theme = 'light'
  }else {
    root.style.setProperty("--bg-color", "#16181b")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#de0af1")
    main.dataset.theme = "dark"
  }
})