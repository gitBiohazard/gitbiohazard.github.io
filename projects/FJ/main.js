class Page {
    constructor({ content, next, previous }) {
        this.content = document.querySelectorAll(content)
        this.previous = document.querySelector(previous)
        this.next = document.querySelector(next)
        this.current = 0

        this.setEvents()
    }

    // Getters
    getDelta(e) {
        return e.wheelDelta > 0 ? 1 : -1
    }

    getNext() {
        if((this.current + 1) < this.content.length) {
            this.content.forEach(content => {
                if (+content.getAttribute('data-content') === (this.current + 1)) {
                    gsap.to(content, {
                        y: "0%",
                        rotation: "0deg"
                    })
                } else {
                    gsap.to(content, {
                        y: "180%",
                        rotation: "45deg"
                    })
                }
            })
            this.current++
        }
    }

    getPrevious() {
        if ((this.current - 1) >= 0) {
            this.content.forEach(content => {
                if (+content.getAttribute('data-content') === (this.current - 1)) {
                    gsap.to(content, {
                        y: "0%",
                        rotation: "0deg"
                    })
                } else {
                    gsap.to(content, {
                        y: "180%",
                        rotation: "45deg"
                    })
                }
            })
            this.current--
        }
    }

    // Setters

    setEvents() {
        window.addEventListener('mousewheel', (e) => {
            this.getDelta(e) < 0 ? this.getNext() : this.getPrevious()
        })

        this.next.addEventListener('click', () => {
            this.getNext()
        })
        this.previous.addEventListener('click', () => {
            this.getPrevious()
        })
    }



}

new Page({
    content: '[data-content]',
    next: '.controller__forward',
    previous: '.controller__back'
})