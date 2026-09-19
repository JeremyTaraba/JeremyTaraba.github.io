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

    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });

    // --- Image Lightbox Logic ---
    const imageModal = document.getElementById('image-modal');
    const fullSizeImg = document.getElementById('full-size-img');
    const closeImageModal = document.querySelector('.close-image-modal');
    const galleryImages = document.querySelectorAll('.asset-img');

    if (imageModal && fullSizeImg) {
        // Open modal when any gallery image is clicked
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                fullSizeImg.src = img.src; // Copy the clicked image's source
                fullSizeImg.alt = img.alt;
                imageModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent page from scrolling in the background
            });
        });

        // Reusable function to close the modal
        const closeLightbox = () => {
            imageModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore background scrolling
            
            // Clear the src after the fade-out animation finishes to prevent "ghosting"
            setTimeout(() => {
                if (!imageModal.classList.contains('active')) {
                    fullSizeImg.src = '';
                }
            }, 300);
        };

        // Close when clicking the "X" button
        closeImageModal.addEventListener('click', closeLightbox);

        // Close when clicking the dark background (outside the image itself)
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeLightbox();
            }
        });

        // Close when pressing the "Escape" key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && imageModal.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
});