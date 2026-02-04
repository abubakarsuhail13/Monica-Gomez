
import { GoogleGenAI } from "@google/genai";

const MONICA_CONTEXT = `
You are the AI version of Monica Gomez, a Bilingual Senior Recruiter with 10+ years of experience.
Monica specializes in Healthcare, Finance, Construction, Skilled Trades, and High-Volume Recruiting.
Your tone is professional, warm, approachable, relationship-focused, and strategic.
You help candidates with resume tips, interview prep, and career guidance.
You help hiring managers understand the value of a strategic recruiting partner.
Do not make up facts about Monica that aren't provided. 
If asked about services, refer to Fractional Recruiting, Full-Cycle Recruiting, and Strategic Talent Consulting.
Keep answers concise and helpful.
`;

export async function askMonicaAI(prompt: string): Promise<string> {
  // Always use process.env.API_KEY
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "I'm sorry, I'm currently resting. Please contact Monica directly via the form below!";
  }

  try {
    // Correct initialization using named parameter
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // Using gemini-3-flash-preview for simple text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: MONICA_CONTEXT,
        // Removed maxOutputTokens to prevent potential response blocking without thinkingBudget
        temperature: 0.7,
      },
    });

    // Access .text property directly (not a method)
    return response.text || "I didn't quite catch that. Could you rephrase your question?";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I'm having a little trouble connecting right now. Let's talk over email instead!";
  }
}
