// Divine Vision Hardware - Main JavaScript File

// Product data - This would typically come from a database or API
const products = [
  {
    id: 1,
    name: "Cement 50kg Bag",
    category: "BUILDING",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "High-quality Portland cement for construction projects",
    stock: 100,
    unit: "Bag",
  },
  {
    id: 2,
    name: "Steel Bars 6mm",
    category: "BUILDING",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Reinforcement steel bars for concrete structures",
    stock: 50,
    unit: "Piece",
  },
  {
    id: 3,
    name: "Electrical Wire 2.5mm",
    category: "ELECTRICAL",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Copper electrical wire for domestic wiring",
    stock: 200,
    unit: "Meter",
  },
  {
    id: 4,
    name: "Circuit Breaker 32A",
    category: "ELECTRICAL",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "32A circuit breaker for electrical protection",
    stock: 25,
    unit: "Piece",
  },
  {
    id: 5,
    name: "Plywood 4x8ft",
    category: "BOARDS",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "High-quality plywood sheets for construction",
    stock: 30,
    unit: "Sheet",
  },
  {
    id: 6,
    name: "MDF Board 18mm",
    category: "BOARDS",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Medium density fiberboard for furniture making",
    stock: 20,
    unit: "Sheet",
  },
  {
    id: 7,
    name: "Door Handle Set",
    category: "EGGER ACCESSORIES",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Modern door handle set with lock mechanism",
    stock: 15,
    unit: "Set",
  },
  {
    id: 8,
    name: "Cabinet Hinges",
    category: "EGGER ACCESSORIES",
    price: 800,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Soft-close cabinet hinges for smooth operation",
    stock: 40,
    unit: "Pair",
  },
  {
    id: 9,
    name: "Interior Paint 20L",
    category: "PAINTS",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Premium interior wall paint, washable finish",
    stock: 35,
    unit: "Litre",
  },
  {
    id: 10,
    name: "Exterior Paint 20L",
    category: "PAINTS",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Weather-resistant exterior paint for buildings",
    stock: 25,
    unit: "Litre",
  },
  {
    id: 11,
    name: "PVC Pipes 4inch",
    category: "PLUMBING",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "4-inch PVC pipes for drainage systems",
    stock: 60,
    unit: "Meter",
  },
  {
    id: 12,
    name: "Water Tap",
    category: "PLUMBING",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Modern water tap with ceramic disc technology",
    stock: 30,
    unit: "Piece",
  },
  {
    id: 13,
    name: "LED Bulb 9W",
    category: "LIGHTING",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Energy-efficient LED bulb, equivalent to 60W incandescent",
    stock: 150,
    unit: "Piece",
  },
  {
    id: 14,
    name: "Ceiling Fan",
    category: "LIGHTING",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "52-inch ceiling fan with remote control",
    stock: 20,
    unit: "Piece",
  },
  {
    id: 15,
    name: "Safety Helmet",
    category: "SAFETY",
    price: 800,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Hard hat for construction site safety",
    stock: 80,
    unit: "Piece",
  },
  {
    id: 16,
    name: "Safety Boots",
    category: "SAFETY",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Steel-toe safety boots for construction workers",
    stock: 45,
    unit: "Pair",
  },
  {
    id: 17,
    name: "Measuring Tape 5m",
    category: "TOOLS",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "5-meter retractable measuring tape",
    stock: 100,
    unit: "Piece",
  },
  {
    id: 18,
    name: "Hammer 1kg",
    category: "TOOLS",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "1kg claw hammer for construction work",
    stock: 60,
    unit: "Piece",
  },
  {
    id: 19,
    name: "Drill Bit Set",
    category: "TOOLS",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Complete set of drill bits for various materials",
    stock: 25,
    unit: "Set",
  },
  {
    id: 20,
    name: "Screwdriver Set",
    category: "TOOLS",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Set of 6 screwdrivers with different head types",
    stock: 40,
    unit: "Set",
  },
  {
    id: 21,
    name: "Floor Tiles 60x60cm",
    category: "FLOORING ACCESSORIES",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Ceramic floor tiles, 60x60cm, various colors available",
    stock: 200,
    unit: "Square Meter",
  },
  {
    id: 22,
    name: "Grout 5kg",
    category: "FLOORING ACCESSORIES",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Tile grout for filling gaps between tiles",
    stock: 80,
    unit: "Bag",
  },
  {
    id: 23,
    name: "Door Locks",
    category: "IRONMONGERY",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "High-security door locks with keys",
    stock: 30,
    unit: "Set",
  },
  {
    id: 24,
    name: "Window Hinges",
    category: "IRONMONGERY",
    price: 800,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Heavy-duty window hinges for various window types",
    stock: 60,
    unit: "Pair",
  },
  {
    id: 25,
    name: "Wall Putty 20kg",
    category: "FINISHING",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    description: "Wall putty for smooth wall finishing before painting",
    stock: 45,
    unit: "Bag",
  },
];

