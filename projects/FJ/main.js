class Page {
    constructor({ content, next, previous, figures, titles, texts }) {
        this.texts = document.querySelectorAll(texts)
        this.titles = document.querySelectorAll(titles)
        this.images = document.querySelectorAll(figures)
        this.content = document.querySelectorAll(content)
        this.previous = document.querySelector(previous)
        this.next = document.querySelector(next)
        this.current = 0
        this.setEvents()
        this.setImagesInteraction()
        this.setTitleInteraction()
    }

    // Getters

    getDelta(e) {
        return e.wheelDelta > 0 ? 1 : -1
    }

    getNext() {
        if ((this.current + 1) < this.content.length) {
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
        this.next.addEventListener('click', () => {
            this.getNext()
        })
        this.previous.addEventListener('click', () => {
            this.getPrevious()
        })
        window.addEventListener('mousewheel', (e) => {
            this.getDelta(e) < 0 ? this.getNext() : this.getPrevious()
        })
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.getPrevious()
                    break
                case "ArrowRight":
                    this.getNext()
                    break
                case "ArrowUp":
                    this.getPrevious()
                    break
                case "ArrowDown":
                    this.getNext()
                    break
            }
        })

    }

    // External

    setImagesInteraction() {
        this.images.forEach(image => {
            const picture = image.firstChild.nextSibling
            const Revealer = new Reveal(image, picture)
            const observer = new window.IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        Revealer.RevealIn()
                    } else {
                        Revealer.RevealOut()
                    }
                })
            })
            observer.observe(image)
        })
    }

    setTitleInteraction() {
        this.titles.forEach(title => {
            const observer = new window.IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(title, {
                            y: "0%",
                            delay: .2,
                            duration: 1,
                            autoAlpha: 1
                        })
                    } else {
                        gsap.to(title, {
                            y: "100%",
                            delay: .2,
                            duration: 1,
                            autoAlpha: 0
                        })
                    }
                })
            })
            observer.observe(title)
        })

        this.texts.forEach(text => {
            const observer = new window.IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(text, {
                            y: "0%",
                            delay: .2,
                            duration: 1,
                            autoAlpha: 1
                        })
                    } else {
                        gsap.to(text, {
                            y: "100%",
                            delay: .2,
                            duration: 1,
                            autoAlpha: 0
                        })
                    }
                })
            })
            observer.observe(text)
        })
    }

}

class Reveal {
    constructor(holder, image) {
        this.holder = holder
        this.image = image
    }

    RevealIn() {
        this.holderIn = gsap.timeline()
        this.holderIn.set(this.holder, {
            autoAlpha: 1
        })
        this.holderIn.fromTo(this.holder, {
            y: "-100%"
        }, {
            autoAlpha: 1,
            duration: 3,
            ease: 'expo.out',
            stagger: {
                amount: 0.2,
                axis: 'x'
            },
            scale: 1,
            y: "0%"
        })

        this.imageIn = gsap.timeline()
        this.imageIn.set(this.image, {
            autoAlpha: 1
        })
        this.imageIn.fromTo(this.image, {
            scale: 1.2,
            y: "100%"
        }, {
            duration: 3,
            ease: 'expo.out',
            stagger: {
                amount: 0.2,
                axis: 'x'
            },
            scale: 1,
            y: "0%"
        })
    }

    RevealOut() {
        return
    }
}


new Page({
    content: '[data-content]',
    next: '.controller__forward',
    previous: '.controller__back',
    figures: 'figure',
    titles: 'h1',
    texts: 'p'
})