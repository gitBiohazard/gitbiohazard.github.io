// When the user scrolls, reveal the elements

const windowMetade = window.innerHeight * 0.85;
const targets = document.querySelectorAll('[data-anime]');

function animeScroll() {
    targets.forEach((e) => {
        const isVisible = (e.getBoundingClientRect().top - windowMetade) < 0;
        if (isVisible) {
            e.classList.add('animate');
        } else {
            e.classList.remove('animate');
        }
    })
}
animeScroll();
window.addEventListener('scroll', animeScroll);

// Type writer

var i = 0;
var txt = document.getElementById("type").innerHTML;
document.getElementById("type").innerHTML = "";
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("type").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();