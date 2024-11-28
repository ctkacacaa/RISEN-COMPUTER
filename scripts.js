// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Product cards hover effect
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Buy button click handler
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        const productPrice = this.parentElement.querySelector('.price').textContent;
        alert(`Thank you for your interest in ${productName}!\nPrice: ${productPrice}\nA representative will contact you soon.`);
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        header.style.backgroundColor = '#1a1a1a';
    }
});

// Simple form validation for contact form (if added later)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form validation logic here
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});