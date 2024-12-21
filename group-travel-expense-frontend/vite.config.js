/*import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  define: {
    "process.env": {},
  },
});
*/
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://be-group-d66eac40c01e.herokuapp.com',
        changeOrigin: true,
        secure: false, // Use this only if HTTPS issues arise
      },
    },
  },
});