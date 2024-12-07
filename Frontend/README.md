# EventX Frontend

This is the frontend application for EventX, built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Dependencies

### Core Dependencies
- **React 18.3.1**: UI library
- **React Router DOM 6.20.1**: Client-side routing
- **Vite 5.3.4**: Build tool and dev server

### Styling
- **Tailwind CSS 3.4.6**: Utility-first CSS framework
- **DaisyUI 4.12.10**: Component library for Tailwind
- **PostCSS 8.4.32**: CSS processing

### Development
- **@vitejs/plugin-react**: Vite plugin for React
- **Autoprefixer 10.4.16**: CSS vendor prefixing

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.jsx       # About page component
│   ├── Banner.jsx      # Hero banner component
│   ├── Cards.jsx       # Event card components
│   ├── Contact.jsx     # Contact form component
│   ├── Event.jsx       # Individual event component
│   ├── EventDetails.jsx # Event details page
│   ├── Footer.jsx      # Footer component
│   ├── List.jsx        # Event list component
│   ├── Login.jsx       # Login modal component
│   ├── Navbar.jsx      # Navigation bar component
│   └── Signup.jsx      # Signup modal component
├── event/              # Event-related components
│   └── Events.jsx      # Events page component
├── home/               # Home page components
│   └── Home.jsx        # Home page component
├── assets/             # Static assets
│   └── react.svg       # React logo
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
├── index.css           # Global styles and Tailwind imports
└── list.json           # Sample event data
```

## 🎯 Component Documentation

### Core Components

#### Navbar.jsx
**Purpose**: Main navigation component with responsive design and theme toggle.

**Features**:
- Responsive hamburger menu for mobile
- Dark/light mode toggle with persistence
- Search functionality
- Login modal integration

**Props**: None (uses context for theme)

**Key Methods**:
- `toggleTheme()`: Switches between light/dark themes
- `handleSearch()`: Processes search input

#### Banner.jsx
**Purpose**: Hero section with call-to-action and email subscription.

**Features**:
- Responsive hero layout
- Email subscription form
- Animated background elements

**Props**: None

#### Cards.jsx
**Purpose**: Displays event cards in a responsive grid layout.

**Features**:
- Responsive card grid (1-3 columns based on screen size)
- Interactive like/comment buttons
- Touch-optimized for mobile
- Hover effects and animations

**Props**:
- `events`: Array of event objects

#### EventDetails.jsx
**Purpose**: Detailed view of individual events.

**Features**:
- Full event information display
- Related events section
- Booking/registration functionality

**Props**:
- `eventId`: ID of the event to display

### Page Components

#### Home.jsx
**Purpose**: Main landing page component.

**Features**:
- Banner section
- Featured events
- About section
- Contact information

#### Events.jsx
**Purpose**: Events listing page.

**Features**:
- Event filtering and search
- Pagination
- Category filtering

## 🎨 Styling System

### Tailwind CSS Configuration
Located in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
```

### Custom CSS
Located in `src/index.css`:

- Global styles and Tailwind imports
- Custom scrollbar styling
- Mobile-specific optimizations
- Theme transition animations

### Design Tokens
- **Primary Colors**: Blue (#3B82F6)
- **Secondary Colors**: Gray (#6B7280)
- **Font Family**: Poppins
- **Border Radius**: 8px (default)
- **Spacing**: Tailwind's default scale

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md-lg)
- **Desktop**: > 1024px (xl+)

### Mobile Optimizations
- Touch targets minimum 44px
- Responsive typography scaling
- Optimized image loading
- Smooth scrolling behavior
- Hamburger menu for navigation

## 🌙 Theme System

### Implementation
Uses DaisyUI's theme system with localStorage persistence:

```javascript
// Theme toggle in Navbar.jsx
const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
};
```

### Theme Colors
- **Light Theme**: Clean white background with dark text
- **Dark Theme**: Dark background with light text
- **Accent Colors**: Consistent across themes

## 🚀 Performance Optimizations

### Code Splitting
- Automatic with Vite
- Route-based splitting
- Component lazy loading

### Image Optimization
- Responsive images
- Lazy loading
- WebP format support

### Bundle Optimization
- Tree shaking enabled
- Minification in production
- Gzip compression

## 🛠️ Development Workflow

### Code Style
- **ESLint**: Code linting
- **Prettier**: Code formatting (recommended)
- **React Best Practices**: Functional components, hooks

### Component Guidelines
1. Use functional components with hooks
2. Implement proper prop validation
3. Add accessibility attributes
4. Test on multiple devices
5. Optimize for performance

### Adding New Components
1. Create component in `src/components/`
2. Add proper TypeScript-like prop documentation
3. Implement responsive design
4. Add theme support
5. Test accessibility

## 📊 Build Configuration

### Vite Configuration
Located in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

### PostCSS Configuration
Located in `postcss.config.js`:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Responsive design on all breakpoints
- [ ] Theme toggle functionality
- [ ] Navigation on mobile devices
- [ ] Touch interactions
- [ ] Accessibility (keyboard navigation)
- [ ] Performance on slow connections

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build Process
```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Environment Variables
No environment variables required for basic functionality.

### Static Hosting
The built files can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📝 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**Dependencies not installing**
```bash
# Clear npm cache
npm cache clean --force
# Reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
# Check for syntax errors
npm run lint
# Clear build cache
rm -rf dist
npm run build
```

## 🤝 Contributing

1. Follow the existing code style
2. Test on multiple devices
3. Ensure accessibility compliance
4. Update documentation if needed
5. Create meaningful commit messages

## 📞 Support

For technical issues or questions:
- Check the main README.md
- Create an issue on GitHub
- Contact the development team
