//Activate Menu Button//
let menuBtn = document.querySelector("#menu-btn");
let menuBar = document.querySelector("#menu-bar");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("bx-x");
    menuBar.classList.toggle("active");
}

//lets remove menu bar on scroll//

window.onscroll = () =>{
    menuBtn.classList.remove('bx-x')
    menuBar.classList.remove('active')
}

// Scroll Reveal //

ScrollReveal({
reset: true,
distance: '100px',
duration: 2000,
delay: 200
});

ScrollReveal().reveal('.home-bio h1, .about-resume', {origin:'left'});
ScrollReveal().reveal('.home-bio p', {origin:'right'});
ScrollReveal().reveal('.home-bio heading', {origin:'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .project-items, .form ', {origin:'bottom'});

//Typing Animation // 

const animText1 = new Typed ('.animated-text1',{
    strings:['Web Developer In-Training' ,'Digital Media Artist' , 'Logo Designer' , 'Photograpgher'],
    backSpeed: 100,
    typeSpeed: 50,
    backDelay: 100,
    loop: true
});

const animText2 = new Typed ('.animated-text2',{
    strings:['Front-End Web Developer In-Training' ,'Digital Media Artist' , 'Logo Designer' , 'Photograpgher'],
    backSpeed: 100,
    typeSpeed: 50,
    backDelay: 100,
    loop: true
});