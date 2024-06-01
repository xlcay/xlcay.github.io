document.addEventListener("DOMContentLoaded", () => {
    const ratingButtons = document.querySelectorAll(".star-rating");
    const submitButton = document.querySelector(".sbmtbtn");
    const selectedRatingElement = document.querySelector(".selectedrating");
    const container1 = document.querySelector(".container");
    const container2 = document.querySelector(".container2");

    let selectedRating = 0;  // Variable to store the user's rating

    // Add event listeners to all rating buttons
    ratingButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedRating = this.getAttribute("data-value");  // Get the rating from data-value attribute
            // Highlight the selected button
            ratingButtons.forEach(btn => btn.style.backgroundColor = "");  // Reset styles
            this.style.backgroundColor = "var(--mediumgrey)";  // Highlight selected button
        });
    });

    // Add event listener to the submit button
    submitButton.addEventListener("click", function() {
        if (selectedRating !== 0) {
            selectedRatingElement.textContent = selectedRating;  // Update the displayed rating
            container1.style.display = "none";  // Hide the rating container
            container2.style.display = "flex";  // Show the thank you message container
        } else {
            alert("Please select a rating before submitting!");  // Prompt user to select a rating if they haven't
        }
    });
});
