const navbarToggleBtn = document.getElementById('navbar-toggle-btn')
const navbar = document.getElementById('navbar')

navbarToggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('show')
})