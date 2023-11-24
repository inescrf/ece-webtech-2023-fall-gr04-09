import { useContext, useState } from 'react';
import UserContext from './UserContext';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const CreateCommentComponent = ({ mealId }) => {
    const idMeal = mealId;
    const { profile } = useContext(UserContext);
    const mailUser = profile ? profile.email : '';
  
    const supabase = useSupabaseClient();
    const [comment, setComment] = useState(null);
    const [formData, setFormData] = useState({
      idMeal: '',
      comment: '',
      commentCreator: mailUser,  // Utilisez mailUser comme valeur initiale
    });
  
    const onSubmit = async function (e) {
      e.preventDefault();
  
      const { comment, commentCreator } = formData;
  
      try {
        const { data, error } = await supabase
          .from('comments')
          .upsert([
            {
              idMeal,
              comment,
              commentCreator,
              created_at: new Date(),
            },
          ]);
  
        if (error) {
          throw new Error(error.message);
        }
  
        setComment('Comment inserted successfully!');
        setFormData({
          comment: '',
          commentCreator: mailUser,  // Réinitialisez la valeur à mailUser après l'envoi
        });
      } catch (error) {
        console.error('Error inserting comment:', error.message);
      }
    };
  

  return (
    <div>
      <form className="[&_span]:block grid gap-3" onSubmit={onSubmit}>
        <div>
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
    value={formData.commentCreator}  // Utilisez formData.commentCreator comme valeur
    onChange={(e) => setFormData({ ...formData, commentCreator: e.target.value })}
  />
</label>

        </div>
        <div>
          <button
            type="submit" // Ajoutez cette ligne pour indiquer que le bouton est de type "submit"
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
