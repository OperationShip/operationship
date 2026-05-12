/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        operation: {
          dark: '#0A0A0A',      
          panel: '#171717',     
          glass: 'rgba(23, 23, 23, 0.6)', 
          border: '#262626',    
          accent: '#3B82F6',    
          danger: '#EF4444',    
          ghost: 'rgba(255, 255, 255, 0.05)', 
        }
      },
      backdropBlur: {
        glass: '12px',
      }
    },
  },
  plugins: [],
}
