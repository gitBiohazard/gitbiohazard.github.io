import App from "./App.js";

export default class Instagram extends App {
    constructor({ name, window, shortcut, dismiss, minimize, header, fields }) {
        super({ name, window, shortcut, dismiss, minimize, header })
        this.token = "IGQVJWMkpkN1BzcjNhQmVkUFc5MEpSVXM3XzItMWFqTUlpTXY5X1A2TWVsT2NFVTJhYUpXRTdTSnFVU3ZAVV2ItZATZAQOW1oeWh3cTltdm1pcUhTSFBVYU50R3pTU0t2VnAxSXktLXlaQXQzaE9TcVY1bgZDZD"
        this.mediaUrl = `https://graph.instagram.com/me/media?access_token=${this.token}&fields=media_url,media_type,caption,permalink`
        this.userUrl = `https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${this.token}`
        this.fields = {
            posts: document.querySelector(fields.posts),
            username: document.querySelector(fields.username),
            type: document.querySelector(fields.type),
            content: document.querySelector(fields.content)
        }
        this.getData()
    }

    getData() {
        fetch(this.userUrl).then(resp => resp.json()).then(resp => {
            this.username = resp.username
            this.fields.username.innerText = resp.username
            this.fields.posts.innerText = resp.media_count
            this.fields.type.innerText = resp.account_type
        }).then(() => {
            fetch(this.mediaUrl).then(resp => resp.json()).then(resp => {
                resp.data.forEach(item => {
                    let div = document.createElement('div')
                    div.style.width = "100%"
                    div.className = "instagram__post"
                    let image = document.createElement('img')
                    image.style.width = "100%"
                    image.src = item.media_url
                    image.id = item.id
                    let label = document.createElement('div')
                    label.style.width = "100%"
                    label.style.height = "40px"
                    div.append(image)
                    div.append(label)
                    let span = document.createElement('span')
                    span.className = "instagram__post__author"
                    span.innerText = `@${this.username}: `
                    let caption = document.createElement('span')
                    caption.className = "instagram__post__caption"
                    if (item.caption) {
                        if (item.caption.length > 24) {
                            caption.innerText = `${item.caption.substr(0, 19)}...`
                        }
                        else {
                            caption.innerText = item.caption
                        }
                    } else {
                        caption.innerText = "São Paulo, Brazil"
                    }
                    label.append(span, caption)
                    this.fields.content.append(div)
                });
            })
        })
    }
}