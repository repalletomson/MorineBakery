import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Replit-specific plugins — only loaded when running on Replit
const isReplit = process.env.REPL_ID !== undefined;

// PORT is required for dev/preview on Replit, optional for Vercel builds
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;

if (rawPort && (Number.isNaN(port) || port <= 0)) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

// BASE_PATH is required on Replit, defaults to "/" on Vercel
const basePath = process.env.BASE_PATH ?? "/";

// Resolve plugins dynamically — Replit plugins only loaded in Replit env
async function resolvePlugins() {
  const plugins: any[] = [
    react(),
    tailwindcss(),
  ];

  if (isReplit) {
    try {
      const runtimeErrorOverlay = (await import("@replit/vite-plugin-runtime-error-modal")).default;
      plugins.push(runtimeErrorOverlay());
    } catch { /* plugin not available outside Replit */ }

    if (process.env.NODE_ENV !== "production") {
      try {
        const cartographer = (await import("@replit/vite-plugin-cartographer")).cartographer;
        plugins.push(
          cartographer({
            root: path.resolve(import.meta.dirname, ".."),
          }),
        );
      } catch { /* plugin not available outside Replit */ }
      try {
        const devBanner = (await import("@replit/vite-plugin-dev-banner")).devBanner;
        plugins.push(devBanner());
      } catch { /* plugin not available outside Replit */ }
    }
  }

  return plugins;
}

export default defineConfig(async () => ({
  base: basePath,
  plugins: await resolvePlugins(),
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
