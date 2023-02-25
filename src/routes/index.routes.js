import { Router } from "express";
import { testRequest } from "../controllers/index.controller.js";

const router = Router();

router.get("/test", testRequest);

export default router;