// Global variables
let currentFilter = "ALL";
let currentSearch = "";

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Display all products initially
  displayProducts(products);

  // Add event listeners
  addEventListeners();

  // Add smooth scrolling for navigation
  addSmoothScrolling();

  // Initialize mobile menu
  initializeMobileMenu();

  // Add loading animations
  addLoadingAnimations();

  // Populate category dropdowns
  populateCategoryDropdowns();
});

function addEventListeners() {
  // Search functionality
  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        handleSearch();
      }
    });
  }

  // Add scroll event for header shadow
  window.addEventListener("scroll", handleScroll);
}

function handleScroll() {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("shadow-lg");
  } else {
    header.classList.remove("shadow-lg");
  }
}

function handleSearch() {
  const searchInput = document.querySelector('input[type="search"]');
  currentSearch = searchInput.value.toLowerCase().trim();
  applyFilters();
}

function filterProducts(category) {
  currentFilter = category;
  applyFilters();

  // Update active category button
  updateActiveCategory(category);
}

function updateActiveCategory(category) {
  // Remove active class from all category buttons
  document.querySelectorAll('[onclick^="filterProducts"]').forEach((btn) => {
    btn.classList.remove("bg-blue-50", "text-blue-800");
    btn.classList.add("text-[#2F4A9C]");
  });

  // Add active class to selected category
  const activeButton = document.querySelector(`[onclick*="${category}"]`);
  if (activeButton) {
    activeButton.classList.remove("text-[#2F4A9C]");
    activeButton.classList.add("bg-blue-50", "text-blue-800");
  }
}

function applyFilters() {
  let filteredProducts = products;

  // Apply category filter
  if (currentFilter !== "ALL") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === currentFilter
    );
  }

  // Apply search filter
  if (currentSearch) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(currentSearch) ||
        product.description.toLowerCase().includes(currentSearch) ||
        product.category.toLowerCase().includes(currentSearch)
    );
  }

  // Display filtered products
  displayProducts(filteredProducts);
}

function displayProducts(productsToShow) {
  const productsContainer = document.getElementById("products-container");

  if (!productsContainer) {
    console.error("Products container not found!");
    return;
  }

  // Show loading state
  productsContainer.innerHTML = `
    <div class="col-span-full text-center py-12">
      <div class="loading-spinner mx-auto mb-4"></div>
      <p class="text-gray-500">Loading products...</p>
    </div>
  `;

  // Simulate loading delay for better UX
  setTimeout(() => {
    if (productsToShow.length === 0) {
      productsContainer.innerHTML = `
        <div class="col-span-full text-center py-12">
          <div class="text-gray-500 text-lg mb-4">
            <i class="fas fa-search text-4xl mb-4"></i>
            <p>No products found matching your criteria.</p>
            <p class="text-sm mt-2">Try adjusting your search or filter.</p>
          </div>
          <button onclick="resetFilters()" class="btn-primary">
            Reset Filters
          </button>
        </div>
      `;
      return;
    }

    const productsHTML = productsToShow
      .map((product) => createProductCard(product))
      .join("");

    productsContainer.innerHTML = productsHTML;

    // Add click event listeners to product cards
    addProductCardListeners();
  }, 300);
}

