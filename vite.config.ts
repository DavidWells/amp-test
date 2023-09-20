import { defineConfig } from "vite";
import { params } from "@ampt/sdk";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
    strictPort: true,
    // This proxies all outgoing requests from the app to your live Ampt environment
    proxy: {
      "/api": {
        target: params("AMPT_URL"),
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: "static",
    reportCompressedSize: true,
    rollupOptions: {
      maxParallelFileOps: 10,
    },
  },
});
