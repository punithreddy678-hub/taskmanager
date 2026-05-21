const express = require("express");

const router = express.Router();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {

  try {

    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(message);

    const response = result.response.text();

    res.json({
      reply: response
    });

  } catch (error) {

    res.status(500).json({
      error: "AI Error"
    });

  }

});

module.exports = router;