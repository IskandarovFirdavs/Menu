// Recipes Data
const recipes = [
  {
    id: 1,
    title: "Creamy Tomato Pasta",
    description:
      "A luxurious pasta dish with rich tomato sauce and a hint of cream",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2670&auto=format&fit=crop",
    time: "30 min",
    rating: 4.8,
    difficulty: "Easy",
    ingredients: [
      "8 oz pasta",
      "2 tbsp olive oil",
      "3 cloves garlic, minced",
      "1 can (14 oz) crushed tomatoes",
      "1/2 cup heavy cream",
      "1/4 cup fresh basil, chopped",
      "1/2 cup parmesan cheese, grated",
      "Salt and pepper to taste",
    ],
    steps: [
      "Cook pasta according to package instructions until al dente.",
      "In a large pan, heat olive oil and sauté minced garlic until fragrant.",
      "Add crushed tomatoes and simmer for 10 minutes.",
      "Stir in heavy cream and simmer for another 5 minutes.",
      "Add drained pasta to the sauce and toss to coat.",
      "Garnish with fresh basil and parmesan cheese before serving.",
    ],
  },
  {
    id: 2,
    title: "Avocado & Quinoa Bowl",
    description: "A nutrient-packed bowl with quinoa, fresh vegetables",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop",
    time: "25 min",
    rating: 4.7,
    difficulty: "Easy",
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups vegetable broth",
      "1 large avocado, sliced",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, diced",
      "1/4 red onion, thinly sliced",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Salt and pepper to taste",
    ],
    steps: [
      "Cook quinoa in vegetable broth according to package instructions.",
      "While quinoa cooks, prepare vegetables by washing and cutting them.",
      "Once quinoa is cooked, let it cool slightly.",
      "In a large bowl, combine quinoa with vegetables.",
      "Drizzle with olive oil and lemon juice, season with salt and pepper.",
      "Gently mix and serve with sliced avocado on top.",
    ],
  },
  {
    id: 3,
    title: "Honey Glazed Salmon",
    description: "Tender salmon fillets with a sweet and savory honey glaze",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2670&auto=format&fit=crop",
    time: "20 min",
    rating: 4.9,
    difficulty: "Medium",
    ingredients: [
      "4 salmon fillets (6 oz each)",
      "3 tbsp honey",
      "2 tbsp soy sauce",
      "1 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 tsp ginger, grated",
      "1 tbsp lemon juice",
      "Green onions for garnish",
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "In a small bowl, mix honey, soy sauce, olive oil, garlic, ginger, and lemon juice.",
      "Place salmon fillets on a lined baking sheet and brush with the honey mixture.",
      "Bake for 15-18 minutes until salmon flakes easily with a fork.",
      "Brush with remaining glaze halfway through cooking.",
      "Garnish with sliced green onions before serving.",
    ],
  },
  {
    id: 4,
    title: "Chocolate Lava Cake",
    description:
      "Decadent chocolate dessert with a molten center that flows like lava",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2274&auto=format&fit=crop",
    time: "25 min",
    rating: 4.9,
    difficulty: "Medium",
    ingredients: [
      "4 oz dark chocolate",
      "1/2 cup unsalted butter",
      "1 cup powdered sugar",
      "2 whole eggs",
      "2 egg yolks",
      "1 tsp vanilla extract",
      "1/2 cup all-purpose flour",
      "Pinch of salt",
      "Powdered sugar for dusting",
    ],
    steps: [
      "Preheat oven to 425°F (220°C) and grease four ramekins.",
      "Melt chocolate and butter together in a microwave-safe bowl.",
      "Whisk in powdered sugar until smooth.",
      "Add eggs, egg yolks, and vanilla, whisking well.",
      "Fold in flour and salt gently until just combined.",
      "Pour batter into ramekins and bake for 12-14 minutes.",
      "Let stand for 1 minute, then invert onto plates and dust with powdered sugar.",
    ],
  },
  {
    id: 5,
    title: "Mediterranean Salad",
    description: "Fresh and vibrant salad with Mediterranean flavors",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2584&auto=format&fit=crop",
    time: "15 min",
    rating: 4.6,
    difficulty: "Easy",
    ingredients: [
      "2 cups mixed greens",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, thinly sliced",
      "1/2 cup kalamata olives",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup olive oil",
      "2 tbsp red wine vinegar",
      "1 tsp dried oregano",
      "Salt and pepper to taste",
    ],
    steps: [
      "In a large bowl, combine mixed greens, cucumber, tomatoes, red onion, and olives.",
      "In a small bowl, whisk together olive oil, vinegar, oregano, salt, and pepper.",
      "Pour dressing over salad and toss gently to coat.",
      "Sprinkle with crumbled feta cheese before serving.",
      "For best flavor, let sit for 5 minutes before serving.",
    ],
  },
  {
    id: 6,
    title: "Crispy Potato Rösti",
    description: "Swiss-style crispy grated potato cake with a golden crust",
    image:
      "https://www.recipetineats.com/tachyon/2020/10/Thin-ultra-crispy-potato-rosit_8.jpg",
    time: "35 min",
    rating: 4.7,
    difficulty: "Medium",
    ingredients: [
      "2 lbs russet potatoes",
      "1 medium onion, grated",
      "2 tbsp butter, melted",
      "2 tbsp vegetable oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "2 tbsp fresh chives, chopped (for garnish)",
    ],
    steps: [
      "Peel potatoes and grate them using the large holes of a box grater.",
      "Place grated potatoes in a clean kitchen towel and squeeze out excess moisture.",
      "In a large bowl, mix potatoes, onion, melted butter, salt, and pepper.",
      "Heat oil in a large non-stick skillet over medium heat.",
      "Add potato mixture and press down to form an even layer.",
      "Cook for 15 minutes until bottom is golden brown.",
      "Flip rösti using a plate and cook other side for another 10 minutes.",
      "Garnish with fresh chives before serving.",
    ],
  },
];

