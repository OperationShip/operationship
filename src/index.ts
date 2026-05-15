import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_PROMPT } from './architect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

app.post('/api/generate', async (req, res) => {
  const { prompt, currentGraph } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const fullPrompt = `
      ${SYSTEM_PROMPT}
      
      CURRENT SYSTEM STATE:
      ${JSON.stringify(currentGraph)}
      
      USER COMMAND:
      "${prompt}"
      
      RESPONSE (JSON ONLY):
    `;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();
    
    // Industrial Step: Clean and Parse
    const cleanJson = text.replace(/```json|```/g, "").trim();
    res.json(JSON.parse(cleanJson));
    
  } catch (error) {
    console.error("Architectural Failure:", error);
    res.status(500).json({ error: "The Architect is offline." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`OperationShip Brain active on port ${PORT}`));
