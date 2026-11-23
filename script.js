const products = [
    { id: 0, name: "Mstianq Sage Green Elegant Watch", img: "w1.jpg", price: 149, originalPrice: 499, discount: "70% OFF", rating: "4.5 ★", category: "watch", sizes: ["Free Size"] },
    { id: 1, name: "Leona Rosa Square Silver & White Watch", img: "w2.jpg", price: 199, originalPrice: 498, discount: "60% OFF", rating: "4.8 ★", category: "watch", sizes: ["Free Size"] },
    { id: 2, name: "Panmila Transparent Crystal Square Watch", img: "w3.jpg", price: 199, originalPrice: 398, discount: "50% OFF", rating: "4.2 ★", category: "watch", sizes: ["Free Size"] },
    { id: 3, name: "Gediyo Classic Beige Minimalist Dial Watch", img: "w4.jpg", price: 149, originalPrice: 331, discount: "55% OFF", rating: "4.6 ★", category: "watch", sizes: ["Free Size"] },
    { id: 4, name: "Panmila Cute Koala Blue Casual Watch", img: "w5.jpg", price: 149, originalPrice: 298, discount: "50% OFF", rating: "3.9 ★", category: "watch", sizes: ["Free Size"] },
    { id: 5, name: "Rose Petal Chic Mauve Round Dial Watch", img: "w6.jpg", price: 199, originalPrice: 442, discount: "55% OFF", rating: "4.7 ★", category: "watch", sizes: ["Free Size"] },
    { id: 6, name: "Leona Rosa Modern White & Black Buckle Watch", img: "w7.jpg", price: 199, originalPrice: 568, discount: "65% OFF", rating: "4.4 ★", category: "watch", sizes: ["Free Size"] },

    { id: 7, name: "Floral Embroidered Striped Shirt & Dark Denim Combo", img: "d1.jpg", price: 399, originalPrice: 998, discount: "60% OFF", rating: "4.8 ★", category: "dress", sizes: ["S", "M", "L", "XL", "XXL"] },
    { id: 8, name: "Minimalist Black Oversized Tee & Light Blue Wide-Leg Jeans", img: "d2.jpg", price: 299, originalPrice: 543, discount: "45% OFF", rating: "4.5 ★", category: "dress", sizes: ["S", "M", "L", "XL", "XXL"] },
    { id: 9, name: "Celestial Moon Graphic Tee & Dark Blue Denim Set", img: "d3.jpg", price: 349, originalPrice: 775, discount: "55% OFF", rating: "4.9 ★", category: "dress", sizes: ["S", "M", "L", "XL", "XXL"] },
    { id: 10, name: "Streetwear Black Hoodie & Light Denim Combo", img: "d4.jpg", price: 399, originalPrice: 886, discount: "55% OFF", rating: "4.3 ★", category: "dress", sizes: ["S", "M", "L", "XL", "XXL"] },
    { id: 11, name: "Espresso Brown Tee & Beige Wide-Leg Jeans Outfit", img: "d5.jpg", price: 299, originalPrice: 598, discount: "50% OFF", rating: "4.6 ★", category: "dress", sizes: ["S", "M", "L", "XL", "XXL"] },
    { id: 12, name: "Classic Black Tee & Lightwash Denim Set", img: "d6.jpg", price: 299, originalPrice: 664, discount: "55% OFF", rating: "4.7 ★", category: "dress", sizes: ["S", "M", "L", "XL", "XXL"] },

    { id: 13, name: "Minimalist White & Tan Accent Platform Sneakers", img: "j1.jpg", price: 399, originalPrice: 998, discount: "60% OFF", rating: "4.8 ★", category: "shoe", sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"] },
    { id: 14, name: "Beige & White Chunky Sport Retro Sneakers", img: "j2.jpg", price: 399, originalPrice: 798, discount: "50% OFF", rating: "4.5 ★", category: "shoe", sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"] },
    { id: 15, name: "Ocean Blue & White Streetwear Runner Shoes", img: "j3.jpg", price: 349, originalPrice: 775, discount: "55% OFF", rating: "4.9 ★", category: "shoe", sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"] },
    { id: 16, name: "Modern White & Black Swoosh Chunky Sneakers", img: "j4.jpg", price: 399, originalPrice: 886, discount: "55% OFF", rating: "4.2 ★", category: "shoe", sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"] },
    { id: 17, name: "Grey & Khaki Paneled Casual Platform Shoes", img: "j5.jpg", price: 299, originalPrice: 543, discount: "45% OFF", rating: "4.6 ★", category: "shoe", sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"] },

    { id: 18, name: "Pastel Sky Blue Nike Aesthetic Backpack", img: "b1.jpg", price: 399, originalPrice: 998, discount: "60% OFF", rating: "4.7 ★", category: "bag", sizes: ["Standard"] },
    { id: 19, name: "Vibrant Red Nike Streetwear School Backpack", img: "b2.jpg", price: 399, originalPrice: 798, discount: "50% OFF", rating: "4.8 ★", category: "bag", sizes: ["Standard"] },
    { id: 20, name: "Modern Black & White 'MFY' Statement Backpack", img: "b3.jpg", price: 349, originalPrice: 634, discount: "45% OFF", rating: "4.4 ★", category: "bag", sizes: ["Standard"] },
    { id: 21, name: "Urban Grey Utility Multi-Pocket College Backpack", img: "b4.jpg", price: 399, originalPrice: 886, discount: "55% OFF", rating: "4.9 ★", category: "bag", sizes: ["Standard"] },
    { id: 22, name: "Luofanni Dual-Tone White & Grey Casual Backpack", img: "b5.jpg", price: 299, originalPrice: 598, discount: "50% OFF", rating: "3.9 ★", category: "bag", sizes: ["Standard"] },
    { id: 23, name: "Shishang Mint Green & Black Contrast Backpack", img: "b6.jpg", price: 349, originalPrice: 775, discount: "55% OFF", rating: "4.6 ★", category: "bag", sizes: ["Standard"] },

    { id: 24, name: "Light Blue & Grey Reason Patch Denim Cap", img: "c1.jpg", price: 149, originalPrice: 270, discount: "45% OFF", rating: "4.7 ★", category: "cap", sizes: ["Free Size"] },
    { id: 25, name: "Classic White Polo Embroidered Pony Cap", img: "c2.jpg", price: 199, originalPrice: 398, discount: "50% OFF", rating: "4.9 ★", category: "cap", sizes: ["Free Size"] },
    { id: 26, name: "Beige Distressed Streetwear Ring Detail Cap", img: "c3.jpg", price: 249, originalPrice: 553, discount: "55% OFF", rating: "4.5 ★", category: "cap", sizes: ["Free Size"] },
    { id: 27, name: "Vintage Washed Blue Ripped Denim Cap", img: "c4.jpg", price: 149, originalPrice: 331, discount: "55% OFF", rating: "4.8 ★", category: "cap", sizes: ["Free Size"] },
    { id: 28, name: "Dark Black Distressed Grunge Style Cap", img: "c5.jpg", price: 199, originalPrice: 442, discount: "55% OFF", rating: "4.6 ★", category: "cap", sizes: ["Free Size"] },
    { id: 29, name: "Black Nike Pro Swoosh Flat Brim Cap", img: "c6.jpg", price: 249, originalPrice: 498, discount: "50% OFF", rating: "4.9 ★", category: "cap", sizes: ["Free Size"] }
];

const UPI_ID = "6359442679@paytm";
const MERCHANT_NAME = "LuxePulse";

let activeCategoryList = products;
let currentIndex = 0;
let selectedSize = "Free Size";
let cart = [];
let wishlist = JSON.parse(localStorage.getItem('luxepulse_wishlist') || '[]');
let orderHistory = JSON.parse(localStorage.getItem('luxepulse_orders') || '[]');
let pendingCancelOrderId = null;
let discountPercentage = 60;
let selectedPayMethod = "upi";
let timerInterval;
let flashTimerInterval;
let deliveryInterval;
let toastTimeout;

let zoomScale = 1;
let isPanning = false;
let startX = 0, startY = 0;
let translateX = 0, translateY = 0;

function showToast(msg) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.remove('hidden');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add('hidden');
    }, 2600);
}

function showAddressError(msg) {
    const errBox = document.getElementById('addressErrorMsg');
    const addrBox = document.getElementById('custAddress');
    if (errBox) {
        errBox.innerText = msg;
        errBox.classList.remove('hidden');
    }
    if (addrBox) {
        addrBox.classList.add('input-error-border');
        addrBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function clearAddressError() {
    const errBox = document.getElementById('addressErrorMsg');
    const addrBox = document.getElementById('custAddress');
    if (errBox) {
        errBox.innerText = "";
        errBox.classList.add('hidden');
    }
    if (addrBox) {
        addrBox.classList.remove('input-error-border');
    }
}

function initSplashPopup() {
    const splash = document.getElementById('appSplashScreen');
    if (!splash) return;
    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.style.display = 'none';
        }, 500);
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function() {
    initSplashPopup();
    loadStoreRows();
    updateWishlistCount();
    initModalZoomHandlers();
    startFlashSaleTimer(7200);
    startLiveOrderPopupLoop();
});

function togglePincodeInput() {
    const box = document.getElementById('pincodeInputBox');
    if (box) box.classList.toggle('hidden');
}

function checkPincode() {
    const field = document.getElementById('pincodeField');
    const status = document.getElementById('pincodeStatusText');
    const box = document.getElementById('pincodeInputBox');
    if (!field || !status) return;
    const pin = field.value.trim();
    if (!/^[1-9][0-9]{5}$/.test(pin)) {
        showToast("⚠️ Please enter a valid 6-digit Pincode.");
        return;
    }
    status.innerHTML = `📍 Delivering in <strong>10 mins</strong> to <strong>Pincode - ${pin}</strong>`;
    if (box) box.classList.add('hidden');
    showToast(`✅ Express 10-Min Delivery available for ${pin}!`);
}

function switchTab(tab) {
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('wishlist-view').classList.add('hidden');
    document.getElementById('orders-view').classList.add('hidden');
    document.getElementById('detail-view').classList.add('hidden');

    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));

    if (tab === 'home') {
        document.getElementById('home-view').classList.remove('hidden');
        document.getElementById('nav-home').classList.add('active');
    } else if (tab === 'wishlist') {
        document.getElementById('wishlist-view').classList.remove('hidden');
        document.getElementById('nav-wishlist').classList.add('active');
        renderWishlistView();
    } else if (tab === 'orders') {
        document.getElementById('orders-view').classList.remove('hidden');
        document.getElementById('nav-orders').classList.add('active');
        renderOrdersView();
    }
}

