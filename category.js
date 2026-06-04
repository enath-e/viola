// ============================================
// CATEGORY PAGE - VIOLA STORE (DECIMAL & COUNTER FIXED)
// ============================================

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9BbiQfVKWazBtuXE-g0HRkkq87qNY080",
    authDomain: "enath11.firebaseapp.com",
    databaseURL: "https://enath11-default-rtdb.firebaseio.com",
    projectId: "enath11",
    storageBucket: "enath11.firebasestorage.app",
    messagingSenderId: "1092002726764",
    appId: "1:1092002726764:web:20626338f00627d82ae949"
};

if (!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// Global Variables
let cart = [];
let products = [];
let categories = [];
let coupons = [];
let appliedCoupon = null;
let currentCategoryId = '';
let currentSubcategoryId = 'all';
let currentSort = 'random';
let searchQueryCategory = '';
let realtimeListeners = {};
const DELIVERY_FEE = 0;

// DOM Elements
const navList = document.getElementById('navList');

// Helper: format price with decimals
function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

// ============================================
// SEARCH CLEAR BUTTON FUNCTION - CATEGORY PAGE
// ============================================
function clearSearchInput() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }

    if (clearBtn) {
        clearBtn.classList.remove('has-text');
    }

    // Reset category search
    if (typeof catSearchSuggestions !== 'undefined' && catSearchSuggestions) {
        catSearchSuggestions.classList.remove('active');
    }
    if (typeof searchQueryCategory !== 'undefined') {
        searchQueryCategory = '';
    }
    if (typeof renderCategoryProducts === 'function') {
        renderCategoryProducts();
    }
}

// Update clear button state based on input
function updateClearButtonState() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (!searchInput || !clearBtn) return;

    if (searchInput.value.trim().length > 0) {
        clearBtn.classList.add('has-text');
    } else {
        clearBtn.classList.remove('has-text');
    }
}

// Initialize clear button on page load
function initClearButton() {
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        // Update on input
        searchInput.addEventListener('input', function() {
            updateClearButtonState();
            // Also trigger category search
            const query = searchInput.value.trim();
            if (typeof catSearchSuggestions !== 'undefined' && catSearchSuggestions) {
                if (query.length > 0) {
                    const lowerQuery = query.toLowerCase();
                    const matches = products.filter(p => p.categoryId === currentCategoryId && (p.name.toLowerCase().includes(lowerQuery) || (p.code && p.code.toLowerCase().includes(lowerQuery)))).slice(0, 5);
                    if (matches.length > 0) {
                        catSearchSuggestions.innerHTML = matches.map(p => `<div class="suggestion-item" onclick="window.selectCatSuggestionAndScroll('${p.name.replace(/'/g, "\'")}')"><i class="fas fa-search"></i><span class="suggestion-name">${p.name} ${p.code ? `(${p.code})` : ''}</span></div>`).join('');
                        catSearchSuggestions.classList.add('active');
                    } else {
                        catSearchSuggestions.innerHTML = `<div class="suggestion-empty"><i class="fas fa-search"></i><span>لا توجد نتائج</span></div>`;
                        catSearchSuggestions.classList.add('active');
                    }
                } else {
                    catSearchSuggestions.classList.remove('active');
                }
            }
        });
        searchInput.addEventListener('keyup', updateClearButtonState);
        searchInput.addEventListener('focus', updateClearButtonState);

        // Initial check
        updateClearButtonState();
    }
}


function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

// إخفاء رسائل Console الخاصة بالكوبونات فقط
const originalConsoleLog = console.log;
console.log = function(...args) {
    const message = args.join(' ');
    if (message.includes('الكوبون') || message.includes('coupon') || message.includes('كود')) {
        return;
    }
    originalConsoleLog.apply(console, args);
};

// ============================================
// Helper Functions
// ============================================
function getUrlParam(param) { return new URLSearchParams(window.location.search).get(param); }
function shuffleArray(array) { const arr = [...array]; for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }

// ============================================
// Realtime Listeners for Auto-Update
// ============================================
function setupRealtimeListeners() {
    // الاستماع للتغييرات في المنتجات
    if (realtimeListeners.products) db.ref('products').off('value', realtimeListeners.products);
    realtimeListeners.products = db.ref('products').on('value', (snapshot) => {
        if (snapshot.exists()) {
            const productsData = snapshot.val();
            products = Object.keys(productsData).map(key => ({ id: key, ...productsData[key] }));
            products = products.filter(p => p.active !== false);
            if (currentCategoryId) {
                renderCategoryProducts();
                renderSubCategories();
            }
        }
    });
    
    // الاستماع للتغييرات في الفئات
    if (realtimeListeners.categories) db.ref('categories').off('value', realtimeListeners.categories);
    realtimeListeners.categories = db.ref('categories').on('value', (snapshot) => {
        if (snapshot.exists()) {
            const categoriesData = snapshot.val();
            categories = Object.keys(categoriesData).map(key => ({ id: key, ...categoriesData[key] }));
            categories = categories.filter(c => c.active !== false);
            categories.sort((a, b) => (a.order || 0) - (b.order || 0));
            renderNavbar();
            if (currentCategoryId) {
                const catExists = categories.some(c => c.id === currentCategoryId);
                if (!catExists && categories.length > 0) {
                    currentCategoryId = categories[0].id;
                }
                loadCategory(currentCategoryId);
            }
        }
    });
    
    // الاستماع للتغييرات في الكوبونات
    if (realtimeListeners.coupons) db.ref('coupons').off('value', realtimeListeners.coupons);
    realtimeListeners.coupons = db.ref('coupons').on('value', (snapshot) => {
        if (snapshot.exists()) {
            const couponsData = snapshot.val();
            coupons = Object.keys(couponsData).map(key => ({ id: key, ...couponsData[key] }));
            coupons = coupons.filter(c => c.active !== false);
            if (appliedCoupon) {
                const updatedCoupon = coupons.find(c => c.id === appliedCoupon.id);
                if (updatedCoupon) {
                    appliedCoupon = { ...appliedCoupon, usedCount: updatedCoupon.usedCount };
                    saveCouponToLocal();
                    updateCartUI();
                } else {
                    appliedCoupon = null;
                    saveCouponToLocal();
                    updateCartUI();
                }
            }
        }
    });
}

