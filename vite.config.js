import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": "https://raise-back-production.up.railway.app", // Dev only
    },
  },
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
