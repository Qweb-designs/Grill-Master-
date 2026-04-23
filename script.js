const menuData = [
    { id: 1, name: "ستيك الترافل الفاخر", price: 150, img: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "سلمون مشوي بالأعشاب", price: 120, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "باستا الريحان الإيطالية", price: 85, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "سلطة الكينوا العضوية", price: 55, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80" }
];

let cart = [];

// توليد قائمة الطعام
const menuGrid = document.getElementById('menu-grid');
menuData.forEach(item => {
    const itemHtml = `
        <div class="menu-item">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">${item.price} ر.س</p>
            <button class="add-to-cart" onclick="addToCart(${item.id})">إضافة للسلة</button>
        </div>
    `;
    menuGrid.innerHTML += itemHtml;
});

// وظائف السلة
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(id) {
    const product = menuData.find(item => item.id === id);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item-info">
                <p>${item.name} - ${item.price} ر.س</p>
            </div>
        `;
    });

    cartCount.innerText = cart.length;
    cartTotal.innerText = total;
}
