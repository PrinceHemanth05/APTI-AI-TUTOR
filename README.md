# APTI AI Tutor

> An innovative AI-powered learning platform with stunning animations and 3D effects.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

## 🚀 Features

- **AI-Powered Explanations** - Complex topics simplified instantly
- **Smart Progress Tracking** - AI analyzes your strengths and weaknesses
- **24/7 Availability** - Learn anytime, anywhere
- **Personalized Curriculum** - Adapts to your learning pace
- **Interactive Quizzes** - Test your knowledge with AI-generated questions
- **Real-time Feedback** - Get instant corrections and hints

## ✨ Design Highlights

- 🎨 Cyberpunk-inspired dark theme with vibrant gradient accents
- 🌟 Glass-morphism UI components
- 🎬 Smooth CSS animations and transitions
- 📱 Fully responsive design
- 💬 Integrated chatbot widget
- 📞 WhatsApp contact integration

## 📁 Project Structure

```
apti-ai-tutor/
├── index.html                 # Main HTML file
├── SPEC.md                    # Detailed specification document
├── README.md                  # This file
│
└── assets/
    ├── css/
    │   ├── main.css           # Core styles, variables, base styles
    │   ├── components.css     # UI component styles (buttons, cards, etc.)
    │   ├── animations.css      # Keyframe animations and effects
    │   └── responsive.css      # Media queries for responsiveness
    │
    ├── js/
    │   ├── main.js             # Core functionality, navigation, scroll
    │   ├── animations.js       # Animation controllers, 3D effects
    │   ├── chatbot.js          # Chatbot widget logic
    │   └── utils.js            # Utility functions
    │
    └── images/
        ├── logo.svg            # Logo (SVG format)
        └── logo.png            # Logo (PNG format - replace with your logo)
```

## 🛠️ Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. **Clone or Download the project**

```bash
# If using git
git clone <repository-url>

# Or download and extract the ZIP file
```

2. **Navigate to the project directory**

```bash
cd apti-ai-tutor
```

3. **Open in Browser**

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

4. **Access the site**

Open your browser and go to `http://localhost:8000`

## 🎨 Customization

### Changing Colors

Edit the CSS custom properties in `assets/css/main.css`:

```css
:root {
    --primary: #6366F1;        /* Main brand color */
    --secondary: #EC4899;       /* Accent color */
    --accent: #06B6D4;          /* Secondary accent */
    --bg-primary: #0F0F1A;      /* Background color */
    /* ... more variables */
}
```

### Adding Your Logo

1. Replace `assets/images/logo.png` with your logo (recommended size: 200x200px)
2. Update the logo reference in `index.html` if needed

### Changing WhatsApp Number

Edit the `href` in the WhatsApp button (in `index.html`):

```html
<a href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi!%20I'm%20interested...">
```

Replace `YOUR_PHONE_NUMBER` with your WhatsApp number (country code + number, no spaces or symbols).

### Modifying Chatbot Responses

Edit the `generateResponse()` function in `assets/js/chatbot.js` to customize bot behavior.

## 📦 Assets Required

### Images to Add

| File | Description | Size | Format |
|------|-------------|------|--------|
| `logo.png` | Main website logo | 200x200px | PNG/SVG |
| `hero-illustration.svg` | Hero section illustration | 800x600px | SVG |

### Icons (Using Lucide Icons via CDN)

The project uses Lucide Icons loaded from CDN. All icons are SVG-based and automatically included.

### External Dependencies

| Library | Version | Purpose | CDN |
|---------|---------|---------|-----|
| AOS | 2.3.1 | Scroll animations | unpkg |
| Lucide | latest | Icon library | unpkg |
| Google Fonts | - | Typography | fonts.googleapis.com |

## 🔧 Development

### Adding New Sections

1. Create your HTML in `index.html`
2. Add corresponding styles in `assets/css/components.css`
3. Add animations if needed in `assets/css/animations.css`
4. Add JavaScript functionality in `assets/js/` files

### Best Practices

- Keep CSS organized by using the existing file structure
- Use CSS custom properties for consistent theming
- Test animations on mobile devices for performance
- Use `prefers-reduced-motion` media query for accessibility

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Mobile Safari | 14+ | ✅ Full |
| Chrome Mobile | 90+ | ✅ Full |

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states visible
- `prefers-reduced-motion` respected

## 🚀 Deployment

### Static Hosting

This is a static website and can be deployed to:

- **Netlify** - Drag and drop the folder
- **Vercel** - Connect your Git repository
- **GitHub Pages** - Enable in repository settings
- **AWS S3** - Upload to S3 bucket with static hosting
- **Firebase Hosting** - Deploy with Firebase CLI

### Build for Production

No build step required! The website is ready for deployment as-is.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

- **Design Inspiration**: Cyberpunk aesthetic, modern SaaS dashboards
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Animations**: [AOS Library](https://michalsnik.github.io/aos/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)

## 📞 Support

For questions or support, please contact:
- Email: support@aptitutor.com
- WhatsApp: [Contact Us](#)

---

Made with ❤️ for better learning
