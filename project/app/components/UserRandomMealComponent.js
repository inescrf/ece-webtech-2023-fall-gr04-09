import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const UserRandomMealComponent = () => {
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    // Fetch random article details
    const fetchRandomArticle = async () => {
      try {
        const { data, error } = await supabase
          .from('random_articles')
          .select('*')
          .limit(1)
        if (error) {
          console.error(error);
          return;
        }

        // Set mealData with the retrieved data
        setMealData(data[0]); // Supposant qu'il y a un article dans le tableau
      } catch (error) {
        console.error('Error fetching random article details:', error.message);
      }
    };

    fetchRandomArticle();
  }, []);

  return (
    <div>
      {mealData && (
        <div>
          <h2>-------------------</h2>
          <p>Meal name : {mealData.strMeal}</p>
          <p>Meal type : {mealData.strCategory}</p>
          <p>Meal Creator : {mealData.emailCreator}</p>
          <Link href={`/articles/${mealData.idMeal}`}>
            <img src={mealData.strMealThumb} alt={mealData.strMeal} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserRandomMealComponent;
