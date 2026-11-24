"use strict";

/* ================================
   LUXEPULSE STORE SETTINGS
================================ */

const WHATSAPP_NUMBER = "916359442679";
const UPI_ID = "6359442679@paytm";
const MERCHANT_NAME = "LuxePulse";

const products = [
  {id:1,name:"Classic Luxury Watch",category:"Watches",price:2499,image:"w1.jpg"},
  {id:2,name:"Premium Chronograph Watch",category:"Watches",price:3299,image:"w2.jpg"},
  {id:3,name:"Minimal Steel Watch",category:"Watches",price:1999,image:"w3.jpg"},
  {id:4,name:"Elegant Gold Watch",category:"Watches",price:2799,image:"w4.jpg"},
  {id:5,name:"Sport Edition Watch",category:"Watches",price:2299,image:"w5.jpg"},
  {id:6,name:"Everyday Classic Watch",category:"Watches",price:1899,image:"w6.jpg"},
  {id:7,name:"Premium Dial Watch",category:"Watches",price:3599,image:"w7.jpg"},

  {id:8,name:"Elegant Fashion Dress",category:"Dresses",price:1499,image:"d1.jpg"},
  {id:9,name:"Modern Casual Dress",category:"Dresses",price:1299,image:"d2.jpg"},
  {id:10,name:"Premium Party Dress",category:"Dresses",price:2199,image:"d3.jpg"},
  {id:11,name:"Classic Everyday Dress",category:"Dresses",price:1199,image:"d4.jpg"},
  {id:12,name:"Stylish Summer Dress",category:"Dresses",price:1399,image:"d5.jpg"},
  {id:13,name:"Designer Look Dress",category:"Dresses",price:1899,image:"d6.jpg"},

  {id:14,name:"Urban Street Sneakers",category:"Shoes",price:1999,image:"j1.jpg"},
  {id:15,name:"Classic Everyday Shoes",category:"Shoes",price:1599,image:"j2.jpg"},
  {id:16,name:"Premium Casual Sneakers",category:"Shoes",price:2499,image:"j3.jpg"},
  {id:17,name:"Sport Style Shoes",category:"Shoes",price:1799,image:"j4.jpg"},
  {id:18,name:"Modern Fashion Shoes",category:"Shoes",price:2299,image:"j5.jpg"},

  {id:19,name:"Premium Everyday Bag",category:"Bags",price:1699,image:"b1.jpg"},
  {id:20,name:"Elegant Handbag",category:"Bags",price:2199,image:"b2.jpg"},
  {id:21,name:"Classic Shoulder Bag",category:"Bags",price:1499,image:"b3.jpg"},
  {id:22,name:"Modern Travel Bag",category:"Bags",price:1899,image:"b4.jpg"},
  {id:23,name:"Stylish Mini Bag",category:"Bags",price:1299,image:"b5.jpg"},
  {id:24,name:"Premium Fashion Bag",category:"Bags",price:2399,image:"b6.jpg"},

  {id:25,name:"Classic Everyday Cap",category:"Caps",price:499,image:"c1.jpg"},
  {id:26,name:"Urban Street Cap",category:"Caps",price:599,image:"c2.jpg"},
  {id:27,name:"Premium Logo Cap",category:"Caps",price:699,image:"c3.jpg"},
  {id:28,name:"Sport Edition Cap",category:"Caps",price:549,image:"c4.jpg"},
  {id:29,name:"Minimal Style Cap",category:"Caps",price:449,image:"c5.jpg"},
  {id:30,name:"Fashion Baseball Cap",category:"Caps",price:649,image:"c6.jpg"}
];

/* ================================
   SAFE STORAGE
================================ */

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("Storage read error:", key, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn("Storage write error:", key, error);
    showToast("Storage unavailable. Please check browser settings.");
    return false;
  }
}

let cart = readStorage("lp_cart", []);
let wishlist = readStorage("lp_wishlist", []);
let orderRequests = readStorage("lp_order_requests", []);

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(wishlist)) wishlist = [];
if (!Array.isArray(orderRequests)) orderRequests = [];

let currentCategory = "All";
let currentSearch = "";
let activeProduct = null;
let toastTimeout;

/* ================================
   HELPERS
================================ */

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function money(amount) {
  return "₹" + Number(amount || 0).toLocaleString("en-IN");
}

function getProduct(id) {
  return products.find(product => product.id === Number(id));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove("hidden");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2400);
}

function copyTextSafe(text) {
  if (!text) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
}

