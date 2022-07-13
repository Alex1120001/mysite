let icon_burger = document.querySelector('.icon-burger');
let menu_header = document.querySelector('.menu-header');

icon_burger.onclick = function(){
    menu_header.style.width = '70%';
}

let close = document.querySelector('.close');

close.onclick = function(){
    menu_header.style.width = '0px';
}
const innerWidth = window.screen.width;

if( window.innerWidth <= 960 ){
    menu_header.onclick = function(){
        menu_header.style.width = '0px';
    }
}
// якір 
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
