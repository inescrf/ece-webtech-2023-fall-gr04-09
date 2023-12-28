import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Layout from '../../components/Layout';
import Link from 'next/link';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const PostsList = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchMeals = async () => {
        setLoading(true);
        let { data, error } = await supabase.from('articles').select('*');
        if (error) {
            console.error('Error fetching meals:', error.message);
        } else {
            if (searchQuery.trim() !== '') {
                data = data.filter((meal) =>
                    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            setMeals(data);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (searchQuery !== '') {
            fetchMeals();
        }
    }, [searchQuery]);

    return (
        <Layout>
            <div >
                <div className="flex items-center justify-center ">
                    <input
                        className="max-w-md p-4 w-full p-2 border-2 border-green-1 rounded"
                        type="text"
                        placeholder="Search for meals..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                {loading ? (
                    <p></p>
                ) : (
                    <ul>
                        <div className="mt-8 text-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {meals.map((meal) => (
                                    <li key={meal.idMeal}>
                                        {meal.strMeal}
                                        <Link href={`/articles/${meal.idMeal}`}>
                                            <img
                                                src={meal.strMealThumb}
                                                alt={meal.strMeal}
                                                className="p-4 bg-beige-1 shadow-lg rounded-lg"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </ul>
                )}
            </div>
        </Layout>
    );
};

export default PostsList;





