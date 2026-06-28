// ============================================
// A/L Geography Recording Center - JavaScript
// ============================================

// Data
const lessonsData = {
    2026: [
        { id: 1, title: "Introduction to Physical Geography", category: "physical", teacher: "Prof. Silva", duration: "45:00", date: "2026-01-15", isNew: false, batch: "2026" },
        { id: 2, title: "Earth's Structure and Composition", category: "physical", teacher: "Prof. Silva", duration: "52:00", date: "2026-01-18", isNew: false, batch: "2026" },
        { id: 3, title: "Plate Tectonics and Continental Drift", category: "physical", teacher: "Prof. Fernando", duration: "48:00", date: "2026-01-22", isNew: false, batch: "2026" },
        { id: 4, title: "Volcanoes and Earthquakes", category: "physical", teacher: "Prof. Fernando", duration: "55:00", date: "2026-01-25", isNew: false, batch: "2026" },
        { id: 5, title: "Weathering and Erosion Processes", category: "physical", teacher: "Prof. Silva", duration: "42:00", date: "2026-01-29", isNew: false, batch: "2026" },
        { id: 6, title: "Rivers and Drainage Systems", category: "physical", teacher: "Prof. Silva", duration: "50:00", date: "2026-02-01", isNew: false, batch: "2026" },
        { id: 7, title: "Coastal Landforms and Processes", category: "physical", teacher: "Prof. Fernando", duration: "47:00", date: "2026-02-05", isNew: false, batch: "2026" },
        { id: 8, title: "Climate Classification Systems", category: "physical", teacher: "Prof. Perera", duration: "60:00", date: "2026-02-08", isNew: false, batch: "2026" },
        { id: 9, title: "Population Dynamics and Growth", category: "human", teacher: "Prof. Perera", duration: "45:00", date: "2026-02-12", isNew: false, batch: "2026" },
        { id: 10, title: "Migration Patterns and Theories", category: "human", teacher: "Prof. Perera", duration: "50:00", date: "2026-02-15", isNew: false, batch: "2026" },
        { id: 11, title: "Urbanization and City Planning", category: "human", teacher: "Prof. Perera", duration: "55:00", date: "2026-02-19", isNew: false, batch: "2026" },
        { id: 12, title: "Agricultural Systems and Land Use", category: "human", teacher: "Prof. Silva", duration: "48:00", date: "2026-02-22", isNew: false, batch: "2026" },
        { id: 13, title: "Map Reading Fundamentals", category: "map", teacher: "Prof. Fernando", duration: "40:00", date: "2026-02-26", isNew: false, batch: "2026" },
        { id: 14, title: "Contour Lines and Relief Interpretation", category: "map", teacher: "Prof. Fernando", duration: "45:00", date: "2026-03-01", isNew: false, batch: "2026" },
        { id: 15, title: "Practical Geography: Field Work", category: "practical", teacher: "Prof. Silva", duration: "65:00", date: "2026-03-05", isNew: false, batch: "2026" },
        { id: 16, title: "Climate Change and Global Warming", category: "revision", teacher: "Prof. Perera", duration: "58:00", date: "2026-03-08", isNew: true, batch: "2026" },
        { id: 17, title: "Sustainable Development Goals", category: "human", teacher: "Prof. Perera", duration: "52:00", date: "2026-03-12", isNew: true, batch: "2026" },
    ],
    2027: [
        { id: 101, title: "Introduction to Geography", category: "physical", teacher: "Prof. Silva", duration: "40:00", date: "2026-06-01", isNew: false, batch: "2027" },
        { id: 102, title: "The Solar System and Earth", category: "physical", teacher: "Prof. Silva", duration: "45:00", date: "2026-06-05", isNew: false, batch: "2027" },
        { id: 103, title: "Rocks and Minerals", category: "physical", teacher: "Prof. Fernando", duration: "50:00", date: "2026-06-08", isNew: false, batch: "2027" },
        { id: 104, title: "Mountain Building Processes", category: "physical", teacher: "Prof. Fernando", duration: "48:00", date: "2026-06-12", isNew: false, batch: "2027" },
        { id: 105, title: "Glaciation and Glacial Landforms", category: "physical", teacher: "Prof. Silva", duration: "55:00", date: "2026-06-15", isNew: false, batch: "2027" },
        { id: 106, title: "Atmospheric Circulation Patterns", category: "physical", teacher: "Prof. Perera", duration: "52:00", date: "2026-06-19", isNew: false, batch: "2027" },
        { id: 107, title: "Monsoon Systems in South Asia", category: "physical", teacher: "Prof. Perera", duration: "50:00", date: "2026-06-22", isNew: false, batch: "2027" },
        { id: 108, title: "Population Distribution and Density", category: "human", teacher: "Prof. Perera", duration: "45:00", date: "2026-06-26", isNew: false, batch: "2027" },
        { id: 109, title: "Settlement Patterns and Types", category: "human", teacher: "Prof. Perera", duration: "48:00", date: "2026-06-29", isNew: false, batch: "2027" },
        { id: 110, title: "Industrial Location and Development", category: "human", teacher: "Prof. Silva", duration: "55:00", date: "2026-07-03", isNew: false, batch: "2027" },
        { id: 111, title: "Transportation and Communication", category: "human", teacher: "Prof. Silva", duration: "50:00", date: "2026-07-06", isNew: false, batch: "2027" },
        { id: 112, title: "Topographic Map Reading", category: "map", teacher: "Prof. Fernando", duration: "45:00", date: "2026-07-10", isNew: false, batch: "2027" },
        { id: 113, title: "Scale and Distance Calculation", category: "map", teacher: "Prof. Fernando", duration: "42:00", date: "2026-07-13", isNew: false, batch: "2027" },
        { id: 114, title: "Geographic Information Systems", category: "practical", teacher: "Prof. Fernando", duration: "60:00", date: "2026-07-17", isNew: false, batch: "2027" },
        { id: 115, title: "Environmental Conservation", category: "revision", teacher: "Prof. Perera", duration: "55:00", date: "2026-07-20", isNew: true, batch: "2027" },
        { id: 116, title: "Natural Resource Management", category: "human", teacher: "Prof. Silva", duration: "50:00", date: "2026-07-24", isNew: true, batch: "2027" },
        { id: 117, title: "Disaster Management and Preparedness", category: "practical", teacher: "Prof. Fernando", duration: "58:00", date: "2026-07-27", isNew: true, batch: "2027" },
    ],
    2028: [
        { id: 201, title: "What is Geography?", category: "physical", teacher: "Prof. Silva", duration: "35:00", date: "2026-09-01", isNew: false, batch: "2028" },
        { id: 202, title: "Earth's Rotation and Revolution", category: "physical", teacher: "Prof. Silva", duration: "40:00", date: "2026-09-05", isNew: false, batch: "2028" },
        { id: 203, title: "Latitude and Longitude", category: "map", teacher: "Prof. Fernando", duration: "38:00", date: "2026-09-08", isNew: false, batch: "2028" },
        { id: 204, title: "Time Zones and International Date Line", category: "map", teacher: "Prof. Fernando", duration: "42:00", date: "2026-09-12", isNew: false, batch: "2028" },
        { id: 205, title: "Types of Maps and Their Uses", category: "map", teacher: "Prof. Fernando", duration: "45:00", date: "2026-09-15", isNew: false, batch: "2028" },
        { id: 206, title: "The Atmosphere and Weather", category: "physical", teacher: "Prof. Perera", duration: "48:00", date: "2026-09-19", isNew: false, batch: "2028" },
        { id: 207, title: "Cloud Formation and Precipitation", category: "physical", teacher: "Prof. Perera", duration: "50:00", date: "2026-09-22", isNew: false, batch: "2028" },
        { id: 208, title: "Cyclones and Anticyclones", category: "physical", teacher: "Prof. Perera", duration: "52:00", date: "2026-09-26", isNew: false, batch: "2028" },
        { id: 209, title: "World Population Trends", category: "human", teacher: "Prof. Perera", duration: "45:00", date: "2026-09-29", isNew: false, batch: "2028" },
        { id: 210, title: "Demographic Transition Model", category: "human", teacher: "Prof. Perera", duration: "48:00", date: "2026-10-03", isNew: false, batch: "2028" },
        { id: 211, title: "Rural and Urban Settlements", category: "human", teacher: "Prof. Silva", duration: "50:00", date: "2026-10-06", isNew: false, batch: "2028" },
        { id: 212, title: "Economic Activities: Primary Sector", category: "human", teacher: "Prof. Silva", duration: "55:00", date: "2026-10-10", isNew: false, batch: "2028" },
        { id: 213, title: "Compass and Bearing", category: "map", teacher: "Prof. Fernando", duration: "40:00", date: "2026-10-13", isNew: false, batch: "2028" },
        { id: 214, title: "Cross Section Drawing", category: "practical", teacher: "Prof. Fernando", duration: "45:00", date: "2026-10-17", isNew: false, batch: "2028" },
        { id: 215, title: "Introduction to Remote Sensing", category: "practical", teacher: "Prof. Fernando", duration: "50:00", date: "2026-10-20", isNew: true, batch: "2028" },
    ]
};

