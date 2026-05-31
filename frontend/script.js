// =============================================
// COUNTER ANIMATION (Intersection Observer)
// =============================================
const counters = document.querySelectorAll('.counter');

const observerOptions = {
    threshold: 0.7
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText.replace(/,/g, '');
                const increment = target / 100;

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment).toLocaleString();
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };

            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    counterObserver.observe(counter);
});


// =============================================
// MOBILE NAVIGATION
// =============================================
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}


// =============================================
// CONTACT FORM
// =============================================
const form    = document.getElementById('contactForm');
const message = document.getElementById('successMessage');

if (form && message) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData    = new FormData(form);
        const name        = formData.get('name')?.trim();
        const email       = formData.get('email')?.trim();
        const messageText = formData.get('message')?.trim();

        // Validation
        if (!name || !email || !messageText) {
            message.textContent = 'Please fill in all required fields.';
            message.style.color = '#ef4444';
            return;
        }

        // Basic email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            message.textContent = 'Please enter a valid email address.';
            message.style.color = '#ef4444';
            return;
        }

        // Success state
        message.textContent = "Thank you! Your message has been received. We'll get back to you within 24 hours.";
        message.style.color = '#2ca25f';

        form.reset();

        // Clear message after 6 seconds
        setTimeout(() => {
            message.textContent = '';
        }, 6000);
    });
}


// =============================================
// SMOOTH SCROLLING
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition  = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});


// =============================================
// HEADER SCROLL EFFECT
// =============================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;

    if (window.scrollY > 80) {
        header.style.background   = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow    = '0 2px 24px rgba(44, 162, 95, 0.1)';
        header.style.borderBottom = '1px solid rgba(44, 162, 95, 0.15)';
    } else {
        header.style.background   = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow    = 'none';
        header.style.borderBottom = '1px solid rgba(44, 162, 95, 0.15)';
    }
}, { passive: true });


// =============================================
// FADE-IN ON SCROLL (Section Elements)
// =============================================
const fadeEls = document.querySelectorAll('.about-card, .service-item, .stat-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${i * 0.08}s`;
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    fadeObserver.observe(el);
});

// Inject "visible" class styles
const visibleStyle = document.createElement('style');
visibleStyle.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(visibleStyle);