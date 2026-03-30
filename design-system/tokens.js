/**
 * Overnight – Design Tokens (JavaScript / TypeScript)
 * Framework-agnostic. Import these into your app for use in
 * styled-components, CSS-in-JS, Tailwind config, etc.
 */

export const colors = {
  indigo: {
    50:  '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  purple: {
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
  },
  gray: {
    50:  '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  white: '#ffffff',
  black: '#000000',
  success: '#22c55e',
  warning: '#fbbf24',
  error:   '#ef4444',
};

export const semantic = {
  bg:            colors.gray[950],
  bgSecondary:   colors.gray[900],
  text:          colors.white,
  textSecondary: colors.gray[400],
  textMuted:     colors.gray[500],
  textDisabled:  colors.gray[600],
  border:        'rgb(255 255 255 / 0.08)',
  borderSubtle:  'rgb(255 255 255 / 0.06)',
  primary:       colors.indigo[600],
  primaryHover:  colors.indigo[500],
  accent:        colors.purple[600],
};

export const gradients = {
  logo:             `linear-gradient(135deg, ${colors.indigo[400]}, ${colors.purple[400]})`,
  text:             `linear-gradient(135deg, ${colors.indigo[300]} 0%, ${colors.purple[400]} 50%, ${colors.indigo[400]} 100%)`,
  btnPrimary:       `linear-gradient(135deg, ${colors.indigo[600]}, ${colors.purple[600]})`,
  btnPrimaryHover:  `linear-gradient(135deg, ${colors.indigo[500]}, ${colors.purple[500]})`,
  cardFeatured:     `linear-gradient(160deg, rgb(99 102 241 / 0.08) 0%, ${colors.gray[900]} 60%)`,
  cardHover:        'linear-gradient(135deg, rgb(99 102 241 / 0.04), transparent)',
  logoBg:           `linear-gradient(135deg, ${colors.indigo[950]}, ${colors.indigo[900]})`,
};

export const typography = {
  fontSans: "'Inter', system-ui, -apple-system, sans-serif",
  fontMono: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace",

  fontWeight: {
    light:     300,
    regular:   400,
    medium:    500,
    semibold:  600,
    bold:      700,
    extrabold: 800,
    black:     900,
  },

  // Fluid sizes (use in CSS clamp())
  fontSize: {
    hero:       'clamp(44px, 7vw, 80px)',
    section:    'clamp(28px, 4vw, 48px)',
    demo:       'clamp(32px, 4vw, 52px)',
    step:       'clamp(24px, 3vw, 32px)',
    heroSub:    'clamp(17px, 2.2vw, 20px)',
    sectionSub: 'clamp(16px, 2vw, 18px)',
    // Fixed
    price:        '44px',
    stat:         '36px',
    planName:     '20px',
    featureTitle: '17px',
    navLogo:      '18px',
    body:         '16px',
    small:        '15px',
    caption:      '14px',
    label:        '13px',
    xs:           '12px',
  },

  lineHeight: {
    tight:   1.05,
    heading: 1.15,
    snug:    1.3,
    normal:  1.5,
    relaxed: 1.6,
    loose:   1.7,
  },

  letterSpacing: {
    hero:       '-0.04em',
    section:    '-0.02em',
    demo:       '-0.03em',
    price:      '-0.03em',
    label:       '0.08em',
    footerTitle: '0.04em',
  },
};

export const radii = {
  sm:   '6px',
  md:   '10px',
  lg:   '16px',
  xl:   '24px',
  full: '9999px',
};

export const shadows = {
  sm:   '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md:   '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg:   '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl:   '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  glow: '0 0 60px -10px rgb(99 102 241 / 0.4)',
  btnPrimary:       '0 0 30px -5px rgb(99 102 241 / 0.5)',
  btnPrimaryHover:  '0 0 40px -5px rgb(99 102 241 / 0.7)',
  heroFrame:        '0 0 0 1px rgb(99 102 241 / 0.2), 0 40px 80px -20px rgb(0 0 0 / 0.6), 0 0 60px -10px rgb(99 102 241 / 0.4)',
  cardFeatured:     '0 0 60px -20px rgb(99 102 241 / 0.3)',
};

export const transitions = {
  fast:   '0.2s ease',
  normal: '0.25s ease',
  slow:   '0.3s ease',
};

export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '900px',
  xl: '1024px',
};

export const spacing = {
  containerPadSm: '24px',
  containerPadMd: '32px',
  containerPadLg: '48px',
  navHeight:      '64px',
  // Common padding values
  cardPadding:    '32px 28px',
  pricingPadding: '36px 32px',
  btnPadding:     '12px 24px',
  btnPaddingLg:   '14px 28px',
  btnPaddingSm:   '8px 18px',
  badgePadding:   '4px 12px',
  inputPadding:   '10px 14px',
};

/** Tailwind v3 theme extension – paste into tailwind.config.js */
export const tailwindThemeExtension = {
  colors: {
    indigo: colors.indigo,
    purple: colors.purple,
    gray:   colors.gray,
  },
  fontFamily: {
    sans: ["'Inter'", 'system-ui', '-apple-system', 'sans-serif'],
    mono: ["'Cascadia Code'", "'Source Code Pro'", 'Menlo', 'monospace'],
  },
  borderRadius: {
    sm:   radii.sm,
    md:   radii.md,
    lg:   radii.lg,
    xl:   radii.xl,
    full: radii.full,
  },
  boxShadow: {
    sm:           shadows.sm,
    md:           shadows.md,
    lg:           shadows.lg,
    xl:           shadows.xl,
    glow:         shadows.glow,
    btnPrimary:   shadows.btnPrimary,
    cardFeatured: shadows.cardFeatured,
  },
  screens: breakpoints,
};