// ============================================
// Render Dynamic Navbar
// ============================================
function renderNavbar() {
    if (!navList) return;
    let homeLi = navList.querySelector('li[data-category="all"]');
    if (!homeLi) {
        navList.innerHTML = '<li class="nav-item" data-category="all"><a href="index.html"><i class="fas fa-home"></i> الرئيسية</a></li>';
        homeLi = navList.querySelector('li[data-category="all"]');
    }
    categories.forEach(cat => {
        const existingItem = navList.querySelector(`li[data-category="${cat.id}"]`);
        if (!existingItem && cat.active !== false) {
            const li = document.createElement('li');
            li.className = 'nav-item';
            li.setAttribute('data-category', cat.id);
            if (cat.image && cat.image !== '') {
                li.innerHTML = `<a href="category.html?cat=${cat.id}"><img src="${cat.image}" style="width:24px; height:24px; border-radius:50%; object-fit:cover; margin-left:5px;"> ${cat.name}</a>`;
            } else {
                li.innerHTML = `<a href="category.html?cat=${cat.id}"><i class="fas fa-tag"></i> ${cat.name}</a>`;
            }
            navList.appendChild(li);
        } else if (existingItem && cat.active === false) {
            existingItem.style.display = 'none';
        } else if (existingItem && cat.active !== false) {
            existingItem.style.display = '';
            const link = existingItem.querySelector('a');
            if (link) {
                if (cat.image && cat.image !== '') {
                    link.innerHTML = `<img src="${cat.image}" style="width:24px; height:24px; border-radius:50%; object-fit:cover; margin-left:5px;"> ${cat.name}`;
                } else {
                    link.innerHTML = `<i class="fas fa-tag"></i> ${cat.name}`;
                }
                link.href = `category.html?cat=${cat.id}`;
            }
        }
    });
    const items = navList.querySelectorAll('.nav-item');
    items.forEach(item => {
        const catId = item.getAttribute('data-category');
        if (catId && catId !== 'all') {
            const exists = categories.some(cat => cat.id === catId && cat.active !== false);
            if (!exists) item.remove();
        }
    });
    const urlParams = new URLSearchParams(window.location.search);
    const currentCat = urlParams.get('cat');
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (currentCat && item.getAttribute('data-category') === currentCat) {
            item.classList.add('active');
        } else if (!currentCat && item.getAttribute('data-category') === 'all') {
            item.classList.add('active');
        }
    });
}

// ============================================
// Load Data from Firebase
// ============================================
async function loadData() {
    try {
        const [categoriesSnap, productsSnap, couponsSnap] = await Promise.all([
            db.ref('categories').once('value'),
            db.ref('products').once('value'),
            db.ref('coupons').once('value')
        ]);
        
        if (categoriesSnap.exists()) {
            const categoriesData = categoriesSnap.val();
            categories = Object.keys(categoriesData).map(key => ({ id: key, ...categoriesData[key] }));
        } else { categories = []; }
        
        if (productsSnap.exists()) {
            const productsData = productsSnap.val();
            products = Object.keys(productsData).map(key => ({ id: key, ...productsData[key] }));
        } else { products = []; }
        
        if (couponsSnap.exists()) {
            const couponsData = couponsSnap.val();
            coupons = Object.keys(couponsData).map(key => ({ id: key, ...couponsData[key] }));
        } else { coupons = []; }
        
        categories = categories.filter(c => c.active !== false);
        products = products.filter(p => p.active !== false);
        coupons = coupons.filter(c => c.active !== false);
        categories.sort((a, b) => (a.order || 0) - (b.order || 0));
        
        renderNavbar();
        initCategoryPage();
        
        // إعداد المستمعات للتحديث التلقائي
        setupRealtimeListeners();
        
    } catch (err) {
        console.error("❌ خطأ في تحميل البيانات:", err);
        showToast("خطأ في تحميل البيانات", true);
    }
}

// ============================================
// Cart Functions with Coupons
// ============================================
function saveCartToLocal() { localStorage.setItem('viola_cart', JSON.stringify(cart)); }
function loadCartFromLocal() { const saved = localStorage.getItem('viola_cart'); if (saved) { cart = JSON.parse(saved); updateCartUI(); } }
function saveCouponToLocal() { 
    if (appliedCoupon) {
        localStorage.setItem('viola_coupon', JSON.stringify(appliedCoupon));
    } else {
        localStorage.removeItem('viola_coupon');
    }
}
function loadCouponFromLocal() { 
    const saved = localStorage.getItem('viola_coupon');
    if (saved) {
        appliedCoupon = JSON.parse(saved);
    }
}

