// ============================================
// متجر أنثى - JavaScript
// ============================================

// ============================================
// DATA - Dummy Products
// ============================================
const products = [
    {
        id: 1,
        name: "فستان سهرة أنيق - وردي فاتح",
        category: "fashion",
        categoryName: "أزياء",
        price: 299,
        oldPrice: 450,
        rating: 4.8,
        reviews: 128,
        badge: "sale",
        badgeText: "تخفيض",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
        description: "فستان سهرة فاخر بتصميم أنيق يناسب جميع المناسبات. مصنوع من أجود الأقمشة مع تفاصيل مطرزة يدوياً."
    },
    {
        id: 2,
        name: "حقيبة يد فاخرة - جلد طبيعي",
        category: "bags",
        categoryName: "حقائب",
        price: 189,
        oldPrice: null,
        rating: 4.9,
        reviews: 85,
        badge: "new",
        badgeText: "جديد",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
        description: "حقيبة يد فاخرة مصنوعة من الجلد الطبيعي 100% بتصميم عصري يناسب إطلالتك اليومية."
    },
    {
        id: 3,
        name: "عطر فاخر - روز جاردن",
        category: "perfumes",
        categoryName: "عطور",
        price: 349,
        oldPrice: 420,
        rating: 4.7,
        reviews: 210,
        badge: "hot",
        badgeText: "الأكثر مبيعاً",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
        description: "عطر نسائي فاخر بمزيج من زهور الورد والياسمين مع لمسات من المسك والعنبر."
    },
    {
        id: 4,
        name: "مجموعة مكياج احترافية - 24 لون",
        category: "beauty",
        categoryName: "جمال",
        price: 159,
        oldPrice: null,
        rating: 4.6,
        reviews: 342,
        badge: "new",
        badgeText: "جديد",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop",
        description: "باليت ظلال عيون احترافية بـ 24 لوناً متنوعاً تناسب جميع الإطلالات."
    },
    {
        id: 5,
        name: "عقد ذهبي مطلي - تصميم زهرة",
        category: "accessories",
        categoryName: "إكسسوارات",
        price: 79,
        oldPrice: 120,
        rating: 4.5,
        reviews: 67,
        badge: "sale",
        badgeText: "تخفيض",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop",
        description: "عقد أنيق مطلي بالذهب عيار 18 قيراط بتصميم زهرة رقيق يناسب جميع المناسبات."
    },
    {
        id: 6,
        name: "حذاء كعب عالي - أسود كلاسيكي",
        category: "shoes",
        categoryName: "أحذية",
        price: 229,
        oldPrice: null,
        rating: 4.8,
        reviews: 156,
        badge: "hot",
        badgeText: "الأكثر مبيعاً",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
        description: "حذاء كعب عالي كلاسيكي باللون الأسود مناسب للعمل والمناسبات الرسمية."
    },
    {
        id: 7,
        name: "بلوزة صيفية - أبيض نقي",
        category: "fashion",
        categoryName: "أزياء",
        price: 89,
        oldPrice: null,
        rating: 4.4,
        reviews: 98,
        badge: "new",
        badgeText: "جديد",
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop",
        description: "بلوزة صيفية خفيفة وناعمة باللون الأبيض النقي تناسب إطلالة يومية أنيقة."
    },
    {
        id: 8,
        name: "ساعة يد فاخرة - ذهبي وردي",
        category: "accessories",
        categoryName: "إكسسوارات",
        price: 199,
        oldPrice: 280,
        rating: 4.9,
        reviews: 45,
        badge: "sale",
        badgeText: "تخفيض",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop",
        description: "ساعة يد نسائية فاخرة باللون الذهبي الوردي مع حزام جلدي ناعم."
    },
    {
        id: 9,
        name: "كريم مرطب فاخر - 50ml",
        category: "beauty",
        categoryName: "جمال",
        price: 129,
        oldPrice: null,
        rating: 4.7,
        reviews: 278,
        badge: "hot",
        badgeText: "الأكثر مبيعاً",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop",
        description: "كريم مرطب فاخر غني بفيتامين E والكولاجين للبشرة الناعمة والمشرقة."
    },
    {
        id: 10,
        name: "جاكيت شتوي - بيج دافئ",
        category: "fashion",
        categoryName: "أزياء",
        price: 349,
        oldPrice: 499,
        rating: 4.6,
        reviews: 89,
        badge: "sale",
        badgeText: "تخفيض",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
        description: "جاكيت شتوي دافئ باللون البيج مع بطانة قطنية ناعمة للحماية من البرد."
    },
    {
        id: 11,
        name: "طقم أساور - 3 قطع",
        category: "accessories",
        categoryName: "إكسسوارات",
        price: 59,
        oldPrice: null,
        rating: 4.3,
        reviews: 134,
        badge: "new",
        badgeText: "جديد",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop",
        description: "طقم أساور أنيق مكون من 3 قطع بتصاميم متنوعة تناسب جميع الإطلالات."
    },
    {
        id: 12,
        name: "شمعة معطرة - لافندر",
        category: "home",
        categoryName: "منزل",
        price: 69,
        oldPrice: null,
        rating: 4.8,
        reviews: 201,
        badge: "hot",
        badgeText: "الأكثر مبيعاً",
        image: "https://images.unsplash.com/photo-1602607688658-e2772a9fdb5a?w=400&h=500&fit=crop",
        description: "شمعة معطرة برائحة اللافندر الطبيعية لأجواء هادئة ومريحة في منزلك."
    }
];

