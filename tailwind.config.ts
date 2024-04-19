import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cBg: '#fdf6e3', // background color
        cBgGradient: '#fbf1dc', // background color gradient
        cH1: '#1a327a', // heading 1 text color
        cH2: '#1d3785', // heading 2 text color
        cH3: '#20418f', // heading 3 text color
        cH4: '#234a9a', // heading 4 text color
        cH5: '#2654a4', // heading 5 text color
        cH6: '#295dad', // heading 6 text color
        cBody: '#1f3b8b', // body text color
        cBlock: '#d8d3c5', // code block color
        cLink: '#2142ab', // link color
        cLinkVisited: '#0036D8', // visited link color
        cButton: '#1a327a', // button color
        cButtonHover: '#1e3a82', // button hover color
        cLineBreak: '#1f3b8b', // colors for line breaks
        cBodySecondary:'#415f42',
        cPrimary:'#1f3b8b',
        cSecondary:'#1f3b8b',
        cTertiary:'#1f3b8b',
        cQuaternary:'#1f3b8b',
      },
      fontFamily: {
        'oldStandardTT': ['Old Standard TT', 'serif'], //LaTeX-Like Font
        'playfairDisplay': ['Playfair Display', 'serif'],
        'crimsonPro': ['Crimson Pro', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
