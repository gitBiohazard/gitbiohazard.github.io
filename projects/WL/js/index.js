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
            y: "-150%"
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
            y: "150%"
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

class Entrance {
    constructor(span) {
        this.span = span
        console.log(span)
    }

    RevealIn() {
        // this.spanIn = gsap.timeline()
        // this.spanIn.set(this.span, {
        //     autoAlpha: 1
        // })
        // this.spanIn.fromTo(this.span, {
        //     y: '150%',
        // }, {
        //     delay: 0.1,
        //     duration: 1.8,
        //     ease: 'expo.out',
        //     stagger: {
        //         amount: 0.2,
        //         axis: 'x'
        //     },
        //     y: '0%'
        // })
        this.holderIn = gsap.timeline()
        this.holderIn.set(this.span, {
            autoAlpha: 0
        })
        this.holderIn.fromTo(this.span, {
            y: "130%"
        }, {
            autoAlpha: 1,
            duration: 1.5,
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

class Main {
    constructor({ nav, image, title }) {
        this.nav = document.querySelector(nav)
        this.images = document.querySelectorAll(image)
        this.titles = document.querySelectorAll(title)

        this.setNavInteraction()
        this.setLinksInactive()
        this.setImagesInteraction()
        this.setTitleInteraction()
    }

    setNavInteraction() {
        window.addEventListener('scroll', () => {
            let userPosition = document.documentElement.scrollTop;
            if (userPosition > 0) {
                this.nav.classList.add("scrolled");
            } else {
                this.nav.classList.remove("scrolled");
            }
        })
    }

    setLinksInactive() {
        const links = document.querySelectorAll('a')
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault()
                var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            })
        })
    }

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
            const words = title.innerHTML
            title.innerText = ''
            const span = document.createElement('span')
            span.innerHTML = words
            title.appendChild(span)
        })
        this.titles.forEach(title => {
            const Entrancer = new Entrance(title.firstChild)
            const observer = new window.IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        Entrancer.RevealIn()
                    } else {
                        Entrancer.RevealOut()
                    }
                })
            })
            observer.observe(title)
        })
    }

}

new Main({ nav: '.header', image: 'figure', title: 'h1' })