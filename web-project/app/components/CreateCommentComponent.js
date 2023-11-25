import React, { useContext, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import UserContext from './UserContext';
import RatingComponent from './RatingComponent';

const CreateCommentComponent = ({ mealId }) => {
  const idMeal = mealId;
  const { profile } = useContext(UserContext);
  const mailUser = profile ? profile.email : '';

  const supabase = useSupabaseClient();
  const [comment, setComment] = useState(null);
  const [formData, setFormData] = useState({
    idMeal: '',
    comment: '',
    commentCreator: mailUser,
    note: 0,
  });

  const router = useRouter();

  // Ajoutez cette fonction pour mettre à jour la note dans le formulaire
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

      setComment('Comment inserted successfully!');
      setFormData({
        comment: '',
        commentCreator: mailUser,
        note: 0,
      });

      // Redirigez l'utilisateur vers la page actuelle pour rafraîchir
      router.replace(router.asPath);
    } catch (error) {
      console.error('Error inserting comment:', error.message);
    }
  };

  return (
    <div>
      <form className="grid gap-3" onSubmit={onSubmit}>
        <h2 className="text-2xl font-bold mb-4">Leave a comment here</h2>
        <div>
          <label>
            <RatingComponent
              rating={formData.note}
              readOnly={false}
              onChange={handleRatingChange} // Passer la fonction de rappel onChange
            />
          </label>
          <label>
            <span>Your Comment</span>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            />
          </label>
          <label>
            <span>Your name</span>
            <input
              type="text"
              value={formData.commentCreator}
              onChange={(e) => setFormData({ ...formData, commentCreator: e.target.value })}
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
          >
            Send
          </button>
        </div>
      </form>
      {comment && (
        <div
          aria-label="Overflow below the drawer dialog"
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setComment(null)}
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
          >
            {comment}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCommentComponent;
