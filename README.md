# 🪑 Furniro — Modern E-Commerce Furniture Storefront

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)
![Responsive Design](https://img.shields.io/badge/Responsive-Design-2ea44f?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

<p align="center">
  <strong>An elegant, responsive multi-page e-commerce storefront tailored for high-end furniture and modern home decor.</strong>
</p>

<p align="center">
  <a href="#-key-features">Key Features</a> •
  <a href="#-pages-overview">Pages Overview</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-interactive-capabilities">Interactive Features</a> •
  <a href="#-author">Author</a>
</p>

---

</div>

## 📖 Overview

**Furniro** is a modern, responsive e-commerce web application engineered with semantic **HTML5**, modern **CSS3** (Flexbox, CSS Grid, media queries), and vanilla **JavaScript (ES6+)**. 

Designed with minimalism and luxury aesthetics, Furniro provides a full shopping journey — from browsing collection categories and inspecting product details with image swatches, to comparing products side-by-side, managing an interactive slide-out cart drawer, and checking out.

---

## ✨ Key Features

- **🛍️ Complete E-Commerce Multi-Page Flow**:
  - Full store experience with 8 dedicated page templates (Home, Shop, Product Details, Cart, Checkout, Comparison, Blog, and Contact).
- **🛒 Dynamic Slide-out Cart Drawer**:
  - Fly-out sidebar cart drawer accessible from any page.
  - Live item counter badge in the navigation bar.
  - Real-time subtotal calculation and quick removal of cart items.
  - Instant navigation to dedicated Cart and Checkout pages.
- **🔍 Interactive Product Detail View**:
  - Multi-angle thumbnail image gallery with seamless active image swapping.
  - Interactive size selection buttons (`L`, `XL`, `XS`) and color swatch selectors.
  - Quantity counter with real-time state management.
  - Tabbed specification section (Description, Additional Information, Customer Reviews).
- **⚖️ Side-by-Side Product Comparison**:
  - Dedicated comparison matrix comparing product specifications, materials, warranty, and ratings side-by-side.
- **🏷️ Product Discovery & Filtering**:
  - Product catalog with discounted badges (e.g. `-30%`, `-50%`) and `New` labels.
  - Hover / click action overlays featuring **Add to Cart**, **Share**, **Compare**, and **Like** buttons.
  - Filter and sorting control toolbar with customizable item pagination.
- **📰 Editorial & Blog Hub**:
  - Interior design and craft articles with category filters, search bar, and recent posts widget.
- **📱 Fully Responsive Design**:
  - Optimized layout for mobile phones, tablets, laptops, and ultra-wide desktop monitors.
- **🛡️ Customer Confidence Banner**:
  - Built-in trust highlights: High Quality Craftsmanship, Warranty Protection (2+ years), Free Shipping, and 24/7 Dedicated Support.

---

## 📑 Pages Overview

| Page | File | Description |
| :--- | :--- | :--- |
| **Home** | [`index.html`](index.html) | Brand hero banner, collection categories (Dining, Living, Bedroom), product showcase grid, inspirational room slider layout, and user gallery grid. |
| **Shop** | [`shop.html`](shop.html) | Complete product catalog with category filter bar, pagination, sort options, and interactive hover cards. |
| **Product Detail** | [`product.html`](product.html) | Single product showcase with interactive photo gallery, variant selection (size & color), specifications, reviews, and related products. |
| **Cart** | [`cart.html`](cart.html) | Full shopping cart page displaying selected items, unit pricing, quantity, subtotals, and cart summary totals with checkout CTA. |
| **Checkout** | [`checkout.html`](checkout.html) | Comprehensive billing address form, live order recap, and payment option selectors (Direct Bank Transfer & Cash on Delivery). |
| **Product Comparison** | [`compare.html`](compare.html) | Side-by-side comparison table analyzing furniture specifications, dimensions, finish quality, and warranty terms. |
| **Blog** | [`blog.html`](blog.html) | Design articles, categories (Crafts, Design, Handmade, Interior, Wood), search utility, and recent posts feed. |
| **Contact** | [`contact.html`](contact.html) | Business contact information (store location, hotline, working hours) and interactive customer enquiry form. |

---

## 🛠️ Tech Stack

- **Markup**: [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) — Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Styling**: [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) — CSS Flexbox, CSS Grid, custom variables, smooth transitions, and responsive media queries.
- **Scripting**: [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — DOM manipulation, state management for cart/gallery, event delegation.
- **Typography**: [Google Fonts](https://fonts.google.com/) — *Poppins* & clean sans-serif typography.
- **Icons**: [Font Awesome 6.5.0](https://fontawesome.com/) — Clean vector icons for navigation, actions, and store trust badges.

---

## 📂 Project Structure

```text
furniro-ecommerce/
│
├── index.html              # Homepage
├── shop.html               # Shop & catalog browsing page
├── product.html            # Individual product view & specifications
├── cart.html               # Dedicated shopping cart page
├── checkout.html           # Billing and checkout processing page
├── compare.html            # Side-by-side product comparison page
├── blog.html               # Interior design & lifestyle blog
├── contact.html            # Contact information & message form
│
├── css/
│   └── style.css           # Global stylesheet, layout rules & responsive queries
│
├── js/
│   └── script.js           # Interactive logic: cart, gallery, size/color, overlays
│
├── .gitignore              # Ignored system & IDE files
├── README.md               # Professional project documentation
│
└── *.png / *.jpeg          # Product assets, room imagery, and icons
```

---

## 🚀 Getting Started

No complex build steps, package managers, or server runtimes are required. You can run Furniro directly in any web browser!

### Prerequisites

- A modern web browser ([Google Chrome](https://www.google.com/chrome/), [Mozilla Firefox](https://www.mozilla.org/firefox/), [Microsoft Edge](https://www.microsoft.com/edge), or [Safari](https://www.apple.com/safari/)).
- *(Optional)* [Visual Studio Code](https://code.visualstudio.com/) with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/itss-tayyaba/furniro-ecommerce.git
   ```

2. **Navigate into the project folder:**
   ```bash
   cd furniro-ecommerce
   ```

3. **Launch the application:**
   - Double-click [`index.html`](index.html) to open directly in your browser.
   - Or, if using VS Code with Live Server:
     Right-click [`index.html`](index.html) and select **"Open with Live Server"**.

---

## 💡 Interactive Capabilities

### 1. Interactive Image Gallery
Clicking any thumbnail preview on the product page instantly transitions the main showcase hero image:
```javascript
function changeImage(element) {
  const mainImage = document.getElementById("mainProductImage");
  if (mainImage) mainImage.src = element.src;
  document.querySelectorAll(".thumbs img").forEach(img => img.classList.remove("active"));
  element.classList.add("active");
}
```

### 2. Slide-out Cart Drawer & Real-Time Calculation
- Add items to the cart from the product detail page with selected sizes.
- Real-time updating of item counts on the shopping cart badge icon.
- Interactive slide-out sidebar drawer with background backdrop dismissal.
- Live formatted currency total calculation (`Rs. 250,000`).

### 3. Product Comparison Matrix
- Dynamic dual-product view rendering side-by-side visual cards, review ratings, specifications, and quick cart buttons.

---

## 🔮 Future Enhancements

- [ ] Connect with a headless e-commerce backend (Shopify Storefront API, Strapi, or Node.js/Express).
- [ ] Integrate payment processing with Stripe / PayPal SDK.
- [ ] Add `localStorage` / IndexedDB persistence for shopping cart & wishlist items across browser sessions.
- [ ] Search input autocompletion with live product filtering.
- [ ] User authentication with order history and profile management.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👩‍💻 Author

Crafted with ❤️ by **[Tayyaba](https://github.com/itss-tayyaba)**

- **GitHub**: [@itss-tayyaba](https://github.com/itss-tayyaba)

---

<div align="center">
  <sub>⭐ If you find this project helpful or inspiring, consider giving it a star on GitHub!</sub>
</div>
