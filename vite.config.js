import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      // Allow serving files from these directories
      allow: [
        // Project root
        path.resolve(__dirname),
        // Node modules
        "node_modules",
      ],
    },
  },
  resolve: {
    alias: {
      // Add alias for assets directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