function addToCart(product, selectedSize = null, selectedColor = null) {
    const existingIndex = cart.findIndex(item => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor);
    if (existingIndex !== -1) {
        cart[existingIndex].qty++;
    } else {
        cart.push({ ...product, qty: 1, selectedSize: selectedSize || null, selectedColor: selectedColor || null });
    }
    saveCartToLocal();
    updateCartUI();
    showToast('✨ تمت الإضافة إلى سلة ڤيولا!');
}

function removeFromCart(index) { cart.splice(index, 1); saveCartToLocal(); updateCartUI(); }
function updateQty(index, change) {
    if (!cart[index]) return;
    cart[index].qty += change;
    if (cart[index].qty <= 0) removeFromCart(index);
    else { saveCartToLocal(); updateCartUI(); }
}

// ============================================
// Calculate Totals with Coupon
// ============================================
function getCouponDiscount() {
    if (!appliedCoupon) return 0;
    
    const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.qty), 0);
    
    if (appliedCoupon.usageLimit && appliedCoupon.usedCount >= appliedCoupon.usageLimit) {
        appliedCoupon = null;
        saveCouponToLocal();
        return 0;
    }
    if (appliedCoupon.expiryDate && Date.now() > appliedCoupon.expiryDate) {
        appliedCoupon = null;
        saveCouponToLocal();
        return 0;
    }
    if (appliedCoupon.minAmount && subtotal < appliedCoupon.minAmount) {
        return 0;
    }
    
    let discount = 0;
    const value = parseFloat(appliedCoupon.value);
    
    if (appliedCoupon.type === 'percentage') {
        discount = (subtotal * value) / 100;
    } else {
        discount = value;
    }
    
    if (discount > subtotal) discount = subtotal;
    return discount;
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.qty), 0);
    const discount = getCouponDiscount();
    const discountMessage = appliedCoupon ? 
        (appliedCoupon.type === 'percentage' ? `${appliedCoupon.value}% خصم` : `${appliedCoupon.value}$ خصم`) : '';
    const finalTotal = subtotal - discount;
    
    return { subtotal, discount, discountMessage, finalTotal };
}

function applyCoupon(code) {
    const coupon = coupons.find(c => c.code === code.toUpperCase());
    if (!coupon) {
        showToast('❌ كود الخصم غير صالح', true);
        return false;
    }
    
    if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) {
        showToast(`❌ تم استخدام هذا الكود ${coupon.usageLimit} مرة`, true);
        return false;
    }
    if (coupon.expiryDate && Date.now() > coupon.expiryDate) {
        showToast('❌ انتهت صلاحية الكود', true);
        return false;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.qty), 0);
    if (coupon.minAmount && subtotal < coupon.minAmount) {
        showToast(`❌ الحد الأدنى للطلب هو ${coupon.minAmount}$`, true);
        return false;
    }
    
    appliedCoupon = {
        id: coupon.id,
        code: coupon.code,
        type: coupon.type,
        value: coupon.value,
        usedCount: coupon.usedCount || 0,
        usageLimit: coupon.usageLimit,
        minAmount: coupon.minAmount,
        expiryDate: coupon.expiryDate
    };
    
    saveCouponToLocal();
    updateCartUI();
    
    const discountValue = coupon.type === 'percentage' ? `${coupon.value}%` : `${coupon.value}$`;
    const remaining = coupon.usageLimit ? (coupon.usageLimit - (coupon.usedCount || 0)) : 'غير محدود';
    showToast(`✅ تم تطبيق كود ${coupon.code} (خصم ${discountValue}) - تبقى ${remaining} استخدام`);
    return true;
}

