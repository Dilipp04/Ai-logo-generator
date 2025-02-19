import { AiLogoPrompt } from "@/configs/AiModelConfig";
import { db } from "@/configs/FirebaseConfig";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt, email, title, desc } = await req.json();

  try {
    // Generate AI prompt
    const result = await AiLogoPrompt.sendMessage(prompt);
    const resultText = await result.response.text();
    const AiPrompt = { inputs: resultText };

    // Request image from Hugging Face API
    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA",
      AiPrompt,
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
          "Content-Type": "application/json",
        },
        responseType: "stream", // Fixing Octa Stream
      }
    );

    // Convert Stream to Buffer
    const streamToBuffer = async (stream) => {
      return new Promise((resolve, reject) => {
        const chunks = [];
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("end", () => resolve(Buffer.concat(chunks)));
        stream.on("error", reject);
      });
    };

    const buffer = await streamToBuffer(response.data);
    const base64Image = buffer.toString("base64");
    const base64ImageWithMime = `data:image/png;base64,${base64Image}`;

    //Save image to Firebase
    try {
      await setDoc(doc(db, "users", email, "logos", Date.now().toString()), {
        image: base64ImageWithMime,
        title,
        desc,
      });
    } catch (error) {
      return NextResponse.json({ e: error.message });
    }

    return NextResponse.json({ image: base64ImageWithMime });
  } catch (error) {
    console.error("AI Model Error:", error);
    return NextResponse.json({ error: error.message });
  }
}
