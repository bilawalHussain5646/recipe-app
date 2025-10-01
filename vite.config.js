// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// If deploying to GitHub Pages under: https://<username>.github.io/<repo-name>/
// set base to '/<repo-name>/'. Otherwise set base to '/'.
export default defineConfig({
  base: "/recipe-app/", // <--- CHANGE THIS for GitHub Pages (or '/' if not)
  plugins: [vue()],
});
