import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// GitHub Pages serves from /portofolio/; Cloudflare Pages and local
// builds serve from the domain root. GITHUB_ACTIONS is set by the
// Pages deploy workflow.
export default defineConfig({
  plugins: [react(), cloudflare()],
  base: process.env.GITHUB_ACTIONS ? '/portofolio/' : '/',
})