import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const fetchDataFromApi = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error('Erreur lors de la requête API :', error);
    throw error;
  }
};

const fetchMealByCategory = async (category) => {
  return fetchDataFromApi(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
};

const CategoryMealComponent = ({ mealCat }) => {
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mealsByCat = await fetchMealByCategory(mealCat);
        setMealData(mealsByCat);
      } catch (error) {
        console.error(`Erreur lors de la récupération des repas de la catégorie ${mealCat} :`, error);
      }
    };

    fetchData();
  }, [mealCat]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {mealData &&
        mealData.map((meal) => (
          <div key={meal.idMeal} className="p-4">
            <h2 className="text-xl font-bold mb-2">{meal.strMeal}</h2>
            <Link href={`/articles/${meal.idMeal}`}>
              
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover mb-2" />
              
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CategoryMealComponent;
