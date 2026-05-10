// SMOOTH SCROLL FOR NAV LINKS

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const targetId = this.getAttribute("href");

    const targetSection =
      document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });

  });

});


// HERO BUTTON SMOOTH SCROLL

const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("click", function(e){

  e.preventDefault();

  document.querySelector("#genres")
  .scrollIntoView({
    behavior: "smooth"
  });

});


// HOVER GLOW EFFECT FOR ARTIST CARDS

const artistCards =
  document.querySelectorAll(".artist-card");

artistCards.forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.boxShadow =
      "0 0 30px rgba(255,152,0,.5)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow =
      "0 5px 20px rgba(0,0,0,.4)";
  });

});