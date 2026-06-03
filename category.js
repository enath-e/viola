// ============================================
// CATEGORY PAGE - VIOLA STORE
// ============================================

// Products Data
const products = [
    { id: 1, name: "فستان سهرة وردي أنيق", category: "fashion", categoryName: "أزياء", price: 299, oldPrice: 450, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop", description: "فستان سهرة فاخر بتصميم أنيق." },
    { id: 2, name: "بلوزة صيفية بيضاء ناعمة", category: "fashion", categoryName: "أزياء", price: 89, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop", description: "بلوزة صيفية خفيفة وناعمة." },
    { id: 3, name: "جاكيت شتوي بيج دافئ", category: "fashion", categoryName: "أزياء", price: 349, oldPrice: 499, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop", description: "جاكيت شتوي دافئ باللون البيج." },
    { id: 4, name: "تنورة قصيرة زهرية", category: "fashion", categoryName: "أزياء", price: 129, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj1?w=400&h=500&fit=crop", description: "تنورة قصيرة أنيقة باللون الزهري." },
    { id: 5, name: "بنطلون جينز أزرق كلاسيكي", category: "fashion", categoryName: "أزياء", price: 179, oldPrice: null, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop", description: "بنطلون جينز كلاسيكي بقصة مريحة." },
    { id: 6, name: "عباية سوداء فاخرة", category: "fashion", categoryName: "أزياء", price: 259, oldPrice: 320, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=400&h=500&fit=crop", description: "عباية سوداء فاخرة بتطريز ذهبي." },
    { id: 7, name: "مجموعة مكياج احترافية", category: "beauty", categoryName: "جمال", price: 159, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop", description: "باليت ظلال عيون احترافية." },
    { id: 8, name: "كريم مرطب فاخر", category: "beauty", categoryName: "جمال", price: 129, oldPrice: null, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop", description: "كريم مرطب غني بفيتامين E." },
    { id: 9, name: "أحمر شفاه وردي", category: "beauty", categoryName: "جمال", price: 69, oldPrice: 99, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop", description: "أحمر شفاه وردي ثابت." },
    { id: 10, name: "ماسك وجه طبيعي", category: "beauty", categoryName: "جمال", price: 45, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=500&fit=crop", description: "ماسك وجه طبيعي للتغذية العميقة." },
    { id: 11, name: "عقد ذهبي مطلي", category: "accessories", categoryName: "إكسسوارات", price: 79, oldPrice: 120, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop", description: "عقد أنيق مطلي بالذهب." },
    { id: 12, name: "ساعة يد فاخرة", category: "accessories", categoryName: "إكسسوارات", price: 199, oldPrice: 280, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop", description: "ساعة يد نسائية فاخرة." },
    { id: 13, name: "طقم أساور 3 قطع", category: "accessories", categoryName: "إكسسوارات", price: 59, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop", description: "طقم أساور أنيق." },
    { id: 14, name: "خاتم فضة مرصع", category: "accessories", categoryName: "إكسسوارات", price: 149, oldPrice: null, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop", description: "خاتم فضة مرصع." },
    { id: 15, name: "حقيبة يد فاخرة", category: "bags", categoryName: "حقائب", price: 189, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop", description: "حقيبة يد فاخرة من الجلد الطبيعي." },
    { id: 16, name: "شنطة كروس بودي", category: "bags", categoryName: "حقائب", price: 119, oldPrice: 159, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop", description: "شنطة كروس بودي أنيقة." },
    { id: 17, name: "حقيبة ظهر أنيقة", category: "bags", categoryName: "حقائب", price: 139, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop", description: "حقيبة ظهر أنيقة." },
    { id: 18, name: "حذاء كعب عالي", category: "shoes", categoryName: "أحذية", price: 229, oldPrice: null, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop", description: "حذاء كعب عالي كلاسيكي." },
    { id: 19, name: "حذاء رياضي وردي", category: "shoes", categoryName: "أحذية", price: 179, oldPrice: 220, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=500&fit=crop", description: "حذاء رياضي وردي مريح." },
    { id: 20, name: "صندل صيفي ذهبي", category: "shoes", categoryName: "أحذية", price: 99, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop", description: "صندل صيفي ذهبي أنيق." },
    { id: 21, name: "عطر روز جاردن", category: "perfumes", categoryName: "عطور", price: 349, oldPrice: 420, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop", description: "عطر نسائي فاخر." },
    { id: 22, name: "عطر مسك الطهارة", category: "perfumes", categoryName: "عطور", price: 199, oldPrice: null, badge: "new", badgeText: "جديد", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop", description: "عطر مسك الطهارة النقي." },
    { id: 23, name: "شمعة لافندر", category: "home", categoryName: "منزل", price: 69, oldPrice: null, badge: "hot", badgeText: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1602607688658-e2772a9fdb5a?w=400&h=500&fit=crop", description: "شمعة معطرة برائحة اللافندر." },
    { id: 24, name: "مخدة ديكور زهرية", category: "home", categoryName: "منزل", price: 89, oldPrice: 120, badge: "sale", badgeText: "تخفيض", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=400&h=500&fit=crop", description: "مخدة ديكور زهرية ناعمة." }
];

// Category Data
const categoryData = {
    fashion: { name: 'أزياء', icon: 'fa-tshirt', desc: 'تشكيلة واسعة من الأزياء الأنيقة والعصرية', subCategories: [{ id: 'dresses', name: 'فساتين', icon: 'fa-female', count: 45 }, { id: 'tops', name: 'بلوزات', icon: 'fa-tshirt', count: 38 }, { id: 'pants', name: 'بناطيل', icon: 'fa-user', count: 22 }, { id: 'skirts', name: 'تنانير', icon: 'fa-female', count: 18 }, { id: 'outerwear', name: 'جاكيتات', icon: 'fa-wind', count: 15 }, { id: 'sportswear', name: 'رياضية', icon: 'fa-running', count: 12 }] },
    beauty: { name: 'جمال', icon: 'fa-magic', desc: 'أفضل منتجات الجمال والعناية بالبشرة', subCategories: [{ id: 'makeup', name: 'مكياج', icon: 'fa-paint-brush', count: 35 }, { id: 'skincare', name: 'عناية بالبشرة', icon: 'fa-spa', count: 28 }, { id: 'haircare', name: 'عناية بالشعر', icon: 'fa-air-freshener', count: 15 }, { id: 'nails', name: 'أظافر', icon: 'fa-hand-sparkles', count: 12 }, { id: 'tools', name: 'أدوات', icon: 'fa-tools', count: 10 }] },
    accessories: { name: 'إكسسوارات', icon: 'fa-gem', desc: 'إكسسوارات أنيقة تكمل إطلالتك', subCategories: [{ id: 'jewelry', name: 'مجوهرات', icon: 'fa-ring', count: 50 }, { id: 'watches', name: 'ساعات', icon: 'fa-clock', count: 25 }, { id: 'sunglasses', name: 'نظارات', icon: 'fa-glasses', count: 20 }, { id: 'belts', name: 'أحزمة', icon: 'fa-compress', count: 15 }, { id: 'scarves', name: 'وشاحات', icon: 'fa-wind', count: 18 }] },
    bags: { name: 'حقائب', icon: 'fa-shopping-bag', desc: 'حقائب فاخرة لجميع المناسبات', subCategories: [{ id: 'handbags', name: 'يد', icon: 'fa-shopping-bag', count: 30 }, { id: 'crossbody', name: 'كروس', icon: 'fa-shopping-bag', count: 20 }, { id: 'backpacks', name: 'ظهر', icon: 'fa-hiking', count: 15 }, { id: 'clutches', name: 'سهرة', icon: 'fa-hand-holding', count: 12 }] },
    shoes: { name: 'أحذية', icon: 'fa-shoe-prints', desc: 'أحذية أنيقة ومريحة', subCategories: [{ id: 'heels', name: 'كعب', icon: 'fa-female', count: 25 }, { id: 'flats', name: 'فلات', icon: 'fa-shoe-prints', count: 20 }, { id: 'sneakers', name: 'رياضية', icon: 'fa-running', count: 18 }, { id: 'boots', name: 'بوت', icon: 'fa-shoe-prints', count: 15 }, { id: 'sandals', name: 'صنادل', icon: 'fa-sun', count: 12 }] },
    perfumes: { name: 'عطور', icon: 'fa-spray-can', desc: 'عطور فاخرة من أشهر الماركات', subCategories: [{ id: 'women', name: 'نسائية', icon: 'fa-female', count: 25 }, { id: 'unisex', name: 'يونيسكس', icon: 'fa-venus-mars', count: 15 }, { id: 'sets', name: 'طقم', icon: 'fa-gift', count: 10 }, { id: 'oils', name: 'زيوت', icon: 'fa-tint', count: 8 }] },
    home: { name: 'منزل', icon: 'fa-couch', desc: 'منتجات أنيقة لمنزلك', subCategories: [{ id: 'decor', name: 'ديكور', icon: 'fa-home', count: 30 }, { id: 'candles', name: 'شموع', icon: 'fa-fire', count: 25 }, { id: 'bedding', name: 'مفروشات', icon: 'fa-bed', count: 20 }, { id: 'kitchen', name: 'مطبخ', icon: 'fa-utensils', count: 18 }, { id: 'bathroom', name: 'حمام', icon: 'fa-bath', count: 15 }] }
};

// State
let cart = [];
let currentCategory = '';
let currentSubCategory = 'all';
let currentSort = 'random';
let searchQueryCategory = '';

// Helper Functions
function getUrlParam(param) { return new URLSearchParams(window.location.search).get(param); }
function shuffleArray(array) { const arr = [...array]; for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }

// Cart Functions
function saveCartToLocal() { localStorage.setItem('viola_cart', JSON.stringify(cart)); }
function loadCartFromLocal() { const saved = localStorage.getItem('viola_cart'); if (saved) { cart = JSON.parse(saved); updateCartUI(); } }
function addToCart(productId, event) { if (event) event.stopPropagation(); const product = products.find(p => p.id === productId); if (!product) return; const existing = cart.find(item => item.id === productId); if (existing) existing.qty++; else cart.push({ ...product, qty: 1 }); saveCartToLocal(); updateCartUI(); showToast('✨ تمت الإضافة إلى سلة ڤيولا!'); }
function removeFromCart(productId) { cart = cart.filter(item => item.id !== productId); saveCartToLocal(); updateCartUI(); }
function updateQty(productId, change) { const item = cart.find(item => item.id === productId); if (!item) return; item.qty += change; if (item.qty <= 0) removeFromCart(productId); else { saveCartToLocal(); updateCartUI(); } }
function updateCartUI() { const totalItems = cart.reduce((sum, item) => sum + item.qty, 0); const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0); const cartCount = document.getElementById('cartCount'); const totalPrice = document.getElementById('totalPrice'); const cartItemsDiv = document.getElementById('cartItems'); const cartEmptyDiv = document.getElementById('cartEmpty'); const cartFooterDiv = document.getElementById('cartFooter'); if (cartCount) cartCount.textContent = totalItems; if (totalPrice) totalPrice.textContent = total + ' $'; if (cart.length === 0) { if (cartItemsDiv) cartItemsDiv.innerHTML = ''; if (cartEmptyDiv) cartEmptyDiv.style.display = 'flex'; if (cartFooterDiv) cartFooterDiv.style.display = 'none'; } else { if (cartEmptyDiv) cartEmptyDiv.style.display = 'none'; if (cartFooterDiv) cartFooterDiv.style.display = 'block'; if (cartItemsDiv) { cartItemsDiv.innerHTML = cart.map(item => `<div class="cart-item"><div class="cart-item-img"><img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><i class="fas fa-image" style="display:none"></i></div><div class="cart-item-details"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">${item.price} $</div><div class="cart-item-qty"><button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button><span class="qty-value">${item.qty}</span><button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button><button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button></div></div></div>`).join(''); } } const orderItemCount = document.getElementById('orderItemCount'); const orderSubtotal = document.getElementById('orderSubtotal'); const orderTotal = document.getElementById('orderTotal'); if (orderItemCount) orderItemCount.textContent = totalItems; if (orderSubtotal) orderSubtotal.textContent = total + ' $'; if (orderTotal) orderTotal.textContent = total + ' $'; }

// Toast Function
let toastTimeout = null;
function showToast(message) { const toast = document.getElementById('toast'); const toastMessage = document.getElementById('toastMessage'); if (!toast || !toastMessage) return; if (toastTimeout) clearTimeout(toastTimeout); toast.classList.remove('active'); toastMessage.textContent = message; setTimeout(() => toast.classList.add('active'), 10); toastTimeout = setTimeout(() => { toast.classList.remove('active'); toastTimeout = null; }, 3000); }

// Modal Functions
function openCart() { const sidebar = document.getElementById('cartSidebar'); const overlay = document.getElementById('cartOverlay'); if (sidebar && overlay) { sidebar.classList.add('active'); overlay.classList.add('active'); document.body.style.overflow = 'hidden'; } }
function closeCartFn() { const sidebar = document.getElementById('cartSidebar'); const overlay = document.getElementById('cartOverlay'); if (sidebar && overlay) { sidebar.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow = ''; } }
function openOrderModal() { if (cart.length === 0) { showToast('🛒 السلة فارغة! أضيفي منتجات أولاً'); return; } closeCartFn(); setTimeout(() => { const modal = document.getElementById('orderModal'); const overlay = document.getElementById('modalOverlay'); if (modal && overlay) { modal.classList.add('active'); overlay.classList.add('active'); document.body.style.overflow = 'hidden'; } }, 300); }
function closeOrderModal() { const modal = document.getElementById('orderModal'); const overlay = document.getElementById('modalOverlay'); if (modal && overlay) { modal.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow = ''; } }
function showSuccessModal() { const now = new Date(); const timeStr = now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }); const phone = document.getElementById('phone')?.value || ''; const orderTime = document.getElementById('orderTime'); const orderPhone = document.getElementById('orderPhone'); if (orderTime) orderTime.textContent = timeStr; if (orderPhone) orderPhone.textContent = phone; closeOrderModal(); setTimeout(() => { const modal = document.getElementById('successModal'); if (modal) { modal.classList.add('active'); document.body.style.overflow = 'hidden'; } }, 300); }
function closeSuccessModal() { const modal = document.getElementById('successModal'); if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; cart = []; saveCartToLocal(); updateCartUI(); } }
function openContactModal() { const modal = document.getElementById('contactModal'); const overlay = document.getElementById('contactModalOverlay'); if (modal && overlay) { modal.classList.add('active'); overlay.classList.add('active'); document.body.style.overflow = 'hidden'; } }
function closeContactModalFn() { const modal = document.getElementById('contactModal'); const overlay = document.getElementById('contactModalOverlay'); if (modal && overlay) { modal.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow = ''; } }

// Quick View
function openQuickView(productId, event) { if (event) event.stopPropagation(); const product = products.find(p => p.id === productId); if (!product) return; const modal = document.getElementById('quickViewModal'); const body = document.getElementById('quickViewBody'); if (!modal || !body) return; body.innerHTML = `<div class="quick-view-img"><img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><i class="fas fa-image" style="display:none"></i></div><div class="quick-view-info"><div class="product-category">${product.categoryName}</div><h3 class="product-name">${product.name}</h3><p class="product-desc">${product.description}</p><div class="product-price-row"><div class="product-price"><span class="current-price" style="font-size:1.5rem">${product.price} $</span>${product.oldPrice ? `<span class="old-price">${product.oldPrice} $</span>` : ''}</div><button class="add-to-cart" onclick="addToCart(${product.id}); closeQuickView();" style="width: auto; padding: 12px 24px; border-radius: 50px; gap: 8px;"><i class="fas fa-shopping-bag"></i> أضيفي إلى السلة</button></div></div>`; modal.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeQuickView() { const modal = document.getElementById('quickViewModal'); if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; } }

// Category Core Functions
function loadCategory(catId) {
    currentCategory = catId;
    currentSubCategory = 'all';
    searchQueryCategory = '';
    const searchInputElem = document.getElementById('searchInput');
    if (searchInputElem) searchInputElem.value = '';
    const catData = categoryData[currentCategory];
    if (!catData) { window.location.href = 'index.html'; return; }
    const titleEl = document.getElementById('categoryTitle');
    const descEl = document.getElementById('categoryDesc');
    const breadcrumbEl = document.getElementById('breadcrumbCategory');
    if (titleEl) titleEl.innerHTML = `<i class="fas ${catData.icon}"></i> ${catData.name}`;
    if (descEl) descEl.textContent = catData.desc;
    if (breadcrumbEl) breadcrumbEl.textContent = catData.name;
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.dataset.category === currentCategory) item.classList.add('active');
        else item.classList.remove('active');
    });
    renderSubCategories(catData.subCategories);
    renderCategoryProducts();
    window.history.pushState({ category: currentCategory }, '', `category.html?cat=${currentCategory}`);
}

function renderSubCategories(subCats) {
    const grid = document.getElementById('subCategoriesGrid');
    if (!grid) return;
    const allSubCats = [{ id: 'all', name: 'الكل', icon: 'fa-th-large', count: subCats.reduce((sum, s) => sum + s.count, 0) }, ...subCats];
    grid.innerHTML = allSubCats.map(sub => `<div class="sub-category-card ${sub.id === currentSubCategory ? 'active' : ''}" data-sub-id="${sub.id}" onclick="selectSubCategory('${sub.id}')"><div class="sub-cat-icon"><i class="fas ${sub.icon}"></i></div><h4>${sub.name}</h4><span>${sub.count} منتج</span></div>`).join('');
}

function selectSubCategory(subId) {
    currentSubCategory = subId;
    document.querySelectorAll('.sub-category-card').forEach(card => { card.classList.toggle('active', card.dataset.subId === subId); });
    const catData = categoryData[currentCategory];
    const subCat = catData.subCategories.find(s => s.id === subId);
    const titleEl = document.getElementById('productsSectionTitle');
    if (titleEl) titleEl.innerHTML = (subId === 'all') ? '<i class="fas fa-sparkles"></i> منتجات عشوائية' : `<i class="fas fa-tag"></i> ${subCat ? subCat.name : ''}`;
    renderCategoryProducts();
}

function renderCategoryProducts() {
    const grid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    if (!grid) return;
    let filtered = products.filter(p => p.category === currentCategory);
    if (searchQueryCategory) {
        const lower = searchQueryCategory.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(lower) || p.categoryName.toLowerCase().includes(lower));
    }
    if (currentSubCategory !== 'all') filtered = shuffleArray([...filtered]);
    switch(currentSort) {
        case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
        case 'newest': filtered.sort((a, b) => b.id - a.id); break;
        case 'popular': filtered.sort((a, b) => (b.reviews || 0) - (a.reviews || 0)); break;
        default: filtered = shuffleArray([...filtered]);
    }
    if (filtered.length === 0) { grid.innerHTML = ''; if (noProducts) noProducts.style.display = 'block'; return; }
    if (noProducts) noProducts.style.display = 'none';
    grid.innerHTML = filtered.map((product, index) => `
        <div class="product-card" style="animation: fadeInUp 0.5s ease ${index * 0.05}s forwards; opacity:0">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <i class="fas fa-image" style="display:none"></i>
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
    if (searchQueryCategory && filtered.length > 0) {
        const firstProduct = document.querySelector('.product-card');
        if (firstProduct) firstProduct.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Search Suggestions for Category
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
                    const matches = products.filter(p => p.category === currentCategory && (p.name.toLowerCase().includes(lowerQuery) || p.categoryName.toLowerCase().includes(lowerQuery))).slice(0, 5);
                    if (matches.length > 0) {
                        catSearchSuggestions.innerHTML = matches.map(p => `<div class="suggestion-item" onclick="window.selectCatSuggestionAndScroll('${p.name.replace(/'/g, "\\'")}')"><i class="fas fa-search"></i><span class="suggestion-name">${p.name}</span></div>`).join('');
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

// Navigation Setup
function setupNavLinks() {
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.includes('category.html')) {
                e.preventDefault();
                const catParam = new URLSearchParams(href.split('?')[1]).get('cat');
                if (catParam && categoryData[catParam]) {
                    loadCategory(catParam);
                } else {
                    window.location.href = href;
                }
            }
        });
    });
    window.addEventListener('popstate', (event) => {
        const cat = getUrlParam('cat');
        if (cat && categoryData[cat]) loadCategory(cat);
        else window.location.href = 'index.html';
    });
}

// Initialize
function initCategoryPage() {
    let cat = getUrlParam('cat');
    if (!cat || !categoryData[cat]) cat = 'fashion';
    loadCategory(cat);
}

// DOM Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initCatSearch();
    loadCartFromLocal();
    initCategoryPage();
    setupNavLinks();
    updateCartUI();
    document.getElementById('cartBtn')?.addEventListener('click', openCart);
    document.getElementById('bottomCartBtn')?.addEventListener('click', openCart);
    document.getElementById('closeCart')?.addEventListener('click', closeCartFn);
    document.getElementById('cartOverlay')?.addEventListener('click', closeCartFn);
    document.getElementById('checkoutBtn')?.addEventListener('click', openOrderModal);
    document.getElementById('closeModal')?.addEventListener('click', closeOrderModal);
    document.getElementById('modalOverlay')?.addEventListener('click', closeOrderModal);
    document.getElementById('successBtn')?.addEventListener('click', closeSuccessModal);
    document.getElementById('closeQuickView')?.addEventListener('click', closeQuickView);
    document.getElementById('quickViewModal')?.addEventListener('click', (e) => { if (e.target === document.getElementById('quickViewModal')) closeQuickView(); });
    document.getElementById('sortSelect')?.addEventListener('change', (e) => { currentSort = e.target.value; renderCategoryProducts(); });
    document.getElementById('bottomContactBtn')?.addEventListener('click', openContactModal);
    document.getElementById('closeContactModal')?.addEventListener('click', closeContactModalFn);
    document.getElementById('contactModalOverlay')?.addEventListener('click', closeContactModalFn);
    document.getElementById('orderForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('fullName')?.value.trim() || '';
        const phone = document.getElementById('phone')?.value.trim() || '';
        const city = document.getElementById('city')?.value || '';
        const address = document.getElementById('address')?.value.trim() || '';
        if (!fullName || !phone || !city || !address) { showToast('⚠️ يرجى ملء جميع الحقول المطلوبة'); return; }
        if (!/^05\d{8}$/.test(phone)) { showToast('⚠️ رقم الهاتف يجب أن يبدأ بـ 05 ويتكون من 10 أرقام'); return; }
        showSuccessModal();
        document.getElementById('orderForm')?.reset();
    });
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeCartFn(); closeOrderModal(); closeQuickView(); const successModalElem = document.getElementById('successModal'); if (successModalElem && successModalElem.classList.contains('active')) closeSuccessModal(); closeContactModalFn(); } });