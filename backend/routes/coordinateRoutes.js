import express from "express"
const router = express.Router();
import { createCoordinate ,getCoordinates } from "../controllers/coordinates.js";


router.post("/", createCoordinate)
router.get("/", getCoordinates)

export default router