document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1; // Start with the first image (1-indexed for easier handling)
    const slides = document.querySelectorAll('.imageshow');
    const numberOfSlides = slides.length;
    let slideInterval;

    function showSlides() {
        // Hide all slides
        slides.forEach(slide => slide.style.display = 'none');

        // Check for bounds and wrap around
        if (slideIndex > numberOfSlides) {
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = numberOfSlides;
        }

        // Display the current slide
        slides[slideIndex - 1].style.display = 'block';

        // Reset the timer
        clearTimeout(slideInterval);
        slideInterval = setTimeout(function() { plusSlides(1); }, 5000); // Change image every 5 seconds
    }

    // Initial call to start the slideshow
    showSlides();

    // Function to handle next/prev actions
    window.plusSlides = function(n) {
        slideIndex += n;
        showSlides();
    };
});


