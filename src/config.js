import Highlight from "reveal.js/plugin/highlight/highlight";
import Markdown from "reveal.js/plugin/markdown/markdown";
import MathReveal from "reveal.js/plugin/math/math";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealZoom from "reveal.js/plugin/zoom/zoom.js";

// Import theme
import "./assets/theme.css";

// Import CSS for plugins
import "reveal.js/plugin/highlight/monokai.css";

export default {
  // App Config
  app: {
    name: "Reveal.js with Svelte and Vite",
  },
  // Reveal Config
  reveal: {
    // width: 1920,
    // height: 1080,
    // disableLayout: true,
    transition: "none",
    backgroundTransition: "none",
    slideNumber: true,
    plugins: [
      Highlight,
      Markdown,
      MathReveal.MathJax2,
      MathReveal.KaTeX,
      RevealNotes,
      RevealZoom,
    ],
    hash: true,
    mathjax2: {
      config: "TeX-AMS_HTML-full",
      TeX: {
        Macros: {
          R: "\\mathbb{R}",
          set: ["\\left\\{#1 \\; ; \\; #2\\right\\}", 2],
        },
      },
    },
  },
};