function isWebViewOrPreview() {
  const ua = navigator.userAgent || "";
  return /\bwv\b|Android.*Version\/[\d.]+.*Chrome\/[\d.]+ Mobile/i.test(ua) &&
    !/Version\/[\d.]+.*Chrome\/[\d.]+ Mobile Safari/i.test(ua);
}

function clearFieldError(el) {
  if (el) el.classList.remove("field-error");
}

function clearAllCheckoutErrors() {
  ["customerName", "customerPhone", "customerAddress"].forEach(id => {
    document.getElementById(id)?.classList.remove("field-error");
  });
}

function saveCart() {
  writeStorage("lp_cart", cart);
  updateCounts();
}

function saveWishlist() {
  writeStorage("lp_wishlist", wishlist);
  updateCounts();
}

/* ================================
   PRODUCT DISPLAY
================================ */

function getVisibleProducts() {
  return products.filter(product => {
    const categoryMatch =
      currentCategory === "All" ||
      product.category === currentCategory;

    const searchText =
      (product.name + " " + product.category).toLowerCase();

    const searchMatch = searchText.includes(currentSearch);

    return categoryMatch && searchMatch;
  });
}

function renderProducts(targetId = "productGrid", list = getVisibleProducts()) {
  const grid = document.getElementById(targetId);
  if (!grid) return;

  const empty = document.getElementById("emptyMessage");

  if (targetId === "productGrid" && empty) {
    empty.classList.toggle("hidden", list.length > 0);
  }

  grid.innerHTML = list.map(product => {
    const isWished = wishlist.includes(product.id);

    return `
      <article class="product-card">
        <button
          type="button"
          class="wish-btn ${isWished ? "selected" : ""}"
          onclick="toggleWishlist(${product.id})"
          aria-label="Add to wishlist"
          aria-pressed="${isWished}"
        >${isWished ? "♥" : "♡"}</button>

        <div class="product-image" onclick="openProduct(${product.id})">
          <img
            src="${escapeHTML(product.image)}"
            alt="${escapeHTML(product.name)}"
            loading="lazy"
            onerror="this.onerror=null;this.src='';this.alt='Image not available';"
          >
        </div>

        <div class="product-content">
          <span class="product-category">${escapeHTML(product.category)}</span>
          <h3>${escapeHTML(product.name)}</h3>
          <div class="product-price">${money(product.price)}</div>

          <div class="card-actions">
            <button type="button" class="add-btn" onclick="addToCart(${product.id})">Add to Bag</button>
            <button type="button" class="view-btn" onclick="openProduct(${product.id})">View</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  const count = document.getElementById("resultCount");
  if (count && targetId === "productGrid") {
    count.textContent = `${list.length} products`;
  }
}

function filterCategory(category, button) {
  currentCategory = category;

  document.querySelectorAll(".category-tabs button").forEach(btn => {
    btn.classList.remove("active");
  });

  if (button) button.classList.add("active");

  renderProducts();
}

function searchProducts() {
  const input = document.getElementById("searchInput");
  currentSearch = (input?.value || "").trim().toLowerCase();

  currentCategory = "All";

  document.querySelectorAll(".category-tabs button").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.category === "All"
    );
  });

  renderProducts();

  document.getElementById("shop")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function showHome() {
  currentCategory = "All";
  currentSearch = "";

  const search = document.getElementById("searchInput");
  if (search) search.value = "";

  document.querySelectorAll(".category-tabs button").forEach(btn => {
    btn.classList.toggle(btn.dataset.category === "All", btn.dataset.category === "All");
    if (btn.dataset.category !== "All") btn.classList.remove("active");
  });

  renderProducts();
  closeModal("wishlistModal");

  window.scrollTo({top: 0, behavior: "smooth"});
}

/* ================================
   PRODUCT DETAILS
================================ */

function openProduct(id) {
  const product = getProduct(id);
  if (!product) return;

  activeProduct = product;

  document.getElementById("detailImage").src = product.image;
  document.getElementById("detailImage").alt = product.name;
  document.getElementById("detailName").textContent = product.name;
  document.getElementById("detailCategory").textContent = product.category;
  document.getElementById("detailPrice").textContent = money(product.price);
  document.getElementById("detailDescription").textContent =
    "Explore this item from the LuxePulse collection. Select your size and proceed to checkout.";

  const sizeSelect = document.getElementById("detailSize");

  const sizes = product.category === "Shoes"
    ? ["6", "7", "8", "9", "10"]
    : product.category === "Dresses"
      ? ["S", "M", "L", "XL"]
      : ["Standard"];

  sizeSelect.innerHTML = sizes.map(size =>
    `<option value="${escapeHTML(size)}">${escapeHTML(size)}</option>`
  ).join("");

  document.getElementById("detailAddBtn").onclick = () => {
    addToCart(product.id, sizeSelect.value);
    closeModal("productModal");
  };

  document.getElementById("detailBuyBtn").onclick = () => {
    addToCart(product.id, sizeSelect.value);
    closeModal("productModal");
    openCheckout();
  };

  openModal("productModal");
}

/* ================================
   WISHLIST
================================ */

function toggleWishlist(id) {
  id = Number(id);

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    showToast("Removed from wishlist");
  } else {
    wishlist.push(id);
    showToast("Added to wishlist");
  }

  saveWishlist();
  renderProducts();

  if (!document.getElementById("wishlistModal").classList.contains("hidden")) {
    renderWishlist();
  }
}

function renderWishlist() {
  const list = products.filter(product => wishlist.includes(product.id));

  renderProducts("wishlistGrid", list);

  document.getElementById("wishlistEmpty")
    ?.classList.toggle("hidden", list.length > 0);
}

function toggleWishlistView() {
  renderWishlist();
  openModal("wishlistModal");
}

/* ================================
   CART
================================ */

function addToCart(id, size = "Standard") {
  const product = getProduct(id);
  if (!product) return;

  const existing = cart.find(item =>
    item.id === product.id && item.size === size
  );

  if (existing) {
    existing.quantity = Math.min(99, Number(existing.quantity || 1) + 1);
  } else {
    cart.push({
      id: product.id,
      size: size,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
  showToast("Added to your bag");
}

function changeQuantity(id, size, amount) {
  const item = cart.find(entry =>
    entry.id === Number(id) && entry.size === size
  );

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(entry => entry !== item);
  }

  if (item.quantity > 99) item.quantity = 99;

  saveCart();
  renderCart();
}

function removeCartItem(id, size) {
  cart = cart.filter(item =>
    !(item.id === Number(id) && item.size === size)
  );

  saveCart();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateCounts() {
  const cartCount = cart.reduce((sum, item) =>
    sum + Number(item.quantity || 0), 0
  );

  document.getElementById("cartCount").textContent = cartCount;
  document.getElementById("wishCount").textContent = wishlist.length;
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const total = getCartTotal();

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        Your shopping bag is empty.<br>
        Explore the collection to add products.
      </div>`;
  } else {
    container.innerHTML = cart.map(item => {
      const product = getProduct(item.id);
      if (!product) return "";

      return `
        <div class="cart-line">
          <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}"
               onerror="this.onerror=null;this.style.visibility='hidden'">
          <div>
            <h4>${escapeHTML(product.name)}</h4>
            <p>${money(product.price)} · Size: ${escapeHTML(item.size)}</p>
            <div class="quantity-controls">
              <button type="button" onclick="changeQuantity(${product.id},'${escapeHTML(item.size)}',-1)">−</button>
              <span>${Number(item.quantity)}</span>
              <button type="button" onclick="changeQuantity(${product.id},'${escapeHTML(item.size)}',1)">+</button>
            </div>
          </div>
          <button type="button" class="remove-btn" aria-label="Remove item"
            onclick="removeCartItem(${product.id},'${escapeHTML(item.size)}')">✕</button>
        </div>`;
    }).join("");
  }

  document.getElementById("cartSubtotal").textContent = money(total);
  document.getElementById("checkoutTotal").textContent = money(total);
  updateCounts();
}

function toggleCart(open) {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");

  if (open) {
    renderCart();
    drawer.classList.add("open");
    overlay.classList.remove("hidden");
  } else {
    drawer.classList.remove("open");
    overlay.classList.add("hidden");
  }
}

/* ================================
   CHECKOUT, UPI & ORDER REQUESTS
================================ */

function toggleUpiPanel() {
  const method = document.getElementById("paymentMethod")?.value || "";
  const upiBox = document.getElementById("upiBox");
  if (!upiBox) return;

  if (method.startsWith("UPI")) {
    upiBox.classList.remove("hidden");
  } else {
    upiBox.classList.add("hidden");
  }
}

function copyUpiId() {
  copyTextSafe(UPI_ID);
  showToast(`Copied UPI ID: ${UPI_ID}`);
}

function openUpiApp() {
  const details = getCustomerDetails();
  if (!validateCustomer(details)) return;

  const amount = Math.max(1, Number(getCartTotal()) || 1);
  const upiUrl = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${encodeURIComponent(amount.toFixed(2))}&cu=INR`;

  if (isWebViewOrPreview()) {
    showToast(`Pay ₹${amount.toLocaleString("en-IN")} via UPI app to ${UPI_ID}`);
    return;
  }

  showToast(`Opening UPI app for ₹${amount.toLocaleString("en-IN")}...`);
  try {
    window.location.href = upiUrl;
  } catch (err) {
    showToast(`Use UPI ID: ${UPI_ID}`);
  }
}

function openCheckout() {
  if (cart.length === 0) {
    showToast("Your bag is empty");
    return;
  }

  clearAllCheckoutErrors();
  toggleCart(false);
  renderCart();
  toggleUpiPanel();
  openModal("checkoutModal");
}

function getCustomerDetails() {
  return {
    name: document.getElementById("customerName").value.trim(),
    phone: document.getElementById("customerPhone").value.trim(),
    address: document.getElementById("customerAddress").value.trim(),
    payment: document.getElementById("paymentMethod").value
  };
}

function validateCustomer(details) {
  clearAllCheckoutErrors();

  if (cart.length === 0) {
    showToast("Your bag is empty");
    return false;
  }

  if (details.name.length < 2) {
    const nameEl = document.getElementById("customerName");
    nameEl?.classList.add("field-error");
    nameEl?.focus();
    showToast("Please enter your full name first");
    return false;
  }

  if (!/^[6-9]\d{9}$/.test(details.phone)) {
    const phoneEl = document.getElementById("customerPhone");
    phoneEl?.classList.add("field-error");
    phoneEl?.focus();
    showToast("Enter a valid 10-digit mobile number first");
    return false;
  }

  if (details.address.length < 8) {
    const addrEl = document.getElementById("customerAddress");
    addrEl?.classList.add("field-error");
    addrEl?.focus();
    showToast("Please enter your complete delivery address first");
    return false;
  }

  return true;
}

function createOrderMessage(details) {
  const lines = cart.map(item => {
    const product = getProduct(item.id);
    if (!product) return "";

    return `${product.name} | Size: ${item.size} | Qty: ${item.quantity} | ${money(product.price * item.quantity)}`;
  }).filter(Boolean);

  return [
    "LUXEPULSE - NEW ORDER REQUEST",
    "",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Address: ${details.address}`,
    `Preferred payment: ${details.payment}`,
    `UPI ID: ${UPI_ID}`,
    "",
    "PRODUCTS:",
    ...lines,
    "",
    `Subtotal: ${money(getCartTotal())}`,
    "",
    "Note: Order request sent from LuxePulse store."
  ].join("\n");
}

