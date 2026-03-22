const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/smart-price", async (req, res) => {

  try {

    const { cropType, state, expectedPricePerKg } = req.query;

    if (!cropType || !state) {
      return res.status(400).json({
        success: false,
        error: "cropType and state required"
      });
    }

    const aiServiceUrl = process.env.AI_SERVICE_URL || "https://greenpath-ai-lbzz.onrender.com/predict";
    const response = await axios.get(
      aiServiceUrl,
      {
        params: {
          cropType,
          state,
          expectedPricePerKg: expectedPricePerKg || 0
        }
      }
    );

    res.json(response.data);

  } catch (error) {

    console.error("AI ERROR 👉", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: "AI prediction failed"
    });
  }

});

module.exports = router;