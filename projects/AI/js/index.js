class Page {
    constructor() {
        this.setLinksInactive();
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
