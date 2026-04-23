import { Router } from "express";
import { login, me, register } from "../controllers/auth.controller.js";
import RegisterDto from "../dto/register.dto.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import validateRequestModel from "../middlewares/validation.middleware.js";

import LoginDto from "../dto/login.dto.js";
/**
 * TODO: Define auth routes
 *
 * POST   /register  → register (no auth required)
 * POST   /login     → login (no auth required)
 * GET    /me        → me (requires authenticate middleware)
 */

const router = Router();

// Your routes here

router.post("/register", validateRequestModel(RegisterDto), register);
router.post("/login", validateRequestModel(LoginDto), login);
router.get("/me", authenticate, me);
export default router;
