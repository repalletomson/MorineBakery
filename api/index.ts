// Vercel serverless function entry point for the API.
// Vercel rewrites /api/* → /api?__path=* so Express sees the rewritten URL.
// This wrapper restores the original sub-path before passing to Express,
// allowing Express's internal routing to work correctly.

import app from "../artifacts/api-server/src/app";

export default function handler(req: any, res: any) {
  // Extract the original sub-path from the query parameter set by Vercel rewrite
  const subPath = req.query?.__path;

  if (subPath && typeof subPath === "string") {
    // Restore the original URL path for Express routing
    // e.g. /api?__path=healthz → /healthz
    req.url = "/" + subPath;

    // Clean up the synthetic query param so it doesn't leak to route handlers
    if (req.query) {
      delete req.query.__path;
    }
  }

  // Forward the request to the Express app
  return app(req, res);
}
