// ---------------------------
// 🐔 Poultry Manager Backend
// ---------------------------

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/users", userRoutes);

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("🐔 Poultry Manager API is running...");
});

// ✅ Async function to start DB + Server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");

    await sequelize.sync({ alter: true });
    console.log("✅ Tables synced successfully");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

    // (Optional) Keep-alive log to confirm it’s running
    setInterval(() => console.log("💓 Server alive..."), 10000);

  } catch (error) {
    console.error("❌ Database or Server Error:", error);
  }
};

// Start the async function
startServer();
