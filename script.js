// js/script.js

// Fade-in effect on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        },
        { threshold: 0.1 }
    );
    
    sections.forEach((section) => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});






// Get the carousel container and project list
const projectList = document.querySelector('.project-list');

// Function to move the carousel to the left
function moveCarousel() {
    // Shift the first project item to the end of the list (in a circular fashion)
    const firstProject = document.querySelector('.project-item');
    projectList.appendChild(firstProject); // Move first project to the end
    projectList.style.transform = 'translateX(0)'; // Reset transform after append
}

// Function to slide left automatically every 5 seconds
function startCarousel() {
    setInterval(() => {
        projectList.style.transform = 'translateX(-50%)'; // Move the projects 50% to the left (i.e. slide by 2 items)
        setTimeout(moveCarousel, 5000); // After 1 second, move the first item to the end
    }, 5000); // Slide every 5 seconds
}

// Start the carousel when the page loads
window.onload = startCarousel;
