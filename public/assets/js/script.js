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
        for(j = 0; j < acc.length; j++) {
            acc[j].nextElementSibling.style.maxHeight = null;
            acc[j].classList.remove("accordionActive");
            acc[j].parentElement.classList.remove("border-b")
        }
        this.classList.toggle("accordionActive");
        this.parentElement.classList.toggle("border-b")
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}