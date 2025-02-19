const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const AiDesignIdeas = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Based on Logo of type App Logo Generate a text prompt to create Logo for Logo title/Brand name : indian spice with decription: factory manufacturing spices and supply allover india and refering to prompt: Create a vibrant and playful 3D logo for an app. The design should feature bold, colorful text with a glossy finish. Include an icon relevant to the apps theme above the text and a background that complements the concept, such as a bright outdoor scene with natural elements like green grass, a blue sky, and fluffy white clouds. Use a rounded square frame with a yellow border and subtle shadows for a polished and inviting look. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field\n" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"ideas\": [\n    \"Spiced Wheel of India\",\n    \"Fiery Spice Factory Burst\",\n    \"Indian Spice Rainbow Swirl\",\n    \"Aromatic Indian Spice Bloom\",\n    \"Vibrant Spice Route Map\"\n  ]\n}\n```\n" },
            ],
        },
    ],
});

export const AiLogoPrompt = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate a text prompt to create Logo for Logo Title/Brand name : Raj footwear,with description: all the of footwear like shoes , sandal , slippers are available, with Color combination of Ocean Blues, also include the Royal Leather Silhouette and include Minimalists And Elegants Logos design idea and Referring to this Logo Prompt:Create a sophisticated and elegant logo design that is inspired by nature and vintage aesthetics. The logo should incorporate elements of symbolism, intricate details, and a touch of mystery. Use a combination of typography, line art, and subtle color palettes to create a timeless and visually striking design. The logo should convey a sense of luxury, tradition, and quality.  Give me result in JSON portal with prompt field only" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"prompt\": \"Create a minimalist and elegant logo for 'Raj Footwear'. The logo should evoke a sense of royal leather craftsmanship and convey the availability of all types of footwear (shoes, sandals, slippers). Incorporate a royal leather silhouette, utilizing a color combination of Ocean Blues. The design should be sophisticated, inspired by vintage aesthetics and nature. Aim for a timeless and visually striking design with subtle details, conveying luxury, tradition, and quality. Include elements of symbolism and mystery, employing typography and line art to achieve the desired effect.\"\n}\n```\n" },
            ],
        },
    ],
});
