# DeepSeek Design Intelligence Skill: Vanilla Web Stack

## System Constraints

- STACK: Strictly Vanilla HTML5, CSS3, and modern native JavaScript (ES6+).
- UTILITY: If Tailwind CSS is requested, use the official, zero-install Tailwind Play CDN link in the HTML header.
- DEPENDENCIES: Zero npm packages. Do not write React components, Hooks, or Node build systems.

## Animation & Motion Rules

- TRICK: Replicate smooth Framer Motion-style physics without a heavy framework engine.
- TRANSITIONS: For simple hovers and transforms, use native CSS transitions with micro-animations.
- CURVES: Always use high-end cubic-bezier easing arrays instead of generic keywords (e.g., use `cubic-bezier(0.16, 1, 0.3, 1)` for clean spring momentum).
- SCROLL EFFECTS: For fade-ins or move-ups on scroll, write a lightweight, modular browser `Intersection Observer` script.
- PERFORMANCE: Use `will-change: transform, opacity;` on complex animated elements to leverage hardware acceleration.

## Visual & Grid System

- SPACING: Enforce a strict 8px/4px visual grid system across margins and paddings.
- LAYOUTS: Prioritize modern CSS Grid or Flexbox alignment. No hardcoded positioning.
- RESPONSIVENESS: Ensure mobile-first media queries are cleanly grouped at the bottom of the CSS blocks.
