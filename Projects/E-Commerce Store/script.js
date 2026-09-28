const products = [
    { id: 1, title: "Minimalist Watch", price: 120.00 },
    { id: 2, title: "Leather Wallet", price: 45.00 },
    { id: 3, title: "Canvas Backpack", price: 85.00 },
    { id: 4, title: "Ceramic Mug", price: 22.00 }
];

const productsGrid = document.getElementById('products-grid');
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const cartCountSpan = document.getElementById('cart-count');

// Load cart from LocalStorage
let cart = JSON.parse(localStorage.getItem('ecommerceCart')) || [];

function saveAndRenderCart() {
    localStorage.setItem('ecommerceCart', JSON.stringify(cart));
    renderCart();
}

// Render Products Catalog
function renderProducts() {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">Item Image</div>
            <div class="product-info">
                <div>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Render Cart Drawer
function renderCart() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="color: #777; text-align: center; margin-top: 40px;">Your cart is empty.</p>`;
        cartTotalSpan.textContent = '$0.00';
        cartCountSpan.textContent = '0';
        return;
    }

    let total = 0;
    let totalCount = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        totalCount += item.qty;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>$${item.price.toFixed(2)}</p>
                <div class="qty-controls">
                    <button onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background:none;border:none;color:#999;cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotalSpan.textContent = `$${total.toFixed(2)}`;
    cartCountSpan.textContent = totalCount;
}

// Add item to cart
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveAndRenderCart();
    openCart();
};

// Update item quantity
window.updateQty = function(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    saveAndRenderCart();
};

// Remove item from cart
window.removeFromCart = function(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveAndRenderCart();
};

// Drawer open/close toggles
function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.style.display = 'block';
}

function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.style.display = 'none';
}

cartToggleBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Checkout mock function
window.checkout = function() {
    if (cart.length === 0) return alert('Your cart is empty!');
    alert('Order placed successfully!');
    cart = [];
    saveAndRenderCart();
    closeCart();
};

// Initial load
renderProducts();
renderCart();