function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();
    const idx = wishlist.indexOf(productId);
    if (idx === -1) {
        wishlist.push(productId);
        showToast("❤️ Saved to Wishlist!");
    } else {
        wishlist.splice(idx, 1);
        showToast("💔 Removed from Wishlist");
    }
    localStorage.setItem('luxepulse_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    loadStoreRows();
    if (!document.getElementById('wishlist-view').classList.contains('hidden')) {
        renderWishlistView();
    }
    if (!document.getElementById('detail-view').classList.contains('hidden')) {
        updateDetailWishIcon();
    }
}

function toggleDetailWishlist() {
    const current = activeCategoryList[currentIndex];
    if (current) toggleWishlist(current.id);
}

function updateDetailWishIcon() {
    const current = activeCategoryList[currentIndex];
    const btn = document.getElementById('detailWishBtn');
    if (current && btn) {
        btn.innerText = wishlist.includes(current.id) ? "❤️" : "🤍";
    }
}

function updateWishlistCount() {
    const el = document.getElementById('wish-count');
    if (el) el.innerText = wishlist.length;
}

function renderWishlistView() {
    const grid = document.getElementById('wishlist-grid');
    if (!grid) return;
    if (wishlist.length === 0) {
        grid.innerHTML = `<p style="grid-column: span 2; text-align: center; color: #94a3b8; padding: 30px;">Your wishlist is empty! Tap ❤️ on any product to save it.</p>`;
        return;
    }
    grid.innerHTML = "";
    wishlist.forEach(id => {
        const p = products.find(item => item.id === id);
        if (p) grid.innerHTML += createCardHTML(p);
    });
}

