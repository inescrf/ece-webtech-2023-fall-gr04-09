import React, { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const CommentsComponent = ({ mealId }) => {
  const supabase = useSupabaseClient();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data, error } = await supabase
          .from('comments')
          .select('*')
          .eq('idMeal', mealId)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching comments:', error.message);
          return;
        }

        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error.message);
      }
    };

    fetchComments();
  }, [mealId, supabase]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment.id} className="border rounded p-4">
              <div className="flex justify-between items-center mb-2">
                <strong className="text-lg">{comment.commentCreator || 'Unauthenticated User'}</strong>
                <span className="text-gray-500 text-sm">{new Date(comment.created_at).toLocaleString()}</span>
              </div>
              <p className="text-gray-800">{comment.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsComponent;
