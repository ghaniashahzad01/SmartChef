import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
      {/* Title Section */}
      <div className="flex items-center gap-2 bg-blue-600 text-white px-6 py-4">
        <FaUtensils className="text-xl" />
        <h2 className="text-xl font-semibold">Your Recipe</h2>
      </div>

      {/* Recipe Body */}
      <div className="bg-gray-50 p-6 text-gray-800 text-base leading-relaxed">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </div>
  );
};

export default RecipeCard;