function saveOrderToHistory(items, total, method, address) {
    const newOrder = {
        id: "LP" + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleString(),
        items: items.map(i => `${i.qty}x ${i.product.name} (${i.size})`).join(", "),
        total: total,
        method: method.toUpperCase(),
        address: address
    };
    orderHistory.unshift(newOrder);
    localStorage.setItem('luxepulse_orders', JSON.stringify(orderHistory));
}

function openCancelModal(orderId) {
    pendingCancelOrderId = orderId;
    const ord = orderHistory.find(o => o.id === orderId);
    const infoEl = document.getElementById('cancelOrderInfo');
    const noteEl = document.getElementById('cancelExtraNote');
    if (infoEl && ord) {
        infoEl.innerText = `Order #${ord.id} • ₹${ord.total} • ${ord.items}`;
    }
    if (noteEl) noteEl.value = "";
    document.getElementById('cancelOrderModal').classList.remove('hidden');
}

function closeCancelModal() {
    pendingCancelOrderId = null;
    document.getElementById('cancelOrderModal').classList.add('hidden');
}

function getSelectedCancelReasonValue() {
    const checked = document.querySelector('input[name="cancelReason"]:checked');
    return checked ? checked.value : "Other reason";
}

function generateAiCancelReply(reasonValue, orderId, extraNote) {
    let reply = "";
    if (reasonValue.includes("mistake")) {
        reply = `Order #${orderId} has been cancelled and removed immediately. No charges apply, and your FIRST60 offer remains available whenever you reorder.`;
    } else if (reasonValue.includes("too long")) {
        reply = `Order #${orderId} has been cancelled and removed. Sorry for the delay on 10-Min Express dispatch—if you still need this item, try ordering again or message our support desk for priority routing.`;
    } else if (reasonValue.includes("size")) {
        reply = `Order #${orderId} has been cancelled and removed so you can pick the exact size or item without duplicate billing. Head back to the catalog anytime to select your preferred fit.`;
    } else if (reasonValue.includes("Payment")) {
        reply = `Order #${orderId} has been cancelled and removed. You can switch to Cash on Delivery (COD) or scan the QR code on checkout for a smooth order.`;
    } else {
        reply = `Order #${orderId} has been cancelled and removed as requested. Our support team has logged your feedback and can assist further on WhatsApp.`;
    }
    if (extraNote) {
        reply += ` (Note recorded: "${extraNote}")`;
    }
    return reply;
}

function removeOrderAndShowAiReply(openWhatsappAfter) {
    if (!pendingCancelOrderId) return;
    const targetIndex = orderHistory.findIndex(o => o.id === pendingCancelOrderId);
    if (targetIndex === -1) return;

    const removedOrder = orderHistory[targetIndex];
    orderHistory.splice(targetIndex, 1);
    localStorage.setItem('luxepulse_orders', JSON.stringify(orderHistory));

    const reasonVal = getSelectedCancelReasonValue();
    const extraNote = (document.getElementById('cancelExtraNote')?.value || "").trim();
    const aiReplyText = generateAiCancelReply(reasonVal, removedOrder.id, extraNote);

    const botBox = document.getElementById('aiCancelBotBox');
    const botMeta = document.getElementById('aiBotMeta');
    const botReply = document.getElementById('aiBotReply');
    const waLink = document.getElementById('aiBotWhatsappLink');

    const fullReasonSummary = extraNote ? `${reasonVal} (${extraNote})` : reasonVal;
    const waMessage = `❌ *LuxePulse Order Cancelled & Removed*%0A%0A*Order ID:* #${removedOrder.id}%0A*Items:* ${encodeURIComponent(removedOrder.items)}%0A*Amount:* ₹${removedOrder.total}%0A*Reason:* ${encodeURIComponent(fullReasonSummary)}%0A*AI Response:* ${encodeURIComponent(aiReplyText)}`;
    const waUrl = `https://wa.me/916359442679?text=${waMessage}`;

    if (botMeta) botMeta.innerText = `Removed Order #${removedOrder.id} • Reason: ${reasonVal}`;
    if (botReply) botReply.innerText = aiReplyText;
    if (waLink) waLink.href = waUrl;
    if (botBox) botBox.classList.remove('hidden');

    closeCancelModal();
    renderOrdersView();
    showToast(`🗑️ Order #${removedOrder.id} cancelled & removed.`);

    if (openWhatsappAfter) {
        window.location.href = waUrl;
    }
}