// ============================================
// STATE
// ============================================
let cart = [];
let currentFilter = 'all';
let displayedCount = 8;

// ============================================
// DOM ELEMENTS
// ============================================
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

// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts(filter = 'all', searchQuery = '', limit = displayedCount) {
    let filtered = products;

    if (filter !== 'all') {
        if (filter === 'new') {
            filtered = products.filter(p => p.badge === 'new');
        } else {
            filtered = products.filter(p => p.category === filter);
        }
    }

    if (searchQuery) {
        filtered = filtered.filter(p => 
            p.name.includes(searchQuery) || 
            p.categoryName.includes(searchQuery)
        );
    }

    const toShow = filtered.slice(0, limit);

    productsGrid.innerHTML = toShow.map((product, index) => `
        <div class="product-card" data-id="${product.id}" style="animation-delay: ${index * 0.05}s">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <i class="fas fa-image" style="display:none; font-size:3rem; color:var(--primary-light)"></i>
                ${product.badge ? `<span class="product-badge badge-${product.badge}">${product.badgeText}</span>` : ''}
                <button class="product-wishlist" onclick="toggleWishlist(this, event)">
                    <i class="far fa-heart"></i>
                </button>
                <button class="product-quick-view" onclick="openQuickView(${product.id}, event)">
                    <i class="fas fa-eye"></i> نظرة سريعة
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.categoryName}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${renderStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price-row">
                    <div class="product-price">
                        <span class="current-price">${product.price} ريال</span>
                        ${product.oldPrice ? `<span class="old-price">${product.oldPrice} ريال</span>` : ''}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id}, event)" title="أضيفي إلى السلة">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Show/hide load more button
    if (toShow.length >= filtered.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '<i class="fas fa-star"></i>';
    if (half) stars += '<i class="fas fa-star-half-alt"></i>';
    const empty = 5 - Math.ceil(rating);
    for (let i = 0; i < empty; i++) stars += '<i class="far fa-star"></i>';
    return stars;
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(productId, event) {
    if (event) event.stopPropagation();

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast('✨ تمت الإضافة إلى سلة ڤيولا!');

    // Animate cart button
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQty(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }

    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    cartCount.textContent = totalItems;
    totalPrice.textContent = total + ' ريال';

    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartEmpty.style.display = 'flex';
        cartFooter.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';

        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}" loading="lazy"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <i class="fas fa-image" style="display:none"></i>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} ريال</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update order summary
    document.getElementById('orderItemCount').textContent = totalItems;
    document.getElementById('orderSubtotal').textContent = total + ' ريال';
    document.getElementById('orderTotal').textContent = total + ' ريال';
}

// ============================================
// MODAL FUNCTIONS
// ============================================
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartFn() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openOrderModal() {
    if (cart.length === 0) {
        showToast('🛒 السلة فارغة! أضيفي منتجات أولاً');
        return;
    }
    closeCartFn();
    setTimeout(() => {
        orderModal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 300);
}

function closeOrderModal() {
    orderModal.classList.remove('active');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openQuickView(productId, event) {
    if (event) event.stopPropagation();

    const product = products.find(p => p.id === productId);
    if (!product) return;

    quickViewBody.innerHTML = `
        <div class="quick-view-img">
            <img src="${product.image}" alt="${product.name}" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <i class="fas fa-image" style="display:none"></i>
        </div>
        <div class="quick-view-info">
            <div class="product-category">${product.categoryName}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <span class="stars">${renderStars(product.rating)}</span>
                <span class="rating-count">(${product.reviews} تقييم)</span>
            </div>
            <p class="product-desc">${product.description}</p>
            <div class="product-price-row">
                <div class="product-price">
                    <span class="current-price" style="font-size:1.5rem">${product.price} ريال</span>
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice} ريال</span>` : ''}
                </div>
            </div>
            <div class="quick-view-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id}); closeQuickViewFn();">
                    <i class="fas fa-shopping-bag"></i> أضيفي إلى السلة
                </button>
                <button class="wishlist-btn" onclick="toggleWishlist(this, event)">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
    `;

    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickViewFn() {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
}

