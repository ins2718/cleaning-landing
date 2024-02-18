import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": ["bebas-neue"],
        "secondary": ["museo300"],
        "button": ["Proxima_Nova_Lt"]
      },
      animation: {
        'whatsAppButtonScale': 'whats-app-button-scale 2s ease-out infinite',
        'whatsAppButtonPulse': 'whats-app-button-pulse 2s ease-out infinite',
      },
      keyframes: {
        "whats-app-button-scale": {
          "0%, 50%": { transform: "scale(1,1)" },
          "25%": { transform: "scale(1.1,1.1)" },
        },
        "whats-app-button-pulse": {
          "0%,100%": { transform: "scale(0.8,0.8)", opacity: "0", },
          "25%": { opacity: "0.4", },
          "50%": { transform: "scale(1.3,1.3)", opacity: "0.0", },
        },
      },
    },
  },
  plugins: [],
};
export default config;
