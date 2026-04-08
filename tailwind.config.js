/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#243969",
        "navy-deep": "#1e5882",
        "navy-light": "#2d4a8a",
        cyan: "#1ebbf0",
        "cyan-light": "#e8f7fe",
        mint: "#39dfaa",
        white: "#ffffff",
        snow: "#f7f9fc",
        cloud: "#edf1f7",
        mist: "#dbe2ed",
        ink: "#1a1a2e",
        "ink-light": "#4a5068",
        "ink-muted": "#8892a8",
      },
      fontFamily: {
        heading: ['"Outfit"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
        data: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        container: "2rem",
        "container-lg": "3rem",
        pill: "100px",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
        "text-shimmer": "text-shimmer 4s linear infinite",
        float: "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};
