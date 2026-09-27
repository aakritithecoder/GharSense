import type { Handler } from "@netlify/functions";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "GEMINI_API_KEY is not configured on the server." }),
    };
  }

  try {
    const { prompt, model, config } = JSON.parse(event.body || "{}");

    if (!prompt) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing 'prompt' in request body." }) };
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: model || "gemini-2.5-flash",
      contents: prompt,
      ...(config ? { config } : {}),
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: response.text }),
    };
  } catch (err: any) {
    console.error("Gemini function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong calling Gemini.", details: err.message }),
    };
  }
};

