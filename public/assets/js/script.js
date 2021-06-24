function toggleNav() {
    let myNav = document.getElementById("myNav");
    myNav.style.height = myNav.style.height === '100%' ? '0' : '100%';
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    let nav = document.querySelector('nav')
    let navLogIn = document.querySelector('#navLogIn')
    if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
        nav.classList.add('scrl-nav')
        navLogIn.classList.add('btn-secondary-gold')
    } else {
        nav.classList.remove('scrl-nav')
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