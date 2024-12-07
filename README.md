# EventX - Event Management Platform

A modern, responsive event management platform built with React, Vite, and Tailwind CSS. Discover, create, and manage events with a beautiful, mobile-first design.

![EventX Platform](https://img.shields.io/badge/EventX-Platform-blue?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.3.4-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.6-38B2AC?style=for-the-badge&logo=tailwind-css)
![DaisyUI](https://img.shields.io/badge/DaisyUI-4.12.10-5A0EF8?style=for-the-badge)

## 🌟 Features

### ✨ Core Features
- **Event Discovery**: Browse and search through various events
- **Event Management**: Create and manage your own events
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Mobile-first approach with perfect mobile support
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Real-time Updates**: Live event updates and notifications

### 📱 Mobile-First Design
- **Fully Responsive**: Works perfectly on all device sizes
- **Touch-Optimized**: 44px minimum touch targets for mobile
- **Smooth Animations**: Optimized for mobile performance
- **Progressive Web App**: Can be installed as a mobile app

### 🎨 UI/UX Features
- **Modern Design**: Clean, professional interface
- **Accessibility**: WCAG compliant with proper focus states
- **Loading States**: Smooth loading animations
- **Interactive Elements**: Hover effects and transitions
- **Custom Scrollbars**: Styled scrollbars for better UX

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18.0.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sharjicodes/EVENTX.git
   cd EVENTX
   ```

2. **Install dependencies**
   ```bash
   npm run install-deps
   # or
   cd Frontend && npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   cd Frontend && npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📁 Project Structure

```
eventx-main/
├── Frontend/                 # Main React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── About.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── Cards.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Event.jsx
│   │   │   ├── EventDetails.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── List.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Signup.jsx
│   │   ├── event/           # Event-related components
│   │   ├── home/            # Home page components
│   │   ├── assets/          # Static assets
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # App entry point
│   │   └── index.css        # Global styles
│   ├── public/              # Public assets
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── package.json             # Root package.json
├── vercel.json             # Vercel deployment config
└── README.md               # This file
```

## 🛠️ Available Scripts

### Root Directory
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run install-deps # Install Frontend dependencies
```

### Frontend Directory
```bash
cd Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎯 Key Components

### Navbar
- **Responsive Navigation**: Mobile hamburger menu
- **Theme Toggle**: Dark/light mode with persistence
- **Search Functionality**: Real-time event search
- **User Authentication**: Login modal integration

### Banner
- **Hero Section**: Engaging call-to-action
- **Email Subscription**: Newsletter signup
- **Responsive Layout**: Adapts to all screen sizes

### Cards
- **Event Cards**: Display event information
- **Interactive Elements**: Like, comment, and share
- **Responsive Grid**: Auto-adjusts to screen size
- **Touch-Friendly**: Optimized for mobile interaction

## 🎨 Styling & Design

### Technologies Used
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind
- **Custom CSS**: Mobile-specific optimizations
- **Responsive Design**: Mobile-first approach

### Design System
- **Color Palette**: Consistent color scheme
- **Typography**: Poppins font family
- **Spacing**: Consistent spacing system
- **Components**: Reusable UI components

## 📱 Mobile Responsiveness

### Features
- **Touch Targets**: Minimum 44px for accessibility
- **Responsive Typography**: Scales appropriately
- **Flexible Layouts**: Adapts to screen size
- **Optimized Images**: Lazy loading and responsive sizing
- **Smooth Scrolling**: Touch-optimized scrolling

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark/Light Mode

### Features
- **Theme Persistence**: Saves user preference
- **Smooth Transitions**: Animated theme switching
- **Consistent Styling**: All components support both themes
- **Accessibility**: Proper contrast ratios

### Implementation
- Uses DaisyUI's theme system
- localStorage for persistence
- CSS custom properties for theming

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration
3. Deploy with zero configuration

### Manual Deployment
```bash
# Build the project
npm run build

# The built files will be in Frontend/dist/
# Deploy the contents of this folder to your hosting service
```

### Environment Variables
No environment variables required for basic functionality.

## 🛠️ Development

### Code Style
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (recommended)
- **React Best Practices**: Functional components, hooks

### Adding New Features
1. Create components in `Frontend/src/components/`
2. Add routes in `Frontend/src/App.jsx`
3. Update styling in `Frontend/src/index.css`
4. Test on multiple devices

## 📊 Performance

### Optimizations
- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: Images and components
- **Tree Shaking**: Unused code elimination
- **Minification**: Production builds are optimized

### Lighthouse Scores
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sharjith**
- GitHub: [@sharjicodes](https://github.com/sharjicodes)
- Project: [EventX](https://github.com/sharjicodes/EVENTX)

## 🙏 Acknowledgments

- **React Team**: For the amazing framework
- **Vite Team**: For the fast build tool
- **Tailwind CSS**: For the utility-first CSS framework
- **DaisyUI**: For the beautiful component library
- **Font Awesome**: For the icons

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Contact the author directly
- Check the documentation

---

⭐ **Star this repository if you found it helpful!**
