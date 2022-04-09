class Page {
    constructor({ images, clock, day, date, content, trigger, closer, gallery, main }) {
        this.images = document.querySelectorAll(images)
        this.gallery = document.querySelector(gallery)
        this.content = document.querySelector(content)
        this.trigger = document.querySelector(trigger)
        this.closer = document.querySelector(closer)
        this.clock = document.querySelector(clock)
        this.date = document.querySelector(date)
        this.main = document.querySelector(main)
        this.day = document.querySelector(day)

        this.previous = 0
        this.weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]

        this.openGalleryHolder = this.openGallery.bind(this)
        this.closeGalleryHolder = this.closeGallery.bind(this)
        this.slideGalleryHolder = this.slideGallery.bind(this)
        this.touchGalleryHolder = this.touchGallery.bind(this)

        this.setImages()
        this.getTimeNow()
        this.addEventListeners()
        setInterval(() => this.getTimeNow(), 1000)
    }

    getTimeNow() {
        this.now = new Date()
        this.day.innerText = this.weekday[this.now.getDay()]
        this.clock.innerText = `${this.now.getHours()}:${(this.now.getMinutes() < 10 ? '0' : '') + this.now.getMinutes()}`
        this.date.innerText = `${(this.now.getMonth() < 10 ? '0' : '')}${this.now.getMonth() + 1}/${(this.now.getDate() < 10 ? '0' : '')}${this.now.getDate()}/${this.now.getFullYear()}`
    }

    openGallery() {
        this.closer.classList.add('d-block')
        this.trigger.classList.add('d-none')
        this.content.classList.add('triggered')
        this.galleryIn('.home__content', '.home__gallery')
    }

    closeGallery() {
        this.closer.classList.remove('d-block')
        this.trigger.classList.remove('d-none')
        this.content.classList.remove('triggered')
        this.galleryOut('.home__content', '.home__gallery')
    }

    slideGallery(e) {
        if (e.wheelDeltaY > 0) {
            gsap.to('.home__gallery', {
                ease: "Power4.easeOut",
                x: '+=100px',
            })
        }
        else {
            gsap.to('.home__gallery', {
                ease: "Power4.easeOut",
                x: '-=100px',
            })
        }
    }

    touchGallery(e) {
        this.current = e.changedTouches[0].clientX
        if (this.current > this.previous) {
            gsap.to('.home__gallery', {
                ease: "Power4.easeOut",
                x: '+=75px',
            })
        } else {
            gsap.to('.home__gallery', {
                ease: "Power4.easeOut",
                x: '-=75px',
            })
        }
        this.previous = e.changedTouches[0].clientX
    }

    galleryIn(clock, gallery) {
        gsap.fromTo(clock, {
            autoAlpha: 0,
            y: '100%'
        }, {
            duration: 1,
            autoAlpha: 1,
            ease: "Power4.easeOut",
            y: '0%'
        })
        gsap.set(gallery, {
            autoAlpha: 0,
            rotation: 5
        })
        gsap.to(gallery, {
            autoAlpha: 1,
            duration: 1.5,
            ease: "Power4.easeOut",
            x: '40%',
            rotation: 0

        })
    }

    galleryOut(clock, gallery) {
        gsap.fromTo(clock, {
            autoAlpha: 0,
            y: '-100%'
        }, {
            delay: .25,
            duration: 1,
            autoAlpha: 1,
            ease: "Power4.easeOut",
            y: '0%'
        })
        gsap.to(gallery, {
            autoAlpha: 1,
            duration: 1,
            ease: "Power4.easeOut",
            x: '100%',
            rotation: 5
        })
    }

    setImages() {
        this.images.forEach((image, index) => {
            image.src = `img/${index}.jpg`
        })        
    }

    addEventListeners() {
        this.trigger.addEventListener('click', this.openGalleryHolder)
        this.closer.addEventListener('click', this.closeGalleryHolder)
        this.gallery.addEventListener('touchmove', this.touchGalleryHolder)
        this.gallery.addEventListener('mousewheel', this.slideGalleryHolder)
    }

}

new Page({
    images: '.home__gallery__item__image',
    clock: '.home__content__clock',
    day: '.home__content__title',
    content: '.home__content',
    trigger: '.home__trigger',
    closer: '.home__closer',
    date: '.home__nav__date',
    gallery: '.home__gallery',
    main: '.home'
})