function confirmCancelOrder() {
    removeOrderAndShowAiReply(false);
}

function sendCancelWhatsApp() {
    removeOrderAndShowAiReply(true);
}

function closeAiBotBox() {
    const botBox = document.getElementById('aiCancelBotBox');
    if (botBox) botBox.classList.add('hidden');
}

function renderOrdersView() {
    const container = document.getElementById('orders-list-container');
    if (!container) return;
    if (orderHistory.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #94a3b8; padding: 24px;">No active orders right now. Place an order for 10-Min Express Delivery ⚡</p>`;
        return;
    }
    container.innerHTML = "";
    orderHistory.forEach(ord => {
        container.innerHTML += `
            <div class="order-history-card">
                <div class="order-top">
                    <span>Order #${ord.id}</span>
                    <span class="order-status-pill">⚡ Express Dispatched</span>
                </div>
                <p style="margin-bottom: 4px;"><strong>Items:</strong> ${ord.items}</p>
                <p style="margin-bottom: 4px; color: #94a3b8; font-size: 0.7rem;">📍 ${ord.address}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 0.72rem;">
                    <span>Amount: <strong style="color:#4ade80;">₹${ord.total}</strong> (${ord.method})</span>
                    <button type="button" onclick="openCancelModal('${ord.id}')" style="background:#ef4444;color:#fff;border:none;padding:5px 10px;border-radius:6px;font-size:0.68rem;font-weight:600;cursor:pointer;">Cancel Order</button>
                </div>
            </div>
        `;
    });
}

function closeTrackingAndViewOrders() {
    document.getElementById('trackingModal').classList.add('hidden');
    switchTab('orders');
}

function startLiveOrderPopupLoop() {
    const buyers = [
        { name: "Ramesh (Jaipur)", item: "Nike Backpack" },
        { name: "Pooja (Sanganer)", item: "Square Watch" },
        { name: "Vicky (Malpura Gate)", item: "Streetwear Hoodie" },
        { name: "Nikhil (Kisan Colony)", item: "Platform Sneakers" },
        { name: "Amit (Jaipur)", item: "Denim Cap" }
    ];

    setInterval(() => {
        const popup = document.getElementById('liveOrderPopup');
        const textElem = document.getElementById('popupText');
        if (!popup || !textElem) return;

        let randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
        textElem.innerHTML = `<strong>${randomBuyer.name}</strong> just ordered a ${randomBuyer.item}!`;

        popup.classList.remove('hidden');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 4000);
    }, 12000);
}

function startFlashSaleTimer(duration) {
    let timer = duration, hours, minutes, seconds;
    flashTimerInterval = setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        const flashElem = document.getElementById('flashCountdown');
        if (flashElem) {
            flashElem.textContent = `${hours}:${minutes}:${seconds}`;
        }

        if (--timer < 0) {
            clearInterval(flashTimerInterval);
            if (flashElem) flashElem.textContent = "EXPIRED";
        }
    }, 1000);
}

function loadStoreRows() {
    const row1 = document.getElementById('row1-slider');
    const row2 = document.getElementById('row2-slider');
    const row3 = document.getElementById('row3-slider');

    if (row1) row1.innerHTML = "";
    if (row2) row2.innerHTML = "";
    if (row3) row3.innerHTML = "";

    const r1Items = [products[0], products[7], products[13], products[18], products[24], products[1], products[8], products[14]];
    const r2Items = [products[3], products[9], products[15], products[20], products[25], products[4], products[10], products[16]];
    const r3Items = [products[6], products[11], products[17], products[22], products[26], products[5], products[12], products[27]];

    r1Items.forEach(p => { if(p && row1) row1.innerHTML += createCardHTML(p); });
    r2Items.forEach(p => { if(p && row2) row2.innerHTML += createCardHTML(p); });
    r3Items.forEach(p => { if(p && row3) row3.innerHTML += createCardHTML(p); });
}

function filterCategory(category, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    const rowsContainer = document.getElementById('category-rows-container');
    const searchSection = document.getElementById('search-results-section');
    const searchGrid = document.getElementById('search-product-grid');
    const resultTitle = document.getElementById('result-title');

    if (!rowsContainer || !searchSection || !searchGrid) return;

    if (category === 'all') {
        rowsContainer.classList.remove('hidden');
        searchSection.classList.add('hidden');
        activeCategoryList = products;
        return;
    }

    rowsContainer.classList.add('hidden');
    searchSection.classList.remove('hidden');
    searchGrid.innerHTML = "";

    let filtered = products.filter(p => p.category === category);
    activeCategoryList = filtered;
    if(resultTitle) resultTitle.innerText = `📁 ${category.toUpperCase()} Collection`;

    if (filtered.length === 0) {
        searchGrid.innerHTML = `<p style="grid-column: span 2; text-align: center; color: #94a3b8; padding: 20px;">No products found!</p>`;
        return;
    }

    filtered.forEach((p) => {
        searchGrid.innerHTML += createCardHTML(p);
    });
}