function showSuccessModal() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
    const phone = document.getElementById('phone').value;

    document.getElementById('orderTime').textContent = timeStr;
    document.getElementById('orderPhone').textContent = phone;

    closeOrderModal();
    setTimeout(() => {
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 300);
}

function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
    // Clear cart
    cart = [];
    updateCartUI();
}

// ============================================
// TOAST
// ============================================
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ============================================
// WISHLIST
// ============================================
function toggleWishlist(btn, event) {
    if (event) event.stopPropagation();
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        showToast('❤️ أضيفي إلى مفضلة ڤيولا!');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartFn);
cartOverlay.addEventListener('click', closeCartFn);

checkoutBtn.addEventListener('click', openOrderModal);
closeModal.addEventListener('click', closeOrderModal);
modalOverlay.addEventListener('click', closeOrderModal);

closeQuickView.addEventListener('click', closeQuickViewFn);
quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) closeQuickViewFn();
});

successBtn.addEventListener('click', closeSuccessModal);
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) closeSuccessModal();
});

// Filter tabs
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.dataset.filter;
        displayedCount = 8;
        renderProducts(currentFilter, searchInput.value);
    });
});

// Navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        const category = item.dataset.category;
        if (category !== 'all') {
            filterTabs.forEach(t => t.classList.remove('active'));
            currentFilter = category;
            displayedCount = 8;
            renderProducts(currentFilter, searchInput.value);
            document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
        } else {
            filterTabs.forEach(t => t.classList.remove('active'));
            document.querySelector('[data-filter="all"]').classList.add('active');
            currentFilter = 'all';
            displayedCount = 8;
            renderProducts('all', searchInput.value);
        }
    });
});

// Search
searchInput.addEventListener('input', (e) => {
    displayedCount = 8;
    renderProducts(currentFilter, e.target.value);
});

// Load more
loadMoreBtn.addEventListener('click', () => {
    loadMoreBtn.classList.add('loading');
    setTimeout(() => {
        displayedCount += 4;
        renderProducts(currentFilter, searchInput.value);
        loadMoreBtn.classList.remove('loading');
    }, 600);
});

// Order form
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value.trim();

    if (!fullName || !phone || !city || !address) {
        showToast('⚠️ يرجى ملء جميع الحقول المطلوبة');
        return;
    }

    // Validate phone
    const phoneRegex = /^05\d{8}$/;
    if (!phoneRegex.test(phone)) {
        showToast('⚠️ رقم الهاتف يجب أن يبدأ بـ 05 ويتكون من 10 أرقام');
        return;
    }

    // Here you would send data to Firebase
    console.log('Order submitted:', {
        customer: { fullName, phone, city, address },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.qty), 0),
        timestamp: new Date().toISOString()
    });

    showSuccessModal();
    orderForm.reset();
});

// Category cards click
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const cat = card.dataset.cat;
        filterTabs.forEach(t => t.classList.remove('active'));
        currentFilter = cat;
        displayedCount = 8;
        renderProducts(cat, searchInput.value);
        document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
    });
});


// ============================================
// HERO SLIDER - Auto-rotating Ads
// ============================================

const heroSlider = document.getElementById('heroSlider');
const heroDots = document.getElementById('heroDots');
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dots .dot');
let slideInterval;
const SLIDE_DURATION = 7000; // 7 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === currentSlide) {
            slide.classList.add('prev');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, SLIDE_DURATION);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Dot click handlers
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();
    });
});

