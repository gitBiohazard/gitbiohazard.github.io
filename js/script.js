let aboutButton = document.querySelector('.about-me');

function onAboutOver(){
    document.querySelector('.button-text').classList.add('black-letter');
    document.querySelector('#circle').classList.add('d-none');
}

function onAboutOut(){
    document.querySelector('.button-text').classList.remove('black-letter');
    document.querySelector('#circle').classList.remove('d-none');
}

function onAboutClick() {
    document.querySelector('#about').classList.remove('d-none');
    document.querySelector('#circle').classList.remove('d-none');
    document.querySelector('#circle').classList.add('circle-black');
    document.querySelector('main').classList.add('d-none');
    let url = location.href;
    if (url.includes("#contact")) {
        location.href="#content";
    }
}

function onHomeOver(){
    document.querySelector('.button-text-2').classList.add('white-letter');
    document.querySelector('#circle').classList.add('d-none');
}

function onHomeOut(){
    document.querySelector('.button-text-2').classList.remove('white-letter');
    document.querySelector('#circle').classList.remove('d-none');
}

function onHomeClick() {
    document.querySelector('#about').classList.add('d-none');
    document.querySelector('#circle').classList.remove('d-none');
    document.querySelector('#circle').classList.remove('circle-black');
    document.querySelector('main').classList.remove('d-none');
}


function onProjectOver(projectName) {
    document.querySelector('#'+projectName+"-btn").classList.remove('d-none');
}

function onProjectOut(projectName) {
    document.querySelector('#'+projectName+"-btn").classList.add('d-none');
}

function onSocialOver() {
    document.querySelector('.social-text').classList.add('black-letter');
    document.querySelector('#circle').classList.add('d-none');
    
}

function onSocialOut(){
    document.querySelector('.social-text').classList.remove('black-letter');
    document.querySelector('#circle').classList.remove('d-none');
}

function onSocialClick() {
    document.querySelector('.github').classList.toggle('d-none');
    document.querySelector('.instagram').classList.toggle('d-none');
    document.querySelector('.linkedin').classList.toggle('d-none');
}

function onContactClick() {
    onAboutClick();
    location.href="#contact";
}
