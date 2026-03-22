<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0050?logo=framer&logoColor=white" alt="Framer Motion" />
</p>

# Pritesh Patil — Developer Portfolio

A high-performance, IDE-themed developer portfolio built with React. Designed from a custom Stitch MCP prototype, it features a terminal-inspired aesthetic with syntax-highlighted UI, glassmorphic cards, and smooth scroll-reveal animations.

## ✨ Features

- **Terminal-Inspired Hero** — macOS-style terminal window with `whoami` command, blinking cursor, and syntax-colored text
- **Bento Grid About Section** — Asymmetric card layout showcasing tech stack, problem-solving stats, and education
- **Git-Graph Experience Timeline** — Color-coded commit dots tracing career history
- **IDE-Tabbed Project Cards** — File-tab headers (`FinanceTracker.java`, `StockAnalyzer.py`) with hover glow effects
- **Animated Certifications** — `STDOUT >> SUCCESS` styled achievement cards
- **Contact Form** — Terminal-styled form with labeled inputs (`User_Identification`, `Contact_Endpoint`, `Message_Payload`)
- **Dot Grid Overlay** — Subtle radial-dot background texture across the entire page
- **Responsive Design** — Optimized for mobile, tablet, and desktop viewports
- **Smooth Animations** — Framer Motion scroll-reveal, hover effects, and staggered entrances

## 🛠️ Tech Stack

| Layer        | Technology                                                     |
| ------------ | -------------------------------------------------------------- |
| Framework    | [React 19](https://react.dev)                                 |
| Build Tool   | [Vite 8](https://vite.dev)                                    |
| Styling      | [Tailwind CSS 4](https://tailwindcss.com) (Vite plugin)       |
| Animations   | [Framer Motion 12](https://motion.dev)                        |
| Typography   | [Inter](https://rsms.me/inter/) + [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) |
| Icons        | [Material Symbols Outlined](https://fonts.google.com/icons)   |

## 📁 Project Structure

```
src/
├── sections/
│   ├── Navbar.jsx          # Sticky IDE-style tab navigation
│   ├── Hero.jsx            # Terminal window with whoami command
│   ├── About.jsx           # Bento grid (tech stack, stats, education)
│   ├── Experience.jsx       # Git-graph timeline
│   ├── Projects.jsx         # IDE-tabbed project cards
│   ├── Certifications.jsx   # STDOUT >> SUCCESS achievement cards
│   ├── Contact.jsx          # 2-column contact form
│   └── Footer.jsx           # Versioned footer with status
├── App.jsx                 # Main app shell
├── main.jsx                # React entry point
└── index.css               # Tailwind theme tokens + custom utilities
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20.19 (or 22.12+)
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/pritesh-dev/pritesh-dev-portfolio.git
cd pritesh-dev-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## 🎨 Design System

The design follows **"The Synthetic Architect"** — an IDE-inspired dark theme with neon syntax-highlighting accents.

| Token                  | Value       | Usage                            |
| ---------------------- | ----------- | -------------------------------- |
| `primary`              | `#53ddfc`   | CTAs, active states, links       |
| `secondary`            | `#c180ff`   | Navigation accents, keywords     |
| `tertiary`             | `#e7ffc4`   | Success states, decorative       |
| `background`           | `#060e20`   | Page background                  |
| `surface-container-high` | `#141f38` | Cards, elevated panels           |
| `on-surface`           | `#dee5ff`   | Primary text                     |
| `on-surface-variant`   | `#a3aac4`   | Secondary/muted text             |

> Full design specification available in [`DESIGN.md`](./DESIGN.md)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <sub>Built with precision by <strong>Pritesh Patil</strong></sub><br/>
  <sub>STATUS: <strong style="color: #e7ffc4;">SYSTEM_READY</strong></sub>
</p>
