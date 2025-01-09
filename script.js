let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow' , window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');

}
window.onscroll = () => {
    navbar.classList.remove('active')
}


var typingEffect = new Typed(".typedText",{
    strings:["Designer","Developer","Freelancer"],
    loop:true,
    typeSpeed:100,
    backSpeed:88,
    backDelay:2000,
});

let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
        
    
}

const sr = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration:2000,
    reset:true
})

sr.reveal(".social_icons",{});
sr.reveal(".featured-name",{delay:200});
sr.reveal(".featured-text",{delay:200});
sr.reveal(".featured-text-info",{delay:200});
sr.reveal(".featured-image",{delay:200 });
sr.reveal(".heading",{delay:200 });
sr.reveal(".service-content",{delay:200 });

const srLeft = ScrollReveal({
    origin:'left',
    distance: '80px',
    duration:2000,
    reset:true
})

srLeft.reveal(".about-container",{delay:200});
srLeft.reveal(".contact-form",{delay:100});

const srRight = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration:2000,
    reset:true
})

srRight.reveal(".portfolio-content",{delay:200});
srRight.reveal(".skill",{delay:100});