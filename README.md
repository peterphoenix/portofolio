# Peter Phoenix - Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)

A modern, minimalist portfolio website built with React, Vite, and Tailwind CSS. Features dark mode, smooth animations, and a fully responsive design.

## ✨ Features

- 🎨 **Modern Design**: Clean and minimalist interface with smooth animations
- 🌓 **Dark Mode**: Toggle between light and dark themes with persistent preference
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- 🍔 **Mobile Navigation**: Intuitive hamburger menu for mobile browsing
- ⚡ **Fast Performance**: Built with Vite for lightning-fast load times
- 🎭 **Scroll Animations**: Elements fade in beautifully as you scroll
- 📄 **CV Download**: One-click resume download functionality
- ♿ **Accessible**: Semantic HTML and ARIA labels for better accessibility

### Sections

- **Hero**: Eye-catching landing with animated gradient text and status badge
- **Experience**: Timeline of work history with detailed highlights
- **Projects**: Showcase of featured projects with live links
- **Education**: Academic background and activities
- **Skills**: Organized display of technologies and tools
- **Awards**: Recognition and achievements
- **Contact**: Easy ways to get in touch

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
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
   - Navigate to `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

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
- `skills`: Technologies you work with
- `awards`: Recognition and achievements

### Customize Styling

**Colors and Theme**
- Edit `tailwind.config.js` to change color scheme
- Modify `src/index.css` for custom animations
- Use Tailwind's `dark:` modifier for dark mode colors

**Animations**
- Custom animations defined in `src/index.css`
- Scroll animations use Intersection Observer (see `src/hooks/useScrollAnimation.js`)

### Dark Mode

Dark mode is implemented using:
- React Context API (`src/context/DarkModeContext.jsx`)
- Tailwind CSS dark mode (class strategy)
- LocalStorage for persistence
- Automatic system preference detection

## 📁 Project Structure

```
portfolio-site/
├── public/
│   ├── resume.pdf              # Your CV (add your own)
│   └── vite.svg               # Favicon
├── src/
│   ├── components/            # React components
│   │   ├── Navigation.jsx     # Nav bar with mobile menu & dark mode
│   │   ├── Hero.jsx          # Landing section
│   │   ├── Experience.jsx    # Work experience timeline
│   │   ├── Projects.jsx      # Project showcase
│   │   ├── Education.jsx     # Education section
│   │   ├── Skills.jsx        # Skills display
│   │   ├── Awards.jsx        # Awards & recognition
│   │   └── Contact.jsx       # Contact information
│   ├── context/
│   │   └── DarkModeContext.jsx # Dark mode state
│   ├── hooks/
│   │   └── useScrollAnimation.js # Scroll animation hook
│   ├── data/
│   │   └── portfolioData.js  # All content (UPDATE THIS!)
│   ├── App.jsx               # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & animations
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── LICENSE
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com/)
3. Vercel auto-detects Vite
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-site)

### Netlify

1. Push to GitHub
2. Connect repo to [Netlify](https://netlify.com/)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/portfolio-site)

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Other Platforms

Works with any static hosting:
- **Cloudflare Pages**
- **Render**
- **Firebase Hosting**
- **AWS S3 + CloudFront**

## 🛠️ Technologies

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library |
| **Vite 5** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first CSS framework |
| **PostCSS** | CSS processing |
| **ESLint** | Code linting |
| **Context API** | State management |
| **Intersection Observer** | Scroll animations |

## 🎯 Performance

- ⚡ Lighthouse Score: 95+
- 📦 Optimized bundle size
- 🚀 Fast page loads with Vite
- 🎨 Smooth 60fps animations
- 📱 Mobile-first responsive design

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Fork it for your own use
- Submit issues for bugs
- Suggest improvements via PRs

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Inspiration & Credits

- Design inspired by modern portfolio trends
- Built with modern React best practices
- Animations crafted for smooth UX

## 📬 Contact

**Peter Phoenix**
- Email: peterphoenix00@gmail.com
- LinkedIn: [linkedin.com/in/peter-phoenix](https://linkedin.com/in/peter-phoenix)

---

⭐ **Star this repo** if you found it helpful!

Made with ❤️ by Peter Phoenix
