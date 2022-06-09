import App from "./App.js";

export default class Spotify extends App {
    constructor({ name, window, shortcut, dismiss, minimize, header, music }) {
        super({ name, window, shortcut, dismiss, minimize, header })
        this.music = {
            trigger: document.querySelector(music.trigger),
            audio: document.querySelector(music.audio),
            icon: document.querySelector(music.icon),
            box: document.querySelector(music.box),
            active: false
        }
        this.setTrigger()
    }

    toggleAudio() {
        if (!this.music.active) {
            this.music.audio.play()
            this.music.active = true
            this.music.box.classList.add('active')
            this.music.icon.src = "images/social/pause.svg"
            this.music.icon.style.width = "20px"
        } else {
            this.music.audio.pause()
            this.music.active = false
            this.music.box.classList.remove('active')
            this.music.icon.src = "images/social/play.svg"
            this.music.icon.style.width = "15px"
        }
    }

    closeApp() {
        this.shortcut.classList.remove('active')
        this.window.classList.remove('d-block')
        this.window.classList.add('d-none')

        if (this.music.active) {
            this.toggleAudio()
            this.music.audio.load()
        }
    }

    setTrigger() {
        this.music.trigger.addEventListener('click', () => {
            this.toggleAudio();
        })
    }
}