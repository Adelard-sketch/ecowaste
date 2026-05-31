# EcoWaste – Professional Waste Management Solutions

A modern, responsive, and environmentally focused landing page for waste management and sustainability services.

## Overview

EcoWaste is a single-page website designed to showcase professional waste collection, recycling, and sustainability services. The project features a clean green-themed design, responsive layouts, animated statistics, smooth scrolling navigation, and an interactive contact form.

## Features

### Responsive Design
- Mobile-first responsive layout
- Hamburger navigation menu for smaller screens
- Optimized for desktop, tablet, and mobile devices

### Hero Section
- Full-screen background image
- Gradient overlay for improved readability
- Call-to-action buttons
- Feature highlight bar

### Animated Statistics
- Counter animations triggered on scroll
- Intersection Observer for performance optimization

### About Section
- Company introduction
- Feature cards with hover effects
- Modern card-based layout

### Services Section
- Four service offerings
- Interactive hover animations
- Clean grid layout

### Contact Section
- Contact information display
- Client-side form validation
- Success and error messaging

### Additional Enhancements
- Smooth scrolling navigation
- Header transparency and shadow effects on scroll
- Fade-in animations for content sections
- Modern typography using Google Fonts

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript (ES6)

### Fonts
- Playfair Display
- DM Sans

### Browser APIs
- Intersection Observer API
- FormData API
- Smooth Scroll API

---

## Project Structure

```text
EcoWaste/
│
├── index.html
├── styles.css
├── script.js
│
├── assets/
│   └── waste3.jpeg
│
└── README.md
```

---

## Installation

### Option 1: Open Directly

1. Download the project files.
2. Ensure the folder structure remains intact.
3. Open:

```text
index.html
```

in your browser.

### Option 2: Local Development Server

Using VS Code:

1. Install the Live Server extension.
2. Right-click:

```text
index.html
```

3. Select:

```text
Open with Live Server
```

---

## Customization

### Change Brand Name

Edit:

```html
<a href="#" class="logo">
    Ecowaste
</a>
```

and

```html
<span class="logo">EcoWaste</span>
```

inside the footer.

---

### Change Hero Background Image

Replace:

```html
<img src="assets/waste3.jpeg" alt="Professional waste management">
```

with your preferred image.

Place the image inside:

```text
assets/
```

---

### Update Statistics

Modify the values in:

```html
<span class="counter stat-number" data-target="1200">0</span>
```

Example:

```html
data-target="2500"
```

---

### Update Contact Information

Locate the Contact section and edit:

```html
123 Green Lane, Eco City, EC1 4AB
contact@ecowaste.com
+1 (800) 123-4567
```

with your actual details.

---

## JavaScript Functionality

### Counter Animation

Automatically counts up when statistics enter the viewport.

```javascript
const counters = document.querySelectorAll('.counter');
```

---

### Mobile Navigation

Handles opening and closing of the responsive menu.

```javascript
hamburger.addEventListener('click', ...)
```

---

### Contact Form Validation

Checks:

- Empty fields
- Email format

Displays success or error messages.

---

### Smooth Scrolling

Provides animated scrolling to page sections.

```javascript
window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
});
```

---

### Scroll-Based Header Styling

Adds:

- Background opacity
- Border
- Shadow

when the user scrolls.

---

## Performance Features

- Lazy-triggered animations
- Lightweight JavaScript
- No external frameworks
- Optimized SVG icons
- CSS transitions instead of heavy animation libraries

---

## Browser Support

Tested and compatible with:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Opera

Modern browsers supporting:

- Flexbox
- CSS Grid
- Intersection Observer API

---

## Future Improvements

Potential enhancements include:

- Backend contact form integration
- Email sending functionality
- Dark mode support
- Blog section
- Service booking system
- Customer testimonials
- CMS integration
- Multi-language support

---

## License

This project is free to use for:

- Personal projects
- Educational purposes
- Portfolio websites
- Small business websites

You may modify and customize it according to your needs.

---

## Author

Developed as a modern sustainability and waste management landing page template.

**EcoWaste © 2025**