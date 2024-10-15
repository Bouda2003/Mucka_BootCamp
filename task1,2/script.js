console.log("JavaScript is working!");
// 2.Dynamic Content Updates:
const aboutMeSection = document.getElementById("about-me");
const updateButton = document.getElementById("update-button");

updateButton.addEventListener("click", () => {
  // Update the content of the "About Me" section
  aboutMeSection.textContent = "New content...";
});
// 3. Navigation Bar Interactivity:
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);   

    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"   

    });
  });
});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.offsetTop;   

    const sectionHeight = section.offsetHeight;   

    const pageScroll = window.scrollY;

    if (pageScroll >= sectionTop && pageScroll < sectionTop + sectionHeight) {
      const navLink = document.querySelector(`nav a[href="#${section.id}"]`);
      navLinks.forEach(link => link.classList.remove("active"));
      navLink.classList.add("active");
    }
  });
});
// 4. Form Validation:
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");   

const errorMessage = document.getElementById("error-message");   


contactForm.addEventListener("submit", e => {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    errorMessage.textContent = "Please fill in all required fields.";
  } else if (!isValidEmail(emailInput.value)) {
    errorMessage.textContent = "Invalid email address.";
  } else {
    // Submit the form
    errorMessage.textContent = "";
    contactForm.submit();
  }
});

function isValidEmail(email) {
  // Implement your email validation logic here
  // For example, you can use a regular expression
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// 5. Toggle Light/Dark Mode:
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");   

  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark"   
 : "light");
});

// Set the initial theme based on the user's preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}
// 6. Modal Window for Project Previews:
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");
const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();   

    openModal();
  });
});

closeButton.addEventListener("click", () => {
  closeModal();
});

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display   
 = "none";
}
// 7. Interactive Skill Bars:
const skillBars = document.querySelectorAll(".skill-bar");

skillBars.forEach(bar => {
  const skillFill = bar.querySelector(".skill-fill");
  const skillPercentage = skillFill.getAttribute("style").match(/width: (\d+)%;/)[1];
  skillFill.style.transition = "width 0.5s ease";
  skillFill.style.width = "0%";

  // Animate the skill bar when it comes into view
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      skillFill.style.width = skillPercentage + "%";
    }
  });
  observer.observe(bar);
});
// 8. Image Carousel for Projects Section:
const carousel = document.querySelector(".carousel");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");   

const slides = carousel.querySelector(".slides");
const slideWidth = slides.offsetWidth;
let currentSlide = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
  currentSlide = index;
}

prevButton.addEventListener("click", () => {
  showSlide((currentSlide - 1 + slides.children.length) % slides.children.length);
});

nextButton.addEventListener("click", () => {
  showSlide((currentSlide + 1) % slides.children.length);
});

// Automatically rotate slides
setInterval(() => {
  showSlide((currentSlide + 1) % slides.children.length);
}, 3000);
// 9. Scroll-to-Top Button:
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display   
 = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior:   
 "smooth"
  });
});
// 10. Responsive JavaScript Features:
if (window.innerWidth < 768) {
    // Adjust the behavior of elements for mobile devices
  }
