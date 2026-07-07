# APTI AI Tutor - Project Specification

## 1. Concept & Vision

**APTI AI Tutor** is an innovative, futuristic AI-powered learning platform that transforms how students interact with educational content. The website combines cutting-edge 3D visuals, fluid animations, and an immersive dark theme with glowing neon accents to create a captivating learning environment. The experience feels like stepping into a high-tech classroom of the future—intelligent, responsive, and visually stunning.

---

## 2. Design Language

### Aesthetic Direction
**Cyberpunk Education** — Dark, sleek backgrounds with vibrant gradient accents, glass-morphism cards, floating 3D elements, and subtle particle effects. Think futuristic academy meets modern SaaS dashboard.

### Color Palette
```
Primary:        #6366F1 (Indigo)
Primary Glow:   #818CF8 (Light Indigo)
Secondary:      #EC4899 (Pink)
Accent:         #06B6D4 (Cyan)
Accent Alt:     #10B981 (Emerald)
Background:     #0F0F1A (Deep Space)
Background Alt: #1A1A2E (Dark Purple)
Surface:        rgba(255, 255, 255, 0.05) (Glass)
Text Primary:   #F8FAFC (White)
Text Secondary: #94A3B8 (Slate)
Text Muted:     #64748B (Gray)
Gradient:       linear-gradient(135deg, #6366F1, #EC4899, #06B6D4)
```

### Typography
- **Headings**: `Orbitron` (Google Fonts) — Futuristic, geometric, perfect for tech-forward branding
- **Body**: `Inter` (Google Fonts) — Clean, highly readable
- **Code/Accent**: `JetBrains Mono` — For any code snippets or technical elements
- **Fallbacks**: system-ui, -apple-system, sans-serif

### Spatial System
- Base unit: 8px
- Section padding: 80px vertical, responsive
- Card padding: 24px-32px
- Border radius: 12px (cards), 8px (buttons), 50% (circles)

### Motion Philosophy
All animations serve to enhance perceived intelligence and responsiveness:
- **Page transitions**: Smooth fade-in with slight upward drift (400ms ease-out)
- **3D card effects**: CSS perspective transforms on hover with subtle rotation
- **Floating elements**: Continuous gentle float animation (3-4s infinite)
- **Parallax**: Background layers move at different speeds
- **Stagger reveals**: Elements animate in sequence (100ms delay between items)
- **Glow pulses**: Accent elements have subtle pulsing glow effects

### Visual Assets Strategy
- **Icons**: Lucide icons (outline style) for consistency
- **Images**: Placeholder gradients with geometric shapes; replace with actual screenshots
- **Decorative**: CSS-generated grid patterns, floating orbs, gradient blurs
- **3D Effects**: CSS 3D transforms, layered shadows, perspective techniques

---

## 3. Layout & Structure