function createProductCard(product) {
  const stockStatus =
    product.stock > 0
      ? `<span class="text-green-600 text-xs font-medium">In Stock (${product.stock})</span>`
      : `<span class="text-red-600 text-xs font-medium">Out of Stock</span>`;

  return `
    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" 
         onclick="showProductDetailPage(${product.id})" data-product-id="${
    product.id
  }">
      <div class="relative">
        <img src="${product.image}" alt="${
    product.name
  }" class="product-image w-full h-48 object-cover transition-transform duration-300">
        <div class="absolute top-2 left-2">
          <span class="category-badge px-2 py-1 text-xs font-medium rounded-full">
            ${product.category}
          </span>
        </div>
        <div class="absolute top-2 right-2">
          <span class="price-tag text-white text-sm font-bold">
            KES ${product.price.toLocaleString()}
          </span>
        </div>
      </div>
      
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">${
          product.name
        }</h3>
        <p class="text-gray-600 text-sm mb-3 line-clamp-2">${
          product.description
        }</p>
        
        <div class="flex items-center justify-between mb-3">
          <span class="text-gray-500 text-xs">Unit: ${product.unit}</span>
          ${stockStatus}
        </div>
        
        <div class="text-center">
          <span class="text-[#2F4A9C] text-sm font-medium">Click to view details</span>
        </div>
      </div>
    </div>
  `;
}

function addProductCardListeners() {
  // Product cards are already clickable via onclick attributes
  // Additional event listeners can be added here if needed
}