function removeCoupon() {
    appliedCoupon = null;
    saveCouponToLocal();
    updateCartUI();
    showToast('تم إلغاء كود الخصم');
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const { subtotal, discount, discountMessage, finalTotal } = calculateTotals();
    const cartCount = document.getElementById('cartCount');
    const totalPrice = document.getElementById('totalPrice');
    const cartItemsDiv = document.getElementById('cartItems');
    const cartEmptyDiv = document.getElementById('cartEmpty');
    const cartFooterDiv = document.getElementById('cartFooter');
    
    if (cartCount) cartCount.textContent = totalItems;
    if (totalPrice) totalPrice.textContent = formatPrice(finalTotal) + ' $';
    
    if (cart.length === 0) {
        if (cartItemsDiv) cartItemsDiv.innerHTML = '';
        if (cartEmptyDiv) cartEmptyDiv.style.display = 'flex';
        if (cartFooterDiv) cartFooterDiv.style.display = 'none';
    } else {
        if (cartEmptyDiv) cartEmptyDiv.style.display = 'none';
        if (cartFooterDiv) cartFooterDiv.style.display = 'block';
        if (cartItemsDiv) {
            cartItemsDiv.innerHTML = cart.map((item, idx) => `
                <div class="cart-item">
                    <div class="cart-item-img"><img src="${item.image}" alt="${item.name}"></div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        ${item.selectedSize ? `<div class="cart-item-size"><i class="fas fa-ruler"></i> المقاس: ${item.selectedSize}</div>` : ''}
                        ${item.selectedColor ? `<div class="cart-item-color"><i class="fas fa-palette"></i> اللون: ${item.selectedColor}</div>` : ''}
                        <div class="cart-item-price">${formatPrice(item.price)} $</div>
                        <div class="cart-item-qty"><button class="qty-btn" onclick="updateQty(${idx}, -1)">-</button><span class="qty-value">${item.qty}</span><button class="qty-btn" onclick="updateQty(${idx}, 1)">+</button><button class="remove-item" onclick="removeFromCart(${idx})"><i class="fas fa-trash-alt"></i></button></div>
                    </div>
                </div>
            `).join('');
        }
        
        const existingCouponSection = document.querySelector('.coupon-section');
        if (existingCouponSection) existingCouponSection.remove();
        
        const couponSection = document.createElement('div');
        couponSection.className = 'coupon-section';
        if (appliedCoupon) {
            const remaining = appliedCoupon.usageLimit ? (appliedCoupon.usageLimit - (appliedCoupon.usedCount || 0)) : 'غير محدود';
            couponSection.innerHTML = `
                <div class="coupon-discount" style="display:flex; justify-content:space-between; margin-bottom:8px;">
                    <span>الخصم (${discountMessage}):</span>
                    <span style="color:#2ed573;">- ${formatPrice(discount)} $</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="color:#e91e63;">✓ كود ${appliedCoupon.code} مطبق (تبقى ${remaining} استخدام)</span>
                    <button onclick="removeCoupon()" style="background:none; border:none; color:#ff4757; cursor:pointer;">إلغاء</button>
                </div>
            `;
        } else {
            couponSection.innerHTML = `
                <div style="font-size:0.85rem; color:#b08a9e; margin-bottom:8px;">🎫 هل لديك كود خصم؟</div>
                <div class="coupon-input-group" style="display:flex; gap:8px;">
                    <input type="text" id="couponInput" placeholder="أدخل كود الخصم" style="flex:1; padding:8px 12px; border:1px solid #f8bbd9; border-radius:50px;">
                    <button onclick="applyCoupon(document.getElementById('couponInput').value)" style="padding:8px 16px; background:linear-gradient(135deg,#e91e63,#f06292); color:white; border:none; border-radius:50px; cursor:pointer;">تطبيق</button>
                </div>
            `;
        }
        cartFooterDiv.parentNode.insertBefore(couponSection, cartFooterDiv);
    }
    
    const orderItemCount = document.getElementById('orderItemCount');
    const orderSubtotal = document.getElementById('orderSubtotal');
    const orderShipping = document.getElementById('shippingCost');
    const orderDiscount = document.getElementById('orderDiscount');
    const orderTotal = document.getElementById('orderTotal');
    
    if (orderItemCount) orderItemCount.textContent = totalItems;
    if (orderSubtotal) orderSubtotal.textContent = formatPrice(subtotal) + ' $';
    if (orderShipping) {
        orderShipping.innerHTML = `<span>التوصيل:</span><span>مدفوع (يتم حسابه عند التوصيل)</span>`;
    }
    if (orderDiscount) {
        if (discount > 0) {
            orderDiscount.innerHTML = `<span>الخصم (${discountMessage}):</span><span style="color:#2ed573;">- ${formatPrice(discount)} $</span>`;
            orderDiscount.style.display = 'flex';
        } else { orderDiscount.style.display = 'none'; }
    }
    if (orderTotal) orderTotal.textContent = formatPrice(finalTotal) + ' $';
}

// ============================================
// Toast Function
// ============================================
let toastTimeout = null;
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast || !toastMessage) return;
    if (toastTimeout) clearTimeout(toastTimeout);
    toast.classList.remove('active');
    toast.style.background = isError ? '#e91e63' : 'linear-gradient(135deg, #e91e63, #f06292)';
    toastMessage.textContent = message;
    setTimeout(() => toast.classList.add('active'), 10);
    toastTimeout = setTimeout(() => { toast.classList.remove('active'); toastTimeout = null; }, 3000);
}

