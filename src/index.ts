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
    // UPGRADE 1: Faster, more reliable JSON model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
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
    
    // UPGRADE 2: Bulletproof JSON Extractor
    // This regex hunts down the first '{' and the last '}' and ignores everything else
    let cleanJson = text;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      cleanJson = jsonMatch[0];
    }
    
    res.json(JSON.parse(cleanJson));
    
  } catch (error) {
    // This will now print the actual underlying error to the Vercel logs so we can read it
    console.error("Architectural Failure Details:", error);
    res.status(500).json({ error: "The Architect failed to process the request." });
  }
});

export default app;
