
export function createCounter() {
 
  const container = document.createElement('div')


  const btnMinus = document.createElement('button')
  btnMinus.textContent = '-'

  const btnPlus = document.createElement('button')
  btnPlus.textContent = '+'

 
  let count = 0
  const counterDisplay = document.createElement('p')
  counterDisplay.textContent = count


  btnMinus.addEventListener('click', () => {
    count--
    counterDisplay.textContent = count
  })

  btnPlus.addEventListener('click', () => {
    count++
    counterDisplay.textContent = count
  })


  container.appendChild(btnMinus)
  container.appendChild(counterDisplay)
  container.appendChild(btnPlus)

  return container
}