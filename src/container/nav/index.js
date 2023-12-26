class Nav {
    static #HOME_PAGE = 'https://google.com'

    static #back = () => {
        return history.back()
    }

    static #forward = () => {
        return history.forward()
    }

    static #reload = () => {
        return location.reload()
    }

    static #home = () => {
        return this.#changePage(this.#HOME_PAGE)
    }

    static #play = () => {
        try {
            const url = new URL(window.input.value)
            this.#changePage(url.href)
        } catch (e) {
            alert('insert correct adress')
            console.log(e)
        }
    }

    static #changePage = (href) => {
        return location.assign(href)
    }

    static init = () => {
        window.back.onclick = this.#back
        window.forward.onclick = this.#forward
        window.reload.onclick = this.#reload
        window.home.onclick = this.#home
        window.play.onclick = this.#play

        window.input.value = location.href
    }
}

Nav.init()