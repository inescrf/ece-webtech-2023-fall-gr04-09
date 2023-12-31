import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchDataFromApi = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error('Erreur lors de la requête API :', error);
    throw error;
  }
};

const fetchMealById = async (id) => {
  return fetchDataFromApi(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
};

const IdMealComponent = ({ mealId }) => {
  const [mealData, setMealData] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const fetchSupabaseArticle = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('idMeal', mealId)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setMealData(data);
    } catch (error) {
      console.error('Error fetching article details:', error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mealById = await fetchMealById(mealId);

        if (mealById && mealById.idMeal) {
          setMealData(mealById);
        } else {
          setIsEmpty(true);
          await fetchSupabaseArticle(mealId);
        }
      } catch (error) {
        console.error(`Erreur lors de la récupération de l'article avec l'ID ${mealId} :`, error);
        await fetchSupabaseArticle(mealId);
      }
    };

    fetchData();
  }, [mealId]);

  const handleToggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="mx-auto p-6 space-y-6 text-center">
      <h1 className="text-3xl font-extrabold mb-4 text-green-1">
        {mealData && mealData.strMeal}
      </h1>

      <div className="flex flex-col lg:flex-row lg:space-x-4 items-center justify-center">
        <div className="lg:w-1/2">
          <img className="object-cover mb-2 rounded border border-black max-w-full h-auto custom-small-image" src={mealData && mealData.strMealThumb} alt={mealData && mealData.strMeal} />
        </div>

        <div className="lg:w-1/2 bg-green-2 rounded p-4">
          <h3 className="text-xl font-semibold mb-2 text-green-hover">Ingredients:</h3>
          <ul className="list-disc ml-4">
            {Array.from({ length: 20 }, (_, index) => index + 1).map((index) => {
              const ingredient = mealData && mealData[`strIngredient${index}`];
              const measure = mealData && mealData[`strMeasure${index}`];

              if (ingredient && measure) {
                return (
                  <p key={index} className="text-lg mb-1">
                    {ingredient} - {measure}
                  </p>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </div>

      <button
        className="bg-camel text-white px-4 py-2 rounded"
        onClick={handleToggleInstructions}
      >
        {showInstructions ? 'Hide Instructions' : 'See Instructions'}
      </button>
      <p className={`text-lg ${showInstructions ? 'text-green-hover' : 'text-green-2'}`}>
        {showInstructions ? mealData && mealData.strInstructions : '   '}
      </p>

      <div className="text-blue-500">
        Youtube video: <a href={mealData && mealData.strYoutube} target="_blank" rel="noopener noreferrer">{mealData && mealData.strYoutube}</a>
      </div>

    </div>
  );
};

export default IdMealComponent;