// Hero button click - open link
document.querySelectorAll('.hero-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const link = btn.dataset.link;
        if (link && link !== '#') {
            window.open(link, '_blank');
        }
    });
});

// Pause on hover
heroSlider.addEventListener('mouseenter', stopAutoSlide);
heroSlider.addEventListener('mouseleave', startAutoSlide);

// Start auto-slide on load
startAutoSlide();

// ============================================
// ADS DATA STRUCTURE (for Admin Panel integration)
// ============================================

// This is the structure that will be loaded from Firebase/Admin Panel
const adsDataTemplate = {
    ads: [
        {
            id: 1,
            title: "أناقة لا تُضاهى",
            subtitle: "لأجمل إطلالة",
            description: "اكتشفي أحدث صيحات الموضة والجمال بأسعار مذهلة",
            tag: "✨ مجموعة جديدة",
            buttonText: "تسوقي الآن",
            buttonLink: "https://example.com/promo1",
            image: "ad1.jpg",
            bgColor: "gradient1",
            active: true
        },
        {
            id: 2,
            title: "مجموعة الصيف",
            subtitle: "بأسعار خيالية",
            description: "تشكيلة واسعة من الأزياء الصيفية الأنيقة",
            tag: "🎁 عرض خاص",
            buttonText: "اكتشفي المزيد",
            buttonLink: "https://example.com/promo2",
            image: "ad2.jpg",
            bgColor: "gradient2",
            active: true
        },
        {
            id: 3,
            title: "منتجات الجمال",
            subtitle: "بخصومات حتى 40%",
            description: "أفضل الماركات العالمية بأقل الأسعار",
            tag: "💄 جمالك أولوية",
            buttonText: "تسوقي الآن",
            buttonLink: "https://example.com/promo3",
            image: "ad3.jpg",
            bgColor: "gradient3",
            active: true
        }
    ],
    settings: {
        autoSlide: true,
        slideDuration: 7000, // milliseconds
        transitionEffect: "fade"
    }
};

// Function to render ads from admin data (will be used when Firebase is connected)
function renderAdsFromAdmin(adsData) {
    const slider = document.getElementById('heroSlider');
    const dotsContainer = document.getElementById('heroDots');

    // Clear existing
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    const activeAds = adsData.ads.filter(ad => ad.active);

    activeAds.forEach((ad, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
        slide.dataset.adId = ad.id;
        slide.dataset.link = ad.buttonLink;

        slide.innerHTML = `
            <div class="hero-content">
                <span class="hero-tag">${ad.tag}</span>
                <h2>${ad.title}<br>${ad.subtitle}</h2>
                <p>${ad.description}</p>
                <button class="hero-btn" data-link="${ad.buttonLink}">
                    ${ad.buttonText} <i class="fas fa-arrow-left"></i>
                </button>
            </div>
            <div class="hero-image">
                <div class="hero-img-placeholder" style="background: ${getGradientById(ad.bgColor)}">
                    <i class="fas fa-image"></i>
                </div>
            </div>
        `;

        slider.appendChild(slide);

        // Create dot
        const dot = document.createElement('span');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.slide = index;
        dotsContainer.appendChild(dot);
    });

    // Re-initialize slider
    initSlider();
}

function getGradientById(id) {
    const gradients = {
        gradient1: 'linear-gradient(135deg, #ffe4ec, #ffd6e0)',
        gradient2: 'linear-gradient(135deg, #ffe0f0, #ffcce0)',
        gradient3: 'linear-gradient(135deg, #ffe8f0, #ffd0e0)',
        gradient4: 'linear-gradient(135deg, #fff0f5, #ffe4ec)',
        gradient5: 'linear-gradient(135deg, #fce4ec, #f8bbd9)'
    };
    return gradients[id] || gradients.gradient1;
}

function initSlider() {
    // Re-bind events
    const newSlides = document.querySelectorAll('.hero-slide');
    const newDots = document.querySelectorAll('.hero-dots .dot');

    newDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });

    document.querySelectorAll('.hero-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const link = btn.dataset.link;
            if (link && link !== '#') {
                window.open(link, '_blank');
            }
        });
    });

    currentSlide = 0;
    clearInterval(slideInterval);
    startAutoSlide();
}
// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCartFn();
        closeOrderModal();
        closeQuickViewFn();
        closeSuccessModal();
    }
});
