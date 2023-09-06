

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const close = document.getElementById('btn-close')

    menuButton.addEventListener('click', function() {
      if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        close.style.display = 'block'

      } else {
        menu.style.display = 'none';
        close.style.display = 'none'
      }
    });
    close.addEventListener('click', ()=> {
      if(close.style.display != 'none'){
        menu.style.display = 'none'
        close.style.display ='none'
      }
    })

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '#btn-right',
        prevEl: '#btn-left',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    
  })