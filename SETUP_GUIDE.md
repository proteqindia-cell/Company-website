## ProTeQ India - React Project Setup

This project has been converted from vanilla HTML/CSS to a modern, scalable React application with component-based architecture.

### Project Structure

```
protechQ/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ChatWidget.jsx
│   │   ├── ChatWidget.css
│   │   ├── ThemeToggle.jsx
│   │   ├── ThemeToggle.css
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── Features.jsx
│   │       ├── Courses.jsx
│   │       ├── Stats.jsx
│   │       ├── Internships.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Partners.jsx
│   │       ├── FAQ.jsx
│   │       └── sections.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── VisionPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── pages.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Key Improvements

1. **Component-Based Architecture** - Reusable components for better maintainability
2. **Separated Concerns** - Each component has its own CSS file
3. **Page-Based Organization** - Distinct pages for different sections
4. **State Management** - Using React hooks for navigation and theme
5. **No Emojis** - Cleaner, more professional appearance
6. **Responsive Design** - Mobile-first approach
7. **Performance Optimized** - Lazy loading and efficient re-renders

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Server will start at `http://localhost:5173`

### Build

```bash
npm run build
```

### Features

- Smooth navigation between pages
- Dark/Light theme toggle
- Chat widget for support
- Responsive design
- Counter animations on home page
- FAQ accordion
- Contact form with validation

### Components Created

- **Navigation** - Fixed header with mobile menu
- **Footer** - Multi-column footer with links
- **ChatWidget** - AI-powered chat assistant
- **ThemeToggle** - Dark/Light mode switcher
- **Hero** - Landing section with CTA buttons
- **Features** - Service cards display
- **Courses** - Professional certification showcase
- **Stats** - Impact statistics
- **Internships** - Internship programs listing
- **Testimonials** - Student success stories
- **Partners** - Partnership network
- **FAQ** - Frequently asked questions
- **Pages** - HomePage, AboutPage, VisionPage, ContactPage

### Next Steps

1. Replace placeholder data with actual content
2. Connect to backend API for contact forms
3. Add analytics tracking
4. Implement SEO optimization
5. Add more pages as needed
