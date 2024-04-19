import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './forms/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        "2xl": "1640px",
      },
    },

    fontFamily: {
      'sans': ['var(--font-quicksand)'],
      'serif': ['var(--font-quicksand)'],
      'mono': ['var(--font-quicksand)'],
      'display': ['var(--font-quicksand)'],
      'body': ['var(--font-quicksand)'],
      'roboto': ['var(--font-roboto)'],
    },

    fontSize: {
      xs: '20px',
      sm: '21px',
      base: '24px',
      xl: '25px',
      '2xl': '27px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '48px',
      '6xl': '70px',
    },
    extend: {
      colors: {
        'primary': '#947761',
        'primary-light': '#EABD9C',
        'columbia-blue': '#C1DED5',
        'sky': '#ADD8F2',
        'border': '#E6EAF5',
        'dark': '#374D59',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config