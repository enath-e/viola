// ============================================
// VIOLA STORE - MAIN PAGE (index.html)
// ============================================

// Products Data
const products = [
    { id: 1, name: "فستان سهرة وردي أنيق", category: "fashion", categoryName: "أزياء", price: 299, oldPrice: 450, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop", description: "فستان سهرة فاخر بتصميم أنيق يناسب جميع المناسبات." },
    { id: 2, name: "بلوزة صيفية بيضاء ناعمة", category: "fashion", categoryName: "أزياء", price: 89, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop", description: "بلوزة صيفية خفيفة وناعمة باللون الأبيض النقي." },
    { id: 3, name: "جاكيت شتوي بيج دافئ", category: "fashion", categoryName: "أزياء", price: 349, oldPrice: 499, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop", description: "جاكيت شتوي دافئ باللون البيج مع بطانة قطنية." },
    { id: 4, name: "تنورة قصيرة زهرية", category: "fashion", categoryName: "أزياء", price: 129, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj1?w=400&h=500&fit=crop", description: "تنورة قصيرة أنيقة باللون الزهري الناعم." },
    { id: 5, name: "بنطلون جينز أزرق كلاسيكي", category: "fashion", categoryName: "أزياء", price: 179, oldPrice: null, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop", description: "بنطلون جينز كلاسيكي بقصة مريحة وأنيقة." },
    { id: 6, name: "عباية سوداء فاخرة", category: "fashion", categoryName: "أزياء", price: 259, oldPrice: 320, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=400&h=500&fit=crop", description: "عباية سوداء فاخرة بتطريز ذهبي أنيق." },
    { id: 7, name: "مجموعة مكياج احترافية 24 لون", category: "beauty", categoryName: "جمال", price: 159, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop", description: "باليت ظلال عيون احترافية بـ 24 لوناً متنوعاً." },
    { id: 8, name: "كريم مرطب فاخر 50ml", category: "beauty", categoryName: "جمال", price: 129, oldPrice: null, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop", description: "كريم مرطب فاخر غني بفيتامين E والكولاجين." },
    { id: 9, name: "أحمر شفاه وردي ثابت", category: "beauty", categoryName: "جمال", price: 69, oldPrice: 99, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop", description: "أحمر شفاه وردي ثابت يدوم طوال اليوم." },
    { id: 10, name: "ماسك وجه طبيعي", category: "beauty", categoryName: "جمال", price: 45, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=500&fit=crop", description: "ماسك وجه طبيعي للتغذية العميقة للبشرة." },
    { id: 11, name: "عقد ذهبي مطلي - زهرة", category: "accessories", categoryName: "إكسسوارات", price: 79, oldPrice: 120, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop", description: "عقد أنيق مطلي بالذهب عيار 18 قيراط." },
    { id: 12, name: "ساعة يد فاخرة ذهبي وردي", category: "accessories", categoryName: "إكسسوارات", price: 199, oldPrice: 280, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop", description: "ساعة يد نسائية فاخرة باللون الذهبي الوردي." },
    { id: 13, name: "طقم أساور 3 قطع", category: "accessories", categoryName: "إكسسوارات", price: 59, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop", description: "طقم أساور أنيق مكون من 3 قطع متنوعة." },
    { id: 14, name: "خاتم فضة مرصع", category: "accessories", categoryName: "إكسسوارات", price: 149, oldPrice: null, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop", description: "خاتم فضة مرصع بحجر زركونيا لامع." },
    { id: 15, name: "حقيبة يد فاخرة جلد طبيعي", category: "bags", categoryName: "حقائب", price: 189, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop", description: "حقيبة يد فاخرة مصنوعة من الجلد الطبيعي 100%." },
    { id: 16, name: "شنطة كروس بودي", category: "bags", categoryName: "حقائب", price: 119, oldPrice: 159, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop", description: "شنطة كروس بودي أنيقة للاستخدام اليومي." },
    { id: 17, name: "حقيبة ظهر أنيقة", category: "bags", categoryName: "حقائب", price: 139, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop", description: "حقيبة ظهر أنيقة وعملية للجامعة والعمل." },
    { id: 18, name: "حذاء كعب عالي أسود", category: "shoes", categoryName: "أحذية", price: 229, oldPrice: null, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop", description: "حذاء كعب عالي كلاسيكي باللون الأسود." },
    { id: 19, name: "حذاء رياضي وردي", category: "shoes", categoryName: "أحذية", price: 179, oldPrice: 220, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=500&fit=crop", description: "حذاء رياضي وردي مريح للمشي والرياضة." },
    { id: 20, name: "صندل صيفي ذهبي", category: "shoes", categoryName: "أحذية", price: 99, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop", description: "صندل صيفي ذهبي أنيق للإطلالات الصيفية." },
    { id: 21, name: "عطر فاخر روز جاردن", category: "perfumes", categoryName: "عطور", price: 349, oldPrice: 420, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop", description: "عطر نسائي فاخر بمزيج من زهور الورد والياسمين." },
    { id: 22, name: "عطر مسك الطهارة", category: "perfumes", categoryName: "عطور", price: 199, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop", description: "عطر مسك الطهارة النقي برائحة منعشة." },
    { id: 23, name: "شمعة معطرة لافندر", category: "home", categoryName: "منزل", price: 69, oldPrice: null, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1602607688658-e2772a9fdb5a?w=400&h=500&fit=crop", description: "شمعة معطرة برائحة اللافندر الطبيعية." },
    { id: 24, name: "مخدة ديكور زهرية", category: "home", categoryName: "منزل", price: 89, oldPrice: 120, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=400&h=500&fit=crop", description: "مخدة ديكور زهرية ناعمة لديكور المنزل." }
];

// State
let cart = [];
let currentFilter = 'all';
let displayedCount = 8;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const orderModal = document.getElementById('orderModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const orderForm = document.getElementById('orderForm');
const successModal = document.getElementById('successModal');
const successBtn = document.getElementById('successBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const filterTabs = document.querySelectorAll('.filter-tab');
const navItems = document.querySelectorAll('.nav-item');
const searchInput = document.getElementById('searchInput');
const quickViewModal = document.getElementById('quickViewModal');
const closeQuickView = document.getElementById('closeQuickView');
const quickViewBody = document.getElementById('quickViewBody');
const bottomCartBtn = document.getElementById('bottomCartBtn');
const bottomContactBtn = document.getElementById('bottomContactBtn');
const contactModal = document.getElementById('contactModal');
const contactModalOverlay = document.getElementById('contactModalOverlay');
const closeContactModal = document.getElementById('closeContactModal');

// Cart Functions
function saveCartToLocal() { localStorage.setItem('viola_cart', JSON.stringify(cart)); }
function loadCartFromLocal() { const saved = localStorage.getItem('viola_cart'); if (saved) { cart = JSON.parse(saved); updateCartUI(); } }

function addToCart(productId, event) {
    if (event) event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.qty++;
    else cart.push({ ...product, qty: 1 });
    saveCartToLocal();
    updateCartUI();
    showToast('✨ تمت الإضافة إلى سلة ڤيولا!');
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => { if (cartBtn) cartBtn.style.transform = 'scale(1)'; }, 200);
    }
}

function removeFromCart(productId) { cart = cart.filter(item => item.id !== productId); saveCartToLocal(); updateCartUI(); }
function updateQty(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    item.qty += change;
    if (item.qty <= 0) removeFromCart(productId);
    else { saveCartToLocal(); updateCartUI(); }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    if (cartCount) cartCount.textContent = totalItems;
    if (totalPrice) totalPrice.textContent = total + ' $';
    if (cart.length === 0) {
        if (cartItems) cartItems.innerHTML = '';
        if (cartEmpty) cartEmpty.style.display = 'flex';
        if (cartFooter) cartFooter.style.display = 'none';
    } else {
        if (cartEmpty) cartEmpty.style.display = 'none';
        if (cartFooter) cartFooter.style.display = 'block';
        if (cartItems) {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-img"><img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><i class="fas fa-image" style="display:none"></i></div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price} $</div>
                        <div class="cart-item-qty">
                            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                            <span class="qty-value">${item.qty}</span>
                            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                            <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
    const orderItemCount = document.getElementById('orderItemCount');
    const orderSubtotal = document.getElementById('orderSubtotal');
    const orderTotal = document.getElementById('orderTotal');
    if (orderItemCount) orderItemCount.textContent = totalItems;
    if (orderSubtotal) orderSubtotal.textContent = total + ' $';
    if (orderTotal) orderTotal.textContent = total + ' $';
}

// Render Products
function renderProducts(filter = 'all', searchQuery = '', limit = displayedCount) {
    let filtered = products;
    if (filter !== 'all') {
        if (filter === 'new') filtered = products.filter(p => p.badge === 'new');
        else filtered = products.filter(p => p.category === filter);
    }
    if (searchQuery) {
        const lower = searchQuery.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(lower) || p.categoryName.toLowerCase().includes(lower));
    }
    const toShow = filtered.slice(0, limit);
    if (productsGrid) {
        productsGrid.innerHTML = toShow.map((product, index) => `
            <div class="product-card" data-id="${product.id}" style="animation-delay: ${index * 0.05}s">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <i class="fas fa-image" style="display:none; font-size:3rem; color:var(--primary-light)"></i>
                    ${product.badge ? `<span class="product-badge badge-${product.badge}">${product.badgeText}</span>` : ''}
                    <button class="product-quick-view" onclick="openQuickView(${product.id}, event)"><i class="fas fa-eye"></i> نظرة سريعة</button>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.categoryName}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price-row">
                        <div class="product-price">
                            <span class="current-price">${product.price} $</span>
                            ${product.oldPrice ? `<span class="old-price">${product.oldPrice} $</span>` : ''}
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${product.id}, event)"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    if (loadMoreBtn) {
        if (toShow.length >= filtered.length) loadMoreBtn.style.display = 'none';
        else loadMoreBtn.style.display = 'inline-flex';
    }
    return toShow.length;
}

// Toast Function
let toastTimeout = null;
function showToast(message) {
    if (!toast || !toastMessage) return;
    if (toastTimeout) clearTimeout(toastTimeout);
    toast.classList.remove('active');
    toastMessage.textContent = message;
    setTimeout(() => toast.classList.add('active'), 10);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('active');
        toastTimeout = null;
    }, 3000);
}

// Scroll to first product
function scrollToFirstProduct() {
    const firstProduct = document.querySelector('.product-card');
    if (firstProduct) firstProduct.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Search Suggestions
let searchSuggestions = null;
function initSearchSuggestions() {
    const searchBox = document.querySelector('.search-box');
    if (!searchBox) return;
    searchSuggestions = document.createElement('div');
    searchSuggestions.className = 'search-suggestions';
    searchBox.style.position = 'relative';
    searchBox.appendChild(searchSuggestions);
}
function showSearchSuggestions(query) {
    if (!searchSuggestions) return;
    if (query.length > 0) {
        const lower = query.toLowerCase();
        const matches = products.filter(p => p.name.toLowerCase().includes(lower) || p.categoryName.toLowerCase().includes(lower)).slice(0, 5);
        if (matches.length > 0) {
            searchSuggestions.innerHTML = matches.map(p => `<div class="suggestion-item" onclick="selectSuggestionAndScroll('${p.name.replace(/'/g, "\\'")}')"><i class="fas fa-search" style="color: var(--primary-light); font-size: 0.9rem;"></i><span class="suggestion-name">${p.name}</span></div>`).join('');
            searchSuggestions.classList.add('active');
        } else {
            searchSuggestions.innerHTML = `<div class="suggestion-empty"><i class="fas fa-search"></i><span>لا توجد نتائج</span></div>`;
            searchSuggestions.classList.add('active');
        }
    } else {
        searchSuggestions.classList.remove('active');
    }
}
window.selectSuggestionAndScroll = function(name) {
    if (searchInput) searchInput.value = name;
    if (searchSuggestions) searchSuggestions.classList.remove('active');
    displayedCount = 8;
    renderProducts(currentFilter, name);
    scrollToFirstProduct();
};
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        showSearchSuggestions(query);
        if (query === '') {
            displayedCount = 8;
            renderProducts(currentFilter, '');
        }
    });
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (searchSuggestions) searchSuggestions.classList.remove('active');
            const query = searchInput.value.trim();
            displayedCount = 8;
            renderProducts(currentFilter, query);
            if (query !== '') scrollToFirstProduct();
        }
    });
}
document.addEventListener('click', (e) => { if (searchSuggestions && !e.target.closest('.search-box')) searchSuggestions.classList.remove('active'); });

// Quick View
function openQuickView(productId, event) {
    if (event) event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (!quickViewBody) return;
    quickViewBody.innerHTML = `
        <div class="quick-view-img"><img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><i class="fas fa-image" style="display:none"></i></div>
        <div class="quick-view-info">
            <div class="product-category">${product.categoryName}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <div class="product-price-row">
                <div class="product-price">
                    <span class="current-price" style="font-size:1.5rem">${product.price} $</span>
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice} $</span>` : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id}); closeQuickViewFn();" style="width: auto; padding: 12px 24px; border-radius: 50px; gap: 8px;"><i class="fas fa-shopping-bag"></i> أضيفي إلى السلة</button>
            </div>
        </div>
    `;
    if (quickViewModal) {
        quickViewModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
function closeQuickViewFn() { if (quickViewModal) { quickViewModal.classList.remove('active'); document.body.style.overflow = ''; } }

// Modal Functions
function openCart() { if (cartSidebar && cartOverlay) { cartSidebar.classList.add('active'); cartOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; } }
function closeCartFn() { if (cartSidebar && cartOverlay) { cartSidebar.classList.remove('active'); cartOverlay.classList.remove('active'); document.body.style.overflow = ''; } }
function openOrderModal() {
    if (cart.length === 0) { showToast('🛒 السلة فارغة! أضيفي منتجات أولاً'); return; }
    closeCartFn();
    setTimeout(() => { if (orderModal && modalOverlay) { orderModal.classList.add('active'); modalOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; } }, 300);
}
function closeOrderModal() { if (orderModal && modalOverlay) { orderModal.classList.remove('active'); modalOverlay.classList.remove('active'); document.body.style.overflow = ''; } }
function showSuccessModal() {
    const now = new Date(); const timeStr = now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
    const phone = document.getElementById('phone')?.value || '';
    const orderTime = document.getElementById('orderTime');
    const orderPhone = document.getElementById('orderPhone');
    if (orderTime) orderTime.textContent = timeStr;
    if (orderPhone) orderPhone.textContent = phone;
    closeOrderModal();
    setTimeout(() => { if (successModal) { successModal.classList.add('active'); document.body.style.overflow = 'hidden'; } }, 300);
}
function closeSuccessModal() { if (successModal) { successModal.classList.remove('active'); document.body.style.overflow = ''; cart = []; saveCartToLocal(); updateCartUI(); } }
function openContactModal() { if (contactModal && contactModalOverlay) { contactModal.classList.add('active'); contactModalOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; } }
function closeContactModalFn() { if (contactModal && contactModalOverlay) { contactModal.classList.remove('active'); contactModalOverlay.classList.remove('active'); document.body.style.overflow = ''; } }

// Event Listeners
if (cartBtn) cartBtn.addEventListener('click', openCart);
if (closeCart) closeCart.addEventListener('click', closeCartFn);
if (cartOverlay) cartOverlay.addEventListener('click', closeCartFn);
if (checkoutBtn) checkoutBtn.addEventListener('click', openOrderModal);
if (closeModal) closeModal.addEventListener('click', closeOrderModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeOrderModal);
if (closeQuickView) closeQuickView.addEventListener('click', closeQuickViewFn);
if (quickViewModal) quickViewModal.addEventListener('click', (e) => { if (e.target === quickViewModal) closeQuickViewFn(); });
if (successBtn) successBtn.addEventListener('click', closeSuccessModal);
if (successModal) successModal.addEventListener('click', (e) => { if (e.target === successModal) closeSuccessModal(); });
if (bottomCartBtn) bottomCartBtn.addEventListener('click', openCart);
if (bottomContactBtn) bottomContactBtn.addEventListener('click', openContactModal);
if (closeContactModal) closeContactModal.addEventListener('click', closeContactModalFn);
if (contactModalOverlay) contactModalOverlay.addEventListener('click', closeContactModalFn);

// Filter Tabs
if (filterTabs.length) {
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            displayedCount = 8;
            renderProducts(currentFilter, searchInput ? searchInput.value : '');
        });
    });
}

// Load More
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        loadMoreBtn.classList.add('loading');
        setTimeout(() => { displayedCount += 4; renderProducts(currentFilter, searchInput ? searchInput.value : ''); loadMoreBtn.classList.remove('loading'); }, 600);
    });
}

// Navigation Items
if (navItems.length) {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link && link.getAttribute('href') && link.getAttribute('href') !== '#') {
            if (link.getAttribute('href').includes('category.html')) {
                return;
            }
        }
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            const category = item.dataset.category;
            if (category && category !== 'all') {
                window.location.href = `category.html?cat=${category}`;
            } else {
                if (filterTabs.length) {
                    filterTabs.forEach(t => t.classList.remove('active'));
                    const allTab = document.querySelector('[data-filter="all"]');
                    if (allTab) allTab.classList.add('active');
                }
                currentFilter = 'all';
                displayedCount = 8;
                renderProducts('all', searchInput ? searchInput.value : '');
            }
        });
    });
}

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dots .dot');
let slideInterval;
function showSlide(index) { slides.forEach((slide, i) => { slide.classList.toggle('active', i === index); }); dots.forEach((dot, i) => { dot.classList.toggle('active', i === index); }); currentSlide = index; }
function nextSlide() { showSlide((currentSlide + 1) % slides.length); }
function startAutoSlide() { slideInterval = setInterval(nextSlide, 7000); }
function stopAutoSlide() { clearInterval(slideInterval); }
if (dots.length) { dots.forEach((dot, idx) => { dot.addEventListener('click', () => { stopAutoSlide(); showSlide(idx); startAutoSlide(); }); }); }
if (document.getElementById('heroSlider')) { const heroSliderElem = document.getElementById('heroSlider'); heroSliderElem.addEventListener('mouseenter', stopAutoSlide); heroSliderElem.addEventListener('mouseleave', startAutoSlide); startAutoSlide(); }

// Order Form
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('fullName')?.value.trim() || '';
        const phone = document.getElementById('phone')?.value.trim() || '';
        const city = document.getElementById('city')?.value || '';
        const address = document.getElementById('address')?.value.trim() || '';
        if (!fullName || !phone || !city || !address) { showToast('⚠️ يرجى ملء جميع الحقول المطلوبة'); return; }
        if (!/^05\d{8}$/.test(phone)) { showToast('⚠️ رقم الهاتف يجب أن يبدأ بـ 05 ويتكون من 10 أرقام'); return; }
        showSuccessModal();
        orderForm.reset();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initSearchSuggestions();
    loadCartFromLocal();
    renderProducts();
    updateCartUI();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeCartFn(); closeOrderModal(); closeQuickViewFn(); closeSuccessModal(); closeContactModalFn(); } });