import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const HowToUsePage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <FaLightbulb className="text-blue-600 text-5xl mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
          How To Use SmartChef
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Follow these simple steps to generate delicious recipes tailored to your preferences!
        </p>
      </div>

      {/* Steps Card */}
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Step-by-Step Guide
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>
            <span className="font-semibold text-blue-600">
              Enter the ingredients
            </span>{' '}
            you have in the input field (e.g., chicken, potatoes, carrots).
          </li>
          <li>
            <span className="font-semibold text-blue-600">
              Select the meal type
            </span>{' '}
            (Breakfast, Lunch, or Dinner) from the dropdown menu.
          </li>
          <li>
            <span className="font-semibold text-blue-600">
              Choose your preferred cuisine
            </span>{' '}
            (e.g., Italian, Mexican, Indian) if desired.
          </li>
          <li>
            <span className="font-semibold text-blue-600">
              Specify the time range
            </span>{' '}
            for preparation (e.g., 30-60 minutes).
          </li>
          <li>
            <span className="font-semibold text-blue-600">
              Select the complexity level
            </span>{' '}
            (Easy, Intermediate, Hard) based on your cooking skills.
          </li>
          <li>
            <span className="font-semibold text-blue-600">
              Click "Generate Recipe"
            </span>{' '}
            to get a personalized recipe.
          </li>
        </ol>
        <p className="text-gray-700">
          Once the recipe is generated, you can view it on the page. Save it or adjust your inputs to discover more delicious possibilities!
        </p>
      </div>
    </div>
  );
};

export default HowToUsePage;
