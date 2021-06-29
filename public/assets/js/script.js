
const userNav = document.querySelector('#userNav');    
const navOverlay = document.querySelector('#navOverlay');  

function toggleNav() {
    let myNav = document.getElementById("myNav");
    myNav.style.height = myNav.style.height === '100%' ? '0' : '100%';
    navOverlay.style.display = 'flex'
}

let landingNav = document.querySelector('.landing-nav')
let navLogIn = document.querySelector('#navLogIn')
let pathName = window.location.pathname.replace("/public", '')



window.onscroll = pathName === '/' ? function() {scrollFunction()} : ''
function scrollFunction() {
   
    if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
        landingNav.classList.add('scrl-nav')
        navLogIn.classList.add('btn-secondary-gold')
    } else {
        landingNav.classList.remove('scrl-nav')
        navLogIn.classList.remove('btn-secondary-gold')
    }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("accordionActive");
        this.parentElement.classList.toggle("border-b")
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        this.children[1].classList.toggle('-rotate-180')
    });
}
  

const openUserNav = () => {       
    if (window.innerWidth >= 768 && userNav.style.display === '') {
        userNav.style.display = 'flex'
        navOverlay.style.display = 'flex'
    } else {
        closeNav()
    }
}

const closeNav = () => {    
    userNav.style.display = ''   
    navOverlay.style.display = ''
    window.innerWidth >= 768 ? '' : myNav.style.height = '0'
}