function showProductDetails(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.createElement("div");
  modal.className =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
  modal.innerHTML = `
    <div class="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-2xl font-bold text-gray-800">${product.name}</h2>
          <button onclick="closeModal()" class="text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src="${product.image}" alt="${
    product.name
  }" class="w-full h-64 object-cover rounded-lg">
          </div>
          <div class="space-y-4">
            <div>
              <span class="category-badge px-3 py-1 text-sm font-medium rounded-full">
                ${product.category}
              </span>
            </div>
            <div class="text-3xl font-bold text-[#2F4A9C]">
              KES ${product.price.toLocaleString()}
            </div>
            <p class="text-gray-600">${product.description}</p>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-500">Stock:</span>
                <span class="font-medium ${
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }">
                  ${
                    product.stock > 0
                      ? `${product.stock} ${product.unit}`
                      : "Out of Stock"
                  }
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Unit:</span>
                <span class="font-medium">${product.unit}</span>
              </div>
            </div>
            <div class="pt-4">
              <button onclick="contactViaWhatsApp('${product.name}', ${
    product.price
  })" class="whatsapp-btn bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200 w-full flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-message-circle">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Contact via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.querySelector(".fixed.inset-0.bg-black.bg-opacity-50");
  if (modal) {
    modal.remove();
  }
}

function contactViaWhatsApp(productName = "General Inquiry", price = 0) {
  const message =
    price > 0
      ? `Hi! I'm interested in ${productName} for KES ${price.toLocaleString()}. Can you provide more information?`
      : `Hi! I have a general inquiry about your hardware products. Can you help me?`;

  // Use the actual phone number from the website: 0708650558
  const whatsappUrl = `https://wa.me/254708650558?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
}

function resetFilters() {
  currentFilter = "ALL";
  currentSearch = "";

  // Reset search input
  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) {
    searchInput.value = "";
  }

  // Reset category buttons
  updateActiveCategory("ALL");

  // Display all products
  displayProducts(products);
}

function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

function initializeMobileMenu() {
  const mobileMenuButton = document.querySelector(
    '[aria-label="Toggle mobile menu"]'
  );
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", toggleMobileMenu);
  }
}

function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("show");
  }
}

function addLoadingAnimations() {
  // Add any additional loading animations here
  // This function can be expanded for future enhancements
}

// New function to show product detail page
function showProductDetailPage(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Hide the main products section
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.style.display = "none";
  }

  // Create and show the product detail page
  const detailPage = createProductDetailPage(product);
  document.body.appendChild(detailPage);
}

function createProductDetailPage(product) {
  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const detailPage = document.createElement("div");
  detailPage.className = "fixed inset-0 z-50 bg-white overflow-y-auto";
  detailPage.innerHTML = `
    <div class="min-h-screen">
      <!-- Header -->
      <div class="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <button onclick="closeProductDetailPage()" class="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span>Back to Products</span>
            </button>
            <h1 class="text-lg font-semibold text-gray-800">Product Details</h1>
          </div>
        </div>
      </div>

      <!-- Product Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Product Image -->
          <div class="space-y-4">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
              <img src="${product.image}" alt="${
    product.name
  }" class="w-full h-full object-cover">
            </div>
          </div>

          <!-- Product Info -->
          <div class="space-y-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-2">${
                product.name
              }</h1>
              <p class="text-lg text-gray-600">${product.description}</p>
            </div>

            <!-- Price and Stock -->
            <div class="flex items-center justify-between">
              <div class="text-2xl font-bold text-[#2F4A9C]">KES ${product.price.toLocaleString()}</div>
              <div class="text-sm ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }">
                ${
                  product.stock > 0
                    ? `In Stock (${product.stock})`
                    : "Out of Stock"
                }
              </div>
            </div>

            <!-- Features -->
            <div class="space-y-3">
              <h3 class="text-lg font-semibold text-gray-900">Features</h3>
              <ul class="space-y-2">
                <li class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">High quality materials</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">Durable construction</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">Professional grade</span>
                </li>
              </ul>
            </div>

            <!-- Specifications -->
            <div class="space-y-3">
              <h3 class="text-lg font-semibold text-gray-900">Specifications</h3>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="text-sm font-medium text-gray-500">Type:</span>
                  <p class="text-sm text-gray-900">${product.category}</p>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-500">Unit:</span>
                  <p class="text-sm text-gray-900">${product.unit}</p>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-500">Stock:</span>
                  <p class="text-sm text-gray-900">${product.stock}</p>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-500">Model:</span>
                  <p class="text-sm text-gray-900">${product.id}</p>
                </div>
              </div>
            </div>

            <!-- Quantity Selector -->
            <div class="space-y-3">
              <h3 class="text-lg font-semibold text-gray-900">Quantity</h3>
              <div class="flex items-center space-x-4">
                <button onclick="decreaseQuantity()" class="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#2F4A9C] hover:text-[#2F4A9C] transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <span id="quantity-display" class="text-xl font-semibold text-gray-900 w-16 text-center">1</span>
                <button onclick="increaseQuantity()" class="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#2F4A9C] hover:text-[#2F4A9C] transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button onclick="getQuote('${product.name}', ${
    product.price
  })" class="flex-1 bg-[#2F4A9C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e3a8a] transition-colors duration-200 flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Get a Quote</span>
              </button>
              <button onclick="orderNow('${product.name}', ${
    product.price
  })" class="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0 2.293 2.293c.39.39.902.586 1.414.586H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                </svg>
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Related Products -->
        ${
          relatedProducts.length > 0
            ? `
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${relatedProducts
              .map(
                (p) => `
              <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onclick="showProductDetailPage(${
                p.id
              })">
                <img src="${p.image}" alt="${
                  p.name
                }" class="w-full h-32 object-cover">
                <div class="p-4">
                  <h3 class="font-semibold text-gray-800 mb-1">${p.name}</h3>
                  <p class="text-sm text-gray-600 mb-2">${p.description.substring(
                    0,
                    60
                  )}...</p>
                  <div class="text-[#2F4A9C] font-bold">KES ${p.price.toLocaleString()}</div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        `
            : ""
        }
      </div>
    </div>
  `;

  return detailPage;
}

// Function to close product detail page
function closeProductDetailPage() {
  const detailPage = document.querySelector(".fixed.inset-0.z-50.bg-white");
  if (detailPage) {
    detailPage.remove();
  }

  // Show the main products section again
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.style.display = "block";
  }
}

