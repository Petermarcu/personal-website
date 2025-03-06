document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Simple validation
            if (nameInput.value.trim() === '' || 
                emailInput.value.trim() === '' || 
                messageInput.value.trim() === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show a success message
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // Add animation to skills section when scrolled into view
    const skills = document.querySelectorAll('.skill');
    
    function checkScroll() {
        skills.forEach(skill => {
            const slideInAt = (window.scrollY + window.innerHeight) - skill.clientHeight / 2;
            const skillBottom = skill.offsetTop + skill.clientHeight;
            const isHalfShown = slideInAt > skill.offsetTop;
            const isNotScrolledPast = window.scrollY < skillBottom;
            
            if (isHalfShown && isNotScrolledPast) {
                skill.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
});