// ============================================
// Modal Functions
// ============================================
function openCart() { const sidebar = document.getElementById('cartSidebar'); const overlay = document.getElementById('cartOverlay'); if (sidebar && overlay) { sidebar.classList.add('active'); overlay.classList.add('active'); document.body.style.overflow = 'hidden'; } }
function closeCartFn() { const sidebar = document.getElementById('cartSidebar'); const overlay = document.getElementById('cartOverlay'); if (sidebar && overlay) { sidebar.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow = ''; } }
function openOrderModal() { if (cart.length === 0) { showToast('🛒 السلة فارغة! أضيفي منتجات أولاً', true); return; } closeCartFn(); setTimeout(() => { const modal = document.getElementById('orderModal'); const overlay = document.getElementById('modalOverlay'); if (modal && overlay) { modal.classList.add('active'); overlay.classList.add('active'); document.body.style.overflow = 'hidden'; } }, 300); }
function closeOrderModal() { const modal = document.getElementById('orderModal'); const overlay = document.getElementById('modalOverlay'); if (modal && overlay) { modal.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow = ''; } }
function showSuccessModal(phoneNumber) { 
    const successModal = document.getElementById('successModal');
    if (successModal) {
        const orderPhoneSpan = document.getElementById('orderPhone');
        const orderTimeSpan = document.getElementById('orderTime');
        if (orderPhoneSpan && phoneNumber) {
            orderPhoneSpan.textContent = phoneNumber;
        }
        if (orderTimeSpan) {
            const now = new Date();
            const formattedTime = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
            orderTimeSpan.textContent = formattedTime;
        }
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
function closeSuccessModalAndGoHome() { 
    const successModal = document.getElementById('successModal');
    if (successModal) { 
        successModal.classList.remove('active'); 
        document.body.style.overflow = ''; 
        cart = []; 
        appliedCoupon = null; 
        saveCartToLocal(); 
        saveCouponToLocal(); 
        updateCartUI(); 
        closeCartFn();
        window.location.href = 'index.html';
    } 
}
function openContactModal() { const modal = document.getElementById('contactModal'); const overlay = document.getElementById('contactModalOverlay'); if (modal && overlay) { modal.classList.add('active'); overlay.classList.add('active'); document.body.style.overflow = 'hidden'; } }
function closeContactModalFn() { const modal = document.getElementById('contactModal'); const overlay = document.getElementById('contactModalOverlay'); if (modal && overlay) { modal.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow = ''; } }

// ============================================
// Product Options Modal (Size & Color)
// ============================================
let currentProductOptions = null;

function getColorBg(color) {
    const colorMap = { 'أحمر': '#ffcdd2', 'أزرق': '#bbdef5', 'أخضر': '#c8e6c9', 'أصفر': '#fff9c4', 'أسود': '#424242', 'أبيض': '#f5f5f5', 'وردي': '#f8bbd9', 'ذهبي': '#fff8e1', 'فضي': '#ececec', 'بنفسجي': '#e1bee7' };
    return colorMap[color] || '#fce4ec';
}

function openProductOptions(productId, event) {
    if (event) event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;
    currentProductOptions = product;
    
    const modalHtml = `
        <div class="options-modal-overlay" id="optionsModalOverlay">
            <div class="options-modal">
                <div class="options-modal-header"><h3><i class="fas fa-shopping-bag"></i> ${product.name}</h3><button class="close-options-modal" onclick="closeOptionsModal()"><i class="fas fa-times"></i></button></div>
                <div class="options-modal-body">
                    <div class="options-product-img"><img src="${product.image}" alt="${product.name}"></div>
                    <div class="options-product-price"><span class="current-price">${formatPrice(product.price)} $</span>${product.oldprice ? `<span class="old-price">${formatPrice(product.oldprice)} $</span>` : ''}</div>
                    ${product.code ? `<div class="options-product-code"><i class="fas fa-barcode"></i> رمز المنتج: ${product.code}</div>` : ''}
                    ${product.sizes && product.sizes.length ? `<div class="options-group"><label><i class="fas fa-ruler"></i> اختاري المقاس:</label><div class="options-buttons" id="sizeOptions">${product.sizes.map(size => `<button class="option-btn" data-size="${size}">${size}</button>`).join('')}</div></div>` : ''}
                    ${product.colors && product.colors.length ? `<div class="options-group"><label><i class="fas fa-palette"></i> اختاري اللون:</label><div class="options-buttons" id="colorOptions">${product.colors.map(color => `<button class="option-btn color-btn" data-color="${color}" style="background:${getColorBg(color)}">${color}</button>`).join('')}</div></div>` : ''}
                    <div class="options-quantity"><label><i class="fas fa-calculator"></i> الكمية:</label><div class="qty-selector"><button class="qty-dec" onclick="changeOptionsQty(-1)">-</button><span id="optionsQty">1</span><button class="qty-inc" onclick="changeOptionsQty(1)">+</button></div></div>
                    <button class="btn-add-to-cart-options" onclick="addToCartWithOptions()"><i class="fas fa-shopping-bag"></i> أضيفي إلى السلة</button>
                </div>
            </div>
        </div>
    `;
    
    const existingModal = document.getElementById('optionsModalOverlay');
    if (existingModal) existingModal.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.body.style.overflow = 'hidden';
    
    window.selectedSize = null;
    window.selectedColor = null;
    window.optionsQty = 1;
    
    document.querySelectorAll('#sizeOptions .option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#sizeOptions .option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            window.selectedSize = btn.dataset.size;
        });
    });
    document.querySelectorAll('#colorOptions .option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#colorOptions .option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            window.selectedColor = btn.dataset.color;
        });
    });
}

function changeOptionsQty(change) { window.optionsQty = Math.max(1, window.optionsQty + change); const qtySpan = document.getElementById('optionsQty'); if (qtySpan) qtySpan.textContent = window.optionsQty; }
function addToCartWithOptions() {
    if (!currentProductOptions) return;
    if (currentProductOptions.sizes && currentProductOptions.sizes.length && !window.selectedSize) { showToast('⚠️ يرجى اختيار المقاس', true); return; }
    for (let i = 0; i < window.optionsQty; i++) addToCart(currentProductOptions, window.selectedSize, window.selectedColor);
    closeOptionsModal();
}
function closeOptionsModal() { const modal = document.getElementById('optionsModalOverlay'); if (modal) modal.remove(); document.body.style.overflow = ''; currentProductOptions = null; }

// Add modal styles
if (!document.querySelector('#optionsModalStyles')) {
    const modalStyles = document.createElement('style');
    modalStyles.id = 'optionsModalStyles';
    modalStyles.textContent = `.options-modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:10000;display:flex;align-items:center;justify-content:center}.options-modal{background:white;border-radius:24px;width:400px;max-width:90vw;max-height:85vh;overflow-y:auto;direction:rtl}.options-modal-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid #f8bbd9}.options-modal-header h3{color:#e91e63;font-size:1.1rem}.close-options-modal{background:none;border:none;font-size:1.2rem;cursor:pointer;color:#b08a9e}.options-modal-body{padding:20px}.options-product-img{text-align:center;margin-bottom:15px}.options-product-img img{width:120px;height:120px;object-fit:cover;border-radius:16px}.options-product-price{text-align:center;margin-bottom:15px}.options-product-price .current-price{font-size:1.3rem;font-weight:800;color:#e91e63}.options-product-code{text-align:center;font-size:0.8rem;color:#b08a9e;margin-bottom:15px}.options-group{margin-bottom:20px}.options-group label{display:block;margin-bottom:8px;font-weight:600;color:#4a1a3a}.options-buttons{display:flex;flex-wrap:wrap;gap:8px}.option-btn{padding:8px 16px;border:2px solid #f8bbd9;background:white;border-radius:30px;cursor:pointer}.option-btn.selected{background:#e91e63;color:white;border-color:#e91e63}.color-btn{padding:8px 16px}.options-quantity{margin-bottom:20px}.options-quantity label{display:block;margin-bottom:8px;font-weight:600;color:#4a1a3a}.qty-selector{display:flex;align-items:center;gap:15px}.qty-selector button{width:32px;height:32px;border-radius:50%;border:1px solid #f8bbd9;background:white;cursor:pointer;font-size:1.2rem}.btn-add-to-cart-options{width:100%;padding:14px;background:linear-gradient(135deg,#e91e63,#f06292);color:white;border:none;border-radius:40px;font-weight:bold;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px}`;
    document.head.appendChild(modalStyles);
}

