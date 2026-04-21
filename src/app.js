import express from "express";
import authRouter from "../src/routes/auth.routes.js";
import userRouter from "../src/routes/user.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { notFound } from "./middlewares/notFound.middleware.js";
/**
import { express } from 'express';
 * TODO: Create Express app
 *
 * 1. Create app with express()
 * 2. Add express.json() middleware
 * 3. Add GET /health route → { ok: true }
 * 4. Mount auth routes at /api/auth
 * 5. Mount user routes at /api/users
 * 6. Add notFound middleware
 * 7. Add errorHandler middleware (must be last!)
 * 8. Return app
 */
export function createApp() {
  // Your code here
  // 1. Create app with express()
  const app = express();
  // 2. Add express.json() middleware
  app.use(express.json());
  // 3. Add GET /health route → { ok: true }
  app.get("/health", (req, res) => {
    return res.json({ ok: true });
  });
  // 4. Mount auth routes at /api/auth
  app.use("/api/auth", authRouter);
  // 5. Mount user routes at /api/users
  app.use("/api/users", userRouter);
  // 6. Add notFound middleware
  app.use(notFound);

  // 7. Add errorHandler middleware (must be last!)
  app.use(errorHandler);
  // 8. Return app
  return app;
}
