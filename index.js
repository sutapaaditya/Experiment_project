// ECMAScript
//accordion code
document.addEventListener('click', (ev) => {
  if (ev.target.id === 'expand') {
    ev.target.parentElement.classList.toggle('open');
  }
})
