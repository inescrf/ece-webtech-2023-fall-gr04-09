import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mealById = await fetchMealById(mealId);
        setMealData(mealById);
      } catch (error) {
        console.error(`Erreur lors de la récupération de l'article avec l'ID ${mealId} :`, error);
      }
    };

    fetchData();
  }, [mealId]);

  const handleToggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md space-y-6">
      {mealData && (
        <div className="flex flex-wrap">
          {/* Premier compartiment */}
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">{mealData.strMeal}</h2>
            <img className="w-full h-64 object-cover mb-4 rounded" src={mealData.strMealThumb} alt={mealData.strMeal} />
          </div>

          {/* Deuxième compartiment */}
          <div className="w-full lg:w-1/2 pl-4">
            
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
          </div>
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
      )}
    </div>
  );
};

export default IdMealComponent;
