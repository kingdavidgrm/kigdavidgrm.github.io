var music   = document.getElementById("music")
var shows   = document.getElementById("shows")
var music   = document.getElementById("music")
var contact = document.getElementById("contact")

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
    div.scrollIntoView({behavior: "smooth", block: "center"});
}
