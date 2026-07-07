/* ================================================
   APTI AI TUTOR - MAIN JAVASCRIPT
   ================================================ */

// DOM Elements
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const menuIcon = mobileMenuBtn?.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn?.querySelector('.close-icon');

// Mobile Menu Toggle
function toggleMobileMenu() {
    const isOpen = navLinks?.classList.contains('active');
    
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
    
    if (menuIcon && closeIcon) {
        if (isOpen) {
            menuIcon.style.display = 'flex';
            closeIcon.style.display = 'none';
        } else {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'flex';
        }
    }
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? '' : 'hidden';
}

// Event Listeners
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on nav links
if (navLinks) {
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                toggleMobileMenu();
            }
        });
    });
}

// Navbar Scroll Effect
let lastScrollY = 0;
let ticking = false;

function handleNavbarScroll() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
    
    lastScrollY = currentScrollY;
    ticking = false;
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(handleNavbarScroll);
        ticking = true;
    }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = navbar?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial navbar state
    handleNavbarScroll();
    
    // Mark page as loaded
    document.body.classList.add('loaded');
    
    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Handle page visibility for animations
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Restart animations when page becomes visible
        document.body.classList.add('loaded');
    } else {
        // Pause animations when page is hidden
        document.body.classList.remove('loaded');
    }
});

// Export for use in other modules
window.APTIApp = {
    toggleMobileMenu,
    handleNavbarScroll
};