// Quantity functions
let currentQuantity = 1;

function increaseQuantity() {
  currentQuantity++;
  document.getElementById("quantity-display").textContent = currentQuantity;
}

function decreaseQuantity() {
  if (currentQuantity > 1) {
    currentQuantity--;
    document.getElementById("quantity-display").textContent = currentQuantity;
  }
}

// Quote and Order functions
function getQuote(productName, productPrice) {
  const quantity = currentQuantity;
  const totalPrice = productPrice * quantity;
  const message = `Hi! I'm interested in getting a quote for:\n\nProduct: ${productName}\nQuantity: ${quantity}\nPrice per unit: KES ${productPrice.toLocaleString()}\nTotal: KES ${totalPrice.toLocaleString()}\n\nCould you please provide me with more details?`;

  contactViaWhatsApp(message, totalPrice);
}

function orderNow(productName, productPrice) {
  const quantity = currentQuantity;
  const totalPrice = productPrice * quantity;
  const message = `Hi! I'd like to place an order for:\n\nProduct: ${productName}\nQuantity: ${quantity}\nPrice per unit: KES ${productPrice.toLocaleString()}\nTotal: KES ${totalPrice.toLocaleString()}\n\nPlease let me know how to proceed with the order.`;

  contactViaWhatsApp(message, totalPrice);
}

// Function to populate category dropdowns
function populateCategoryDropdowns() {
  const categories = [
    { id: "building", name: "BUILDING" },
    { id: "electrical", name: "ELECTRICAL" },
    { id: "boards", name: "BOARDS" },
    { id: "plumbing", name: "PLUMBING" },
    { id: "tools", name: "TOOLS" },
    { id: "egger", name: "EGGER ACCESSORIES" },
    { id: "paints", name: "PAINTS" },
    { id: "finishing", name: "FINISHING" },
    { id: "flooring", name: "FLOORING ACCESSORIES" },
    { id: "ironmongery", name: "IRONMONGERY" },
  ];

  categories.forEach((category) => {
    const dropdownId = `${category.id}-dropdown`;
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
      const categoryProducts = products
        .filter((p) => p.category === category.name)
        .slice(0, 8); // Show max 8 products in dropdown

      if (categoryProducts.length > 0) {
        dropdown.innerHTML = categoryProducts
          .map(
            (product) => `
          <div class="text-xs text-gray-600 p-2 hover:bg-gray-50 rounded cursor-pointer border border-gray-100 transition-colors duration-200" 
               onclick="showProductDetailPage(${product.id})">
            <div class="flex items-center space-x-2">
              <img src="${product.image}" alt="${
              product.name
            }" class="w-8 h-8 object-cover rounded">
              <div class="flex-1 min-w-0">
                <div class="font-medium text-gray-800 truncate">${
                  product.name
                }</div>
                <div class="text-gray-500">KES ${product.price.toLocaleString()}</div>
              </div>
            </div>
          </div>
        `
          )
          .join("");
      } else {
        dropdown.innerHTML = `
          <div class="text-xs text-gray-500 p-2 text-center">
            No products in this category yet
          </div>
        `;
      }
    }
  });
}

// Function to toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuContent = mobileMenu.querySelector(".absolute");

  if (mobileMenu.classList.contains("invisible")) {
    // Show menu
    mobileMenu.classList.remove("invisible", "opacity-0");
    menuContent.classList.remove("translate-x-full");
  } else {
    // Hide menu
    mobileMenu.classList.add("invisible", "opacity-0");
    menuContent.classList.add("translate-x-full");
  }
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuBtn = document.querySelector(
    '[onclick="toggleMobileMenu()"]'
  );

  if (
    mobileMenu &&
    !mobileMenu.contains(event.target) &&
    !mobileMenuBtn?.contains(event.target)
  ) {
    if (!mobileMenu.classList.contains("invisible")) {
      toggleMobileMenu();
    }
  }
});

function addLoadingAnimations() {
  // Add any additional loading animations here
  // This function can be expanded for future enhancements
}
