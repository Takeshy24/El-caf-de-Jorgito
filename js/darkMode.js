const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
    themeToggle.innerHTML = '<ion-icon name="sunny"></ion-icon>';
} else {
htmlElement.classList.remove('dark');
themeToggle.innerHTML = '<ion-icon name="moon"></ion-icon>';
}
themeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        themeToggle.innerHTML = '<ion-icon name="moon"></ion-icon>';
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        themeToggle.innerHTML = '<ion-icon name="sunny"></ion-icon>';
        localStorage.setItem('theme', 'dark');
    }
});