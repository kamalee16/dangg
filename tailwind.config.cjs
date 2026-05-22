const path = require('path');

/**
 * OFFICIAL project theme — see frontend/DESIGN_SYSTEM.md
 * Enterprise SaaS: slate neutrals + indigo-600 primary. Do not change without updating DESIGN_SYSTEM.md.
 */
module.exports = {
  darkMode: 'class',
  content: [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
    path.join(__dirname, 'src/**/*.css'),
  ],
  theme: {
    extend: {
      colors: {
        /* Brand — deep indigo / blue-violet */
        primary: '#4f46e5',
        'on-primary': '#ffffff',
        'primary-container': '#4338ca',
        'on-primary-container': '#ffffff',
        'primary-fixed': '#e0e7ff',
        'primary-fixed-dim': '#c7d2fe',
        'on-primary-fixed': '#312e81',
        'on-primary-fixed-variant': '#3730a3',
        'inverse-primary': '#a5b4fc',
        'surface-tint': '#4f46e5',

        /* Secondary — corporate blue (informational series) */
        secondary: '#2563eb',
        'on-secondary': '#ffffff',
        'secondary-container': '#1d4ed8',
        'on-secondary-container': '#ffffff',
        'secondary-fixed': '#dbeafe',
        'secondary-fixed-dim': '#bfdbfe',
        'on-secondary-fixed': '#1e3a8a',
        'on-secondary-fixed-variant': '#1d4ed8',

        /* Tertiary — restrained amber (pending metrics only) */
        tertiary: '#b45309',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#d97706',
        'on-tertiary-container': '#ffffff',
        'tertiary-fixed': '#fef3c7',
        'tertiary-fixed-dim': '#fde68a',
        'on-tertiary-fixed': '#78350f',
        'on-tertiary-fixed-variant': '#92400e',

        /* Surfaces — cool neutral grays (no lavender) */
        background: '#f8fafc',
        'on-background': '#0f172a',
        surface: '#ffffff',
        'surface-bright': '#ffffff',
        'surface-dim': '#e2e8f0',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f8fafc',
        'surface-container': '#f1f5f9',
        'surface-container-high': '#e2e8f0',
        'surface-container-highest': '#cbd5e1',
        'surface-variant': '#e2e8f0',

        /* Typography */
        'on-surface': '#0f172a',
        'on-surface-variant': '#64748b',

        /* Borders */
        outline: '#64748b',
        'outline-variant': '#e2e8f0',

        /* Inverse / dark shell */
        'inverse-surface': '#1e293b',
        'inverse-on-surface': '#f8fafc',

        /* Error */
        error: '#dc2626',
        'on-error': '#ffffff',
        'error-container': '#fee2e2',
        'on-error-container': '#991b1b',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        stack_md: '1rem',
        sidebar_width: '240px',
        container_padding: '2rem',
        stack_sm: '0.5rem',
        stack_lg: '1.5rem',
        gutter: '1.5rem',
      },
      fontFamily: {
        'headline-lg': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'label-md': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'label-sm': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'headline-md': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'body-lg': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'body-md': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'headline-lg': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
        display: ['30px', { lineHeight: '38px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'label-sm': ['11px', { lineHeight: '14px', fontWeight: '500' }],
        'headline-md': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-md': ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      maxWidth: {
        shell: '80rem',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(15 23 42 / 0.05)',
        'card-hover': '0 4px 6px -1px rgb(15 23 42 / 0.08), 0 2px 4px -2px rgb(15 23 42 / 0.06)',
        header: '0 1px 0 0 rgb(15 23 42 / 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
