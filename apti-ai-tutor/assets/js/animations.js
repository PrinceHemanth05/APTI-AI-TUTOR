/* ================================================
   APTI AI TUTOR - ANIMATIONS CONTROLLER
   ================================================ */

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2;
        const colors = ['#6366F1', '#EC4899', '#06B6D4', '#10B981'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            box-shadow: 0 0 ${size * 2}px ${color};
            animation: particleFloat ${Math.random() * 15 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    // Add particle animation keyframes dynamically
    if (!document.getElementById('particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% {
                    transform: translate(0, 0) scale(1) translateZ(0);
                    opacity: 0.4;
                }
                25% {
                    transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * -60}px) translateZ(${Math.random() * 50}px) scale(1.2);
                    opacity: 0.8;
                }
                50% {
                    transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * -40}px) translateZ(${Math.random() * 30}px) scale(0.9);
                    opacity: 0.5;
                }
                75% {
                    transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * -50}px) translateZ(${Math.random() * 40}px) scale(1.1);
                    opacity: 0.7;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Create Neural Network Background
function createNeuralNetwork() {
    const neuralBg = document.getElementById('neuralBg');
    if (!neuralBg) return;
    
    const nodeCount = 20;
    const nodes = [];
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        node.style.left = `${x}%`;
        node.style.top = `${y}%`;
        node.style.animationDelay = `${Math.random() * 3}s`;
        neuralBg.appendChild(node);
        nodes.push({ x, y, element: node });
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[j].x - nodes[i].x;
            const dy = nodes[j].y - nodes[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 25) {
                const line = document.createElement('div');
                line.className = 'neural-line';
                line.style.left = `${nodes[i].x}%`;
                line.style.top = `${nodes[i].y}%`;
                line.style.width = `${distance}%`;
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                line.style.transform = `rotate(${angle}deg)`;
                line.style.animationDelay = `${Math.random() * 2}s`;
                neuralBg.appendChild(line);
            }
        }
    }
}

// Custom Cursor Animation
function initCustomCursor() {
    // Check if device is not touch-based
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');
    const cursorGlow = document.getElementById('cursorGlow');
    const cursorTrails = document.getElementById('cursorTrails');
    
    if (!cursor || !cursorDot) return;
    
    // Create cursor trail elements
    const trailCount = 5;
    const trails = [];
    
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.width = `${8 - i * 1.5}px`;
        trail.style.height = `${8 - i * 1.5}px`;
        trail.style.opacity = 0.3 - i * 0.05;
        cursorTrails.appendChild(trail);
        trails.push({
            element: trail,
            x: 0,
            y: 0
        });
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    
    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update cursor glow immediately
        cursorGlow.style.left = `${mouseX}px`;
        cursorGlow.style.top = `${mouseY}px`;
    });
    
    // Click effect
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
        setTimeout(() => cursor.classList.remove('click'), 100);
    });
    
    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .feature-card, .subject-card, .testimonial-card, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorTrails.forEach(trail => trail.classList.add('active'));
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Animation loop
    function animateCursor() {
        // Smooth cursor follow
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        // Faster dot follow
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        
        // Update cursor position
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        // Update dot position
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
        
        // Update trail positions
        trails.forEach((trail, index) => {
            const delay = (index + 1) * 0.08;
            trail.x += (mouseX - trail.x) * (0.1 - delay);
            trail.y += (mouseY - trail.y) * (0.1 - delay);
            trail.element.style.left = `${trail.x}px`;
            trail.element.style.top = `${trail.y}px`;
        });
        
        requestAnimationFrame(animateCursor);
    }
    
    // Start animation
    animateCursor();
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
        cursorGlow.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
        cursorGlow.style.opacity = '1';
    });
}

// Parallax Cursor Effect
function initCursorParallax() {
    const shapes = document.querySelectorAll('.shape-3d, .morphing-blob');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 10;
            const x = mouseX * speed;
            const y = mouseY * speed;
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// 3D Card Tilt Effect
function init3DCardTilt() {
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    if (tiltCards.length === 0) return;
    
    tiltCards.forEach(card => {
        const inner = card.querySelector('.tilt-card-inner') || card;
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.setProperty('--rotate-x', `${rotateX}deg`);
            card.style.setProperty('--rotate-y', `${rotateY}deg`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rotate-x', '0deg');
            card.style.setProperty('--rotate-y', '0deg');
        });
    });
}

// Feature Card 3D Effect
function initFeatureCard3D() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    if (featureCards.length === 0) return;
    
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Parallax Effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                
                parallaxElements.forEach(el => {
                    const speed = parseFloat(el.dataset.parallax) || 0.5;
                    const offset = scrollY * speed;
                    el.style.transform = `translateY(${offset}px)`;
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Reveal on Scroll
function initRevealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    if (revealElements.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => observer.observe(el));
}

// Magnetic Button Effect
function initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.btn, .magnetic');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// Stagger Animation for Grid Items
function initStaggerAnimation() {
    const grids = document.querySelectorAll('.features-grid, .subjects-grid, .testimonials-grid');
    
    grids.forEach(grid => {
        const items = grid.children;
        
        Array.from(items).forEach((item, index) => {
            item.style.animationDelay = `${index * 100}ms`;
            item.classList.add('stagger-item');
        });
    });
    
    // Add stagger animation styles
    const style = document.createElement('style');
    style.textContent = `
        .stagger-item {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.5s ease forwards;
        }
    `;
    document.head.appendChild(style);
}

// Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    if (counters.length === 0) return;
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    };
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// Text Gradient Animation
function initGradientTextAnimation() {
    const gradientTexts = document.querySelectorAll('.gradient-text-animated');
    
    gradientTexts.forEach(text => {
        text.style.backgroundSize = '200% 200%';
        text.style.animation = 'gradientShift 5s ease infinite';
    });
}

// Initialize all animations
function initAnimations() {
    createParticles();
    createNeuralNetwork();
    initCustomCursor();
    initCursorParallax();
    init3DCardTilt();
    initFeatureCard3D();
    initParallax();
    initRevealOnScroll();
    initMagneticButtons();
    initStaggerAnimation();
    initCounterAnimation();
    initGradientTextAnimation();
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}

// Export for use in other modules
window.APTIAnimations = {
    createParticles,
    init3DCardTilt,
    initFeatureCard3D,
    initRevealOnScroll
};
