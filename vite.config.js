import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001", // adjust if backend port differs
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    visualizer({
      filename: "bundle-stats.html",
      open: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          emailjs: ["emailjs-com"],
        },
      },
    },
  },
});
