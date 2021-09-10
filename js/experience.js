/*
 * @author Lufe Pedrosa
 * @gitHub gitBiohazard
 *
 */

// Locomotive Scroll
window.addEventListener('load', () => {
    setTimeout(() => {
        let device = window.innerWidth;
        if (device > 1025) {
            (function () {
                new LocomotiveScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true
                });
            })();
        }
        loadContent();
    }, 2000);
})

// Smooth jump

const targets = document.querySelectorAll('[data-anime]');
const windowHalf = window.innerHeight * 0.8;
function animeScroll() {
    targets.forEach((e) => {
        const isVisible = (e.getBoundingClientRect().top - windowHalf) < 0;
        if (isVisible) {
            e.classList.add('animate');
        } else {
            e.classList.remove('animate');
        }
    });
}
animeScroll();
window.addEventListener('scroll', animeScroll);

// Projects

const projects = document.querySelectorAll('[data-project]');
const buttons = document.querySelectorAll('[data-button]');

projects.forEach((e) => {
    e.addEventListener('mouseover', () => {
        changeProjects(e.getAttribute('data-project'));
    })

    e.addEventListener('mouseout', wipeProjects)
})

function changeProjects(param) {
    buttons.forEach((e) => {
        if (e.getAttribute('data-button') === param) {
            e.classList.remove('d-none');
        }
    })
}

function wipeProjects() {
    buttons.forEach((e) => {
        e.classList.add('d-none');
    })
}

function petAppear() {
    let pet = document.querySelector('[data-pet]');
    pet.classList.toggle('petHover')
}

// Load Content

const pageBody = document.querySelector('body');
pageBody.style.overflow = "hidden";

function loadContent() {
    let load = document.querySelector('.loading');
    load.classList.add('d-none');
    pageBody.style.overflow = "auto";
}