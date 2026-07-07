# APTI AI Tutor - Assets & Resources List

## 📁 Current Project Structure

```
apti-ai-tutor/
├── index.html
├── SPEC.md
├── README.md
│
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── components.css
│   │   ├── animations.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── animations.js
│   │   ├── chatbot.js
│   │   └── utils.js
│   │
│   └── images/
│       └── logo.svg
```

---

## 🖼️ Images Required

### Required (Add Your Own)

| Asset Name | File Path | Description | Dimensions | Format |
|------------|-----------|-------------|------------|--------|
| Main Logo | `assets/images/logo.png` | Your brand logo | 200x200px | PNG |
| Hero Illustration | `assets/images/hero-illustration.svg` | Main hero graphic | 800x600px | SVG |

### Optional Images (Add Later)

| Asset Name | File Path | Description | Dimensions | Format |
|------------|-----------|-------------|------------|--------|
| Feature Icon 1 | `assets/images/features/ai-brain.svg` | AI Brain icon | 64x64px | SVG |
| Feature Icon 2 | `assets/images/features/progress.svg` | Progress tracking icon | 64x64px | SVG |
| Feature Icon 3 | `assets/images/features/availability.svg` | 24/7 icon | 64x64px | SVG |
| Feature Icon 4 | `assets/images/features/curriculum.svg` | Curriculum icon | 64x64px | SVG |
| Feature Icon 5 | `assets/images/features/quiz.svg` | Quiz icon | 64x64px | SVG |
| Feature Icon 6 | `assets/images/features/feedback.svg` | Feedback icon | 64x64px | SVG |
| Team Photo | `assets/images/team.jpg` | Team/About section | 400x300px | JPG |
| Testimonial Avatar 1 | `assets/images/avatars/user1.jpg` | User avatar | 80x80px | JPG |
| Testimonial Avatar 2 | `assets/images/avatars/user2.jpg` | User avatar | 80x80px | JPG |
| Testimonial Avatar 3 | `assets/images/avatars/user3.jpg` | User avatar | 80x80px | JPG |

### Background Images (Optional)

| Asset Name | File Path | Description | Dimensions | Format |
|------------|-----------|-------------|------------|--------|
| Hero Background | `assets/images/bg-hero.jpg` | Hero section background | 1920x1080px | JPG/WebP |
| Pattern Overlay | `assets/images/pattern.svg` | Subtle pattern overlay | Tileable | SVG |

---

## 🎨 Icons

### Current (Via CDN)

The project uses **Lucide Icons** loaded via CDN:
- No local icon files required
- All icons are SVG-based
- Loaded in `index.html` via `<script src="https://unpkg.com/lucide@latest">`

### Icons Used in Project

| Icon Name | Usage Location | Lucide Icon |
|-----------|----------------|-------------|
| sparkles | Hero badge | `sparkles` |
| brain | Hero card, Features | `brain` |
| zap | Hero card | `zap` |
| target | Hero card | `target` |
| graduation-cap | Hero orb | `graduation-cap` |
| chevrons-down | Scroll indicator | `chevrons-down` |
| brain | Feature 1 | `brain` |
| bar-chart-3 | Feature 2 | `bar-chart-3` |
| clock | Feature 3 | `clock` |
| compass | Feature 4 | `compass` |
| puzzle | Feature 5 | `puzzle` |
| message-circle | Feature 6 | `message-circle` |
| user-plus | Step 1 | `user-plus` |
| book-open | Step 2 | `book-open` |
| rocket | Step 3 | `rocket` |
| arrow-right | Connector | `arrow-right` |
| calculator | Subject | `calculator` |
| flask-conical | Subject | `flask-conical` |
| globe | Subject | `globe` |
| landmark | Subject | `landmark` |
| code | Subject | `code` |
| line-chart | Subject | `line-chart` |
| quote | Testimonial | `quote` |
| star | Rating | `star` |
| user | Author | `user` |
| twitter | Social | `twitter` |
| linkedin | Social | `linkedin` |
| github | Social | `github` |
| youtube | Social | `youtube` |
| send | Newsletter, Chat | `send` |
| message-circle | Chatbot button | `message-circle` |
| bot | Chatbot avatar | `bot` |
| x | Close button | `x` |
| menu | Mobile menu | `menu` |

### Custom SVG Icons

Create these files if you want custom icons instead of Lucide:

```
assets/icons/
├── chatbot-icon.svg      # Chat widget icon
├── whatsapp-icon.svg     # WhatsApp icon (or use provided inline SVG)
├── arrow-up.svg          # Scroll to top
└── play.svg              # Video play button
```

---

## 🔤 Typography

### Google Fonts (Loaded via CDN)

| Font Family | Weights | Usage | CDN Link |
|-------------|---------|-------|----------|
| Orbitron | 500, 600, 700, 800 | Headings, Logo | Pre-loaded in HTML |
| Inter | 400, 500, 600, 700 | Body text | Pre-loaded in HTML |
| JetBrains Mono | 400, 500 | Code, Monospace | Pre-loaded in HTML |

### Self-Hosted Fonts (Optional)

If you want to self-host fonts:

```
assets/fonts/
├── Orbitron/
│   ├── Orbitron-Regular.woff2
│   ├── Orbitron-Medium.woff2
│   ├── Orbitron-Bold.woff2
│   └── Orbitron-ExtraBold.woff2
├── Inter/
│   ├── Inter-Regular.woff2
│   ├── Inter-Medium.woff2
│   ├── Inter-SemiBold.woff2
│   └── Inter-Bold.woff2
└── JetBrains-Mono/
    ├── JetBrainsMono-Regular.woff2
    └── JetBrainsMono-Medium.woff2
```

---

## 📚 External Dependencies

### CDN Resources (Already Included)

| Library | Version | Purpose | URL |
|---------|---------|---------|-----|
| AOS (Animate On Scroll) | 2.3.1 | Scroll animations | `https://unpkg.com/aos@2.3.1/dist/aos.css` |
| | | | `https://unpkg.com/aos@2.3.1/dist/aos.js` |
| Lucide Icons | latest | Icon library | `https://unpkg.com/lucide@latest` |
| Google Fonts | - | Typography | `https://fonts.googleapis.com/css2?family=...` |

### Optional Libraries (For Advanced Features)

| Library | Version | Purpose | URL |
|---------|---------|---------|-----|
| Three.js | latest | Advanced 3D graphics | `https://unpkg.com/three@0.160.0/build/three.module.js` |
| GSAP | 3.12 | Professional animations | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js` |
| Lottie | latest | Motion graphics | `https://unpkg.com/lottie-web/build/player/lottie.js` |

---

## 📝 Content & Copy

### Text Content to Customize

#### Hero Section
- **Headline**: "Learn Smarter with AI" (index.html, line ~60)
- **Subheadline**: Long description text (index.html, line ~65)
- **CTA Primary**: "Start Learning Free"
- **CTA Secondary**: "Watch Demo"
- **Stats**: 10K+ Learners, 50+ Subjects, 24/7 Availability

#### Features (6 items)
1. AI-Powered Explanations - Complex topics simplified instantly
2. Smart Progress Tracking - AI analyzes your strengths and weaknesses
3. 24/7 Availability - Learn anytime, anywhere
4. Personalized Curriculum - Adapts to your learning pace
5. Interactive Quizzes - Test your knowledge with AI-generated questions
6. Real-time Feedback - Get instant corrections and hints

#### How It Works (3 steps)
1. Create Account - Sign up for free in just seconds
2. Choose Topic - Select any subject or concept you want to learn about
3. Start Learning - Get explanations, practice, and track your progress

#### Subjects (6 items)
1. Mathematics - Algebra, Calculus, Geometry
2. Science - Physics, Chemistry, Biology
3. Languages - English, Spanish, French
4. History - World History, Civilizations
5. Programming - Python, JavaScript, C++
6. Economics - Micro, Macro, Finance

#### Testimonials (3 items)
1. Sarah Johnson - Computer Science Student
2. Michael Chen - Data Analyst
3. Emily Rodriguez - Parent

#### CTA Section
- **Title**: "Ready to Transform Your Learning?"
- **Subtitle**: "Join thousands of students already learning smarter with AI..."

---

## ⚙️ Configuration Variables

### WhatsApp Configuration

**File**: `index.html` (line ~320)
```javascript
href="https://wa.me/1234567890?text=Hi!%20I'm%20interested..."
```

Replace `1234567890` with your actual WhatsApp number (with country code).

### Chatbot Configuration

**File**: `assets/js/chatbot.js`
```javascript
const chatbotState = {
    isOpen: false,
    messages: [],
    isTyping: false
};
```

### Color Scheme

**File**: `assets/css/main.css` (lines 10-50)
```css
:root {
    --primary: #6366F1;
    --secondary: #EC4899;
    --accent: #06B6D4;
    --accent-alt: #10B981;
    --bg-primary: #0F0F1A;
    --bg-secondary: #1A1A2E;
    /* ... */
}
```

---

## 🔧 Development Tools

### Recommended VS Code Extensions

| Extension | Purpose |
|-----------|---------|
| Live Server | Local development server |
| Prettier | Code formatting |
| ESLint | JavaScript linting |
| Auto Rename Tag | HTML tag renaming |
| CSS Peek | CSS property lookup |
| Color Highlight | Color preview |

### Recommended Browser Extensions

| Extension | Purpose |
|-----------|---------|
| Vue Devtools | Debug Vue.js (if using) |
| React Devtools | Debug React (if using) |
| Web Vitals | Performance metrics |

---

## 📦 Build Tools (Optional)

If you want to add a build process:

### For Development with Auto-Refresh

```bash
# Using npm
npm install -g live-server
live-server

# Using npx
npx live-server

# Using Python
python -m http.server 8000
```

### For Production Build

```bash
# Install
npm install --save-dev parcel

# Build
npx parcel build index.html --dist-dir dist
```

---

## 📋 Checklist for Production

- [ ] Replace logo with your brand logo
- [ ] Update WhatsApp number
- [ ] Customize all text content
- [ ] Add real testimonial images
- [ ] Replace placeholder links with actual URLs
- [ ] Update contact email in footer
- [ ] Add privacy policy page
- [ ] Add terms of service page
- [ ] Optimize images for production
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure SEO meta tags
- [ ] Set up SSL for production
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Check accessibility with screen reader
- [ ] Verify all forms work correctly
- [ ] Test chatbot responses
- [ ] Check all animations perform well