function searchProducts() {
    switchTab('home');
    let inputElem = document.getElementById('searchInput');
    if (!inputElem) return;
    let query = inputElem.value.toLowerCase();

    const rowsContainer = document.getElementById('category-rows-container');
    const searchSection = document.getElementById('search-results-section');
    const searchGrid = document.getElementById('search-product-grid');
    const resultTitle = document.getElementById('result-title');

    if (!query) {
        if(rowsContainer) rowsContainer.classList.remove('hidden');
        if(searchSection) searchSection.classList.add('hidden');
        return;
    }

    if(rowsContainer) rowsContainer.classList.add('hidden');
    if(searchSection) searchSection.classList.remove('hidden');
    if(searchGrid) searchGrid.innerHTML = "";
    if(resultTitle) resultTitle.innerText = `🔍 Search Results for "${query}"`;

    let filtered = products.filter(p => p.name.toLowerCase().includes(query));
    activeCategoryList = filtered;

    if (filtered.length === 0) {
        if(searchGrid) searchGrid.innerHTML = `<p style="grid-column: span 2; text-align: center; color: #94a3b8; padding: 20px;">No products found!</p>`;
        return;
    }

    filtered.forEach((p) => {
        if(searchGrid) searchGrid.innerHTML += createCardHTML(p);
    });
}

function createCardHTML(p) {
    const isWished = wishlist.includes(p.id);
    return `
        <div class="product-card">
            <span class="badge-60">${p.discount}</span>
            <button type="button" class="wish-card-btn" onclick="toggleWishlist(${p.id}, event)">${isWished ? '❤️' : '🤍'}</button>
            <div class="card-rating">${p.rating}</div>
            <div class="card-img-wrap" onclick="openDetail(${p.id})">
                <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='w1.jpg'">
            </div>
            <h3 title="${p.name}" onclick="openDetail(${p.id})" style="cursor:pointer;">${p.name}</h3>
            <div class="price-row-card">
                <p class="card-price">₹${p.price}</p>
                <span class="slashed-price">₹${p.originalPrice}</span>
            </div>
            <div class="card-btn-row">
                <button type="button" class="card-add-btn" onclick="addToCart(${p.id})">Bag</button>
                <button type="button" class="card-buy-btn" onclick="buyNowDirect(${p.id})">⚡ Buy</button>
            </div>
        </div>
    `;
}

function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        if(btn) btn.textContent = "🌙 Dark";
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        if(btn) btn.textContent = "☀️ Light";
    }
}

function openDetail(id) {
    const selectedProduct = products.find(p => p.id === id);
    if (!selectedProduct) return;
    activeCategoryList = products.filter(p => p.category === selectedProduct.category);
    currentIndex = activeCategoryList.findIndex(p => p.id === id);

    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('wishlist-view').classList.add('hidden');
    document.getElementById('orders-view').classList.add('hidden');
    document.getElementById('detail-view').classList.remove('hidden');

    loadThumbnails();
    updateView();
}

function renderSizeOptions(prod) {
    const container = document.getElementById('sizeOptionsContainer');
    const label = document.getElementById('selectedSizeText');
    if (!container || !prod) return;

    const sizes = prod.sizes && prod.sizes.length ? prod.sizes : ["Free Size"];
    selectedSize = sizes[0];
    if (label) label.innerText = selectedSize;

    container.innerHTML = "";
    sizes.forEach((sz, idx) => {
        const btn = document.createElement('button');
        btn.type = "button";
        btn.className = "size-btn" + (idx === 0 ? " active" : "");
        btn.innerText = sz;
        btn.onclick = function() {
            selectedSize = sz;
            if (label) label.innerText = sz;
            container.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
        container.appendChild(btn);
    });
}

function loadThumbnails() {
    const thumbRow = document.getElementById('thumbnail-row');
    if (!thumbRow) return;

    thumbRow.innerHTML = "";
    activeCategoryList.forEach((p, idx) => {
        thumbRow.innerHTML += `
            <img src="${p.img}" alt="${p.name}" onclick="selectProduct(${idx})" id="thumb-${idx}" onerror="this.src='w1.jpg'">
        `;
    });
}

function updateView() {
    const current = activeCategoryList[currentIndex];
    if (!current) return;
    const mainImg = document.getElementById('main-detail-img');
    if (mainImg) {
        mainImg.src = current.img;
        mainImg.onerror = function() { this.src = 'w1.jpg'; };
    }

    document.getElementById('detail-title').innerText = current.name;
    document.getElementById('display-price').innerText = "₹" + current.price;
    renderSizeOptions(current);
    updateDetailWishIcon();

    document.querySelectorAll('.thumbnail-row img').forEach((img, idx) => {
        if (idx === currentIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % activeCategoryList.length;
    updateView();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + activeCategoryList.length) % activeCategoryList.length;
    updateView();
}

function selectProduct(idx) {
    currentIndex = idx;
    updateView();
}

function goBackToHome() {
    switchTab('home');
    document.getElementById('category-rows-container').classList.remove('hidden');
    document.getElementById('search-results-section').classList.add('hidden');
    document.getElementById('searchInput').value = "";
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const firstTab = document.querySelector('.tab-btn');
    if(firstTab) firstTab.classList.add('active');
    activeCategoryList = products;
}

function addToCart(productId, sizeOverride) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;
    const chosenSize = sizeOverride || (prod.sizes && prod.sizes[0]) || "Free Size";
    const existing = cart.find(item => item.product.id === productId && item.size === chosenSize);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ product: prod, size: chosenSize, qty: 1 });
    }
    updateCartCount();
    showToast(`✅ Added (${chosenSize}) to Bag!`);
}

