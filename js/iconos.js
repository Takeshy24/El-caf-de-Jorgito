function toggleMenu(icon) {
    const list = document.getElementById('menuList');
    icon.name === 'menu'
        ? (icon.name = 'close', list.classList.add('top-[80px]', 'opacity-100'))
        : (icon.name = 'menu', list.classList.remove('top-[80px]', 'opacity-100'));
}

function closeMenu() {
    const menu = document.querySelector('ion-icon[name="close"]');
    if (menu) toggleMenu(menu);
}