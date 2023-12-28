import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Layout from '../../components/Layout';


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
                        {posts.map((post) => (
                            <li key={post.id}>{post.strMeal}</li>
                        ))}
                    </ul>
                )}
            </div>
        </Layout>

    );
};

export default PostsList;