### Page Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  NAVIGATION BAR (Fixed, glass-morphism)                      │
│  Logo | Home | Features | Courses | Pricing | Contact        │
│  [Get Started CTA]                                           │
├─────────────────────────────────────────────────────────────┤
│  HERO SECTION                                                │
│  ┌─────────────────────┐  ┌─────────────────────────────┐    │
│  │  Headline + CTA     │  │  3D Animated Illustration  │    │
│  │  Subheadline        │  │  (Floating brain/robot)      │    │
│  │  [Primary CTA]      │  │                             │    │
│  │  [Secondary CTA]    │  │                             │    │
│  └─────────────────────┘  └─────────────────────────────┘    │
│  [Animated background: gradient mesh + floating particles]  │
├─────────────────────────────────────────────────────────────┤
│  FEATURES SECTION                                            │
│  3-column grid of feature cards with 3D hover effects       │
│  - AI-Powered Learning    - Smart Progress Tracking          │
│  - 24/7 Availability      - Personalized Curriculum          │
│  - Interactive Quizzes    - Real-time Feedback               │
├─────────────────────────────────────────────────────────────┤
│  HOW IT WORKS SECTION                                        │
│  3-step horizontal timeline with animated connectors         │
│  [1. Sign Up] → [2. Choose Topic] → [3. Learn & Practice]    │
├─────────────────────────────────────────────────────────────┤
│  SUBJECT CATEGORIES                                          │
│  Grid of category cards with icons and hover animations     │
│  Mathematics | Science | Languages | History | Programming   │
├─────────────────────────────────────────────────────────────┤
│  TESTIMONIALS                                                │
│  Carousel of student reviews with glass-morphism cards       │
├─────────────────────────────────────────────────────────────┤
│  CTA SECTION                                                 │
│  Full-width gradient banner with pulsing animation           │
│  "Ready to Transform Your Learning?"                        │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
│  Links | Social | Contact Info | Newsletter Signup           │
└─────────────────────────────────────────────────────────────┘
┌──────────────┐
│  CHATBOT     │  ← Fixed bottom-right
│  [Button]    │
│              │
│  WHATSAPP    │  ← Below chatbot
│  [Icon]      │
└──────────────┘
```

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (2-column grids, stacked hero)
- **Mobile**: <768px (single column, hamburger menu)

---

## 4. Features & Interactions

### Navigation
- Fixed position with blur backdrop
- Logo on left, nav links center, CTA right
- Active state: underline with gradient
- Hover: color shift with subtle glow
- Mobile: hamburger menu with slide-in overlay

### Hero Section
- Split layout: text left, 3D illustration right
- Headline with gradient text effect
- Two CTA buttons: Primary (filled), Secondary (outlined)
- Floating animated background elements
- Scroll indicator at bottom

### Feature Cards
- Glass-morphism effect (backdrop blur, subtle border)
- Icon with gradient background
- 3D tilt effect on hover (rotateX/Y based on mouse position)
- Glow intensifies on hover

### How It Works
- Connected by animated gradient line
- Step numbers pulse when in viewport
- Icons animate in sequence on scroll

### Subject Categories
- Grid layout with category icons
- Scale up + shadow on hover
- Gradient overlay appears on hover

### Chatbot Widget
- Floating button (bottom-right, 20px from edges)
- Pulsing notification dot
- Click expands to chat interface
- Glass-morphism chat window
- Pre-configured quick replies

### WhatsApp Button
- Positioned 16px below chatbot button
- Opens WhatsApp with pre-filled message
- Hover: scale + glow effect

### Scroll Animations
- Elements fade in and slide up on scroll (Intersection Observer)
- Staggered animations for list items
- Parallax effect on background layers

---

## 5. Component Inventory

### Button
- **Primary**: Gradient background, white text, shadow
- **Secondary**: Transparent with gradient border
- **States**: hover (lift + glow), active (press down), disabled (opacity 0.5)

### Card
- Glass background with blur
- Subtle border (1px white at 10% opacity)
- 3D transform on hover
- Shadow increases on hover

### Input Field
- Dark background with subtle border
- Focus: gradient border glow
- Error: red border + shake animation

### Chat Bubble
- User: gradient background, right-aligned
- Bot: glass background, left-aligned
- Typing indicator: animated dots

### Navigation Link
- Default: text-secondary color
- Hover: text-primary + underline glow
- Active: gradient underline

### Footer Link
- Default: text-muted
- Hover: text-primary + slight right shift

---

## 6. Technical Approach

### Stack
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations, 3D transforms
- **JavaScript**: Vanilla ES6+, modular structure
- **External Libraries**:
  - AOS (Animate On Scroll) for scroll animations
  - Three.js (optional) for advanced 3D graphics
  - Lottie (optional) for motion graphics

### File Structure
```
apti-ai-tutor/
├── index.html
├── SPEC.md
├── assets/
│   ├── css/
│   │   ├── main.css          # Core styles
│   │   ├── components.css    # Component styles
│   │   ├── animations.css    # Keyframes & transitions
│   │   └── responsive.css    # Media queries
│   ├── js/
│   │   ├── main.js           # Core functionality
│   │   ├── animations.js     # Animation controllers
│   │   ├── chatbot.js        # Chatbot logic
│   │   └── utils.js          # Helper functions
│   ├── images/
│   │   ├── logo.png          # Main logo
│   │   ├── hero-illustration.svg  # Hero image
│   │   └── feature-icons/    # Feature icons
│   ├── icons/
│   │   ├── chatbot-icon.svg
│   │   └── whatsapp-icon.svg
│   └── fonts/
│       └── (if self-hosted)
├── components/               # Reusable HTML snippets
├── sections/                # Page sections
└── utils/                   # Build tools, config
```

### Performance Considerations
- Lazy load images below fold
- CSS animations over JS where possible
- Debounce scroll events
- Use `will-change` sparingly for animated elements
- Optimize 3D effects for mobile (reduce or disable)

---

## 7. Assets Required

### Images
- [ ] `logo.png` - Main logo (from reference)
- [ ] `hero-illustration.svg` - 3D illustration or animated graphic
- [ ] `feature-1.svg` through `feature-6.svg` - Feature icons
- [ ] `category-icons/` - Subject category icons (math, science, etc.)
- [ ] `testimonial-avatars/` - Student profile images (optional)
- [ ] `backgrounds/` - Any custom background images

### Icons (SVG)
- [ ] `chatbot-icon.svg` - Chat widget icon
- [ ] `whatsapp-icon.svg` - WhatsApp contact icon
- [ ] `menu-icon.svg` - Mobile menu hamburger
- [ ] `close-icon.svg` - Close button
- [ ] `arrow-icon.svg` - Scroll/next arrows
- [ ] `check-icon.svg` - Success indicators

### External Resources
- Google Fonts: Orbitron, Inter, JetBrains Mono
- Font Awesome or Lucide Icons CDN
- AOS Animation Library CDN
- Three.js CDN (if using advanced 3D)

---

## 8. Placeholder Content

### Hero
- **Headline**: "Learn Smarter with AI"
- **Subheadline**: "Your personal AI tutor available 24/7. Get instant explanations, practice problems, and track your progress."
- **CTA Primary**: "Start Learning Free"
- **CTA Secondary**: "Watch Demo"

### Features
1. **AI-Powered Explanations** - Complex topics simplified instantly
2. **Smart Progress Tracking** - AI analyzes your strengths and weaknesses
3. **24/7 Availability** - Learn anytime, anywhere
4. **Personalized Curriculum** - Adapts to your learning pace
5. **Interactive Quizzes** - Test your knowledge with AI-generated questions
6. **Real-time Feedback** - Get instant corrections and hints

### How It Works
1. **Sign Up** - Create your free account in seconds
2. **Choose Your Topic** - Select any subject or concept
3. **Start Learning** - Get explanations, practice, and track progress

---

## 9. Chatbot & WhatsApp Configuration

### Chatbot
- Position: fixed, bottom-right (20px from edges)
- Button size: 60px × 60px
- Chat window: 380px × 500px (max)
- Default greeting: "Hi! I'm your APTI AI Tutor. How can I help you today?"
- Quick replies: ["Explain a topic", "Take a quiz", "Track progress", "Get help"]

### WhatsApp
- Position: fixed, below chatbot (16px gap)
- Phone number: Replace with actual number
- Pre-filled message: "Hi! I'm interested in APTI AI Tutor."
- Opens in new tab

---

## 10. Animation Specifications

### Entrance Animations
- Duration: 400-600ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1) (ease-out-expo)
- Stagger: 100ms between items

### Hover Effects
- Duration: 200-300ms
- Scale: 1.02-1.05
- Shadow increase: 0 4px 20px rgba(99, 102, 241, 0.3)

### 3D Card Tilt
- Max rotation: 10deg
- Perspective: 1000px
- Response: immediate (transform on mousemove)

### Floating Animation
- Duration: 3-4s
- Transform: translateY(-10px)
- Timing: ease-in-out infinite alternate

### Glow Pulse
- Duration: 2s
- Opacity: 0.5 to 1
- Timing: ease-in-out infinite

### Background Particles
- Count: 20-30
- Size: 2-6px
- Movement: slow random drift
- Opacity: 0.3-0.6
