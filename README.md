# $RUNNER Token Landing Page

A minimal, fast, and responsive landing page for the Solana meme token $RUNNER - "From Fortnite to the Finish Line".

## 🏃‍♂️ About

$RUNNER is a community-driven meme token on Solana with a real story of resilience, family, and the grind. This landing page showcases the token's journey and provides easy access to trading and community resources.

## ✨ Features

### 🎯 Real-time Market Data
- **Live Market Cap**: Fetches real-time data from CoinGecko API
- **Progress Tracking**: Visual progress bar showing journey to $100M market cap
- **Auto-refresh**: Updates every 30 seconds automatically
- **Manual Refresh**: Click the refresh icon for instant updates

### 🎨 Dynamic Animations
- **Running Text Effect**: "$RUNNER" text with leftward movement and letter leaning
- **Confetti System**: Celebratory confetti on goal achievement or key interactions
- **Smooth Transitions**: Scroll reveal animations and hover effects
- **Reduced Motion Support**: Respects user accessibility preferences

### 📱 Responsive Design
- **Mobile-first**: Optimized for all screen sizes (360px - 4K)
- **Fluid Typography**: Uses clamp() for perfect scaling
- **Touch-friendly**: Proper button sizes and spacing on mobile
- **Performance**: Inline critical CSS, deferred JavaScript

### 🎬 Interactive Elements
- **YouTube Modal**: Embedded video player with lazy loading
- **Progress Bar**: Animated progress tracking with shimmer effects
- **CTA Buttons**: Icon-enhanced buttons with hover animations
- **Ticker**: Scrolling marquee with embedded links

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/runner-token.git
   cd runner-token
   ```

2. **Open in browser**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Or simply open index.html in your browser
   ```

3. **Access the site**
   - Local: `http://localhost:8000`
   - Or open `index.html` directly

## 📁 Project Structure

```
runner/
├── index.html          # Main HTML file with critical CSS
├── styles.css          # External stylesheet
├── app.js             # JavaScript functionality
├── assets/
│   ├── runner.gif     # Hero animation GIF
│   └── favicon.png    # Site favicon
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties, flexbox, and grid
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **SVG Icons**: Scalable vector icons for buttons and UI elements
- **CoinGecko API**: Real-time cryptocurrency data

## 🎨 Design System

### Colors
```css
--bg: #0a0a0a        /* Dark background */
--fg: #ffffff        /* White text */
--muted: #bdbdbd     /* Muted text */
--accent: #00ff88    /* Primary green */
--accent-2: #7cffd4  /* Light green */
```

### Typography
- **Font Stack**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, etc.)
- **Responsive**: Uses clamp() for fluid scaling
- **Weights**: 500 (medium), 600 (semibold), 700 (bold)

## 🔧 Configuration

### Market Cap Settings
Edit `app.js` to update market cap data:

```javascript
const GOAL = 100_000_000;  // Target market cap
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/live-on-treadmill-till-100mill';
```

### Links & URLs
Update the following in `index.html`:
- Pump.fun trading links
- Dexscreener chart link
- X (Twitter) community link
- YouTube video embed

## 📊 Performance Features

- **Critical CSS**: Inline above-the-fold styles
- **Lazy Loading**: YouTube iframe loads only when modal opens
- **Optimized Images**: Proper loading attributes and sizing
- **Minimal Dependencies**: No external libraries or frameworks
- **Efficient Animations**: CSS transforms and opacity changes

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Focus Management**: Keyboard navigation and focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Color Contrast**: WCAG compliant color combinations

## 🌐 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+
- **Features**: CSS Grid, Flexbox, ES6+, Intersection Observer

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { ... }

/* Tablet */
@media (max-width: 768px) { ... }

/* Desktop */
@media (min-width: 769px) { ... }
```

## 🎯 Key Interactions

### Confetti Triggers
- Press 'R' key anywhere on the page
- Click any primary CTA button
- Reach 100% progress on market cap goal

### Modal Controls
- **Open**: Click "Watch the Story" button
- **Close**: Click X, press Escape, or click overlay
- **Lazy Load**: YouTube video loads only when opened

### Progress Bar
- **Auto-refresh**: Every 30 seconds
- **Manual refresh**: Click refresh icon
- **Goal celebration**: Confetti when reaching $100M

## 🔗 External Links

- **Trading**: [Pump.fun](https://pump.fun/coin/FyB8VxxYAaVVchAgbB1kvjWdw26ovaD4ipwV1j8epump)
- **Charts**: [Dexscreener](https://dexscreener.com/solana/8yx1kc1hhvyfge5epq9rm14bhcmwbbndgxpas3jbe1e1)
- **Community**: [X (Twitter)](https://x.com/i/communities/1967289859040596463)
- **Video**: [YouTube Story](https://youtu.be/HhKQvMCnuO8)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Developer

**Created by [@memewebdev](https://x.com/memewebdev)**

- **X (Twitter)**: [@memewebdev](https://x.com/memewebdev)
- **Website**: [memeweb.dev](https://memeweb.dev)
- **Specialization**: Meme token landing pages and Web3 development

## 📞 Support

For support, questions, or suggestions:
- Join the [X Community](https://x.com/i/communities/1967289859040596463)
- Contact the developer: [@memewebdev](https://x.com/memewebdev)
- Open an issue on GitHub

---

**Disclaimer**: This is a community-driven meme token. No financial advice is provided. Always do your own research before investing.

*"A real story of resilience, family, and the grind. We run together."* 🏃‍♂️

---

*Built with ❤️ by [@memewebdev](https://x.com/memewebdev) | [memeweb.dev](https://memeweb.dev)*