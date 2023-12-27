import React, { useContext, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import UserContext from '../UserContext';
import RatingComponent from './Rating';

const NewComment = ({ mealId }) => {
  const idMeal = mealId;
  const { user } = useContext(UserContext);
  const mailUser = user ? user.email : '';

  const supabase = useSupabaseClient();
  const [formData, setFormData] = useState({
    idMeal: '',
    comment: '',
    commentCreator: mailUser,
    note: 0,
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleRatingChange = (newRating) => {
    setFormData({ ...formData, note: newRating });
  };

  const onSubmit = async function (e) {
    e.preventDefault();

    const { comment, commentCreator, note } = formData;

    try {
      const { data, error } = await supabase
        .from('comments')
        .upsert([
          {
            idMeal,
            comment,
            commentCreator,
            created_at: new Date(),
            note,
          },
        ]);

      if (error) {
        throw new Error(error.message);
      }

      setSuccessMessage('Comment inserted successfully!');

      setFormData({
        comment: '',
        commentCreator: mailUser,
        note: 0,
      });

      // Auto-refresh the page after 2 seconds
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.error('Error inserting comment:', error.message);
    }
  };

  return (
    <div>
      <form className="grid gap-3" onSubmit={onSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-green-1 text-center">Leave a comment here</h2>
        <label className="text-center">
          <RatingComponent
            rating={formData.note}
            readOnly={false}
            onChange={handleRatingChange}
          />
        </label>
        <label>
          <span className="text-green-hover">Your Comment</span>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            className="w-full p-2 border rounded text-sm" 
          />
        </label>
        <label>
          <span className="text-green-hover">Your Email</span>
          <input
            type="text"
            value={formData.commentCreator}
            onChange={(e) => setFormData({ ...formData, commentCreator: e.target.value })}
            className="w-full p-2 border rounded text-sm" 
          />
        </label>
        <div className="text-center">
          <button
            type="submit"
            className="rounded py-1 px-3 text-white bg-camel hover:bg-green-hover"
          >
            Send
          </button>
        </div>
      </form>
      
      {successMessage && (
        <div className="text-green-600 text-center mt-4">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default NewComment;
