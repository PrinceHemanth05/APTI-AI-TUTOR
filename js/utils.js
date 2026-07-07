/* ================================================
   APTI AI TUTOR - UTILITY FUNCTIONS
   ================================================ */

// Debounce Function
function debounce(func, wait, immediate = false) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(this, args);
    };
}

// Throttle Function
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Format Number with Commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Format Date
function formatDate(date, options = {}) {
    const defaultOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options });
}

// Format Relative Time
function formatRelativeTime(date) {
    const now = new Date();
    const then = new Date(date);
    const diffMs = now - then;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffSecs < 60) return 'just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return formatDate(date);
}

// Check if Element is in Viewport
function isInViewport(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -offset &&
        rect.left >= -offset &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
    );
}

// Get Random Number in Range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get Random Item from Array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Shuffle Array (Fisher-Yates)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Copy to Clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (e) {
            document.body.removeChild(textArea);
            return false;
        }
    }
}

// Local Storage Helpers
const storage = {
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn(`Error reading from localStorage: ${key}`, e);
            return defaultValue;
        }
    },
    
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.warn(`Error writing to localStorage: ${key}`, e);
            return false;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.warn(`Error removing from localStorage: ${key}`, e);
            return false;
        }
    }
};

// Newsletter Form Handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput?.value?.trim();
    
    if (!email) {
        showNotification('Please enter your email address.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thanks for subscribing! Check your email for updates.', 'success');
    emailInput.value = '';
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Notification
function showNotification(message, type = 'info', duration = 5000) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    existingNotification?.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
        </button>
    `;
    
    // Add styles
    const styles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 16px 20px;
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 9999;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
            box-shadow: var(--shadow-lg);
        }
        
        .notification-success {
            border-color: var(--accent-alt);
        }
        
        .notification-error {
            border-color: #EF4444;
        }
        
        .notification-info {
            border-color: var(--primary);
        }
        
        .notification-close {
            padding: 4px;
            opacity: 0.6;
            transition: opacity 0.2s;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    if (!document.getElementById('notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(notification);
    
    // Close button handler
    notification.querySelector('.notification-close')?.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after duration
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(fadeOutStyle);

// Lazy Load Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// Preload Critical Resources
function preloadResources(resources) {
    resources.forEach(resource => {
        if (resource.type === 'image') {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = resource.href;
            document.head.appendChild(link);
        } else if (resource.type === 'style') {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = resource.href;
            document.head.appendChild(link);
        } else if (resource.type === 'script') {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'script';
            link.href = resource.href;
            document.head.appendChild(link);
        }
    });
}

// Detect Touch Device
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Detect Dark Mode Preference
function prefersDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Export all utilities
window.APTIUtils = {
    debounce,
    throttle,
    formatNumber,
    formatDate,
    formatRelativeTime,
    isInViewport,
    getRandomInt,
    getRandomItem,
    shuffleArray,
    copyToClipboard,
    storage,
    isValidEmail,
    showNotification,
    lazyLoadImages,
    preloadResources,
    isTouchDevice,
    prefersDarkMode
};
