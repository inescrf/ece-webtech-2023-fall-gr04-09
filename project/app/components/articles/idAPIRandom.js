import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importez le composant Image

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

const IdAPIRandom = () => { // Renommé pour commencer par une majuscule
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
        <div className="p-4 rounded-lg">
          <h2 className="text-xl text-green-hover font-bold mb-2">{mealData.strMeal}</h2>
          <p className="text-camel mb-2">{mealData.strArea} speciality </p>
          <Link href={`/articles/${mealData.idMeal}`}>
            {/* Remplacer <img> par <Image> */}
            <Image 
              src={mealData.strMealThumb} 
              alt={mealData.strMeal} 
              width={640} // Vous pouvez ajuster ces valeurs
              height={360} 
              className="w-full h-40 object-cover mb-2 rounded-t-lg"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default IdAPIRandom;
