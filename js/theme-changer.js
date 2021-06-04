function changeMenu() {
    const menu = document.querySelector('#theme-menu');
    menu.classList.toggle('d-none');
    
}

function changeTheme(color) {
    const holder = document.querySelector('body');
    const mainFox = document.querySelector('#mainFox');
    const mobileMainFox = document.querySelector('#mobileMainFox');
    holder.classList.remove('ametista', 'diamante', 'esmeralda', 'rubelita', 'rubi', 'safira', 'topaz');
    holder.classList.add(color);
    mainFox.src = "../img/brands/" + color + ".png";
    mobileMainFox.src = "../img/brands/" + color + ".png";
    localStorage.setItem('favoriteColor', color);
    changeMenu();
}

