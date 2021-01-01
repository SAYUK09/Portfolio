const toggleButton = document.getElementById('hamburger')
const ul = document.getElementById('ul')
console.log(toggleButton)
toggleButton.addEventListener('click', () => {
  ul.classList.toggle('show')
})