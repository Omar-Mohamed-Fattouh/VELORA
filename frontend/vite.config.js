import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "localhost",
    port: 5173,
    strictPort: false,
  },
  preview: {
    host: "localhost",
    port: 4173,
    strictPort: false,
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("swiper")) return "swiper";
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("i18next") || id.includes("react-i18next")) return "i18n";
          if (id.includes("react-router")) return "router";
          if (id.includes("react-dom") || id.includes("/react/")) return "react";
        },
      },
    },
  },
});
