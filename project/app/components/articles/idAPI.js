import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import GravatarComponent from '../GravatarComponent';

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
    <div className="max-w-full mx-auto p-6 bg-white rounded-md shadow-md space-y-6">      {isEmpty ? (
      <p>Aucune donnée trouvée pour cet ID de repas.</p>
    ) : (
      mealData && (
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="mb-4 lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{mealData.strMeal}</h2>
            <img className="object-cover mb-4 rounded" src={mealData.strMealThumb} alt={mealData.strMeal} />
            <div>Meal creator : {mealData.emailCreator}
              <GravatarComponent email={mealData.emailCreator} size={75} />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Ingredients and Measures:</h3>
              <ul>
                {Array.from({ length: 20 }, (_, index) => index + 1).map((index) => {
                  const ingredient = mealData[`strIngredient${index}`];
                  const measure = mealData[`strMeasure${index}`];

                  if (ingredient && measure) {
                    return (
                      <li key={index} className="text-lg mb-1">
                        {ingredient} - {measure}
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
            <p className="text-lg text-blue-500">
              Youtube video: <a href={mealData.strYoutube} target="_blank" rel="noopener noreferrer">{mealData.strYoutube}</a>
            </p>
            <p className="text-lg mb-2">
              Instructions: {showInstructions ? mealData.strInstructions : '   '}
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleToggleInstructions}
            >
              {showInstructions ? 'Hide Instructions' : 'See Instructions   '}
            </button>
          </div>
        </div>
      )
    )}
    </div>
  );
};

export default IdMealComponent;
