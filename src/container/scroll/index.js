window.btnScr.onclick = () => 
    window.scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth',
    })

let isDisplay = false

setInterval(() => {
    if (
        window.scrollY > window.innerHeight &&
        isDisplay === false
    ) {
        isDisplay = true
        window.btnScr.style.display = 'flex'

        return
    }
    if (
        window.scrollY <= window.innerHeight &&
        isDisplay === true
    ) {
        isDisplay = false
        window.btnScr.style.display = 'none'
        return 
    }
}, 500)


