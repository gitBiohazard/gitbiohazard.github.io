import App from "./App.js";
import Gallery from "./Gallery.js";
import Spotify from "./Spotify.js";
import Discord from "./Discord.js";
import Instagram from "./Instagram.js";

class Mac {
    constructor({ nav, date, toolbar }) {
        this.nav = document.querySelector(nav)
        this.date = document.querySelector(date)
        this.toolbar = document.querySelector(toolbar)

        this.init()
    }

    // Date config

    getDay(date) {
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return `${days[date.getDay()]}`
    }

    getMonth(date) {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        return `${months[date.getMonth()]}`
    }

    getHours(date) {
        let hours = date.getHours()
        if (hours > 12) {
            hours -= 12
            this.setTime(true)
            return `${hours}`
        } 
        
        else if (hours == 0) {
            this.setTime(false)
            return '12'
        }

        else if (hours == 12) {
            this.setTime(true)
            return '12'
        }
        
        else {
            this.setTime(false)
            return `${hours}`
        }
    }

    getMinutes(date) {
        let minutes = date.getMinutes()
        if(minutes < 10) {
            return `0${minutes}`
        } else {
            return minutes
        }
    }

    setTime(condition) {
        if (condition) this.time = "PM"
        else this.time = "AM"
    }

    setDate() {
        let date = new Date()
        let dateString = `${this.getDay(date)} ${this.getMonth(date)} ${date.getDate()} ${this.getHours(date)}:${this.getMinutes(date)} ${this.time}`
        this.date.innerText = dateString;
    }

    // Iniatilization

    init() {
        setInterval(() => {
            this.setDate()
        }, 1000);

        new App({
            name: "Safari",
            window: "[data-window='safari']",
            shortcut: '[data-app="safari"]',
            dismiss: '[data-dismiss=safari]',
            minimize: '[data-minimize=safari]',
            header: '[data-header="safari"]'
        })

        new Gallery({
            name: "Photos",
            window: "[data-window='photos']",
            shortcut: '[data-app="photos"]',
            dismiss: '[data-dismiss=photos]',
            minimize: '[data-minimize=photos]',
            header: '[data-header="photos"]',
            render: '.photo__view__render',
            title: '.photo__view__title',
            items: '[data-photo]',
        })

        new Instagram({
            name: "Instagram",
            window: "[data-window='instagram']",
            shortcut: '[data-app="instagram"]',
            dismiss: '[data-dismiss=instagram]',
            minimize: '[data-minimize=instagram]',
            header: '[data-header="instagram"]',
            fields: {
                posts: '.instagram__body__profile__posts__count',
                type: '.instagram__body__profile__posts__type',
                content: '.instagram__body__content',
                username: '.instagram__body__title'
            }
        })

        new App({
            name: "Notepad",
            window: "[data-window='notepad']",
            shortcut: '[data-app="notepad"]',
            dismiss: '[data-dismiss=notepad]',
            minimize: '[data-minimize=notepad]',
            header: '[data-header="notepad"]'
        })

        new Spotify({
            name: "Spotify",
            window: "[data-window='spotify']",
            shortcut: '[data-app="spotify"]',
            dismiss: '[data-dismiss=spotify]',
            minimize: '[data-minimize=spotify]',
            header: '[data-header="spotify"]',
            music: {
                icon: '.spotify__music__trigger__state',
                trigger: '.spotify__music__trigger',
                audio: '#spotify__music__file',
                box: '.spotify__music'
            }
        })

        new Discord({
            name: "Discord",
            window: "[data-window='discord']",
            shortcut: '[data-app="discord"]',
            dismiss: '[data-dismiss=discord]',
            minimize: '[data-minimize=discord]',
            header: '[data-header="discord"]',
            trigger: '.discord__info__username',
            feedback: '.discord__feedback',
        })

        new App({
            name: "VSCode",
            window: "[data-window='vscode']",
            shortcut: '[data-app="vscode"]',
            dismiss: '[data-dismiss=vscode]',
            minimize: '[data-minimize=vscode]',
            header: '[data-header="vscode"]',
        })

        new App({
            name: "Figma",
            window: "[data-window='figma']",
            shortcut: '[data-app="figma"]',
            dismiss: '[data-dismiss=figma]',
            minimize: '[data-minimize=figma]',
            header: '[data-header="figma"]',
        })

        new App({
            name: "Settings",
            window: "[data-window='settings']",
            shortcut: '[data-app="settings"]',
            dismiss: '[data-dismiss=settings]',
            minimize: '[data-minimize=settings]',
            header: '[data-header="settings"]',
        })
    }
}

new Mac({
    nav: '.nav',
    date: '.nav__date',
    toolbar: '.toolbar',
})

