export default class App {
    constructor({ name, window, shortcut, dismiss, minimize, header }) {
        this.name = name
        this.window = document.querySelector(window)
        this.shortcut = document.querySelector(shortcut)
        this.dismiss = document.querySelector(dismiss)
        this.minimize = document.querySelector(minimize)
        this.header = document.querySelector(header)
        this.apps = document.querySelectorAll('[data-window]')
        this.position = {
            x: 0,
            y: 0
        }

        this.addEventListeners()
    }

    // Functions

    setMouseDown(e) {
        this.mouse = true
        this.position = {
            x: this.window.offsetLeft - e.clientX,
            y: this.window.offsetTop - e.clientY
        }
    }

    setMouseUp() {
        this.mouse = false
    }

    setFocus() {
        this.apps.forEach(app => {
            app.classList.remove('window__focus')
        });
        this.window.classList.add('window__focus');
    }

    // App

    moveApp(e) {
        if (this.mouse) {
            this.mousePosition = {
                x : e.clientX,
                y : e.clientY
            };
            this.window.style.left = (this.mousePosition.x + this.position.x) + 'px';
            this.window.style.top  = (this.mousePosition.y + this.position.y) + 'px';
        }
    }

    openApp() {
        this.window.classList.remove('d-minimized')
        this.shortcut.classList.add('active')
        this.window.classList.remove('d-none')
        this.window.classList.add('d-block')
        this.position = {
            x: this.window.getBoundingClientRect().left,
            y: this.window.getBoundingClientRect().bottom
        }
        this.setFocus()
    }

    minimizeApp() {
        this.window.classList.remove('d-block')
        this.window.classList.add('d-none')
    }

    closeApp() {
        this.shortcut.classList.remove('active')
        this.window.classList.remove('d-block')
        this.window.classList.add('d-none')
    }

    // Listeners

    addEventListeners() {
        this.window.addEventListener('mousedown', () => {
            this.setFocus()
        })

        this.shortcut.addEventListener('click', () => {
            this.openApp()
        })

        this.dismiss.addEventListener('click', () => {
            this.closeApp()
        })

        this.minimize.addEventListener('click', () => {
            this.minimizeApp()
        })

        this.header.addEventListener('mousedown', (e) => {
            this.setMouseDown(e)
        })

        this.header.addEventListener('mouseup', (e) => {
            this.setMouseUp(e)
        })

        document.addEventListener('mousemove', (e) => {
            this.moveApp(e)
        })
    }
}