// ============================================
// Quick View
// ============================================
function openQuickView(productId, event) {
    if (event) event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const modal = document.getElementById('quickViewModal');
    const body = document.getElementById('quickViewBody');
    if (!modal || !body) return;
    body.innerHTML = `<div class="quick-view-img"><img src="${product.image}" alt="${product.name}"></div><div class="quick-view-info"><div class="product-category">${getSubcategoryName(product.categoryId, product.subcategoryId)}</div><h3 class="product-name">${product.name}</h3><div class="product-code" style="font-size:0.8rem; color:#b08a9e; margin-bottom:8px;"><i class="fas fa-barcode"></i> ${product.code || 'بدون رمز'}</div><p class="product-desc">${product.desc || 'لا يوجد وصف للمنتج'}</p><div class="product-price-row"><div class="product-price"><span class="current-price" style="font-size:1.5rem">${formatPrice(product.price)} $</span>${product.oldprice ? `<span class="old-price">${formatPrice(product.oldprice)} $</span>` : ''}</div></div>${product.sizes && product.sizes.length ? `<div class="product-sizes" style="margin:10px 0;"><strong><i class="fas fa-ruler"></i> المقاسات:</strong> ${product.sizes.join(', ')}</div>` : ''}${product.colors && product.colors.length ? `<div class="product-colors" style="margin:10px 0;"><strong><i class="fas fa-palette"></i> الألوان:</strong> ${product.colors.join(', ')}</div>` : ''}<button class="add-to-cart" onclick="openProductOptions('${product.id}', event)" style="width:100%; padding:12px; border-radius:40px; gap:8px; margin-top:15px;"><i class="fas fa-shopping-bag"></i> أضيفي إلى السلة</button></div>`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeQuickView() { const modal = document.getElementById('quickViewModal'); if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; } }

// ============================================
// Category Core Functions
// ============================================
function getCategoryName(categoryId) {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : 'منتج';
}

function getSubcategoryName(categoryId, subcategoryId) {
    const cat = categories.find(c => c.id === categoryId);
    if (!cat || !cat.subcategories || !cat.subcategories[subcategoryId]) return getCategoryName(categoryId);
    return cat.subcategories[subcategoryId].name;
}

function loadCategory(catId) {
    currentCategoryId = catId;
    currentSubcategoryId = 'all';
    searchQueryCategory = '';
    const searchInputElem = document.getElementById('searchInput');
    if (searchInputElem) searchInputElem.value = '';
    
    const catData = categories.find(c => c.id === currentCategoryId);
    if (!catData) { window.location.href = 'index.html'; return; }
    
    const titleEl = document.getElementById('categoryTitle');
    const descEl = document.getElementById('categoryDesc');
    const breadcrumbEl = document.getElementById('breadcrumbCategory');
    if (titleEl) titleEl.innerHTML = `<i class="fas fa-tag"></i> ${catData.name}`;
    if (descEl) descEl.textContent = `تشكيلة واسعة من ${catData.name} الأنيقة والعصرية`;
    if (breadcrumbEl) breadcrumbEl.textContent = catData.name;
    
    renderSubCategories();
    renderCategoryProducts();
    window.history.pushState({ category: currentCategoryId }, '', `category.html?cat=${currentCategoryId}`);
}

function renderSubCategories() {
    const grid = document.getElementById('subCategoriesGrid');
    if (!grid) return;
    const catData = categories.find(c => c.id === currentCategoryId);
    const subcategories = catData?.subcategories || {};
    const subcatsList = [{ id: 'all', name: 'الكل', icon: 'fa-th-large', image: catData?.image || '', count: products.filter(p => p.categoryId === currentCategoryId).length }];
    Object.keys(subcategories).forEach(subId => {
        const sub = subcategories[subId];
        if (sub.active !== false) {
            subcatsList.push({
                id: subId,
                name: sub.name,
                icon: sub.icon || 'fa-folder',
                image: sub.image || '',
                count: products.filter(p => p.subcategoryId === subId && p.categoryId === currentCategoryId).length
            });
        }
    });
    grid.innerHTML = subcatsList.map(sub => `
        <div class="sub-category-card ${sub.id === currentSubcategoryId ? 'active' : ''}" data-sub-id="${sub.id}" onclick="selectSubCategory('${sub.id}')">
            <div class="sub-cat-icon">${sub.image ? `<img src="${sub.image}" alt="${sub.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\'fas ${sub.icon}\'></i>';">` : `<i class="fas ${sub.icon}"></i>`}</div>
            <h4>${sub.name}</h4>
            <span>${sub.count} منتج</span>
        </div>
    `).join('');
}

function selectSubCategory(subId) {
    currentSubcategoryId = subId;
    document.querySelectorAll('.sub-category-card').forEach(card => {
        card.classList.toggle('active', card.dataset.subId === subId);
    });
    renderCategoryProducts();
}