function addToCartDetail() {
    const prod = activeCategoryList[currentIndex];
    if(prod) addToCart(prod.id, selectedSize);
}

function updateCartCount() {
    let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const countElem = document.getElementById('cart-count');
    if(countElem) countElem.innerText = totalQty;
}

function openCartDrawer() {
    renderCartDrawerItems();
    document.getElementById('cartDrawer').classList.remove('hidden');
}

function closeCartDrawer() {
    document.getElementById('cartDrawer').classList.add('hidden');
}

function renderCartDrawerItems() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #94a3b8; padding: 20px;">Your bag is empty!</p>`;
        document.getElementById('cartTotalDisplay').innerText = "₹0";
        updateFreeDeliveryBar(0);
        return;
    }

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        let itemTotal = item.product.price * item.qty;
        total += itemTotal;
        container.innerHTML += `
            <div class="cart-item-row">
                <div class="cart-item-info">
                    <img src="${item.product.img}" alt="${item.product.name}" onerror="this.src='w1.jpg'">
                    <div>
                        <h4 style="font-size:0.8rem; font-weight:500; max-width:140px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.product.name}</h4>
                        <p style="font-size:0.68rem; color:#94a3b8;">Size: <strong>${item.size}</strong></p>
                        <p style="font-size:0.75rem; color:#38bdf8;">₹${item.product.price} x ${item.qty}</p>
                    </div>
                </div>
                <div class="cart-controls">
                    <button type="button" onclick="changeQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button type="button" onclick="changeQty(${index}, 1)">+</button>
                </div>
            </div>
        `;
    });

    document.getElementById('cartTotalDisplay').innerText = "₹" + total;
    updateFreeDeliveryBar(total);
}

function updateFreeDeliveryBar(total) {
    const target = 500;
    const textElem = document.getElementById('freeDeliveryText');
    const fillElem = document.getElementById('deliveryProgressBar');
    if (!textElem || !fillElem) return;

    if (total >= target) {
        textElem.innerHTML = "🎉 Yay! You unlocked FREE 10-Min Delivery!";
        fillElem.style.width = "100%";
    } else {
        let diff = target - total;
        let percent = (total / target) * 100;
        textElem.innerHTML = `🚚 Add ₹${diff} more for FREE 10-Min Delivery!`;
        fillElem.style.width = percent + "%";
    }
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCartCount();
    renderCartDrawerItems();
}

function buyNowDirect(productId) {
    const prod = products.find(p => p.id === productId);
    if(!prod) return;
    const defaultSize = (prod.sizes && prod.sizes[0]) || "Free Size";
    cart = [{ product: prod, size: defaultSize, qty: 1 }];
    updateCartCount();
    openCheckoutModal();
}

function openCheckoutFromDetail() {
    const prod = activeCategoryList[currentIndex];
    if(!prod) return;
    cart = [{ product: prod, size: selectedSize, qty: 1 }];
    updateCartCount();
    openCheckoutModal();
}

function proceedFromCart() {
    if (cart.length === 0) {
        showToast("⚠️ Your bag is empty!");
        return;
    }
    closeCartDrawer();
    openCheckoutModal();
}

function openCheckoutModal() {
    clearAddressError();
    document.getElementById('checkoutModal').classList.remove('hidden');
    const finalAmt = calculateFinalBill();
    updateUpiLinkHref(finalAmt);
    startTimer(300);
}

function closeCheckout() {
    clearAddressError();
    document.getElementById('checkoutModal').classList.add('hidden');
    clearInterval(timerInterval);
}

function calculateFinalBill() {
    let subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
    let discountVal = Math.round((subtotal * discountPercentage) / 100);
    let final = Math.max(0, subtotal - discountVal);

    document.getElementById('billSubtotal').innerText = "₹" + subtotal;
    document.getElementById('billDiscount').innerText = "-₹" + discountVal;
    document.getElementById('finalPayableAmount').innerText = "₹" + final;
    document.getElementById('billSavingsText').innerText = `🎉 You are saving ₹${discountVal} on this order!`;
    updateUpiLinkHref(final);
    return final;
}

