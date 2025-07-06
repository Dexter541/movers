// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle - handled by side nav below

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Mobile Side Nav logic
document.addEventListener('DOMContentLoaded', function() {
    const sideNav = document.getElementById('sideNav');
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const closeSideNav = document.getElementById('closeSideNav');

    // Create overlay for side nav
    let sideNavOverlay = document.getElementById('sideNavOverlay');
    if (!sideNavOverlay) {
        sideNavOverlay = document.createElement('div');
        sideNavOverlay.id = 'sideNavOverlay';
        document.body.appendChild(sideNavOverlay);
    }

    function openSideNav() {
        console.log('Opening side nav');
        if (sideNav) {
            sideNav.classList.add('open');
            sideNav.setAttribute('aria-hidden', 'false');
        }
        sideNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeSideNavFunc() {
        console.log('Closing side nav');
        if (sideNav) {
            sideNav.classList.remove('open');
            sideNav.setAttribute('aria-hidden', 'true');
        }
        sideNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', openSideNav);
        console.log('Mobile menu button listener added');
    } else {
        console.log('Mobile menu button not found');
    }
    
    if (closeSideNav) {
        closeSideNav.addEventListener('click', closeSideNavFunc);
        console.log('Close side nav button listener added');
    } else {
        console.log('Close side nav button not found');
    }
    
    if (sideNavOverlay) {
        sideNavOverlay.addEventListener('click', closeSideNavFunc);
    }
    
    if (sideNav) {
        sideNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeSideNavFunc);
        });
        console.log('Side nav found and link listeners added');
    } else {
        console.log('Side nav not found');
    }
});