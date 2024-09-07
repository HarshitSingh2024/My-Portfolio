var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});

const burger = document.querySelector('.burger');
const navright = document.querySelector('.navright');
const navItems = navright.querySelectorAll('a'); // Adjust selector based on your HTML structure

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navright.classList.remove('active');
    });
});

burger.addEventListener('click', () => {
    navright.classList.toggle('active');
});



gsap.from(".navleft img , .navright h4", {
    y: -100,
    duration: .5,
    delay: .5,
    opacity: 0,
    stagger: .5,
})

gsap.from(".portfolio-ctn .container", {
    y: 50,
    duration: .1,
    delay: 1,
    opacity: 0,
    stagger: .5,
    scrollTrigger: {
        trigger: "#portfolio",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 10%",
        scrub: 1,
    },
});

gsap.from("#first-exp , #second-exp", {
    x: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: "#exp",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top -20%",
        scrub: 1,
    },
})