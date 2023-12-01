import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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

const fetchRandomMeal = async () => {
  return fetchDataFromApi('https://www.themealdb.com/api/json/v1/1/random.php');
};

const idAPIRandom = () => {
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomMeal = await fetchRandomMeal();
        setMealData(randomMeal);
      } catch (error) {
        console.error('Erreur lors de la récupération d\'un repas aléatoire :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {mealData && (
        <div>
          <h2>-------------------</h2>
          <p>Meal name : {mealData.strMeal}</p>
          <p>Meal type : {mealData.strCategory}</p>
          <Link href={`/articles/${mealData.idMeal}`}>

            <img src={mealData.strMealThumb} alt={mealData.strMeal} />

          </Link>
        </div>
      )}
    </div>
  );
};

export default idAPIRandom;
