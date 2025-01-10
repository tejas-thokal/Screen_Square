let bar = document.querySelector(".bar");
let sidebar = document.querySelector(".sidebar");
let mode = "show"; // Initialize the mode
let main_content=document.querySelector(".main-content");

/*------side bar hide and show-----*/
const show_sidebar = () => {
    bar.addEventListener("click", () => {
        if (mode === "show") { // Check if mode is "show"
            sidebar.style.display = "none"; // Hide the sidebar
            mode = "hide"; // Update mode to "hide"
        } else {
            sidebar.style.display = "block"; // Show the sidebar
            mode = "show"; // Update mode to "show"
        }
    });
};

show_sidebar();
/*---change reviews for every 5sec--*/
let currentReviewIndex = 0;
        const reviews = document.querySelectorAll('.review-item');

function showNextReview() {
    reviews[currentReviewIndex].classList.remove('active');
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    reviews[currentReviewIndex].classList.add('active');
}

setInterval(showNextReview, 5000);

function goToPage() {
    window.location.href = "t-shirt.html"; // Replace with your desired URL
}

function homePage() {
    window.location.href = "index.html"; // Replace with your desired URL
}
// Select all star rating inputs
const ratingInputs = document.querySelectorAll('.rating-input');

ratingInputs.forEach((ratingInput) => {
  // Add click event listener to each star container
  ratingInput.addEventListener('click', (event) => {
    if (event.target.classList.contains('star')) {
      const stars = ratingInput.querySelectorAll('.star');
      const selectedValue = parseInt(event.target.getAttribute('data-value'));

      // Highlight stars up to the clicked one
      stars.forEach((star) => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= selectedValue) {
          star.classList.add('selected');
        } else {
          star.classList.remove('selected');
        }
      });
    }
  });
});
