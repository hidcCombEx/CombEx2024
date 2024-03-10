document.addEventListener('scroll', () => {
    const header = document.getElementById('nav')

    if (window.scrollY > 60) header.classList.add('white')
    else header.classList.remove('white')
})

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('toggle')

    toggle.addEventListener('click', function() {
        const svg = document.querySelector('nav svg path')
        const menu = document.querySelectorAll('nav ul li')

        if (toggle.classList.contains('on-toggle')) {
            toggle.classList.remove('on-toggle')
            svg.style.fill = '#565656'
            menu.forEach(list => { list.classList.remove('on-menu') })
        } else {
            toggle.classList.add('on-toggle')
            svg.style.fill = '#EA4D37'
            menu.forEach(list => { list.classList.add('on-menu') })
        }
    })
})