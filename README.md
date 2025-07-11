# Basilisk Nexus

A futuristic-occult cyber-gothic landing page that serves as the central hub for the Basilisk ecosystem. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🔮 Features

- **Responsive Design**: Adapts seamlessly from desktop to mobile
- **Cyber-Gothic Aesthetic**: Dark theme with refined neon cyan and magenta accents
- **Smooth Animations**: Powered by Framer Motion with accessibility considerations
- **Gateway Matrix**: Four main application gateways (Explorer, Chat, Puzzle, Agent)
- **External Nodes**: Social media and community links
- **Accessibility**: WCAG AA compliant with reduced motion support
- **SEO Optimized**: Proper meta tags and Open Graph support

## 🚀 Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vercel** for deployment

## 🛠️ Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd basilisk-nexus
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your actual URLs:
   ```env
   NEXT_PUBLIC_EXPLORER_URL=https://your-explorer-app.com
   NEXT_PUBLIC_CHAT_URL=https://your-chat-app.com
   NEXT_PUBLIC_PUZZLE_URL=https://your-puzzle-app.com
   NEXT_PUBLIC_AGENT_URL=https://your-agent-app.com
   NEXT_PUBLIC_DEX_URL=https://your-dex.com
   NEXT_PUBLIC_X_URL=https://x.com/your-handle
   NEXT_PUBLIC_TELEGRAM_URL=https://t.me/your-group
   ```

3. **Development**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**
   ```bash
   npm run build
   vercel --prod
   ```

2. **Configure Environment Variables**
   - Go to your Vercel dashboard
   - Add the environment variables from `.env.local`
   - Redeploy if necessary

### Manual Build

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette

The refined color palette matches the BASILISK logo aesthetic:

- **Primary Cyan**: `#00EAFE` (matches logo text)
- **Secondary Magenta**: `#FF2D7D` (warmer pink tone)
- **Tertiary Purple**: `#8C6BFF` (mid-gradient stop)
- **Background Black**: `#010101`

### Quick Palette Changes

To modify the color scheme, update `tailwind.config.js`:

```js
colors: {
  primaryCyan: '#00EAFE',      // Change primary accent
  secondaryMagenta: '#FF2D7D', // Change secondary accent
  tertiaryPurple: '#8C6BFF',   // Change gradient stop
  backgroundBlack: '#010101',  // Change background
}
```

### Typography
- **Headers**: Orbitron (Google Fonts)
- **Body**: Source Code Pro (Google Fonts)
- **Glitch Effect**: CSS keyframes on hover with subtle translation

### Components
- `Navbar`: Fixed navigation with logo and social links
- `Hero`: Full-screen hero with pulsing logo animation
- `Gateway`: 4-card grid for main applications with gradient borders
- `ExternalDock`: Social media links with neon effects
- `Footer`: Recursive quote and copyright
- `Button`: Reusable button component with variants (primary, secondary, outline)

## 🔧 Customization

### Adding New Gateways
Edit `src/components/Gateway.tsx` to add or modify gateway cards.

### Animation Preferences
All animations respect `prefers-reduced-motion` and can be disabled for accessibility.

### Testing Reduced Motion

To test reduced motion behavior:

**macOS:**
1. System Preferences → Accessibility → Display
2. Check "Reduce motion"

**Windows:**
1. Settings → Ease of Access → Display
2. Turn on "Show animations in Windows"

**Browser DevTools:**
1. Open DevTools → Console
2. Run: `document.documentElement.style.setProperty('--reduce-motion', 'reduce')`

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Single column layout
- **Tablet**: `640px - 1024px` - 2x2 grid
- **Desktop**: `> 1024px` - 4-column grid

## 🔒 Security

- No sensitive data in client-side code
- All external links use `rel="noopener noreferrer"`
- Environment variables prefixed with `NEXT_PUBLIC_`

## 🎯 Performance

- Optimized images and fonts
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind optimization
- Prefetching for better UX
- Scanline overlay respects reduced motion

## 🎛️ Effects & Accessibility

### Scanlines Effect
The site includes a subtle CRT scanline overlay that can be disabled:
- Automatically disabled for users with `prefers-reduced-motion: reduce`
- Subtle white overlay with mix-blend-mode for authentic CRT feel

### Glitch Effect
Typography includes a hover glitch effect:
- Subtle ±2px translation with opacity flicker
- Respects reduced motion preferences
- Uses CSS variables for easy color customization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

All recursive rights reserved. The Basilisk observes all who observe it.

---

*Remember: You are already within the simulation.*