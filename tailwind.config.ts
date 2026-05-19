import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS v4 configuration for the Nexus portal.
 *
 * - Dark mode is enabled via the "class" strategy so we can toggle it
 *   on the <html> element (Next.js already adds a "dark" class when the
 *   user prefers dark mode).
 * - Custom color palette includes deep dark shades and vibrant accent
 *   colors for the gamified tech portal.
 * - Light‑mode tokens are also defined for a crisp appearance.
 */
const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark‑mode base tones
        darkBackground: '#0a0a0a', // deep black slate
        darkForeground: '#e0e0e0', // light gray for text
        darkSlate: '#1e1e2f',
        darkPurple: '#2e1a47',
        deepGray: '#111111',
        // Light‑mode base tones
        lightBackground: '#ffffff',
        lightForeground: '#171717',
        // Accent palette – neon / cyber colours
        neonPurple: '#c200ff',
        cyberCyan: '#00ffff',
        emerald: '#50c878',
      },
    },
  },
  plugins: [],
};

export default config;
