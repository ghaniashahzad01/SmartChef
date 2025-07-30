import React from 'react';
import { useRecipeGenerator } from '../hooks/useRecipeGenerator';
import RecipeForm from '../components/RecipeForm';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/Loader';

const HomePage = () => {
  const { loading, error, recipe, generateRecipe } = useRecipeGenerator();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
          SmartChef
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Unlock delicious recipes tailored to your ingredients and preferences. Your personal chef in your pocket!
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Generate Your Perfect Recipe
        </h2>

        <RecipeForm onSubmit={generateRecipe} />

        {loading && (
          <div className="flex justify-center mt-6">
            <Loader />
          </div>
        )}

        {error && (
          <p className="text-red-500 mt-4 text-center font-medium">
            {error}
          </p>
        )}

        {recipe && (
          <div className="mt-8">
            <RecipeCard recipe={recipe} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
