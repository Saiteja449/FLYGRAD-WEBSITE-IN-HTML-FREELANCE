# FlyGrad International Website — Pixel-Perfect Recreation

A faithful, production-ready, pixel-perfect recreation of the **FlyGrad International** overseas education and study-abroad guidance platform.

- **Reference URL**: [https://flygrad-international-222829.onhercules.app/](https://flygrad-international-222829.onhercules.app/)
- **Live Local Server**: `http://localhost:3000/`

---

## 1. Verified Design Tokens & Measurements

### Color Palette
- **Deep Navy (Brand Dark)**: `#061840` / `#061f52` / `oklch(24% 0.06 262)`
- **Primary Navy / Blue**: `#073B8C` (`theme-color`) / `#0756B8` (`oklch(47% 0.17 258)`)
- **Vibrant Cyan / Teal**: `#20B7E8` / `#7FD8F5`
- **Soft Background**: `#F4F9FF` (`light mode section alternate`)
- **Card Background**: `#FFFFFF` / `oklch(100% 0 0)`
- **Star Rating Gold**: `#F5B301`
- **Border / Divider**: `oklch(92% 0.02 250)`

### Typography
- **Primary Body / Sans**: `Inter`, ui-sans-serif, system-ui, sans-serif
- **Headings / Brand Display**: `Manrope`, ui-sans-serif, system-ui, sans-serif
- **Heading Scale**:
  - Hero H1: `text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08]`
  - Section H2: `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance`
  - Eyebrows: `text-xs font-semibold uppercase tracking-[0.2em] text-[#0756B8]`
  - Card H3: `text-xl font-bold` / `text-2xl font-bold`

### Layout Dimensions
- **Max Content Width**: `1240px` (`max-w-[1240px]`)
- **Stats Container**: `1100px` (`max-w-[1100px]`)
- **Horizontal Page Padding**: `px-5 sm:px-8 lg:px-8`
- **Vertical Section Spacing**: `py-20 lg:py-28`
- **Border Radius System**:
  - Cards & Images: `rounded-2xl` (`1rem`)
  - Hero Image & Feature Grids: `rounded-[2rem]` / `rounded-3xl` (`1.5rem` - `2rem`)
  - CTAs & Badges: `rounded-full`

---

## 2. Sections & Components Implemented

1. **Fixed Header & Responsive Navbar**
   - Shrinking header transition (`h-20` to `h-16`) on scroll (`window.scrollY > 24`).
   - Glassmorphism backdrop blur (`backdrop-blur-xl bg-background/80 shadow-sm`).
   - FlyGrad official brand transparent logo (`assets/images/Logo.png` / `assets/images/Logo-dark-bg.png`).
   - Desktop navigation links (`Home`, `About Us`, `Study Destinations`, `Services`, `Why FlyGrad`, `Contact`).
   - "Book a Free Consultation" gradient pill button.
   - Mobile hamburger menu toggle with drawer.

2. **Hero Section (`#home`)**
   - Decorative dashed flight path SVG curves in background.
   - Pill badge: `OVERSEAS EDUCATION GUIDANCE` with airplane icon.
   - Gradient heading: "Your **Global Education** Journey Starts Here."
   - Dual CTAs: Primary gradient button + Secondary destinations button.
   - Trust indicators: 4 checkmark features (Expert Counselling, University Guidance, Application Support, Visa Assistance).
   - Right hero image card with dark blue gradient overlay, glassmorphism badge ("Fly higher. Study global."), and floating badges.

3. **Stats Counter Strip**
   - Elevated card overlapping section border (`-mt-2`).
   - 4 animated metrics:
     - `100+` University Options
     - `10+` Study Destinations
     - `1,000+` Students Guided
     - `95%+` Student Satisfaction
   - Number counter animations triggered via IntersectionObserver.

4. **About FlyGrad Section (`#about`)**
   - Commencement graduates photograph with floating Book and Globe badges.
   - Eyebrow, heading with gradient text, detailed narrative.
   - 3 bullet items with checkmarks.
   - "Learn More" CTA button.
   - Animated dashed flight trail with airplane.

5. **Study Destinations Section (`#destinations`)**
   - 8 country cards: USA, United Kingdom, Canada, Australia, New Zealand, Germany, Ireland, Dubai / UAE.
   - High-resolution city skylines with hover zoom effect (`scale-110`).
   - Dark gradient overlays, blurbs, study area tags, and circular Explore arrow buttons.

6. **Why FlyGrad Section (`#why`)**
   - 6-card border-separated grid.
   - Features: Expert Counselling, University Selection, Application Assistance, Visa Guidance, Career-Focused Guidance, End-to-End Support.
   - Icon gradients and subtle card hover state transitions.

7. **Our Services Section (`#services`)**
   - 8 service cards: Career Counselling, Course Selection, University Selection, Application Assistance, Documentation Support, Visa Guidance, Scholarship Guidance, Pre-Departure Guidance.
   - Hover lift and cyan border highlights with "Learn More ->" arrow indicators.

8. **Student Journey Timeline**
   - 8 progressive steps:
     1. Free Consultation
     2. Profile Evaluation
     3. Course & University Selection
     4. Application Preparation
     5. Admission Support
     6. Visa Guidance
     7. Pre-Departure Support
     8. Begin Your Global Journey
   - Connecting dashed timeline and numbered step badges (`01` to `08`).

9. **CTA Banner**
   - Deep blue gradient card with curved flight paths.
   - Heading: "Ready to Start Your Global Education Journey?"
   - White consultation button + Phone expert button.

10. **Contact Section & Enquiry Form (`#contact`)**
    - Left: Interactive lead generation form (Name, Phone, Email, Destination dropdown, Preferred Course, Message).
    - Client-side validation with real-time error messages.
    - Floating toast notification upon submission: *"Thank you! Our team will contact you shortly."*
    - Right: Contact details (Phone & WhatsApp: `+91 96669 96155`, Email: `info@flygrad.com`, Office Address: `Near JNTU College, Hyderabad, Telangana`, Website: `flygrad.com`), 4 social media pill links (Instagram: `https://www.instagram.com/flyygrad_?cplk=aHRjMnV6NHY3c2Nw`, Facebook: `https://www.facebook.com/share/1JJazUNRUu/`, LinkedIn, YouTube), and Google Maps iframe embed.
    - Floating WhatsApp Enquiry button linking directly to `https://wa.me/919666996155`.

11. **Footer**
    - 4-column dark navy footer (`#061840`).
    - Brand description, updated social icons (Instagram & Facebook), Quick Links, Student Resources, Contact info (`+91 96669 96155`, WhatsApp link, `info@flygrad.com`, Near JNTU College address), and copyright strip.

---

## 3. Responsive Testing Viewports Verified

| Viewport | Dimensions | Result |
| :--- | :--- | :--- |
| **Desktop** | 1440 × 900 | Verified (Full layout, sticky glass header, 4-col grids) |
| **Laptop** | 1366 × 768 | Verified (Proportional scaling, no horizontal overflow) |
| **Tablet** | 768 × 1024 | Verified (2-col grid transitions, responsive padding) |
| **Mobile** | 390 × 844 | Verified (Single-col stack, hamburger navigation drawer) |
| **Small Mobile** | 360 × 800 | Verified (Fluid typography, accessible button targets) |

---

## 4. Directory Structure

```text
PRACTICE2/
│
├── index.html                  # Root landing page (entry point)
│
├── assets/                     # All styling and media assets
│   ├── css/
│   │   └── style.css           # Tailwind production stylesheet
│   └── images/                 # All high-res images & logos
│       ├── Logo.jpg
│       ├── hero.jpg
│       ├── about.jpg
│       └── ...
│
├── scripts/                    # All client-side JavaScript
│   ├── icons.js                # Phosphor & Lucide SVG icon provider
│   └── main.js                 # Interactions, animations & form handling
│
├── server.js                   # Lightweight Node.js local preview server
└── README.md
```

---

## 5. How to Open & Host Live

### Option A: Open directly in your browser (No server needed)
Simply **double-click** [index.html](file:///c:/Users/LENOVO/PRACTICE2/index.html) or open it with any web browser (Chrome, Edge, Safari, Firefox). All icons, animations, styles, and forms work immediately via the standard `file://` protocol.

### Option B: Deploy to your Web Server
Upload the contents of the project folder directly to your web server:
- **cPanel / Apache / Nginx / IIS**: Upload all files to your `public_html` or web root directory.
- **GitHub Pages / Vercel / Netlify**: Deploy the repository directly — `index.html` is at the root and all paths (`assets/`, `scripts/`) are relative.

### Option C: Run Local Node Server
```bash
node server.js
```
Then visit `http://localhost:3000/` in your browser.