function saveOrderRequest(details) {
  const order = {
    reference: "LP-" + Date.now().toString().slice(-8),
    date: new Date().toISOString(),
    customer: details,
    items: cart.map(item => ({...item})),
    total: getCartTotal(),
    status: "Request pending confirmation"
  };

  orderRequests.unshift(order);

  if (!writeStorage("lp_order_requests", orderRequests)) {
    return false;
  }

  return true;
}

document.getElementById("checkoutForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const details = getCustomerDetails();
  if (!validateCustomer(details)) return;

  if (!saveOrderRequest(details)) {
    showToast("Could not save request. Please try WhatsApp.");
    return;
  }

  const message = createOrderMessage(details);
  const url = "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(message);

  cart = [];
  saveCart();
  renderCart();
  closeModal("checkoutModal");

  showToast("Order request saved. Opening WhatsApp...");
  window.open(url, "_blank", "noopener,noreferrer");
});

function sendWhatsAppOrder() {
  const details = getCustomerDetails();

  if (!validateCustomer(details)) return;

  const message = createOrderMessage(details);
  const url = "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

/* ================================
   MODAL HELPERS
================================ */

function openModal(id) {
  document.getElementById(id)?.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id)?.classList.add("hidden");

  const anyModalOpen = [...document.querySelectorAll(".modal")]
    .some(modal => !modal.classList.contains("hidden"));

  if (!anyModalOpen) {
    document.body.style.overflow = "";
  }
}

function outsideClose(event, id) {
  if (event.target.id === id) closeModal(id);
}

/* ================================
   STARTUP
================================ */

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderProducts();
  renderCart();
  renderWishlist();
  toggleUpiPanel();
  updateCounts();
});