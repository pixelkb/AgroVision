/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        agri: {
          50: '#f1f8f4',
          100: '#dcefe3',
          200: '#bde0c9',
          300: '#93cbaa',
          400: '#65b183',
          500: '#419b65',
          600: '#2f7e50',
          700: '#266443',
          800: '#214f37',
          900: '#1b4030'
        },
        soil: {
          50: '#f8f5f1',
          100: '#efe6d9',
          200: '#e1cfb3',
          300: '#cdad81',
          400: '#b8864f',
          500: '#a66b33',
          600: '#8a5428',
          700: '#6e4322',
          800: '#58371e',
          900: '#482e1b'
        },
        crop: {
          50: '#f5fbf0',
          100: '#e7f6d8',
          200: '#cfeeaf',
          300: '#ace277',
          400: '#87d141',
          500: '#69b824',
          600: '#4f951a',
          700: '#3f7418',
          800: '#345d17',
          900: '#2c4d15'
        },
        sky: {
          50: '#f3f9ff',
          100: '#e6f3ff',
          200: '#cde8ff',
          300: '#a6d6ff',
          400: '#76bdff',
          500: '#4ca0f5',
          600: '#2f7fdb',
          700: '#2363b1',
          800: '#1f528f',
          900: '#1d4677'
        }
      },
      fontFamily: {
        display: ['"Poppins"', 'Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif']
      },
      backgroundImage: {
        'agri-hero': 'linear-gradient(180deg, rgba(105,184,36,0.18) 0%, rgba(79,149,26,0.22) 40%, rgba(28,77,21,0.28) 100%), url("https://www.apacoutlookmag.com/media/Agriculture-Sensor-Technology-Ritam-Gandhi.png")',
        'agri-grid': 'radial-gradient(circle at 1px 1px, rgba(65,155,101,0.15) 1px, transparent 0)',
      },
      backgroundSize: {
        'grid-16': '16px 16px'
      },
      boxShadow: {
        'elevated': '0 8px 24px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
};
