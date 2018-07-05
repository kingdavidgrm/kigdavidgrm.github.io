var quickReveal = ScrollReveal({
    duration: 600, scale: 1, viewFactor: 0.3,
    easing: "ease"
});

var slowReveal = ScrollReveal({
    duration: 800, scale: 1, viewFactor: 0.3,
    easing: "ease"
});

quickReveal.reveal('.spread-image');
slowReveal.reveal('.fade-in');

function scrollToDiv(div) {
    el = document.getElementById(div)
    // Spelling 'behavior' with a 'u' breaks smooth scrolling..
    el.scrollIntoView({behavior: "smooth", block: "start"});
}
