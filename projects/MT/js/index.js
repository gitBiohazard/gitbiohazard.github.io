class Slider {
    constructor({ next, prev, items, count, title, subtitle, description }) {
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
        this.items = document.querySelectorAll(items)
        this.title = document.querySelector(title)
        this.subtitle = document.querySelector(subtitle)
        this.description = document.querySelector(description)
        this.count = count

        this.getNextFunction = this.getNext.bind(this)
        this.getPrevFunction = this.getPrev.bind(this)
        this.startControls()
        this.getFirst()
    }

    getFirst() {
        const current = document.querySelector(`[data-slider-item="${this.count}"]`)
        this.getData("0")
        current.classList.add('active')
    }

    getNext() {
        const current = document.querySelector(`[data-slider-item="${this.count}"]`)
        if (current.nextElementSibling) {
            const next = current.nextElementSibling;
            this.getData(next.getAttribute('data-slider-item'))
            this.count = parseInt(next.getAttribute('data-slider-item'))
            if (this.count % 2 != 0) {
                next.classList.add('active')
                next.style.transform = `translateX(-${100 * this.count}%) rotate(${(8 - (this.count * 1.5)) * 1}deg)`
            } else {
                next.classList.add('active')
                next.style.transform = `translateX(-${100 * this.count}%) rotate(${(8 - (this.count * 1.5)) * -1}deg)`
            }
        } else {
            this.count = parseInt(current.getAttribute('data-slider-item'))
            return
        }
    }

    getPrev() {
        const current = document.querySelector(`[data-slider-item="${this.count}"]`)
        if (current.previousElementSibling) {
            const prev = current.previousElementSibling
            this.getData(prev.getAttribute('data-slider-item'))
            this.count = parseInt(prev.getAttribute('data-slider-item'))
            if (this.count % 2 != 0) {
                current.classList.remove('active')
                current.style.transform = `translateX(0%) rotate(0deg)`
            } else {
                current.classList.remove('active')
                current.style.transform = `translateX(0%) rotate(0deg)`
            }
        } else {
            return
        }
    }

    getData(id) {
        switch (id) {
            case "0":
                this.title.innerText = "Cohiba Medium Siglo"
                this.subtitle.innerText = "Rating: Medium – Mild"
                this.description.innerText = "It is without a doubt one of my favorite cigars. In addition to being super soft, it has an ideal size. \n\n Average price: BRL 150 "
                break;

            case "1":
                this.title.innerText = "Romeo y Julieta - Wide \n Churchill's"
                this.subtitle.innerText = "Rating: Medium – Mild"
                this.description.innerText = "Extremely balanced cigar with guard (correct aging time). It's one of my favorites. \n\n Average price: BRL 130 "
                break;
            
            case "2":
                this.title.innerText = "H. Upmann - Anejado"
                this.subtitle.innerText = "Rating: Mild"
                this.description.innerText = "It is a cigar with a shelf life of one year or more. Very harmonic. \n\n Average price: BRL 165 "
                break;
            case "3":
                this.title.innerText = "Gurkha (off Cuba) - Ghost \n Silver Shadow"
                this.subtitle.innerText = "Rating: Mild"
                this.description.innerText = "Excellent tobacco, with a fantastic burn. It lives up to its name, as the smoke actually looks like a ghost. \n\n Average price: BRL 85 "
                break;
            case "4":
                this.title.innerText = "Plasencia (off Cuba)"
                this.subtitle.innerText = "Rating: Medium"
                this.description.innerText = "It's not the size I prefer, but a perfect elaboration. The burn is great and the box turns into an ashtray.  \n\n Not sale in brazil "
                break;
            case "5":
                this.title.innerText = "Le Hoyo San Juan \n Rio seco"
                this.subtitle.innerText = "Rating: Medium – Mild"
                this.description.innerText = "Big cigar, but super smooth with excellent smoke and good value for money.  \n\n Average price: BRL 170 "
                break;
    
        }
    }

    startControls() {
        this.next.addEventListener('click', this.getNextFunction);
        this.prev.addEventListener('click', this.getPrevFunction);
    }
}

new Slider({
    next: '.gallery__content__box__right__control__next',
    prev: '.gallery__content__box__right__control__prev',
    items: '.gallery__content__box__left__item',
    title: '.gallery__content__box__right__title',
    subtitle: '.gallery__content__box__right__subtitle',
    description: '.gallery__content__box__right__description',
    count: 0
})

class Page {
    constructor() {
        this.setLinksInactive()
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
}

new Page()
