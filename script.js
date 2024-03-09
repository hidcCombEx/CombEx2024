document.addEventListener('scroll', () => {
    const header = document.getElementById("nav")

    if (window.scrollY > 60) header.classList.add('white')
    else header.classList.remove('white')
})