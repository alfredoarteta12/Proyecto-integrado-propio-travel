const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const businessRoutes = require("./routes/business.routes");
const promotionRoutes = require("./routes/promotion.routes");
const activityRoutes = require("./routes/activity.routes");
const journeyRoutes = require("./routes/journey.routes");
const groupTypeRoutes = require("./routes/groupType.routes");
const locationRoutes = require("./routes/location.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to El Propio Travel API"
    });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/promotions", promotionRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/journeys", journeyRoutes);
app.use("/api/group-types", groupTypeRoutes);
app.use("/api/locations", locationRoutes);

module.exports = app;