const notesData = [
    { title: "Physical Geography Complete Notes", batch: "2026", size: "2.4 MB", pages: 45 },
    { title: "Human Geography Summary", batch: "2026", size: "1.8 MB", pages: 32 },
    { title: "Map Reading Techniques Guide", batch: "2026", size: "3.1 MB", pages: 28 },
    { title: "Past Paper Solutions 2020-2025", batch: "2026", size: "5.2 MB", pages: 120 },
    { title: "Physical Geography Notes", batch: "2027", size: "2.1 MB", pages: 40 },
    { title: "Human Geography Notes", batch: "2027", size: "1.9 MB", pages: 35 },
    { title: "Practical Geography Workbook", batch: "2027", size: "4.5 MB", pages: 60 },
    { title: "Revision Questions and Answers", batch: "2027", size: "2.8 MB", pages: 55 },
    { title: "Introduction to Geography Notes", batch: "2028", size: "1.5 MB", pages: 25 },
    { title: "Map Skills Practice Book", batch: "2028", size: "3.2 MB", pages: 42 },
    { title: "Climate and Weather Notes", batch: "2028", size: "2.0 MB", pages: 30 },
    { title: "Population Studies Guide", batch: "2028", size: "1.7 MB", pages: 28 },
];

const reviewsData = [
    { name: "Kavindu Perera", batch: "A/L 2026", text: "This platform has completely transformed how I study geography. The recordings are crystal clear and the notes are incredibly helpful. I feel much more confident about my exams now!", rating: 5 },
    { name: "Dilini Fernando", batch: "A/L 2027", text: "The best geography resource I've found online. The teachers explain complex topics so simply. The search feature makes it easy to find exactly what I need. Highly recommended!", rating: 5 },
    { name: "Sachithra Silva", batch: "A/L 2026", text: "Being able to watch lessons anytime has been a game-changer for my study schedule. The batch system keeps everything organized perfectly. Thank you for this amazing platform!", rating: 5 },
    { name: "Nethmi Jayawardena", batch: "A/L 2028", text: "As a 2028 student, having access to all these resources early gives me a huge advantage. The practical geography lessons are especially well done with great visual explanations.", rating: 5 },
    { name: "Ravindu Bandara", batch: "A/L 2027", text: "The dark mode is a nice touch for late-night study sessions. The video quality is excellent and I love the favorite feature to bookmark important lessons. Great work!", rating: 5 },
];

