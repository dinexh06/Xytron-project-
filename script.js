document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS for animations
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
    });

    // ScrollMagic controller for scroll-based animations
    const controller = new ScrollMagic.Controller();

    // ScrollMagic scene for the "About Us" section
    new ScrollMagic.Scene({
            triggerElement: '#about',
            triggerHook: 0.5,
            reverse: false
        })
        .setClassToggle('#about', 'fade-in')
        .addTo(controller);

    // ScrollMagic scene for the "Services" section
    new ScrollMagic.Scene({
            triggerElement: '#services',
            triggerHook: 0.5,
            reverse: false
        })
        .setClassToggle('#services', 'fade-in')
        .addTo(controller);

    // ScrollMagic scene for the "Team" section
    new ScrollMagic.Scene({
            triggerElement: '#team',
            triggerHook: 0.5,
            reverse: false
        })
        .setClassToggle('#team', 'fade-in')
        .addTo(controller);

    // ScrollMagic scene for the "Course" section
    new ScrollMagic.Scene({
            triggerElement: '#course',
            triggerHook: 0.5,
            reverse: false
        })
        .setClassToggle('#course', 'fade-in')
        .addTo(controller);

    // ScrollMagic scene for the "Contact" section
    new ScrollMagic.Scene({
            triggerElement: '#contact',
            triggerHook: 0.5,
            reverse: false
        })
        .setClassToggle('#contact', 'fade-in')
        .addTo(controller);

    // GSAP animation for the hero content
    gsap.from('.hero-content', {
        duration: 1,
        y: -50,
        opacity: 0,
        delay: 0.5
    });
});

// Loader display management
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});