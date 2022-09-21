// Hamburger Menu
const toggle = document.querySelector('.hamburger_menu');
const menu = document.getElementById('menu');
toggle.addEventListener('click',()=>{
    toggle.classList.toggle('rotate')
    // Showing aside nav in mobile device
    menu.classList.toggle('show_nav')
})

// Activated Button Switch
const night = document.getElementById('switch');
night.addEventListener('click',()=>{
    night.classList.toggle('activate')
    // Changing color when button toggle to day or night
    document.body.classList.toggle('changing')
})

