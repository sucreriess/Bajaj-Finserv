const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());  // Enable CORS for frontend-backend communication

// GET endpoint - Returns operation code
app.get("/api", (req, res) => {
    res.status(200).json({ operation_code: "XYZ123" });
});

// POST endpoint - Accepts JSON input, returns extracted data
app.post("/api/data", (req, res) => {
    const { user_id, email, roll_number, odd_numbers, even_numbers, alphabets } = req.body;

    res.json({
        status: "success",
        user_id: user_id || "N/A",
        email: email || "N/A",
        roll_number: roll_number || "N/A",
        numbers: [...(odd_numbers || []), ...(even_numbers || [])],
        alphabets: alphabets || []
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
