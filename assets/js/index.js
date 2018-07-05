var quickReveal = ScrollReveal({
    duration: 400, scale: 1,
    easing: "linear", distance: "0px",
});

var slowReveal = ScrollReveal({
    duration:1500, scale: 1, viewFactor: 0.8,
    easing: "ease", distance: '100px'
});

quickReveal.reveal('.spread-image');
slowReveal.reveal('.fade-in');

function scrollToDiv(div) {
    el = document.getElementById(div)
    // Spelling 'behavior' with a 'u' breaks smooth scrolling..
    if (window.innerHeight > 600)
        el.scrollIntoView({behavior: "smooth", block: "center"});
    else
        el.scrollIntoView(false, {behavior: "smooth", block: "center"});
}
