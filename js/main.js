//Select element
const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');
});

//Carousel
$('.carousel').carousel();

//Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    duration : 1000,
    distance: '25 rem',
    delay : 200
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration : 1000,
    distance: '25 rem',
    delay : 500
});

sr.reveal('.cloud-left',{
    origin: 'left',
    duration : 1000,
    distance: '25 rem',
    delay : 400
});

sr.reveal('.cloud-right',{
    origin: 'right',
    duration : 1000,
    distance: '25 rem',
    delay : 400
});

