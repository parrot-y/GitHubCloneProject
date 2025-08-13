# Divine Vision Supplies Ltd Website

A modern, responsive hardware supplies website built with HTML, CSS, and JavaScript, featuring a beautiful UI design and comprehensive product catalog.

## 🏗️ Project Overview

This is a complete replica of the Divine Vision Hardware website, featuring:

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Product Catalog**: 20+ hardware products across 10 categories
- **Interactive Features**: Search, filtering, product details, and WhatsApp integration
- **Modern UI**: Beautiful gradients, animations, and hover effects
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 🚀 Features

### Core Functionality

- **Product Display**: Grid layout with product cards showing images, prices, and descriptions
- **Category Filtering**: Filter products by building, electrical, boards, paints, plumbing, etc.
- **Search Functionality**: Real-time search across product names and descriptions
- **WhatsApp Integration**: Direct ordering via WhatsApp with pre-filled messages
- **Product Details**: Modal popups with comprehensive product information

### UI/UX Features

- **Responsive Header**: Sticky navigation with search bar and contact buttons
- **Category Navigation**: Horizontal scrollable category buttons
- **Product Cards**: Hover effects, price tags, and stock status indicators
- **Footer**: Contact information, social media links, and newsletter signup
- **Mobile Menu**: Responsive mobile navigation

### Technical Features

- **CSS Animations**: Smooth transitions, hover effects, and loading animations
- **JavaScript Functionality**: Dynamic product loading, filtering, and search
- **Performance**: Optimized images and efficient DOM manipulation
- **Cross-browser**: Compatible with modern browsers

## 📁 File Structure

```
DivineVisionHardware/
├── index.html          # Main HTML file with complete structure
├── copy.css            # Comprehensive CSS with Tailwind and custom styles
├── copy.js             # JavaScript functionality and product data
├── README.md           # Project documentation
└── copy.html           # Original reference file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with Tailwind CSS framework
- **JavaScript (ES6+)**: Dynamic functionality and interactivity
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Font Awesome**: Icon library for UI elements
- **Lucide Icons**: Modern icon set for enhanced visuals

## 🎨 Design Features

### Color Scheme

- **Primary Blue**: #02248C (Deep blue for headers)
- **Secondary Blue**: #2F4A9C (Interactive elements)
- **Dark Blue**: #000A26 (Footer background)
- **Accent Blue**: #1e3a8a (Hover states)

### Typography

- **Headers**: Bold, professional fonts for titles
- **Body Text**: Readable sans-serif fonts
- **Responsive**: Scales appropriately across devices

### Layout

- **Grid System**: Responsive product grid (1-4 columns based on screen size)
- **Card Design**: Clean, modern product cards with shadows
- **Spacing**: Consistent padding and margins throughout

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- **Mobile**: < 640px (1 column layout)
- **Tablet**: 640px - 1024px (2-3 column layout)
- **Desktop**: > 1024px (4 column layout)

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website will load with all functionality ready

### Development Setup

1. Use a local web server (e.g., Live Server in VS Code)
2. Edit HTML, CSS, or JavaScript files as needed
3. Refresh browser to see changes

## 🔧 Customization

### Adding Products

Edit the `products` array in `copy.js`:

```javascript
{
    id: 21,
    name: "New Product",
    category: "CATEGORY",
    price: 1000,
    image: "image-url",
    description: "Product description",
    stock: 50,
    unit: "Piece"
}
```

### Modifying Categories

Update the category buttons in `index.html` and the category filtering logic in `copy.js`.

### Styling Changes

Modify `copy.css` for custom styles or update Tailwind classes in the HTML.

## 📞 Contact Integration

The website includes WhatsApp integration for customer inquiries:

- **Phone**: 0708650558
- **WhatsApp**: 0708650558
- **Email**: sales@divinevisionhardware.co.ke

## 🌟 Key Features Explained

### Product Filtering

- Click category buttons to filter products
- Search functionality works across all product fields
- Real-time updates without page refresh

### WhatsApp Ordering

- Each product has a "Order via WhatsApp" button
- Pre-fills message with product details and price
- Opens WhatsApp with formatted message

### Responsive Navigation

- Sticky header with smooth shadow effects
- Mobile-friendly navigation menu
- Category buttons with hover animations

## 🎯 Performance Optimizations

- **Lazy Loading**: Images load as needed
- **Efficient DOM**: Minimal DOM manipulation
- **CSS Animations**: Hardware-accelerated transitions
- **Optimized Images**: Compressed product images

## 🔒 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📈 Future Enhancements

Potential improvements for the website:

- **Shopping Cart**: Add to cart functionality
- **User Accounts**: Customer login and order history
- **Payment Integration**: Online payment processing
- **Inventory Management**: Real-time stock updates
- **Admin Panel**: Product management interface
- **Multi-language**: Support for multiple languages

## 🤝 Contributing

This is a demonstration project, but suggestions for improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is created for educational and demonstration purposes.

## 👨‍💻 Developer

Created as a front-end web development project showcasing modern web technologies and responsive design principles.

---

**Note**: This is a complete, functional hardware store website that can be used as a template or starting point for similar projects. All functionality is implemented and ready to use.
