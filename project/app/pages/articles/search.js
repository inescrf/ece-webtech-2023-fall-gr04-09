import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Layout from '../../components/Layout';
import Link from 'next/link';



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchPosts = async () => {
        setLoading(true);
        let { data, error } = await supabase.from('articles').select('*');
        if (error) {
            console.error('Error fetching posts:', error.message);
        } else {

            if (searchQuery.trim() !== '') {
                data = data.filter((post) =>
                    post.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            setPosts(data);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (searchQuery !== '') {
            fetchPosts();
        }
    }, [searchQuery]);

    return (
        <Layout>
            <div>
                <input
                    type="text"
                    placeholder="Search for posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={fetchPosts}>Search</button>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        <div className="mt-8 text-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {posts.map((post) => (
                                    <li key={post.id}>{post.strMeal}
                                        <Link href={`/articles/${post.idMeal}`}>
                                            <img src={post.strMealThumb} alt={post.strMeal} className="p-4 bg-beige-1 shadow-lg rounded-lg" />
                                        </Link></li>

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

