// Smooth scroll to sections
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn("Target section not found:", this.getAttribute('href'));
            }
        });
    });
});

document.querySelector('.menu-btn').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('nav ul').classList.toggle('active');
});

// Highlight the current section in the header
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const buffer = 150; // Added a buffer to ensure accurate detection
        
        if (window.scrollY >= sectionTop - buffer && window.scrollY < sectionTop + sectionHeight - buffer) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active");
        }
    });
});
