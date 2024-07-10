document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling Functionality
    const navLinks = document.querySelectorAll('nav ul li a');
    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    /**
     * Smooth scrolls to the target section when a navigation link is clicked.
     * @param {Event} event - The click event.
     */
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        window.requestAnimationFrame(step);

        /**
         * Animates the scrolling step by step.
         * @param {number} timestamp - The current time.
         */
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));
            if (progress < duration) window.requestAnimationFrame(step);
        }

        /**
         * Easing function for smooth scrolling.
         * @param {number} t - The current time ratio.
         * @returns {number} - The eased value.
         */
        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
    }

    // Slide Images Functionality
    slideImages();
});

/**
 * Slides images in the activities section one by one.
 */
function slideImages() {
    const images = document.querySelectorAll('#activities .content img');
    let currentImageIndex = 0;

    setInterval(() => {
        images[currentImageIndex].style.opacity = 0; // Hide current image
        currentImageIndex = (currentImageIndex + 1) % images.length; // Move to next image
        images[currentImageIndex].style.opacity = 1; // Show next image
    }, 3000); // Adjust slide interval as needed (e.g., every 3 seconds)
}
