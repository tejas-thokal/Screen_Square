const roundNeckBtn = document.getElementById('round-neck-btn');
const poloNeckBtn = document.getElementById('polo-neck-btn');
const roundNeckProducts = document.getElementById('round-neck-products');
const poloNeckProducts = document.getElementById('polo-neck-products');
let bar = document.querySelector(".bar");
let sidebar = document.querySelector(".sidebar");
let mode = "show"; // Initialize the mode
let main_content=document.querySelector(".main-content");
const dynamicImage = document.getElementById("dynamic-image");
let currentIndex = 0;

    // Event listeners for toggling products
    roundNeckBtn.addEventListener('click', () => {
      roundNeckProducts.classList.add('active');
      poloNeckProducts.classList.remove('active');
      roundNeckBtn.classList.add('active');
      poloNeckBtn.classList.remove('active');
    });

    poloNeckBtn.addEventListener('click', () => {
      poloNeckProducts.classList.add('active');
      roundNeckProducts.classList.remove('active');
      poloNeckBtn.classList.add('active');
      roundNeckBtn.classList.remove('active');
    });


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






