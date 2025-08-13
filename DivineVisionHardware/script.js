// Divine Vision Hardware - JavaScript Functionality

// Sample product data with working hardware product images
const products = [
  {
    id: 1,
    name: "Cement 50kg Bag",
    price: 850,
    description: "High-quality Portland cement for construction projects",
    category: "BUILDING",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Steel Reinforcement Bars",
    price: 1200,
    description: "Grade 60 steel bars for concrete reinforcement",
    category: "BUILDING",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Electrical Wire 2.5mm",
    price: 450,
    description: "Copper electrical wire for residential wiring",
    category: "ELECTRICAL",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Circuit Breaker 32A",
    price: 1200,
    description: "32A circuit breaker for electrical panels",
    category: "ELECTRICAL",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Plywood Board 4x8",
    price: 2800,
    description: "High-quality plywood board for construction",
    category: "BOARDS",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "PVC Pipe 2 inch",
    price: 350,
    description: "PVC pipe for plumbing applications",
    category: "PLUMBING",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Paint Brush Set",
    price: 250,
    description: "Professional paint brush set for various surfaces",
    category: "PAINTS",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Hammer 2kg",
    price: 800,
    description: "Heavy-duty hammer for construction work",
    category: "TOOLS",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Egger Laminate Flooring",
    price: 1800,
    description: "Premium laminate flooring for modern homes",
    category: "EGGER ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Door Handle Set",
    price: 650,
    description: "Elegant door handle set for interior doors",
    category: "FINISHING",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Flooring Underlay",
    price: 120,
    description: "High-quality underlay for laminate flooring",
    category: "FLOORING ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Hinges Pack of 4",
    price: 180,
    description: "Heavy-duty hinges for doors and cabinets",
    category: "IRONMONGERY",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
];

// Current filter state
let currentCategory = "ALL";
let searchQuery = "";

// DOM elements
const productsContainer = document.getElementById("products-container");
const searchInput = document.querySelector('input[type="search"]');

// Initialize the website
document.addEventListener("DOMContentLoaded", function () {
  displayProducts();
  setupSearch();
  setupCategoryDropdowns();
  setupMobileMenu();
  setupWhatsAppFloat();
});

// Display products based on current filter
function displayProducts() {
  if (!productsContainer) return;

  const filteredProducts = filterProductsByCategoryAndSearch();

  productsContainer.innerHTML = "";

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-gray-500 text-lg">No products found</div>
                <p class="text-gray-400 mt-2">Try adjusting your search or category filter</p>
            </div>
        `;
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}

// Filter products by category and search
function filterProductsByCategoryAndSearch() {
  let filtered = products;

  // Filter by category
  if (currentCategory !== "ALL") {
    filtered = filtered.filter(
      (product) => product.category === currentCategory
    );
  }

  // Filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
  }

  return filtered;
}

// Create product card HTML - matches the exact structure from copy.html
function createProductCard(product) {
  const card = document.createElement("a");
  card.href = "#";
  card.className =
    "block cursor-pointer bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-[#02248C]";
  card.setAttribute("data-category", product.category);

  card.innerHTML = `
        <img alt="${product.name}" class="w-full h-48 object-cover" src="${
    product.image
  }" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(
    product.name
  )}'">
        <div class="p-4">
            <h2 class="text-lg font-semibold mb-2">${product.name}</h2>
            <p class="text-gray-600">KES ${product.price.toLocaleString()}</p>
            <p class="text-sm text-gray-500 mt-1">Category: ${
              product.category
            }</p>
        </div>
    `;

  // Add click event to show product detail
  card.addEventListener("click", (e) => {
    e.preventDefault();
    showProductDetail(product);
  });

  return card;
}

// Show product detail modal
function showProductDetail(product) {
  // Remove existing modal
  const existingModal = document.getElementById("product-detail-modal");
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal
  const modal = document.createElement("div");
  modal.className =
    "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4";
  modal.id = "product-detail-modal";

  modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="relative">
                <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10" onclick="closeProductDetail()">&times;</button>
                <img src="${product.image}" alt="${
    product.name
  }" class="w-full h-64 object-cover rounded-t-lg" onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(
    product.name
  )}'">
            </div>
            <div class="p-6">
                <h1 class="text-2xl font-bold text-gray-900 mb-2">${
                  product.name
                }</h1>
                <p class="text-3xl font-bold text-[#02248C] mb-4">KES ${product.price.toLocaleString()}</p>
                <p class="text-gray-600 mb-4">${product.description}</p>
                <div class="flex items-center mb-4">
                    <span class="text-sm text-gray-500 mr-2">Category:</span>
                    <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">${
                      product.category
                    }</span>
                </div>
                <div class="flex space-x-3">
                    <button onclick="getQuoteViaWhatsApp('${product.name}', ${
    product.price
  })" class="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                        <i class="fab fa-whatsapp"></i>
                        <span>Get Quote</span>
                    </button>
                    <button onclick="closeProductDetail()" class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProductDetail();
    }
  });
}

// Close product detail modal
function closeProductDetail() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.remove();
  }
}

// Get quote via WhatsApp
function getQuoteViaWhatsApp(productName, price) {
  const message = `Hi! I'm interested in getting a quote for ${productName} (KES ${price.toLocaleString()}). Can you provide pricing and availability details?`;
  const whatsappUrl = `https://wa.me/254708650558?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
}

// Filter products by category
function filterProducts(category) {
  currentCategory = category;
  displayProducts();

  // Update active category button
  updateActiveCategoryButton(category);
}

// Update active category button
function updateActiveCategoryButton(category) {
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.textContent.includes(category)) {
      btn.classList.add("active");
    }
  });
}

// Setup search functionality
function setupSearch() {
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    displayProducts();
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      displayProducts();
    }
  });
}

// Setup category dropdowns
function setupCategoryDropdowns() {
  // Populate category dropdowns with products
  populateCategoryDropdown("building-dropdown", "BUILDING");
  populateCategoryDropdown("electrical-dropdown", "ELECTRICAL");
  populateCategoryDropdown("boards-dropdown", "BOARDS");
  populateCategoryDropdown("plumbing-dropdown", "PLUMBING");
  populateCategoryDropdown("tools-dropdown", "TOOLS");
  populateCategoryDropdown("egger-dropdown", "EGGER ACCESSORIES");
  populateCategoryDropdown("paints-dropdown", "PAINTS");
  populateCategoryDropdown("finishing-dropdown", "FINISHING");
  populateCategoryDropdown("flooring-dropdown", "FLOORING ACCESSORIES");
  populateCategoryDropdown("ironmongery-dropdown", "IRONMONGERY");
}

// Populate category dropdown
function populateCategoryDropdown(dropdownId, category) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  if (categoryProducts.length === 0) {
    dropdown.innerHTML =
      '<div class="text-sm text-gray-500 p-2">No products in this category</div>';
    return;
  }

  dropdown.innerHTML = "";

  categoryProducts.slice(0, 4).forEach((product) => {
    const productItem = document.createElement("div");
    productItem.className =
      "text-xs text-gray-600 p-2 hover:bg-gray-50 rounded cursor-pointer";
    productItem.innerHTML = `
            <div class="font-medium">${product.name}</div>
            <div class="text-gray-500">KES ${product.price.toLocaleString()}</div>
        `;

    productItem.addEventListener("click", () => {
      showProductDetail(product);
    });

    dropdown.appendChild(productItem);
  });

  if (categoryProducts.length > 4) {
    const viewAllLink = document.createElement("div");
    viewAllLink.className =
      "text-xs text-blue-600 hover:text-blue-800 font-medium p-2 hover:bg-gray-50 rounded cursor-pointer border-t border-gray-100 mt-2";
    viewAllLink.textContent = `View all ${categoryProducts.length} products`;
    viewAllLink.addEventListener("click", () => {
      filterProducts(category);
    });
    dropdown.appendChild(viewAllLink);
  }
}

// Setup mobile menu
function setupMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileMenu) return;

  // Close mobile menu when clicking outside
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      toggleMobileMenu();
    }
  });
}

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileMenu) return;

  const isVisible = mobileMenu.classList.contains("opacity-100");

  if (isVisible) {
    mobileMenu.classList.remove("opacity-100", "visible");
    mobileMenu.querySelector(".transform").classList.remove("translate-x-0");
    mobileMenu.querySelector(".transform").classList.add("translate-x-full");
  } else {
    mobileMenu.classList.add("opacity-100", "visible");
    mobileMenu.querySelector(".transform").classList.remove("translate-x-full");
    mobileMenu.querySelector(".transform").classList.add("translate-x-0");
  }
}

// Setup WhatsApp float button
function setupWhatsAppFloat() {
  // Create WhatsApp float button if it doesn't exist
  if (!document.querySelector(".whatsapp-float")) {
    const whatsappButton = document.createElement("button");
    whatsappButton.className = "whatsapp-float";
    whatsappButton.setAttribute("aria-label", "Chat with us on WhatsApp");
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';

    whatsappButton.addEventListener("click", () => {
      contactViaWhatsApp("General Inquiry", 0);
    });

    document.body.appendChild(whatsappButton);
  }
}

// Contact via WhatsApp
function contactViaWhatsApp(productName, price) {
  let message;
  if (price > 0) {
    message = `Hi! I'm interested in ${productName} for KES ${price.toLocaleString()}. Can you provide more details about availability and delivery?`;
  } else {
    message = `Hi! I have a general inquiry about your products and services. Can you help me?`;
  }

  const whatsappUrl = `https://wa.me/254708650558?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
}

// Make functions globally available
window.filterProducts = filterProducts;
window.showProductDetail = showProductDetail;
window.closeProductDetail = closeProductDetail;
window.getQuoteViaWhatsApp = getQuoteViaWhatsApp;
window.contactViaWhatsApp = contactViaWhatsApp;
window.toggleMobileMenu = toggleMobileMenu;
