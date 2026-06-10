# Peter Phoenix - Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)

A terminal-inspired "dark engineering" portfolio built with React, Vite, and Tailwind CSS. Near-black canvas, one electric green accent, monospace details, and motion-powered animations.

## ✨ Features

- 🖥️ **Interactive Terminal Hero**: `$ whoami` prompt window — click or press `/` and actually type commands (`help`, `ls projects`, `cat resume.pdf`, `sudo hire-me`)
- ✨ **Micro-interactions**: cursor spotlight on the hero dot-grid, scramble-decode section headings, 3D tilt on project cards
- 🟢 **Dark Engineering Aesthetic**: Single dark theme with phosphor-green accents and glowing borders
- 📜 **Git-log Experience Timeline**: Commit nodes with a `HEAD` tag on the current role and diff-style `+` highlights
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- 🎭 **Scroll Animations**: Sections reveal in-view via `motion` (Framer Motion successor), with full `prefers-reduced-motion` support
- 📄 **CV Download**: One-click resume download functionality
- ♿ **Accessible**: Semantic HTML, ARIA labels, visible focus rings, AA contrast
- ⚡ **Fast**: Self-hosted variable fonts, `LazyMotion` code-splitting, Vite build

### Sections

- **Hero**: Terminal window with prompt-style intro and status badge
- **Experience**: Git-log style timeline of work history
- **Projects**: File-card showcase (`~/projects/<slug>`) with live links
- **Education**: Academic background and activities
- **Skills**: `$ ls -la ./skills` terminal panel of technologies
- **Awards**: Recognition and achievements
- **Contact**: `$ ping peter --interactive`

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/peterphoenix/portofolio.git
   cd portofolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your resume** (optional)
   ```bash
   cp "path/to/your/resume.pdf" public/resume.pdf
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173/portofolio/`

### Building for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder. Preview with `npm run preview`.

## 🎨 Customization

### Update Your Information

All portfolio content is centralized in `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1234567890",
  linkedin: "linkedin.com/in/yourprofile",
  bio: "Your bio here..."
};
```

Update the following sections:
- `personalInfo`: Name, title, contact info, bio
- `experience`: Work history and achievements
- `projects`: Your projects with links and highlights
- `education`: Academic background
- `skills` + `skillCategories`: Technologies you work with
- `awards`: Recognition and achievements

### Customize Styling

- Design tokens (`ink`, `text`, `accent` colors, glow shadows, keyframes) live in `tailwind.config.js`
- Global styles (selection color, scrollbar, focus rings, reduced motion) in `src/index.css`
- Shared animation variants in `src/lib/motionVariants.js`
- Fonts: JetBrains Mono + Space Grotesk variable fonts, self-hosted via Fontsource (imported in `src/main.jsx`)

## 📁 Project Structure

```
portofolio/
├── public/
│   ├── resume.pdf                 # Your CV (add your own)
│   └── favicon.svg                # Terminal-style favicon
├── src/
│   ├── components/
│   │   ├── Navigation.jsx         # Indexed nav, active-section tracking, mobile menu
│   │   ├── ScrollProgress.jsx     # Accent scroll progress bar
│   │   ├── Hero.jsx               # Terminal window hero
│   │   ├── Experience.jsx         # Git-log timeline
│   │   ├── Projects.jsx           # File cards
│   │   ├── Education.jsx          # Education card
│   │   ├── Skills.jsx             # ls -la terminal panel
│   │   ├── Awards.jsx             # Award cards
│   │   ├── Contact.jsx            # Contact section
│   │   ├── Footer.jsx             # $ exit 0
│   │   └── ui/
│   │       ├── SectionHeading.jsx # 01. Heading // slug
│   │       └── LinkedinIcon.jsx   # Local brand icon
│   ├── hooks/
│   │   ├── useActiveSection.js    # IntersectionObserver nav highlighting
│   │   └── useTypewriter.js       # Typing animation (reduced-motion aware)
│   ├── lib/
│   │   └── motionVariants.js      # Shared animation variants
│   ├── data/
│   │   └── portfolioData.js       # All content (UPDATE THIS!)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🌐 Deployment

Deploys automatically to **GitHub Pages** on push to `main` via `.github/workflows/deploy.yml`. The Vite `base` is set to `/portofolio/` in `vite.config.js` — change it if your repo name differs.

Also works on any static host (Vercel, Netlify, Cloudflare Pages) — build command `npm run build`, publish directory `dist` (set `base: '/'` for root-domain hosting).

## 🛠️ Technologies

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library |
| **Vite 5** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first CSS framework |
| **motion** | Animations (`LazyMotion` + `m` for a small bundle) |
| **lucide-react** | Icons |
| **Fontsource** | Self-hosted JetBrains Mono & Space Grotesk variable fonts |

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

**Peter Phoenix**
- Email: peterphoenix00@gmail.com
- LinkedIn: [linkedin.com/in/peter-phoenix](https://linkedin.com/in/peter-phoenix)

---

⭐ **Star this repo** if you found it helpful!

Made with ❤️ by Peter Phoenix
