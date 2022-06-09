import App from "./App.js";

export default class Gallery extends App{
    constructor({ name, window, shortcut, dismiss, minimize, header, items, title, render }) {
        super({ name, window, shortcut, dismiss, minimize, header})
        this.items = document.querySelectorAll(items)
        this.render = document.querySelector(render)
        this.title = document.querySelector(title)
        this.setTriggers()
    }

    getPhoto(id) {
        this.items.forEach(item => {
            if (item.getAttribute('data-photo') === id) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })
        this.title.innerText = id
        this.render.src = `images/photos/${id}`
    }

    setTriggers() {
        this.items.forEach(item => {
            item.addEventListener('click', () => {
                this.getPhoto(item.getAttribute('data-photo'))
            })
        });
    }
}