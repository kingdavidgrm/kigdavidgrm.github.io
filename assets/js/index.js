var quickReveal = ScrollReveal({
    duration: 400, scale: 1, viewFactor: 0.3,
    easing: "ease"
});

var slowReveal = ScrollReveal({
    duration: 800, scale: 1, viewFactor: 0.3,
    easing: "ease"
});

quickReveal.reveal('.spread-image');
slowReveal.reveal('.fade-in');

var music   = document.getElementById("music-wrapper");
var shows   = document.getElementById("shows-wrapper");
var about   = document.getElementById("about-wrapper");
var contact = document.getElementById("contact-wrapper");

// If you're reading this code, please dont't hate.
// Yes I'd like it to be DRYer, but I'd also like to
// ship this product, and making it modular isn't going
// to save that much time in the future

function scrollToMusic()  { scrollToDiv(music); }
function scrollToShows()  { scrollToDiv(shows); }
function scrollToAbout()  { scrollToDiv(about); }
function scrollToContact()  { scrollToDiv(contact); }

function scrollToDiv(div) {
// Spelling 'behavior' with a 'u' breaks smooth scrolling..
    div.scrollIntoView({behavior: "smooth", block: "start"});
}