function updateUpiLinkHref(amount) {
    const upiAnchor = document.getElementById('directUpiAppLink');
    if (!upiAnchor) return;
    const cleanAmt = Math.max(1, Number(amount) || 1);
    upiAnchor.href = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${encodeURIComponent(cleanAmt.toFixed(2))}&cu=INR`;
}

function applyPromoCode() {
    let codeInput = document.getElementById('promoInput');
    let msg = document.getElementById('promoMsg');
    if(!codeInput || !msg) return;
    let code = codeInput.value.trim().toUpperCase();

    if (code === "FIRST60") {
        discountPercentage = 60;
        msg.style.color = "#4ade80";
        msg.innerText = "🎉 First Order 60% OFF Applied Successfully!";
        calculateFinalBill();
    } else {
        discountPercentage = 0;
        msg.style.color = "#f87171";
        msg.innerText = "❌ Invalid promo code (Try FIRST60)";
        calculateFinalBill();
    }
}

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        const countdownElem = document.getElementById('countdown');
        if (countdownElem) {
            countdownElem.textContent = minutes + ":" + seconds;
        }

        if (--timer < 0) {
            clearInterval(timerInterval);
            if (countdownElem) {
                countdownElem.textContent = "EXPIRED";
            }
        }
    }, 1000);
}

function selectPay(method) {
    selectedPayMethod = method;
    document.getElementById('upi-box')?.classList.add('hidden');
    document.getElementById('cod-box')?.classList.add('hidden');
    document.getElementById('qr-box')?.classList.add('hidden');
    document.getElementById('card-box')?.classList.add('hidden');
    document.getElementById('bank-box')?.classList.add('hidden');

    const primaryBtn = document.getElementById('primaryOrderBtn');

    if (method === 'cod') {
        document.getElementById('cod-box')?.classList.remove('hidden');
        if (primaryBtn) primaryBtn.innerText = "💵 Place Cash on Delivery Order";
    } else if (method === 'qr') {
        document.getElementById('qr-box')?.classList.remove('hidden');
        if (primaryBtn) primaryBtn.innerText = "✅ Confirm QR Payment & Track";
    } else if (method === 'card') {
        document.getElementById('card-box')?.classList.remove('hidden');
        if (primaryBtn) primaryBtn.innerText = "💳 Pay Securely via Card";
    } else if (method === 'bank') {
        document.getElementById('bank-box')?.classList.remove('hidden');
        if (primaryBtn) primaryBtn.innerText = "🏦 Proceed to Net Banking";
    } else {
        document.getElementById('upi-box')?.classList.remove('hidden');
        if (primaryBtn) primaryBtn.innerText = "✅ Confirm UPI Order & Track";
    }
}

function copyUpiId() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(UPI_ID).then(() => {
            showToast(`📋 Copied UPI ID: ${UPI_ID}`);
        }).catch(() => {
            showToast(`ℹ️ UPI ID: ${UPI_ID}`);
        });
    } else {
        showToast(`ℹ️ UPI ID: ${UPI_ID}`);
    }
}

function filterBanks() {
    let inputElem = document.getElementById('bankSearch');
    if(!inputElem) return;
    let input = inputElem.value.toLowerCase();
    let items = document.getElementsByClassName('bank-item');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        if (text.includes(input)) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
    }
}

function fillQuickArea(areaText) {
    clearAddressError();
    const addrBox = document.getElementById('custAddress');
    if (!addrBox) return;
    const current = addrBox.value.trim();
    if (!current) {
        addrBox.value = areaText;
    } else if (!current.includes(areaText)) {
        addrBox.value = `${current}, ${areaText}`;
    }
    addrBox.focus();
    showToast("📍 Area selected! Add House/Street details if needed.");
}

async function detectLocation() {
    clearAddressError();
    const addrBox = document.getElementById('custAddress');
    const gpsInput = document.getElementById('gpsLink');

    if (!navigator.geolocation) {
        showAddressError("⚠️ Location is not supported in this view. Select an area chip below or type your full address.");
        if (addrBox) addrBox.focus();
        return;
    }

    showAddressError("📍 Detecting your live GPS address...");

    navigator.geolocation.getCurrentPosition(
        async function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
            if (gpsInput) gpsInput.value = mapsLink;

            let readableAddress = `GPS: ${lat.toFixed(5)}, ${lon.toFixed(5)}`;
            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.display_name) {
                        readableAddress = data.display_name;
                    }
                }
            } catch (err) {
                // Fallback to coordinates and map link
            }

            clearAddressError();
            if (addrBox) {
                const existing = addrBox.value.trim();
                const autoText = `${readableAddress} | Map: ${mapsLink}`;
                addrBox.value = existing ? `${existing}\n${autoText}` : autoText;
            }
            showToast("✅ Live GPS Address filled automatically!");
        },
        function(error) {
            if (error.code === 1) {
                showAddressError("⚠️ Location permission is blocked in preview/browser. Select a quick area below or type your full address.");
            } else if (error.code === 2) {
                showAddressError("⚠️ Unable to fetch live GPS location. Select a quick area below or type your full address.");
            } else {
                showAddressError("⚠️ GPS request timed out. Select a quick area below or type your full address.");
            }
            if (addrBox) addrBox.focus();
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

function validateForm() {
    clearAddressError();
    const name = document.getElementById('custName').value.trim();
    const phoneRaw = document.getElementById('custPhone').value.trim();
    const phoneClean = phoneRaw.replace(/\D/g, '').replace(/^91/, '');
    const address = document.getElementById('custAddress').value.trim();

    if (name.length < 2) {
        showAddressError("⚠️ Please enter your full name (at least 2 characters).");
        return false;
    }
    if (!/^[6-9][0-9]{9}$/.test(phoneClean)) {
        showAddressError("⚠️ Please enter a valid 10-digit mobile number.");
        return false;
    }

    const words = address.split(/\s+/).filter(w => w.length > 0);
    const hasRepeatedCharOnly = /^(.)\1{4,}$/.test(address.replace(/\s+/g, ''));
    const hasLetter = /[A-Za-z\u0900-\u097F]/.test(address);
    const hasLongGibberishWord = words.some(w => /^[A-Za-z]{10,}$/.test(w) && !/[aeiouAEIOU]{2}/.test(w));

    if (address.length < 10 || words.length < 2 || !hasLetter || hasRepeatedCharOnly || hasLongGibberishWord) {
        showAddressError("⚠️ Please enter a valid full delivery address (at least 2 words with house, street, or area details).");
        return false;
    }
    return true;
}

function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

function handlePrimaryOrder() {
    if (!validateForm()) return;
    triggerConfetti();
    const total = calculateFinalBill();
    const address = document.getElementById('custAddress').value.trim();

    let modeLabel = selectedPayMethod.toUpperCase();
    if (selectedPayMethod === 'bank') {
        const chosenBank = document.querySelector('input[name="bank"]:checked')?.value || 'Bank';
        modeLabel = `NETBANKING-${chosenBank}`;
    }

    saveOrderToHistory(cart, total, modeLabel, address);

    if (selectedPayMethod === 'upi') {
        showToast(`✅ UPI Order placed for ₹${total}! Pay to ${UPI_ID} or use WhatsApp.`);
    }

    setTimeout(() => {
        document.getElementById('checkoutModal').classList.add('hidden');
        document.getElementById('trackingModal').classList.remove('hidden');
        startDeliveryTimer();
        cart = [];
        updateCartCount();
    }, 500);
}

function proceedToWhatsApp() {
    if (!validateForm()) return;
    triggerConfetti();
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const address = document.getElementById('custAddress').value;
    const total = calculateFinalBill();
    let modeLabel = selectedPayMethod.toUpperCase();
    if (selectedPayMethod === 'bank') {
        const chosenBank = document.querySelector('input[name="bank"]:checked')?.value || 'Bank';
        modeLabel = `NETBANKING-${chosenBank}`;
    }
    saveOrderToHistory(cart, total, "WhatsApp-" + modeLabel, address);

    let itemsSummary = cart.map(i => `• ${i.qty}x ${i.product.name} (Size: ${i.size}) (₹${i.product.price * i.qty})`).join('%0A');

    const message = `⚡ *LuxePulse 10-Min Express Order*%0A%0A*Items:*%0A${itemsSummary}%0A*Payment Mode:* ${modeLabel}%0A*Final Payable:* ₹${total}%0A%0A👤 *Customer:* ${name}%0A📞 *Phone:* ${phone}%0A📍 *Address & GPS:* ${address}`;
    const whatsappUrl = `https://wa.me/916359442679?text=${message}`;
    window.location.href = whatsappUrl;
}

