import App from "./App.js";

export default class Discord extends App {
    constructor({ name, window, shortcut, dismiss, minimize, header, trigger, feedback }) {
        super({ name, window, shortcut, dismiss, minimize, header })
        this.feedback = document.querySelector(feedback)
        this.trigger = document.querySelector(trigger)
        this.username = "gitBiohazard#1817"

        this.setTrigger()
    }

    copyToClipboard() {
        navigator.clipboard.writeText(this.username).then(() => {
            this.feedback.classList.remove("d-none")
            this.feedback.classList.add("d-block")
            setTimeout(() => {
                this.feedback.classList.remove("d-block")
                this.feedback.classList.add("d-none")
            }, 1500);
        })
    }

    setTrigger() {
        this.trigger.addEventListener('click', () => {
            this.copyToClipboard()
        })
    }
}