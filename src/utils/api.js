
// src/api.js

console.log("API Key:", import.meta.env.VITE_OPENROUTER_API_KEY);

export const fetchRecipe = async (payload) => {
  const prompt = `
Generate a ${payload.mealType || ""} recipe
using these ingredients: ${payload.ingredients || ""}.
Cuisine preference: ${payload.cuisine || "Any"}.
Cooking time: ${payload.timeRange || "Any"}.
Complexity: ${payload.complexity || "Any"}.
Provide detailed recipe instructions.
`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "SmartChef",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemma-4-31b-it:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("Status:", response.status);
    console.log("Response:", data);

    if (!response.ok) {
      throw new Error(data.error?.message || JSON.stringify(data));
    }

    return data.choices?.[0]?.message?.content || "No recipe returned.";
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};