function startDeliveryTimer() {
    clearInterval(deliveryInterval);
    document.getElementById('step2')?.classList.remove('active');
    document.getElementById('step3')?.classList.remove('active');

    let seconds = 600;
    deliveryInterval = setInterval(() => {
        let m = Math.floor(seconds / 60);
        let s = seconds % 60;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        const elem = document.getElementById('deliveryCountdown');
        if (elem) elem.textContent = m + ":" + s;

        if (seconds <= 570) document.getElementById('step2')?.classList.add('active');
        if (seconds <= 540) document.getElementById('step3')?.classList.add('active');

        if (seconds > 0) {
            seconds--;
        } else {
            clearInterval(deliveryInterval);
        }
    }, 1000);
}

function initModalZoomHandlers() {
    const modalImg = document.getElementById('zoomedImg');
    if (!modalImg) return;

    let initialDistance = 0;

    modalImg.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            initialDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
        } else if (e.touches.length === 1 && zoomScale > 1) {
            isPanning = true;
            startX = e.touches[0].clientX - translateX;
            startY = e.touches[0].clientY - translateY;
        }
    });

    modalImg.addEventListener('touchmove', function(e) {
        if (e.touches.length === 2) {
            let currentDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            if (initialDistance > 0) {
                zoomScale = Math.min(Math.max(1, zoomScale * (currentDistance / initialDistance)), 4);
                modalImg.style.transform = `scale(${zoomScale}) translate(${translateX}px, ${translateY}px)`;
            }
            initialDistance = currentDistance;
        } else if (e.touches.length === 1 && isPanning) {
            translateX = e.touches[0].clientX - startX;
            translateY = e.touches[0].clientY - startY;
            modalImg.style.transform = `scale(${zoomScale}) translate(${translateX}px, ${translateY}px)`;
        }
    });

    modalImg.addEventListener('touchend', function(e) {
        if (e.touches.length < 2) initialDistance = 0;
        if (e.touches.length === 0) isPanning = false;
        if (zoomScale === 1) resetModalZoom();
    });

    let lastTap = 0;
    modalImg.addEventListener('click', function(e) {
        let currentTime = new Date().getTime();
        let tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            if (zoomScale === 1) {
                zoomScale = 2.5;
            } else {
                resetModalZoom();
                return;
            }
            modalImg.style.transform = `scale(${zoomScale}) translate(${translateX}px, ${translateY}px)`;
        }
        lastTap = currentTime;
    });
}

function resetModalZoom() {
    zoomScale = 1;
    translateX = 0;
    translateY = 0;
    const modalImg = document.getElementById('zoomedImg');
    if (modalImg) {
        modalImg.style.transform = `scale(${zoomScale}) translate(${translateX}px, ${translateY}px)`;
    }
}

function openZoomQR() {
    const modal = document.getElementById('zoomModal');
    const modalImg = document.getElementById('zoomedImg');
    if (modal && modalImg) {
        resetModalZoom();
        modal.classList.remove('hidden');
        modal.style.display = "flex";
        modalImg.src = "8.0.jpg";
    }
}

function openZoomModal() {
    const modal = document.getElementById('zoomModal');
    const modalImg = document.getElementById('zoomedImg');
    if (modal && modalImg) {
        resetModalZoom();
        modal.classList.remove('hidden');
        modal.style.display = "flex";
        modalImg.src = activeCategoryList[currentIndex].img;
    }
}

function closeZoomModal(event) {
    if (event) event.stopPropagation();
    if (!event || event.target.id === 'zoomModal' || event.target.classList.contains('close-modal')) {
        const modal = document.getElementById('zoomModal');
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = "none";
        }
        resetModalZoom();
    }
}
