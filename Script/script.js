

const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
const close = document.querySelector('#btn-close')

menuButton.addEventListener('click', () =>  {
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
    close.style.display = 'block'

  } else {
    menu.style.display = 'none';
    close.style.display = 'none'
  }
});
close.addEventListener('click', () => {
  if (close.style.display != 'none') {
    menu.style.display = 'none'
    close.style.display = 'none'
  }
})

