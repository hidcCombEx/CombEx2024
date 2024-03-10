document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#images li img')
    const modal = document.querySelector('.modal')

    images.forEach(img => {
        img.addEventListener('click', () => {
            const content = document.querySelector('.modal img')

            let source = new Image()
            source.src = img.getAttribute('src')

            content.setAttribute('src', source.src)    
            modal.style.display = 'flex'

            if (source.src.indexOf('yawayats') != -1) {
                const title = document.querySelector('.modal-text h3')
                const text = document.querySelector('.modal-text p')

                let startIndex = source.src.indexOf('yawayats') + 8
                let num = source.src.substring(startIndex, startIndex + 2)
                let data = works[parseInt(num) - 1]
                console.log(startIndex, num)
                
                title.innerText = data.project
                text.innerText = data.outline
            }
        })
    })

    modal.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    document.addEventListener('keydown', (e) => {
        if (e.key == 'Escape' && modal.style.display == 'flex') {
            modal.style.display = 'none'
        }
    })
})

