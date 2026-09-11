/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        zeak: {
          ink: '#101722',
          muted: '#627084',
          line: '#dfe4eb',
          blue: '#4d85ff',
          cyan: '#52dddc',
          violet: '#8e6cff',
          sand: '#f3f5f3',
          charcoal: '#111a25',
          // section surfaces
          white: '#f8f9fb',
          'sand-section': '#f0f3f1',
          'charcoal-section': '#17212d',
          'hero-dark': '#101925',
          // dark-surface text
          'dark-text': '#f6f8fb',
          'dark-body': '#aab7c9',
          'dark-muted': '#71849f',
          'dark-link': '#8ab3eb',
          // agent accent ramp
          'accent-blue': '#4c8dff',
          'accent-cyan': '#42cfd1',
          'accent-violet': '#9678ff',
          'accent-green': '#62c992',
          'accent-amber': '#d9a54a',
          'accent-slate': '#8394a8',
          // status
          success: '#54a18c',
          warning: '#bf9d5a',
          error: '#c28c48',
          // borders
          'border-dark': 'rgba(180, 201, 222, 0.18)',
          'border-featured': '#a7c7f4',
        },
      },
      fontSize: {
        'eyebrow': ['10px', { lineHeight: '1', letterSpacing: '0.17em' }],
        'meta': ['9px', { lineHeight: '1', letterSpacing: '0.12em' }],
        'caption': ['8px', { lineHeight: '1.3', letterSpacing: '0.1em' }],
      },
      borderRadius: {
        card: '12px',
        pill: '7px',
        tile: '8px',
      },
      boxShadow: {
        'card-hover': '0 16px 30px rgba(41, 66, 90, 0.1)',
        dropdown: '0 18px 45px rgba(16, 23, 34, 0.12)',
        'dark-panel': '0 25px 65px rgba(25, 46, 66, 0.14)',
        'assistant-window': '0 27px 80px rgba(0, 0, 0, 0.26)',
        'app-preview': '0 13px 30px rgba(41, 83, 137, 0.08)',
        'layer-glow': '0 0 45px rgba(68, 135, 255, 0.13), inset 0 0 34px rgba(77, 129, 237, 0.08)',
        'graph-center': '0 0 32px rgba(75, 138, 255, 0.34)',
        'integration-core': '0 0 0 13px rgba(87, 140, 223, 0.08), 0 0 40px rgba(59, 103, 177, 0.3)',
      },
      keyframes: {
        flow: {
          '0%': { left: '0', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
      animation: {
        flow: 'flow 2s infinite',
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [],
};
