

# Triforge Lab Portfolio Website

## Overview
A dark-themed, futuristic single-page portfolio website for Triforge Lab — a three-person tech collective specializing in development, cybersecurity, and design. The site uses the uploaded logo, Space Grotesk + Inter typography, and a cyan/violet accent palette on deep obsidian backgrounds.

## Sections & Layout

### 1. Navigation
- Fixed top nav with logo (uploaded image), nav links (About, Team, Services, Portfolio, Contact), and a glowing "Get in Touch" CTA button
- Glassmorphic background on scroll

### 2. Hero Section
- Center-aligned with animated particle/grid background (CSS-based, lightweight)
- "Triforge Lab" heading with gradient text (cyan → violet)
- Tagline: "Where Code, Security & Creativity Converge"
- Two CTAs: "Our Work" and "Get in Touch"
- Subtle floating glow orbs for depth

### 3. About Section
- Split layout: mission text on left, animated tech graphic/icon cluster on right
- Key stats or values displayed as glowing pill badges

### 4. Team Section — "The Trinity"
- Three profile cards in a grid
- Each card has a colored glow border matching their specialty:
  - **Reinhard** (Full Stack) — Blue glow
  - **Stephen** (Cybersecurity) — Cyan glow
  - **Eddy** (Design) — Violet glow
- Cards include name, role, description, and specialty icons
- Hover: glow intensifies + subtle scale

### 5. Services — Bento Grid
- 6 service cards in a bento-box layout (varying sizes)
- Glassmorphic cards with thin luminous borders
- Each card: icon, title, short description
- Services: Web Dev, Full Stack Apps, Cybersecurity, UI/UX, Graphic Design & Branding, Website Redesign

### 6. Portfolio / Project Showcase
- Large horizontal-scrolling cards or vertical grid with 3-4 placeholder projects
- Each card: project image placeholder, title, tags, description
- Hover: illuminate/scale effect

### 7. Why Choose Us
- 5 value propositions displayed as icon + text rows or a horizontal card strip
- Animated check/shield/gear icons

### 8. Contact Section
- Contact form (Name, Email, Message) with glowing focus states
- Social links / email display
- "Let's Build Something Together" heading

### 9. Footer
- Minimal footer with logo, copyright, and social links

## Design System
- **Colors**: #050505 background, #121214 cards, #00F2FF cyan accent, #8B5CF6 violet accent, white/slate text
- **Fonts**: Space Grotesk (headers), Inter (body) via Google Fonts
- **Effects**: Glassmorphism cards, scroll-triggered fade-in-up animations, glowing borders, particle background in hero
- **Responsive**: Mobile-first, all sections stack vertically on small screens

## Technical Approach
- Single-page React app with smooth scroll navigation
- CSS animations + intersection observer for scroll reveals
- Logo embedded from uploaded image
- All content hardcoded (no backend needed)

