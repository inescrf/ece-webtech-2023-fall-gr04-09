import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const IdRandomUser = () => {
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    const fetchRandomArticle = async () => {
      try {
        const { data, error } = await supabase
          .from('random_articles')
          .select('strMeal, emailCreator, strMealThumb, idMeal')
          .limit(1);
        if (error) {
          console.error(error);
          return;
        }

        setMealData(data[0]); 
        //console.log(data[0]?.idMeal); 
      } catch (error) {
        console.error('Error fetching random article details:', error.message);
      }
    };

    fetchRandomArticle();
  }, []);

  return (
    <div>
      {mealData && (
        <div className="p-4 rounded-lg">
          <h2 className="text-xl text-green-hover font-bold mb-2">{mealData.strMeal}</h2>
          <p className="text-camel mb-2">User: {mealData.emailCreator}</p>
          <Link href={`/articles/${mealData.idMeal}`}>
            <img src={mealData.strMealThumb} alt={mealData.strMeal} className="w-full h-40 object-cover mb-2 rounded-t-lg" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default IdRandomUser;
