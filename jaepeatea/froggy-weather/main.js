document.addEventListener('DOMContentLoaded', () => {
    // Inject the current year dynamically into the footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Intersection Observer for smooth scrolling fade-in animations
    const animatedElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% of the element enters the viewport
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once the animation has triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.nav-links a, .btn-nav').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Ignore if it's an empty link
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for the floating nav bar height when scrolling
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - 40;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });

    // Modal Logic
    const getAppBtn = document.getElementById('get-app-btn');
    const modalOverlay = document.getElementById('download-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    // Open Modal
    if (getAppBtn) {
        getAppBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents page jumping
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevents scrolling while modal is open
        });
    }

    // Close Modal when clicking the 'X'
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restores scrolling
        });
    }

    // Close Modal when clicking outside the box
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Prevent disabled iOS buttons from doing anything if clicked
    document.querySelectorAll('.disabled').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
});