const faqData = [
    { question: "How do I watch the recordings?", answer: "Simply click on any lesson card and select 'Watch Recording'. You can also use the search bar to find specific topics. All videos are streamed in high quality and can be accessed 24/7 from any device." },
    { question: "Can I download the notes?", answer: "Yes! All study notes are available for download in PDF format. Click the 'Download Notes' button on any lesson card or visit the Notes section to browse all available materials." },
    { question: "Are new lessons added every week?", answer: "Absolutely! We upload new lessons every week, typically on Sundays and Wednesdays. Make sure to enable notifications to get alerts when new content is available." },
    { question: "Is this platform free to use?", answer: "The platform offers both free and premium content. Basic access to selected lessons and notes is free, while full access to all recordings requires a subscription." },
    { question: "Can I access lessons from other batches?", answer: "Yes, you can browse and watch lessons from any batch. This is especially useful for revision or if you want to get ahead by studying future topics." },
    { question: "How do I contact the teachers?", answer: "You can use the contact form on our website or reach out via WhatsApp. We also conduct live Q&A sessions every weekend where you can ask questions directly." },
    { question: "Do you provide past paper solutions?", answer: "Yes, we have a comprehensive collection of past paper solutions from 2015 to 2025, organized by topic and year. These are available in the Notes section." },
    { question: "Is there a mobile app available?", answer: "Currently, our website is fully responsive and works perfectly on mobile devices. We are also developing a dedicated mobile app which will be released soon." },
];

