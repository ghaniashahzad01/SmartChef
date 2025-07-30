import { useState } from 'react';
import { fetchRecipe } from '../utils/api';

export const useRecipeGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState('');

  const generateRecipe = async (payload) => {
      if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRecipe(payload);
      setRecipe(data);
    } catch (err) {
      setError('Failed to generate recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, recipe, generateRecipe };
};
