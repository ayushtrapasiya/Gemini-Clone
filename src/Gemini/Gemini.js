import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const Api = "AIzaSyBHp9TXQl9vfupGZXuNmxEYPEm0fIL59yQ";
const genAI = new GoogleGenerativeAI(Api);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(input) {
  if (!input) {
    console.error("Input is required for the AI model.");
    return;
  }

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  try {
    const result = await chatSession.sendMessage(input);
    return result.response.text();  
  } catch (error) {
    console.error("Error interacting with the AI model:", error);
  }
}

export default run;
