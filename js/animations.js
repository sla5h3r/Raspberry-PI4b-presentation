// GSAP animations and ScrollTrigger
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Function to initialize animations
function initAnimations() {
    // Fade up animation for elements with class 'fade-up'
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Animate the hero content on load
    gsap.fromTo('.hero-content h1',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out'
        }
    );

    gsap.fromTo('.hero-content .tagline',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.8,
            ease: 'power3.out'
        }
    );

    // Add a gentle floating animation to the hero content
    gsap.to('.hero-content', {
        y: -15,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
    });

    // Animate the three.js container (fade-in and subtle pulse)
    gsap.fromTo('#three-container',
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1.5,
            delay: 0.5,
            ease: 'power3.out'
        }
    );

    // Add a subtle pulse to the 3D container
    gsap.to('#three-container', {
        scale: 1.02,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
    });

    // Animate navigation links on hover (we'll do this in CSS, but we can also add GSAP for more complex effects)
    // We'll keep it in CSS for simplicity.

    // Animate feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Animate gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                delay: index * 0.05,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Animate about section
    gsap.fromTo('.about-text',
        { opacity: 0, x: -50 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-text',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    gsap.fromTo('.about-image',
        { opacity: 0, x: 50 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-image',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // Animate contact form
    gsap.fromTo('.contact-form',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // Animate footer
    gsap.fromTo('#footer',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#footer',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // Add a subtle pulse to section titles on scroll
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        gsap.fromTo(title,
            { scale: 0.9 },
            {
                scale: 1,
                duration: 0.6,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Initialize animations when the DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations);