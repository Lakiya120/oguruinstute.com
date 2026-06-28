// ============================================
// A/L Geography Recording Center - Login Script
// ============================================

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const particlesContainer = document.getElementById('particles');
const formTabs = document.querySelectorAll('.form-tab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotForm = document.getElementById('forgotForm');
const successMessage = document.getElementById('successMessage');

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initParticles();
    initFormTabs();
    initPasswordToggles();
    initPasswordStrength();
    initLoginForm();
    initRegisterForm();
    initForgotForm();
});

// Loading Screen
function initLoadingScreen() {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2500);
}

// Particles
function initParticles() {
    for (let i = 0; i < 25; i++) {
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
// FORM TABS
// ============================================
function initFormTabs() {
    formTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            // Update tab states
            formTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show corresponding form
            document.querySelectorAll('.auth-form').forEach(form => {
                form.classList.remove('active');
            });

            if (targetTab === 'login') {
                loginForm.classList.add('active');
            } else if (targetTab === 'register') {
                registerForm.classList.add('active');
            }

            // Hide success message
            successMessage.classList.remove('show');

            // Reset forgot form
            forgotForm.classList.remove('active');
        });
    });
}

function showForgotPassword(event) {
    event.preventDefault();
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    forgotForm.classList.add('active');
}

function showLoginForm(event) {
    if (event) event.preventDefault();
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    loginForm.classList.add('active');

    // Reset tabs
    formTabs.forEach(t => t.classList.remove('active'));
    document.querySelector('[data-tab="login"]').classList.add('active');
}

// ============================================
// PASSWORD TOGGLE
// ============================================
function initPasswordToggles() {
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            const icon = btn.querySelector('i');

            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
}

// ============================================
// PASSWORD STRENGTH
// ============================================
function initPasswordStrength() {
    const passwordInput = document.getElementById('regPassword');
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');

    if (!passwordInput) return;

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        let strength = 0;

        if (password.length >= 6) strength++;
        if (password.length >= 10) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        strengthFill.className = 'strength-fill';

        if (password.length === 0) {
            strengthFill.style.width = '0%';
            strengthText.textContent = 'මුරපදයේ ශක්තිය';
            strengthText.style.color = 'var(--gray-400)';
        } else if (strength <= 2) {
            strengthFill.classList.add('weak');
            strengthText.textContent = 'දුර්වල මුරපදයක්';
            strengthText.style.color = '#ef4444';
        } else if (strength <= 4) {
            strengthFill.classList.add('medium');
            strengthText.textContent = 'මධ්‍යම මුරපදයක්';
            strengthText.style.color = 'var(--accent)';
        } else {
            strengthFill.classList.add('strong');
            strengthText.textContent = 'බලවත් මුරපදයක්';
            strengthText.style.color = 'var(--secondary)';
        }
    });
}

// ============================================
// LOGIN FORM
// ============================================
function initLoginForm() {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Reset errors
        clearErrors();

        const email = document.getElementById('loginEmail');
        const password = document.getElementById('loginPassword');
        let isValid = true;

        // Validate email
        if (!email.value.trim()) {
            showError('loginEmail', 'ඊමේල් ලිපිනය අවශ්‍යයි');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError('loginEmail', 'වලංගු ඊමේල් ලිපිනයක් ඇතුළත් කරන්න');
            isValid = false;
        }

        // Validate password
        if (!password.value.trim()) {
            showError('loginPassword', 'මුරපදය අවශ්‍යයි');
            isValid = false;
        } else if (password.value.length < 6) {
            showError('loginPassword', 'මුරපදය අවම වශයෙන් අකුරු 6ක් විය යුතුය');
            isValid = false;
        }

        if (!isValid) return;

        // Show loading
        const submitBtn = loginForm.querySelector('.btn-submit');
        submitBtn.classList.add('loading');

        // Simulate API call
        await simulateApiCall();

        submitBtn.classList.remove('loading');

        // Show success
        showSuccess('ඇතුළත් වීම සාර්ථකයි! ප්‍රධාන පිටුවට යොමු වෙමින්...');

        // Save remember me
        const rememberMe = document.getElementById('rememberMe');
        if (rememberMe.checked) {
            localStorage.setItem('geoRememberEmail', email.value);
        } else {
            localStorage.removeItem('geoRememberEmail');
        }

        // Redirect after delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });

    // Pre-fill remembered email
    const rememberedEmail = localStorage.getItem('geoRememberEmail');
    if (rememberedEmail) {
        document.getElementById('loginEmail').value = rememberedEmail;
        document.getElementById('rememberMe').checked = true;
    }
}

// ============================================
// REGISTER FORM
// ============================================
function initRegisterForm() {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        clearErrors();

        const firstName = document.getElementById('regFirstName');
        const lastName = document.getElementById('regLastName');
        const email = document.getElementById('regEmail');
        const phone = document.getElementById('regPhone');
        const batch = document.getElementById('regBatch');
        const password = document.getElementById('regPassword');
        const confirmPassword = document.getElementById('regConfirmPassword');
        const terms = document.getElementById('termsCheck');

        let isValid = true;

        // Validate first name
        if (!firstName.value.trim()) {
            showError('regFirstName', 'මුල් නම අවශ්‍යයි');
            isValid = false;
        } else if (firstName.value.trim().length < 2) {
            showError('regFirstName', 'නම අවම වශයෙන් අකුරු 2ක් විය යුතුය');
            isValid = false;
        }

        // Validate last name
        if (!lastName.value.trim()) {
            showError('regLastName', 'අවසාන නම අවශ්‍යයි');
            isValid = false;
        }

        // Validate email
        if (!email.value.trim()) {
            showError('regEmail', 'ඊමේල් ලිපිනය අවශ්‍යයි');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError('regEmail', 'වලංගු ඊමේල් ලිපිනයක් ඇතුළත් කරන්න');
            isValid = false;
        }

        // Validate phone
        if (!phone.value.trim()) {
            showError('regPhone', 'දුරකථන අංකය අවශ්‍යයි');
            isValid = false;
        } else if (!validatePhone(phone.value)) {
            showError('regPhone', 'වලංගු ශ්‍රී ලංකා දුරකථන අංකයක් ඇතුළත් කරන්න');
            isValid = false;
        }

        // Validate batch
        if (!batch.value) {
            showError('regBatch', 'A/L බැච් එක තෝරන්න');
            isValid = false;
        }

        // Validate password
        if (!password.value) {
            showError('regPassword', 'මුරපදය අවශ්‍යයි');
            isValid = false;
        } else if (password.value.length < 6) {
            showError('regPassword', 'මුරපදය අවම වශයෙන් අකුරු 6ක් විය යුතුය');
            isValid = false;
        }

        // Validate confirm password
        if (!confirmPassword.value) {
            showError('regConfirmPassword', 'මුරපදය තහවුරු කරන්න');
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError('regConfirmPassword', 'මුරපදයන් ගැළපෙන්නේ නැත');
            isValid = false;
        }

        // Validate terms
        if (!terms.checked) {
            showToast('කරුණාකර සේවා කොන්දේසිවලට එකඟ වන්න');
            isValid = false;
        }

        if (!isValid) return;

        // Show loading
        const submitBtn = registerForm.querySelector('.btn-submit');
        submitBtn.classList.add('loading');

        // Simulate API call
        await simulateApiCall();

        submitBtn.classList.remove('loading');

        // Show success
        showSuccess('ලියාපදිංචි වීම සාර්ථකයි! ඔබගේ ගිණුම සාදන ලදී.');

        // Save user data
        const userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            batch: batch.value,
            school: document.getElementById('regSchool').value
        };
        localStorage.setItem('geoUserData', JSON.stringify(userData));

        // Redirect after delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2500);
    });
}

// ============================================
// FORGOT PASSWORD FORM
// ============================================
function initForgotForm() {
    forgotForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        clearErrors();

        const email = document.getElementById('forgotEmail');

        if (!email.value.trim()) {
            showError('forgotEmail', 'ඊමේල් ලිපිනය අවශ්‍යයි');
            return;
        } else if (!validateEmail(email.value)) {
            showError('forgotEmail', 'වලංගු ඊමේල් ලිපිනයක් ඇතුළත් කරන්න');
            return;
        }

        const submitBtn = forgotForm.querySelector('.btn-submit');
        submitBtn.classList.add('loading');

        await simulateApiCall();

        submitBtn.classList.remove('loading');

        showSuccess('මුරපදය නැවත සැකසීමේ සබැඳිය ඔබගේ ඊමේල් ලිපිනයට යවන ලදී.');

        setTimeout(() => {
            showLoginForm();
        }, 3000);
    });
}

// ============================================
// VALIDATION HELPERS
// ============================================
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    // Sri Lankan phone numbers: 07X XXX XXXX or +94 7X XXX XXXX
    return /^(07\d{8}|\+947\d{8})$/.test(phone.replace(/\s/g, ''));
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const group = field.closest('.form-group');
    group.classList.add('error');
    document.getElementById(fieldId + 'Error').textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));
    document.querySelectorAll('.form-error').forEach(e => e.textContent = '');
}

// ============================================
// SUCCESS MESSAGE
// ============================================
function showSuccess(message) {
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    successMessage.classList.add('show');
    document.getElementById('successText').textContent = message;
}

function redirectToHome() {
    window.location.href = 'index.html';
}

// ============================================
// API SIMULATION
// ============================================
function simulateApiCall() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fas fa-info-circle"></i><span>${message}</span>`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// SOCIAL LOGIN BUTTONS
// ============================================
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const platform = btn.classList.contains('google') ? 'Google' : 'Facebook';
        showToast(`${platform} සමඟින් ඇතුළත් වීම ඉදිරියට යමින්...`);
    });
});