// DOM Elements
const recipeGrid = document.querySelector(".recipe-grid");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const modal = document.getElementById("recipe-modal");
const modalBody = document.querySelector(".modal-body");
const closeModal = document.querySelector(".close-modal");
const themeToggle = document.querySelector(".theme-toggle");
const newsletterForm = document.getElementById("newsletter-form");
const formMessage = document.getElementById("form-message");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const header = document.querySelector("header");

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  displayRecipes(recipes);
  setupEventListeners();
  checkTheme();
  setupScrollReveal();
});

// Display recipes in the grid
function displayRecipes(recipesToDisplay) {
  recipeGrid.innerHTML = "";

  if (recipesToDisplay.length === 0) {
    recipeGrid.innerHTML =
      '<p class="no-results">No recipes found. Try a different search.</p>';
    return;
  }

  recipesToDisplay.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card", "reveal");

    recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${
      recipe.title
    }" class="recipe-image" loading="lazy">
            <div class="recipe-info">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span class="recipe-time"><i class="far fa-clock"></i> ${
                      recipe.time
                    }</span>
                    <span class="recipe-rating">
                        ${generateStarRating(recipe.rating)}
                    </span>
                </div>
                <button class="view-recipe" data-id="${
                  recipe.id
                }">View Recipe</button>
            </div>
        `;

    recipeGrid.appendChild(recipeCard);
  });

  // Add event listeners to the view recipe buttons
  document.querySelectorAll(".view-recipe").forEach((button) => {
    button.addEventListener("click", () => {
      const recipeId = parseInt(button.getAttribute("data-id"));
      openRecipeModal(recipeId);
    });
  });
}

// Generate star rating HTML
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let starsHTML = "";

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }

  // Add half star if needed
  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>';
  }

  return starsHTML;
}

// Open recipe modal
function openRecipeModal(recipeId) {
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) return;

  modalBody.innerHTML = `
        <div class="recipe-header">
            <h2 class="recipe-title-large">${recipe.title}</h2>
            <div class="recipe-meta">
                <span class="recipe-time"><i class="far fa-clock"></i> ${
                  recipe.time
                }</span>
                <span class="recipe-rating">
                    ${generateStarRating(recipe.rating)}
                </span>
                <span class="recipe-difficulty"><i class="fas fa-signal"></i> ${
                  recipe.difficulty
                }</span>
            </div>
        </div>
        <img src="${recipe.image}" alt="${
    recipe.title
  }" class="recipe-image-large">
        <div class="recipe-details">
            <div class="ingredient-list">
                <h3>Ingredients</h3>
                <ul class="ingredients">
                    ${recipe.ingredients
                      .map(
                        (ingredient) => `
                        <li class="ingredient-item">
                            <input type="checkbox" class="ingredient-checkbox" id="ingredient-${
                              recipe.id
                            }-${recipe.ingredients.indexOf(ingredient)}">
                            <label class="ingredient-label" for="ingredient-${
                              recipe.id
                            }-${recipe.ingredients.indexOf(
                          ingredient
                        )}">${ingredient}</label>
                        </li>
                    `
                      )
                      .join("")}
                </ul>
            </div>
            <div class="instructions">
                <h3>Instructions</h3>
                ${recipe.steps
                  .map(
                    (step, index) => `
                    <div class="step">
                        <div class="step-number">${index + 1}</div>
                        <p>${step}</p>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close recipe modal
function closeRecipeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Search recipes
function searchRecipes() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm === "") {
    displayRecipes(recipes);
    return;
  }

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm)
      )
  );

  displayRecipes(filteredRecipes);
}

// Setup event listeners
function setupEventListeners() {
  // Search
  searchBtn.addEventListener("click", searchRecipes);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      searchRecipes();
    }
  });

  // Modal
  closeModal.addEventListener("click", closeRecipeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeRecipeModal();
    }
  });

  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Newsletter form
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
      showFormMessage("Please fill in all fields.", false);
      return;
    }

    // Simulate form submission
    showFormMessage("Thank you for subscribing to our newsletter!", true);
    newsletterForm.reset();
  });

  // Mobile menu
  mobileMenuBtn.addEventListener("click", toggleMobileMenu);

  // Category filtering
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      filterByCategory(category);
    });
  });

  // Scroll event for header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Toggle theme
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  const sunIcon = themeToggle.querySelector(".fa-sun");
  const moonIcon = themeToggle.querySelector(".fa-moon");

  sunIcon.classList.toggle("active");
  moonIcon.classList.toggle("active");

  // Save theme preference
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Check saved theme
function checkTheme() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");

    const sunIcon = themeToggle.querySelector(".fa-sun");
    const moonIcon = themeToggle.querySelector(".fa-moon");

    sunIcon.classList.remove("active");
    moonIcon.classList.add("active");
  }
}

// Show form message
function showFormMessage(message, isSuccess) {
  formMessage.textContent = message;
  formMessage.className = isSuccess ? "success-message" : "error-message";

  // Clear message after 3 seconds
  setTimeout(() => {
    formMessage.textContent = "";
  }, 3000);
}

// Toggle mobile menu
function toggleMobileMenu() {
  const header = document.querySelector("header");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!mobileMenu) {
    // Create mobile menu if it doesn't exist
    const menu = document.createElement("div");
    menu.classList.add("mobile-menu");

    menu.innerHTML = `
            <a href="#featured">Recipes</a>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div class="theme-toggle-mobile">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun ${
                  document.body.classList.contains("light-mode") ? "active" : ""
                }"></i>
            </div>
        `;

    document.body.appendChild(menu);

    // Add click event to mobile theme toggle
    const themeToggleMobile = menu.querySelector(".theme-toggle-mobile");
    themeToggleMobile.addEventListener("click", toggleTheme);

    // Add click events to mobile menu links
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    setTimeout(() => {
      menu.classList.add("active");
    }, 10);
  } else {
    // Toggle existing mobile menu
    mobileMenu.classList.toggle("active");
  }

  // Toggle body overflow
  if (document.querySelector(".mobile-menu.active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

// Filter recipes by category
function filterByCategory(category) {
  // In a real app, you would filter based on category data
  // For this demo, just show a message
  alert(
    `Filtering by ${category} category. In a real app, this would show ${category} recipes.`
  );
}

// Scroll reveal animation
function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);

  // Initial check
  revealOnScroll();
}

// Initial recipe display
displayRecipes(recipes);
