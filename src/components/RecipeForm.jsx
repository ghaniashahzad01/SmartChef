
import React, { useState } from 'react';

const RecipeForm = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState('');
  const [mealType, setMealType] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [timeRange, setTimeRange] = useState('');
  const [complexity, setComplexity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ingredients, mealType, cuisine, timeRange, complexity });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Ingredients */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Ingredients
        </label>
        <input
          type="text"
          placeholder="Enter ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Meal Type */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Meal Type
        </label>
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Meal Type</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>

      {/* Cuisine */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Cuisine
        </label>
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
        </select>
      </div>

      {/* Time Range */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Time Range
        </label>
        <input
          type="text"
          placeholder="e.g., 30-60 minutes"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Complexity */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Complexity
        </label>
        <select
          value={complexity}
          onChange={(e) => setComplexity(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Complexity</option>
          <option value="Easy">Easy</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition duration-300"
      >
        Generate Recipe
      </button>
    </form>
  );
};

export default RecipeForm;