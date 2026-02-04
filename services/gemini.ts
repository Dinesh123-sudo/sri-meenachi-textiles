
import { GoogleGenAI } from "@google/genai";

export async function getWholesaleAdvice(query: string) {
  try {
    // Initialize GoogleGenAI instance right before the call to ensure fresh configuration
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User asks: ${query}`,
      config: {
        systemInstruction: `You are an AI Sales Assistant for Sri Meenachi Textiles, a wholesale saree business in Tamil Nadu. 
        We specialize in:
        1. Fabrics: High-quality silk, georgette, chiffon, crepe, net, and cotton.
        2. Types: Traditional Surat silk, designer, wedding, embroidered, Suti cotton, Banarasi, Tant.
        3. Origins: Surat, Kanchipuram, Bangalore.
        4. Focus: High Volume & Low Cost wholesale only.
        Answer user queries professionally and guide them towards bulk inquiries. Keep it concise.`,
        temperature: 0.7,
        // Removed maxOutputTokens to prevent potential truncation or blockage as per guidelines
      },
    });
    // Access the .text property directly as it returns the string output
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us at 9488417241 for immediate wholesale assistance.";
  }
}