// State
let currentBatch = '2026';
let currentFilter = 'all';
let favorites = JSON.parse(localStorage.getItem('geoFavorites') || '[]');
let darkMode = localStorage.getItem('geoDarkMode') === 'true';

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const mobileToggle = document.getElementById('mobileToggle');
const darkModeToggle = document.getElementById('darkModeToggle');
const backToTop = document.getElementById('backToTop');
const notificationBell = document.getElementById('notificationBell');
const notificationPanel = document.getElementById('notificationPanel');
const closeNotifications = document.getElementById('closeNotifications');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const lessonsGrid = document.getElementById('lessonsGrid');
const noResults = document.getElementById('noResults');
const latestGrid = document.getElementById('latestGrid');
const notesGrid = document.getElementById('notesGrid');
const reviewsTrack = document.getElementById('reviewsTrack');
const reviewsDots = document.getElementById('reviewsDots');
const faqGrid = document.getElementById('faqGrid');
const videoModal = document.getElementById('videoModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const particlesContainer = document.getElementById('particles');

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initDarkMode();
    initParticles();
    initNavbar();
    initMobileMenu();
    initNotifications();
    initSearch();
    initFilters();
    initBatchTabs();
    renderLessons();
    renderLatestUploads();
    renderNotes();
    renderReviews();
    renderFAQ();
    initVideoModal();
    initContactForm();
    initBackToTop();
    initScrollAnimations();
    initStatsCounter();
    initReviewSlider();
});

// Loading Screen
function initLoadingScreen() {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2500);
}

// Particles
function initParticles() {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// DARK MODE
// ============================================
function initDarkMode() {
    if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    darkModeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        localStorage.setItem('geoDarkMode', darkMode);
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.documentElement.removeAttribute('data-theme');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });
}

// ============================================
// NOTIFICATIONS
// ============================================
function initNotifications() {
    notificationBell.addEventListener('click', () => {
        notificationBell.classList.add('active');
        notificationPanel.classList.toggle('open');
        setTimeout(() => notificationBell.classList.remove('active'), 500);
    });

    closeNotifications.addEventListener('click', () => {
        notificationPanel.classList.remove('open');
    });

    document.addEventListener('click', (e) => {
        if (!notificationPanel.contains(e.target) && !notificationBell.contains(e.target)) {
            notificationPanel.classList.remove('open');
        }
    });
}

// ============================================
// SEARCH
// ============================================
function initSearch() {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchClear.classList.toggle('visible', query.length > 0);
        filterLessons();
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchClear.classList.remove('visible');
        filterLessons();
    });
}

// ============================================
// FILTERS
// ============================================
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            filterLessons();
        });
    });
}

// ============================================
// BATCH TABS
// ============================================
function initBatchTabs() {
    document.querySelectorAll('.batch-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.batch-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentBatch = tab.dataset.batchTab;
            filterLessons();
        });
    });
}

// ============================================
// LESSONS RENDERING & FILTERING
// ============================================
function renderLessons() {
    filterLessons();
}

function filterLessons() {
    const query = searchInput.value.toLowerCase().trim();
    const lessons = lessonsData[currentBatch] || [];
    let filtered = lessons;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(l => l.category === currentFilter);
    }

    if (query) {
        filtered = filtered.filter(l => 
            l.title.toLowerCase().includes(query) || 
            l.category.toLowerCase().includes(query) ||
            l.teacher.toLowerCase().includes(query)
        );
    }

    lessonsGrid.innerHTML = '';

    if (filtered.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        filtered.forEach((lesson, index) => {
            const card = createLessonCard(lesson, index);
            lessonsGrid.appendChild(card);
        });
    }
}

