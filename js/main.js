// Custom cursor, hamburger menu, and other interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.getElementById('cursor');

    // Update cursor position on mouse move
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Optional: Hide cursor when leaving the window
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '1';
    });

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('nav-mobile');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMobile.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('#nav-mobile a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMobile.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMobile.contains(e.target)) {
            hamburger.classList.remove('active');
            navMobile.classList.remove('active');
        }
    });

    // Form validation and submission (basic)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Update year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Add a class to the body when scrolling to change navbar style
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-down');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // Scrolling down
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // Scrolling up
            navbar.classList.remove('scroll-down');
        }
        lastScroll = currentScroll;
    });

    // Hide preloader after page loads
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    }, 500);

// Image Lightbox Functionality
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Open lightbox when clicking on gallery images
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = item.querySelector('img');
            const caption = item.querySelector('.overlay h3');

            // Set the image source and alt text
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

            // Set the caption
            lightboxCaption.textContent = caption.textContent;

            // Show the lightbox
            lightbox.style.display = 'block';

            // Add animation class
            const lightboxContent = document.querySelector('.lightbox-content');
            lightboxContent.classList.add('zoom-in');

            // Remove animation class after animation ends
            setTimeout(() => {
                lightboxContent.classList.remove('zoom-in');
            }, 500);
        });
    });

    // Close lightbox when clicking on close button
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });

    // Binary background rain effect
    const binaryBg = document.querySelector('.binary-background');
    if (binaryBg) {
        let offset = 0;
        const speed = 40; // pixels per second
        let lastTimestamp = 0;
        const update = (timestamp) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const delta = (timestamp - lastTimestamp) / 1000; // seconds
            lastTimestamp = timestamp;
            offset += speed * delta;
            if (offset > 10000) offset = 0;
            binaryBg.style.backgroundPosition = `0 ${offset}px`;
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }
});