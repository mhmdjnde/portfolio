const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const resume = document.getElementById("resume");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

let lastScrollTop = 0;
const navbar = document.getElementById("navv");

window.addEventListener("scroll", function () {
  let currentScrollTop = document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    navbar.style.animationDuration = "0.3s";
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = currentScrollTop;
});

function toggleMenu() {
  const nav = document.querySelector("nav ul.nav");
  nav.classList.toggle("show");
}

function gohome() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function goabout() {
  window.scrollTo({
    top: document.getElementById("abouttop").offsetTop,
    behavior: "smooth",
  });
}

function goresume() {
  window.scrollTo({
    top: document.getElementById("resumetop").offsetTop,
    behavior: "smooth",
  });
}

function goskills() {
  window.scrollTo({
    top: document.getElementById("sklls").offsetTop,
    behavior: "smooth",
  });
}

function goprojects() {
  window.scrollTo({
    top: document.getElementById("protop").offsetTop,
    behavior: "smooth",
  });
}