function createLessonCard(lesson, index) {
    const card = document.createElement('div');
    card.className = 'lesson-card animate-on-scroll';
    card.style.animationDelay = (index * 0.05) + 's';

    const isFav = favorites.includes(lesson.id);
    const categoryLabels = {
        physical: 'Physical Geography',
        human: 'Human Geography',
        practical: 'Practical Geography',
        map: 'Map Reading',
        revision: 'Revision'
    };

    card.innerHTML = `
        <div class="lesson-thumbnail">
            <i class="fas fa-globe-asia"></i>
            <div class="lesson-play-btn" onclick="openVideoModal(${lesson.id})">
                <i class="fas fa-play"></i>
            </div>
            <span class="lesson-badge ${lesson.category}">${categoryLabels[lesson.category]}</span>
            ${lesson.isNew ? '<span class="lesson-badge new">New</span>' : ''}
            <button class="lesson-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${lesson.id})">
                <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
            </button>
        </div>
        <div class="lesson-info">
            <div class="lesson-number">Lesson ${String(lesson.id).slice(-2).padStart(2, '0')}</div>
            <h3 class="lesson-title">${lesson.title}</h3>
            <div class="lesson-meta">
                <span><i class="fas fa-chalkboard-teacher"></i> ${lesson.teacher}</span>
                <span><i class="fas fa-clock"></i> ${lesson.duration}</span>
                <span><i class="fas fa-calendar"></i> ${lesson.date}</span>
            </div>
            <div class="lesson-actions">
                <button class="btn btn-primary" onclick="openVideoModal(${lesson.id})">
                    <i class="fas fa-play"></i> Watch
                </button>
                <button class="btn btn-secondary" onclick="downloadNotes('${lesson.title}')">
                    <i class="fas fa-download"></i> Notes
                </button>
            </div>
        </div>
    `;

    return card;
}

function toggleFavorite(event, id) {
    event.stopPropagation();
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('geoFavorites', JSON.stringify(favorites));
    filterLessons();
}

function selectBatch(batch) {
    currentBatch = batch;
    document.querySelectorAll('.batch-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.batchTab === batch);
    });
    document.getElementById('recordings').scrollIntoView({ behavior: 'smooth' });
    filterLessons();
}

// ============================================
// LATEST UPLOADS
// ============================================
function renderLatestUploads() {
    const allLessons = [...lessonsData[2026], ...lessonsData[2027], ...lessonsData[2028]];
    const latest = allLessons.filter(l => l.isNew).slice(0, 6);

    latestGrid.innerHTML = '';
    latest.forEach((lesson, index) => {
        const card = document.createElement('div');
        card.className = 'latest-card animate-on-scroll';
        card.style.animationDelay = (index * 0.1) + 's';
        card.innerHTML = `
            <div class="latest-icon"><i class="fas fa-video"></i></div>
            <div class="latest-info">
                <h4>${lesson.title}</h4>
                <p>${lesson.teacher} | ${lesson.duration}</p>
                <div class="latest-time"><i class="fas fa-clock"></i> ${lesson.date}</div>
            </div>
            <span class="latest-badge">New</span>
        `;
        card.addEventListener('click', () => openVideoModal(lesson.id));
        latestGrid.appendChild(card);
    });
}

// ============================================
// NOTES
// ============================================
function renderNotes() {
    notesGrid.innerHTML = '';
    notesData.forEach((note, index) => {
        const card = document.createElement('div');
        card.className = 'note-card animate-on-scroll';
        card.style.animationDelay = (index * 0.05) + 's';
        card.innerHTML = `
            <div class="note-icon"><i class="fas fa-file-pdf"></i></div>
            <div class="note-info">
                <h4>${note.title}</h4>
                <p>${note.batch} Batch | ${note.pages} pages | ${note.size}</p>
            </div>
            <button class="note-download" onclick="downloadNotes('${note.title}')">
                <i class="fas fa-download"></i>
            </button>
        `;
        notesGrid.appendChild(card);
    });
}

function downloadNotes(title) {
    showToast(`Downloading notes: ${title}`);
}

// ============================================
// REVIEWS
// ============================================
function renderReviews() {
    reviewsTrack.innerHTML = '';
    reviewsDots.innerHTML = '';

    reviewsData.forEach((review, index) => {
        const card = document.createElement('div');
        card.className = 'review-card';
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        card.innerHTML = `
            <div class="review-content">
                <div class="review-stars">${stars}</div>
                <p class="review-text">"${review.text}"</p>
                <div class="review-author">
                    <div class="review-avatar">${review.name.charAt(0)}</div>
                    <div class="review-name">
                        <h4>${review.name}</h4>
                        <span>${review.batch}</span>
                    </div>
                </div>
            </div>
        `;
        reviewsTrack.appendChild(card);

        const dot = document.createElement('button');
        dot.className = 'review-dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToReview(index));
        reviewsDots.appendChild(dot);
    });
}

let currentReview = 0;
let reviewInterval;

