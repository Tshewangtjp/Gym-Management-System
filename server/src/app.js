const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Gym Management System API is running"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "success",
        message: "Backend server is healthy"
    });
});

module.exports = app;