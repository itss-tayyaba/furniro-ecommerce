// =========================
// NAVIGATION
// =========================
function goToShop() {
  window.location.href = "shop.html";
}

function goHome() {
  window.location.href = "index.html";
}

// OPTIONAL (if you want to use in HTML)
function goToCheckout() {
  window.location.href = "checkout.html";
}


// =========================
// PRODUCT CARD TOGGLE
// =========================
function toggleCard(card, event) {
  event.stopPropagation();

  document.querySelectorAll('.card').forEach(c => {
    if (c !== card) c.classList.remove('active');
  });

  card.classList.toggle('active');
}

// CLOSE CARD WHEN CLICK OUTSIDE
document.addEventListener("click", (e) => {
  if (!e.target.closest(".card")) {
    document.querySelectorAll(".card").forEach(c => {
      c.classList.remove("active");
    });
  }
});


// =========================
// MAIN LOAD
// =========================
document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.getElementById("cart-overlay");
  const cartIcon = document.querySelector(".cart-icon");
  const addBtn = document.querySelector(".add");
  const showMoreBtn = document.querySelector(".show-more button");

  let cart = [];

  // =========================
  // SIZE SELECTION
  // =========================
  let selectedSize = "L";

  const sizeButtons = document.querySelectorAll(".sizes button");

  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSize = btn.innerText;
    });
  });


  // =========================
  // SHOW MORE BUTTON
  // =========================
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      window.location.href = "shop.html";
    });
  }


  // =========================
  // MAIN PRODUCT ADD TO CART
  // =========================
  if (addBtn) {
    addBtn.addEventListener("click", () => {

      let currentImage = "default.png";

      const mainImg = document.getElementById("mainProductImage");
      if (mainImg) currentImage = mainImg.src;

      const product = {
        name: "Asgaard sofa",
        price: 250000,
        image: currentImage,
        size: selectedSize
      };

      cart.push(product);
      updateCart();
      openCart();
    });
  }


  // =========================
  // RELATED PRODUCTS ADD TO CART
  // =========================
  const relatedButtons = document.querySelectorAll(".add-related");

  relatedButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      const product = {
        name: btn.dataset.name,
        price: Number(btn.dataset.price),
        image: btn.dataset.image,
        size: "-"
      };

      cart.push(product);
      updateCart();
      openCart();
    });
  });


  // =========================
  // COMPARE (SAVE TO LOCALSTORAGE)
// =========================
  const compareButtons = document.querySelectorAll(".compare-btn");

  compareButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      let product = {};
      const card = btn.closest(".card");

      if (card) {
        product = {
          name: card.querySelector("h3").innerText,
          image: card.querySelector("img").src,
          price: card.querySelector(".price")?.innerText || ""
        };
      } else {
        product = {
          name: document.querySelector(".product-right h1")?.innerText,
          image: document.getElementById("mainProductImage")?.src,
          price: document.querySelector(".product-right .price")?.innerText
        };
      }

      let compareList = JSON.parse(localStorage.getItem("compare")) || [];

      compareList.push(product);

      localStorage.setItem("compare", JSON.stringify(compareList));

      window.location.href = "compare.html";
    });
  });


  // =========================
  // FAKE SELECT → SHOP
  // =========================
  const goToShopBtn = document.getElementById("goToShopBtn");

  if (goToShopBtn) {
    goToShopBtn.addEventListener("click", () => {
      window.location.href = "shop.html";
    });
  }


  // =========================
  // SHOW COMPARE PRODUCTS (SOFA ONLY)
  // =========================
  const compareContainer = document.getElementById("compareProducts");

  if (compareContainer) {

    let compareList = JSON.parse(localStorage.getItem("compare")) || [];

    const sofas = compareList.filter(item =>
      item.name && item.name.toLowerCase().includes("sofa")
    );

    const displayItems = sofas.slice(0, 2);

    compareContainer.innerHTML = "";

    displayItems.forEach(item => {
      compareContainer.innerHTML += `
        <div class="compare-box">
          <img src="${item.image}" alt="${item.name}">
          <h4>${item.name}</h4>
          <p class="compare-price">${item.price}</p>

          <div class="stars-row">
            <span>4.5</span>
            <div class="stars-icons">⭐⭐⭐⭐⭐</div>
            <span class="review-count">100 Review</span>
          </div>
        </div>
      `;
    });
  }


  // =========================
  // SPECS BUTTON → CART PAGE
  // =========================
  const specsBtns = document.querySelectorAll(".specs-cart-btn");

  specsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  });


  // =========================
  // CART FOOTER BUTTONS
  // =========================
  const cartFooterBtns = document.querySelectorAll(".cart-footer button");

  if (cartFooterBtns.length >= 2) {

    // Cart Page
    cartFooterBtns[0].addEventListener("click", () => {
      window.location.href = "cart.html";
    });

    // Checkout Page
    cartFooterBtns[1].addEventListener("click", () => {
      window.location.href = "checkout.html";
    });
  }


  // =========================
  // OPEN CART
  // =========================
  if (cartIcon) {
    cartIcon.addEventListener("click", openCart);
  }


  // =========================
  // CART FUNCTIONS
  // =========================
  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartCount || !cartTotal) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;

      cartItems.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}">
          
          <div>
            <p>${item.name}</p>
            <p style="font-size:12px; color:gray;">Size: ${item.size}</p>
            <p>Rs. ${item.price.toLocaleString()}</p>
          </div>

          <span onclick="removeItem(${index})">✕</span>
        </div>
      `;
    });

    cartCount.innerText = cart.length;
    cartTotal.innerText = "Rs. " + total.toLocaleString();
  }


  // =========================
  // REMOVE ITEM
  // =========================
  window.removeItem = function(index) {
    cart.splice(index, 1);
    updateCart();
  }


  // =========================
  // OPEN / CLOSE CART
  // =========================
  function openCart() {
    const sidebar = document.getElementById("cart-sidebar");

    if (sidebar) sidebar.classList.add("active");
    if (overlay) overlay.classList.add("active");
  }

  function closeCart() {
    const sidebar = document.getElementById("cart-sidebar");

    if (sidebar) sidebar.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
  }

  if (overlay) {
    overlay.addEventListener("click", closeCart);
  }

  // INITIAL LOAD
  updateCart();

});


// =========================
// CHANGE PRODUCT IMAGE
// =========================
function changeImage(element) {
  const mainImage = document.getElementById("mainProductImage");

  if (mainImage) {
    mainImage.src = element.src;
  }

  document.querySelectorAll(".thumbs img").forEach(img => {
    img.classList.remove("active");
  });

  element.classList.add("active");
}