function initReviewSlider() {
    startReviewAutoSlide();
    reviewsSlider.addEventListener('mouseenter', stopReviewAutoSlide);
    reviewsSlider.addEventListener('mouseleave', startReviewAutoSlide);
}

const reviewsSlider = document.getElementById('reviewsSlider');

function startReviewAutoSlide() {
    reviewInterval = setInterval(() => {
        currentReview = (currentReview + 1) % reviewsData.length;
        goToReview(currentReview);
    }, 5000);
}

function stopReviewAutoSlide() {
    clearInterval(reviewInterval);
}

function goToReview(index) {
    currentReview = index;
    reviewsTrack.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.review-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// ============================================
// FAQ
// ============================================
function renderFAQ() {
    faqGrid.innerHTML = '';
    faqData.forEach((faq, index) => {
        const item = document.createElement('div');
        item.className = 'faq-item animate-on-scroll';
        item.style.animationDelay = (index * 0.05) + 's';
        item.innerHTML = `
            <div class="faq-question" onclick="toggleFAQ(this)">
                <h3>${faq.question}</h3>
                <div class="faq-icon"><i class="fas fa-chevron-down"></i></div>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        `;
        faqGrid.appendChild(item);
    });
}

function toggleFAQ(element) {
    const item = element.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) {
        item.classList.add('active');
    }
}

// ============================================
// VIDEO MODAL
// ============================================
function initVideoModal() {
    modalOverlay.addEventListener('click', closeVideoModal);
    modalClose.addEventListener('click', closeVideoModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeVideoModal();
    });
}

function openVideoModal(lessonId) {
    let lesson = null;
    Object.values(lessonsData).forEach(batch => {
        const found = batch.find(l => l.id === lessonId);
        if (found) lesson = found;
    });

    if (!lesson) return;

    document.getElementById('modalTitle').textContent = lesson.title;
    document.getElementById('modalTeacher').innerHTML = `<i class="fas fa-chalkboard-teacher"></i> ${lesson.teacher}`;
    document.getElementById('modalDuration').innerHTML = `<i class="fas fa-clock"></i> ${lesson.duration}`;
    document.getElementById('modalDate').innerHTML = `<i class="fas fa-calendar"></i> ${lesson.date}`;
    document.getElementById('modalDesc').textContent = `This lesson covers ${lesson.title.toLowerCase()} in detail. Perfect for ${lesson.batch} A/L students preparing for their examinations.`;

    const favBtn = document.getElementById('modalFavorite');
    const isFav = favorites.includes(lessonId);
    favBtn.classList.toggle('active', isFav);
    favBtn.innerHTML = `<i class="${isFav ? 'fas' : 'far'} fa-heart"></i> ${isFav ? 'Remove from Favorites' : 'Add to Favorites'}`;
    favBtn.onclick = () => {
        toggleFavorite({ stopPropagation: () => {} }, lessonId);
        const newFav = favorites.includes(lessonId);
        favBtn.classList.toggle('active', newFav);
        favBtn.innerHTML = `<i class="${newFav ? 'fas' : 'far'} fa-heart"></i> ${newFav ? 'Remove from Favorites' : 'Add to Favorites'}`;
    };

    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    videoModal.classList.remove('open');
    document.body.style.overflow = '';
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Reset errors
        document.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));
        document.querySelectorAll('.form-error').forEach(e => e.textContent = '');

        if (name.value.trim().length < 3) {
            showFieldError('name', 'Name must be at least 3 characters');
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }

        if (message.value.trim().length < 10) {
            showFieldError('message', 'Message must be at least 10 characters');
            isValid = false;
        }

        if (isValid) {
            showToast('Message sent successfully! We will get back to you soon.');
            contactForm.reset();
        }
    });
}

function showFieldError(fieldId, message) {
    const group = document.getElementById(fieldId).closest('.form-group');
    group.classList.add('error');
    group.querySelector('.form-error').textContent = message;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================
// BACK TO TOP
// ============================================
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ============================================
// STATS COUNTER
// ============================================
function initStatsCounter() {
    const statsSection = document.getElementById('stats');
    let counted = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counted) {
                counted = true;
                document.querySelectorAll('.stat-number').forEach(stat => {
                    const target = parseInt(stat.dataset.target);
                    animateCounter(stat, target);
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: var(--gray-900);
        color: var(--white);
        padding: 14px 28px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 9999;
        opacity: 0;
        transition: all 0.3s ease;
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
