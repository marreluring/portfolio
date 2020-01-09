// Select DOM Items
const menu_Btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menu_Nav = document.querySelector('.menu-nav');
const menu_Branding = document.querySelector('.menu-branding');

const nav_Items = document.querySelectorAll('.nav-item');

// Set initial state of menu

let show_Menu = false;

menu_Btn.addEventListener('click', toggle_Menu);

function toggle_Menu() {
    if (!show_Menu) {
        menu_Btn.classList.add('close');
        menu.classList.add('show');
        menu_Nav.classList.add('show');
        menu_Branding.classList.add('show');
        nav_Items.forEach(item => item.classList.add('show'));

        show_Menu = true;
    } else{
        menu_Btn.classList.remove('close');
        menu.classList.remove('show');
        menu_Nav.classList.remove('show');
        menu_Branding.classList.remove('show');
        nav_Items.forEach(item => item.classList.remove('show'));

        show_Menu = false;
    }
}