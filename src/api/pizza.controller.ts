// @deno-types="@types/express"
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Pizza!");
});

export default router;
