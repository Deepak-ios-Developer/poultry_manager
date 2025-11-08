import { register } from "../controllers/userController.js";

const express = require("express");



const router = Router();
// Routes
router.post("/register", register);
router.post("/login", loginUser);

router.get("/test", (req, res) => {
  res.send("✅ User routes working!");
});

export { router }