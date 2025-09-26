# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Smart Crop Advisory System is an AI-powered multilingual web application designed to empower small and marginal farmers with agricultural intelligence. This React-based single-page application provides personalized, real-time advisory services in multiple languages, addressing critical gaps in farming knowledge for 86% of Indian farmers who are small or marginal.

**Problem Statement ID:** 25010

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (runs on port 3000, auto-opens browser)
- `npm run build` - Build for production (outputs to `dist/` directory)
- `npm run preview` - Preview production build locally
- `npm install` - Install all project dependencies

### Code Quality
- `npm run lint` - Run ESLint on JavaScript/JSX files
- `npm run format` - Format code using Prettier

### Development Server
The Vite development server runs on port 3000 and automatically opens in the browser. Hot module replacement is enabled for fast development iteration.

## Technology Stack & Architecture

### Core Technologies
- **React 18** - Modern functional components with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom agricultural color palette
- **Lucide React** - Consistent icon system throughout the app

### Supporting Libraries
- **Axios** - HTTP client for API requests (future API integration)
- **React Router DOM** - Client-side routing (ready for multi-page expansion)
- **Framer Motion** - Smooth animations and transitions
- **Headless UI** - Accessible UI components

### Application Architecture

**Single Page Application Structure:**
- **Entry Point**: `src/main.jsx` - React DOM root mounting
- **Main Component**: `src/App.jsx` - Contains entire application logic and UI
- **Styling**: `src/index.css` - Global styles, Tailwind imports, and custom component classes

**Current Architecture Pattern:**
The application follows a **monolithic component architecture** where the entire UI is contained within a single `App.jsx` component. This is suitable for the current scope but should be refactored as features expand.

### Key Architectural Decisions

**Multilingual Support:**
- Language state management using React `useState`
- Language objects stored locally in component state
- Currently supports English (`en`) and Hindi (`hi`)
- Designed for easy expansion to Bengali, Tamil, and other regional languages

**Styling System:**
- Custom Tailwind theme with agricultural color palette (primary green, accent yellow)
- Component-based CSS classes defined in `index.css`
- Responsive-first design with mobile optimization
- Custom animations for fade-in and slide-up effects

**Icon Strategy:**
- Consistent use of Lucide React icons throughout
- Icons semantically matched to features (Leaf for agriculture, Cloud for weather, etc.)

## Future Development Considerations

### Recommended Refactoring
When expanding features, consider breaking down `App.jsx` into:
- Individual page components (`src/pages/`)
- Reusable UI components (`src/components/`)
- Custom hooks for state management (`src/hooks/`)
- Utility functions (`src/utils/`)
- API service layers for backend integration

### Multilingual Expansion
- Implement proper i18n library (react-i18next) when adding more languages
- Separate language files from component logic
- Add right-to-left (RTL) support for applicable languages

### Feature Integration Points
- **Weather API**: Integration ready via axios for real-time weather data
- **Pest Detection**: Image upload infrastructure needed for AI-powered analysis
- **Market Prices**: API endpoints for real-time commodity pricing
- **Voice Support**: Web Speech API integration for accessibility features

## Design System

### Color Palette
- **Primary (Green)**: Agricultural theme, sustainability focus
- **Accent (Yellow/Orange)**: Warmth, growth, harvest associations
- **Custom Tailwind Classes**: `.btn-primary`, `.btn-secondary`, `.card`, `.gradient-bg`

### Typography
- **Multi-font Support**: Noto Sans fonts for Devanagari, Bengali, Tamil scripts
- **Base Font**: Inter for English content
- **Accessibility**: High contrast ratios, scalable text sizes

### Component Patterns
- **Cards**: Consistent shadow and hover effects
- **Buttons**: Primary (green) and secondary (accent) variants
- **Gradients**: Agricultural green gradient for hero sections
- **Animations**: Subtle fade-in and slide-up transitions

## Key Features & Implementation

### Current Features
1. **Responsive Navigation** - Mobile hamburger menu, language selector
2. **Multilingual Content** - English/Hindi toggle, expandable language system
3. **Feature Showcase** - Six key agricultural features with iconography
4. **Statistics Display** - Data-driven farmer impact metrics
5. **Stakeholder Information** - Target audience and beneficiary details
6. **Contact Information** - Footer with project details and contact info

### Development Patterns
- **State Management**: Local React state for UI interactions
- **Event Handling**: onClick handlers for menu toggle, language switching
- **Responsive Design**: Mobile-first CSS Grid and Flexbox layouts
- **Accessibility**: Semantic HTML structure, keyboard navigation support

## Performance Considerations

### Build Optimization
- Vite's fast HMR for development
- Tree-shaking and code splitting in production builds
- Optimized asset bundling and compression

### Font Loading
- Google Fonts preconnect for faster typography loading
- Multiple language font families loaded asynchronously

## Testing Strategy

Currently no testing framework is configured. Consider adding:
- **Jest + React Testing Library** for unit and integration tests
- **Cypress** or **Playwright** for end-to-end testing
- **Accessibility testing** with tools like axe-core

## Deployment Notes

### Build Output
- Production builds output to `dist/` directory
- Static files ready for deployment to any web server
- Vite's preview command allows local production testing

### Environment Requirements
- Node.js version 16 or higher
- Modern browser support for React 18 features
- No server-side requirements (pure client-side application)