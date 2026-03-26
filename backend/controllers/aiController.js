// InterviewPrepAi\backend\controllers\aiController.js
const { GoogleGenAI } = require("@google/genai");
const {
  conceptExplainPrompt,
  questionAnswerPrompt,
} = require("../utils/prompts");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ===============================================
// @desc Generate interview questions and answers
// @route POST /api/ai/generate-questions
// @access Private
// ===============================================

const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    let rawText =
      response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (!rawText) {
      throw new Error("Empty response from Gemini");
    }

    // Remove markdown safely
    const cleanedText = rawText
      .replace(/^```json\s*/i, "")
      .replace(/```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);

    return res.status(200).json(data);

  } catch (error) {
    console.error("Generate Questions Error:", error.message);

    return res.status(500).json({
      message: "Failed to generate questions",
      error: error.message,
    });
  }
};

// ===============================================
// @desc Generate explanation for interview question
// @route POST /api/ai/generate-explanation
// @access Private
// ===============================================

const generateConceptExplanation = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        message: "Missing required field: question",
      });
    }

    const prompt = conceptExplainPrompt(question);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    let rawText =
      response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (!rawText) {
      throw new Error("Empty response from Gemini");
    }

     const cleanedText = rawText
      .replace(/^```json\s*/i, "")
      .replace(/```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);

    return res.status(200).json(data);

  } catch (error) {
    console.error("Generate Explanation Error:", error.message);

    return res.status(500).json({
      message: "Failed to generate explanation",
      error: error.message,
    });
  }
};

module.exports = {
  generateInterviewQuestions,
  generateConceptExplanation,
};