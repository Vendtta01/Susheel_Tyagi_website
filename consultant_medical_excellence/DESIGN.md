---
name: Consultant Medical Excellence
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#44474e'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#74777e'
  outline-variant: '#c4c6cf'
  surface-tint: '#4a5f81'
  primary: '#000d22'
  on-primary: '#ffffff'
  primary-container: '#0a2342'
  on-primary-container: '#768baf'
  inverse-primary: '#b2c7ef'
  secondary: '#7c5800'
  on-secondary: '#ffffff'
  secondary-container: '#ffc659'
  on-secondary-container: '#745200'
  tertiary: '#0a0d0e'
  on-tertiary: '#ffffff'
  tertiary-container: '#202324'
  on-tertiary-container: '#888a8b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b2c7ef'
  on-primary-fixed: '#021c3a'
  on-primary-fixed-variant: '#324768'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#f5bd52'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-padding-desktop: 120px
  section-padding-mobile: 60px
  gutter: 24px
  max-width: 1280px
---

## Brand & Style

The brand personality is established as authoritative, steady, and meticulously professional, reflecting the high-stakes environment of a Senior Consultant Physician. It balances a clinical precision with a sense of warm, human-centric compassion. The target audience includes patients seeking specialist second opinions, medical peers looking for referral partners, and institutional stakeholders.

The design style is **Corporate / Modern** with a lean towards **Minimalism**. It uses high-contrast color blocks and expansive whitespace to create a sense of calm and clarity. Trust is communicated through structural stability, rigorous alignment, and the deliberate use of gold accents to denote excellence and "gold standard" care.

## Colors

This design system utilizes a palette rooted in tradition but executed with modern vitality. 

- **Primary (Deep Navy):** Used for headers, footers, and foundational structural elements to convey stability and intelligence.
- **Secondary (Gold/Amber):** Reserved strictly for high-priority calls to action, active states, and prestige elements like fellowship badges or star ratings.
- **Background (Crisp White):** The primary canvas color. It ensures maximum legibility and a sterile, clinical feel that is softened by the warm secondary accents.
- **Neutral (Slate Gray):** Used for body text and secondary information to maintain a softer contrast than pure black, reducing eye strain for older patients.

## Typography

The typographic scale emphasizes a clear hierarchy between academic authority and modern accessibility. 

**Headlines:** Utilize *Playfair Display*. Its high-contrast strokes and elegant serifs evoke the prestige of medical journals and historical expertise. Headlines should be set in the primary navy color to ground the page.

**Body & Interface:** Utilize *Inter*. This provides a high-functioning, neutral clarity for complex medical information. It is chosen for its exceptional legibility at small sizes and its professional, "no-nonsense" aesthetic.

**Labels:** Small caps or uppercase treatments with slightly increased letter spacing should be used for section eyebrows (e.g., "SPECIALTIES" or "FELLOWSHIPS") to provide a clear navigational anchor.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop and a fluid single-column layout for mobile. 

- **Desktop:** A 12-column grid with a 1280px max-width. Large sections of text should typically be restricted to 8 columns to maintain optimal line length for readability.
- **Whitespace:** Emphasize vertical rhythm with generous padding between sections (120px) to allow the content to "breathe" and reduce cognitive load for users who may be in a stressed state.
- **Mobile:** Margins are reduced to 20px with a focus on stackable components and accessible touch targets (minimum 48px height).

## Elevation & Depth

Visual hierarchy is established through **Ambient Shadows** and clean layering rather than aggressive color blocks. 

- **Surfaces:** Cards and containers use a subtle 1px border (#E2E8F0) combined with a soft, diffused shadow (0px 10px 30px rgba(10, 35, 66, 0.05)). This makes components appear to float gently above the crisp white background.
- **Hover States:** Interactive elements should see a slight elevation increase (shadow deepening) and a transition to the gold accent color.
- **Glassmorphism:** Use sparingly for navigation bars (80% white with 20px blur) to ensure content remains visible while scrolling without losing the clean, clinical feel.

## Shapes

The shape language is conservative and structured. A **Soft** roundedness level (0.25rem / 4px) is applied to buttons and input fields to feel modern and approachable without appearing "bubbly" or informal. 

Medical badges and trust signals (like Board Certifications) may use circular containers to differentiate them from functional UI components. Portrait photography should use sharp corners or very large radii (1rem) to maintain a professional, architectural quality.

## Components

**Buttons:** 
- *Primary:* Solid Deep Navy with White text. On hover, transitions to Gold.
- *Secondary:* Outline (2px) Deep Navy or Gold for less critical actions like "Download CV."

**Cards:** 
White background with the defined ambient shadow. Use a thin Gold top-border (2px) for cards highlighting special awards or testimonials to distinguish them as "premium" content.

**Inputs & Forms:** 
Minimalist design with 1px light gray borders. On focus, the border transitions to Deep Navy. Errors are communicated via a deep crimson, but success states use the Gold accent to maintain brand consistency.

**Trust Signals:** 
A specific "Badge" component for Fellowship logos. These should be rendered in grayscale by default and transition to their natural colors on hover, or remain in a consistent "Gold" monochromatic treatment to unify disparate medical logos into a cohesive design language.

**List Items:** 
Use Gold-colored checkmarks or bullet points to signify a list of services or expertise, reinforcing the "Gold Standard" narrative through small, repeatable details.