function renderCategoryProducts() {
    const grid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    if (!grid) return;
    let filtered = products.filter(p => p.categoryId === currentCategoryId);
    if (currentSubcategoryId !== 'all') { filtered = filtered.filter(p => p.subcategoryId === currentSubcategoryId); }
    if (searchQueryCategory) {
        const lower = searchQueryCategory.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(lower) || (p.code && p.code.toLowerCase().includes(lower)));
    }
    switch(currentSort) {
        case 'price-low': filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); break;
        case 'price-high': filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)); break;
        case 'newest': filtered.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)); break;
        default: filtered = shuffleArray([...filtered]);
    }
    if (filtered.length === 0) { grid.innerHTML = ''; if (noProducts) noProducts.style.display = 'block'; return; }
    if (noProducts) noProducts.style.display = 'none';
    grid.innerHTML = filtered.map((product, index) => `
        <div class="product-card" style="animation: fadeInUp 0.5s ease ${index * 0.05}s forwards; opacity:0">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500?text=Image+Not+Found'">
                ${product.oldprice ? `<span class="product-badge badge-sale">تخفيض</span>` : ''}
                <button class="product-quick-view" onclick="openQuickView('${product.id}', event)"><i class="fas fa-eye"></i> نظرة سريعة</button>
            </div>
            <div class="product-info">
                <div class="product-category">${getSubcategoryName(product.categoryId, product.subcategoryId)}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-code" style="font-size:0.7rem; color:#b08a9e;"><i class="fas fa-barcode"></i> ${product.code || 'بدون رمز'}</div>
                <div class="product-price-row">
                    <div class="product-price"><span class="current-price">${formatPrice(product.price)} $</span>${product.oldprice ? `<span class="old-price">${formatPrice(product.oldprice)} $</span>` : ''}</div>
                    <button class="add-to-cart" onclick="openProductOptions('${product.id}', event)"><i class="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    `).join('');
    if (searchQueryCategory && filtered.length > 0) {
        const firstProduct = document.querySelector('.product-card');
        if (firstProduct) firstProduct.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============================================
// Search Suggestions
// ============================================
let catSearchSuggestions = null;
function initCatSearch() {
    const searchBox = document.querySelector('.search-box');
    if (!searchBox) return;
    catSearchSuggestions = document.createElement('div');
    catSearchSuggestions.className = 'search-suggestions';
    searchBox.style.position = 'relative';
    searchBox.appendChild(catSearchSuggestions);
    const searchInputElem = document.getElementById('searchInput');
    if (searchInputElem) {
        searchInputElem.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (catSearchSuggestions) {
                if (query.length > 0) {
                    const lowerQuery = query.toLowerCase();
                    const matches = products.filter(p => p.categoryId === currentCategoryId && (p.name.toLowerCase().includes(lowerQuery) || (p.code && p.code.toLowerCase().includes(lowerQuery)))).slice(0, 5);
                    if (matches.length > 0) {
                        catSearchSuggestions.innerHTML = matches.map(p => `<div class="suggestion-item" onclick="window.selectCatSuggestionAndScroll('${p.name.replace(/'/g, "\\'")}')"><i class="fas fa-search"></i><span class="suggestion-name">${p.name} ${p.code ? `(${p.code})` : ''}</span></div>`).join('');
                        catSearchSuggestions.classList.add('active');
                    } else {
                        catSearchSuggestions.innerHTML = `<div class="suggestion-empty"><i class="fas fa-search"></i><span>لا توجد نتائج</span></div>`;
                        catSearchSuggestions.classList.add('active');
                    }
                } else {
                    catSearchSuggestions.classList.remove('active');
                }
            }
        });
        searchInputElem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (catSearchSuggestions) catSearchSuggestions.classList.remove('active');
                searchQueryCategory = searchInputElem.value.trim();
                renderCategoryProducts();
            }
        });
        searchInputElem.addEventListener('change', function() {
            if (this.value.trim() === '') {
                searchQueryCategory = '';
                renderCategoryProducts();
            }
        });
    }
    document.addEventListener('click', (e) => { if (catSearchSuggestions && !e.target.closest('.search-box')) catSearchSuggestions.classList.remove('active'); });
}
window.selectCatSuggestionAndScroll = function(name) {
    const searchInputElem = document.getElementById('searchInput');
    if (searchInputElem) searchInputElem.value = name;
    if (catSearchSuggestions) catSearchSuggestions.classList.remove('active');
    searchQueryCategory = name;
    renderCategoryProducts();
};

// ============================================
// Navigation Setup
// ============================================
function setupNavLinks() {
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.includes('category.html')) {
                e.preventDefault();
                const catParam = new URLSearchParams(href.split('?')[1]).get('cat');
                if (catParam && categories.some(c => c.id === catParam)) {
                    loadCategory(catParam);
                } else {
                    window.location.href = href;
                }
            }
        });
    });
    window.addEventListener('popstate', (event) => {
        const cat = getUrlParam('cat');
        if (cat && categories.some(c => c.id === cat)) loadCategory(cat);
        else window.location.href = 'index.html';
    });
}

function initCategoryPage() {
    let cat = getUrlParam('cat');
    if (!cat || !categories.some(c => c.id === cat)) {
        cat = categories.length > 0 ? categories[0].id : 'fashion';
    }
    loadCategory(cat);
}

