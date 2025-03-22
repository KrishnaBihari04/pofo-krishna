//dynamic-text
document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.querySelector(".dynamic-text");
  const texts = ["Software Developer", "Graphic Designer"];
  let index = 0;

  setInterval(() => {
    dynamicText.style.opacity = 0;
    setTimeout(() => {
      dynamicText.textContent = texts[index];
      dynamicText.style.opacity = 1;
      index = (index + 1) % texts.length;
    }, 500);
  }, 2000);
});

//hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// Sluit menu bij klikken op een link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
// Sluit menu bij klikken buiten het menu
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// //startscherm
// // Wacht tot het document volledig is geladen
// document.addEventListener("DOMContentLoaded", function () {
//   // Animatie eigenschappen
//   triangle.style.animation = `flyUp ${animationDuration}s linear ${delay}s infinite`;

//   // Voeg toe aan container
//   triangleContainer.appendChild(triangle);
// });

document.addEventListener("DOMContentLoaded", function () {
  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll(".skill-level");
  skillBars.forEach((bar) => {
    const skillValue = bar.getAttribute("data-skill");
    setTimeout(() => {
      bar.style.width = skillValue + "%";
    }, 500);
  });

  // Setup intersection observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Add the hidden class to elements we want to animate on scroll
  const animatedElements = document.querySelectorAll(
    ".project-card, .personal-info, .skills-section, .contact-form"
  );
  animatedElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  // Mobile menu animation
  // const hamburger = document.querySelector(".hamburger");
  // const navMenu = document.querySelector(".nav-menu");

  // if (hamburger) {
  //   hamburger.addEventListener("click", function () {
  //     this.classList.toggle("active");
  //     navMenu.classList.toggle("active");
  //   });
  // }
});
