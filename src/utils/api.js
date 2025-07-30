// src/api.js

export const fetchRecipe = async (payload) => {
  const prompt = `
Generate a ${payload.mealType || ''} recipe 
using these ingredients: ${payload.ingredients || ''}. 
Cuisine preference: ${payload.cuisine || 'Any'}. 
Cooking time: ${payload.timeRange || 'Any'}. 
Complexity: ${payload.complexity || 'Any'}.
Provide detailed recipe instructions.
  `;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + import.meta.env.VITE_OPENROUTER_API_KEY,
        "HTTP-Referer": "http://localhost:5173",       // replace with your deployed URL
        "X-Title": "SmartChef",                         // your site name
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    });

    const data = await response.json();

    // OpenRouter response format:
    return data.choices[0].message.content;

  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};