// ============================================
// Event Listeners
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initCatSearch();
    initClearButton();
    loadCartFromLocal();
    loadCouponFromLocal();
    loadData();
    updateCartUI();
    document.getElementById('cartBtn')?.addEventListener('click', openCart);
    document.getElementById('bottomCartBtn')?.addEventListener('click', openCart);
    document.getElementById('closeCart')?.addEventListener('click', closeCartFn);
    document.getElementById('cartOverlay')?.addEventListener('click', closeCartFn);
    document.getElementById('checkoutBtn')?.addEventListener('click', openOrderModal);
    document.getElementById('closeModal')?.addEventListener('click', closeOrderModal);
    document.getElementById('modalOverlay')?.addEventListener('click', closeOrderModal);
    document.getElementById('successBtn')?.addEventListener('click', closeSuccessModalAndGoHome);
    document.getElementById('closeQuickView')?.addEventListener('click', closeQuickView);
    document.getElementById('quickViewModal')?.addEventListener('click', (e) => { if (e.target === document.getElementById('quickViewModal')) closeQuickView(); });
    document.getElementById('sortSelect')?.addEventListener('change', (e) => { currentSort = e.target.value; renderCategoryProducts(); });
    document.getElementById('bottomContactBtn')?.addEventListener('click', openContactModal);
    document.getElementById('closeContactModal')?.addEventListener('click', closeContactModalFn);
    document.getElementById('contactModalOverlay')?.addEventListener('click', closeContactModalFn);
    
    // ============================================
    // ORDER FORM - FULLY WORKING WITH DECIMALS AND COUNTER
    // ============================================
    document.getElementById('orderForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName')?.value.trim() || '';
        const phone = document.getElementById('phone')?.value.trim() || '';
        const city = document.getElementById('city')?.value || '';
        const address = document.getElementById('address')?.value.trim() || '';
        const notes = document.getElementById('notes')?.value.trim() || '';
        
        if (!fullName || !phone || !city || !address) { 
            showToast('⚠️ يرجى ملء جميع الحقول المطلوبة', true); 
            return; 
        }
        
        const { subtotal, discount, finalTotal } = calculateTotals();
        const confirmMsg = `🔔 تأكيد الطلب\n\nالمجموع الفرعي: ${formatPrice(subtotal)} $\n${discount > 0 ? `الخصم: - ${formatPrice(discount)} $\n` : ''}الإجمالي النهائي: ${formatPrice(finalTotal)} $\n\nملاحظة: الدفع مسبق - سيتم التواصل معك لتأكيد الطلب وإرسال تفاصيل الدفع.\n\nهل تريد تأكيد الطلب؟`;
        
        if (!confirm(confirmMsg)) return;
        
        const usedCoupon = appliedCoupon ? { ...appliedCoupon } : null;
        const currentCart = [...cart];
        
        const orderData = {
            customer: { fullName, phone, city, address, notes },
            items: currentCart.map(item => ({ 
                id: item.id, 
                name: item.name, 
                price: parseFloat(item.price), 
                qty: item.qty,
                totalPrice: parseFloat(item.price) * item.qty,
                selectedSize: item.selectedSize,
                selectedColor: item.selectedColor
            })),
            subtotal: subtotal,
            discount: discount,
            total: finalTotal,
            coupon: usedCoupon ? { code: usedCoupon.code, type: usedCoupon.type, value: usedCoupon.value } : null,
            timestamp: Date.now()
        };
        
        console.log("📦 إرسال الطلب:", orderData);
        
        const newOrderRef = db.ref('orders').push();
        newOrderRef.set(orderData, function(error) {
            if (error) {
                console.error("❌ خطأ في حفظ الطلب:", error);
                showToast("حدث خطأ أثناء إرسال الطلب، حاول مرة أخرى", true);
            } else {
                console.log("✅ تم حفظ الطلب بنجاح - رقم:", newOrderRef.key);
                
                if (usedCoupon && usedCoupon.id) {
                    db.ref(`coupons/${usedCoupon.id}`).once('value', function(snapshot) {
                        const currentData = snapshot.val();
                        const currentUsedCount = currentData?.usedCount || 0;
                        const newUsedCount = currentUsedCount + 1;
                        
                        db.ref(`coupons/${usedCoupon.id}`).update({ usedCount: newUsedCount }, function(updateError) {
                            if (updateError) {
                                console.error("❌ خطأ في تحديث الكوبون:", updateError);
                            } else {
                                if (appliedCoupon && appliedCoupon.id === usedCoupon.id) {
                                    appliedCoupon.usedCount = newUsedCount;
                                    saveCouponToLocal();
                                }
                                const couponIndex = coupons.findIndex(c => c.id === usedCoupon.id);
                                if (couponIndex !== -1) {
                                    coupons[couponIndex].usedCount = newUsedCount;
                                }
                                updateCartUI();
                            }
                        });
                    });
                }
                
                // إغلاق السلة ونافذة الطلب
                closeCartFn();
                closeOrderModal();
                
                // عرض نافذة النجاح مع رقم الهاتف والوقت
                setTimeout(() => {
                    showSuccessModal(phone);
                }, 300);
                
                document.getElementById('orderForm')?.reset();
            }
        });
    });
});

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeCartFn(); closeOrderModal(); closeQuickView(); const successModalElem = document.getElementById('successModal'); if (successModalElem && successModalElem.classList.contains('active')) closeSuccessModalAndGoHome(); closeContactModalFn(); closeOptionsModal(); } });

// Export for global access
window.applyCoupon = applyCoupon;
window.removeCoupon = removeCoupon;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQty = updateQty;
window.openProductOptions = openProductOptions;
window.closeOptionsModal = closeOptionsModal;