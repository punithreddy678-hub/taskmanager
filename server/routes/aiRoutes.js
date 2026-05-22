const express = require("express");

const router = express.Router();

const {
  GoogleGenerativeAI
} = require("@google/generative-ai");

const genAI =
new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

router.post("/", async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {

      return res.json({
        reply: "Please type a message"
      });

    }

    const model =
    genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result =
    await model.generateContent(message);

    const response =
    await result.response.text();

    res.json({
      reply: response
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      reply: "AI Error"
    });

  }

});

module.exports = router;