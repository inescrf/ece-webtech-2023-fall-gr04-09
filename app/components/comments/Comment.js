import React, { useContext, useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import UserContext from '../UserContext';
import Rating from './Rating';
import GravatarComponent from '../GravatarComponent';
import { useRouter } from 'next/router';

const Comment = ({ mealId }) => {
  const supabase = useSupabaseClient();
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);

  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');

  const router = useRouter();

  const handleEditClick = (commentId, initialText) => {
    setEditingCommentId(commentId);
    setEditCommentText(initialText);
  };

  const handleEditSave = async () => {
    try {
      if (!editingCommentId) {
        console.error('Error updating comment: Comment ID is undefined');
        return;
      }

      const { data, error } = await supabase
        .from('comments')
        .update({ comment: editCommentText })
        .eq('idComment', editingCommentId);

      if (error) {
        console.error('Error updating comment:', error.message);
        return;
      }

      const updatedComments = comments.map((comment) => {
        if (comment.idComment === editingCommentId) {
          return { ...comment, comment: editCommentText };
        }
        return comment;
      });

      setComments(updatedComments);

      setEditingCommentId(null);
      setEditCommentText('');
    } catch (error) {
      console.error('Error updating comment:', error.message);
    }
    router.replace(router.asPath);
  };

  const handleEditCancel = () => {
    setEditingCommentId(null);
    setEditCommentText('');
  };

  const handleDeleteClick = async (commentId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this comment?');
    if (confirmDelete) {
      await deleteComment(commentId);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      if (!commentId) {
        console.error('Error deleting comment: Comment ID is undefined');
        return;
      }

      const { data, error } = await supabase
        .from('comments')
        .delete()
        .eq('idComment', commentId);

      if (error) {
        console.error('Error deleting comment:', error.message);
        return;
      }

      const updatedComments = comments.filter((comment) => comment.idComment !== commentId);
      setComments(updatedComments);
    } catch (error) {
      console.error('Error deleting comment:', error.message);
    }
    router.replace(router.asPath);
  };

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
      <h2 className="text-2xl font-bold mb-4 text-green-1 text-center">Comments</h2>
      {editingCommentId !== null ? (
        <div>
          <textarea
            value={editCommentText}
            onChange={(e) => setEditCommentText(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="flex mt-2">
            <button
              className="bg-green-500 text-white px-3 py-1 mr-2"
              onClick={handleEditSave}
            >
              Save
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1"
              onClick={handleEditCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <br />
          {comments.length === 0 ? (
            <p className='text-center dark:text-white'>No comments for the moment</p>
          ) : (
            <ul className="space-y-4">
              {comments.map((comment) => (
                <li key={comment.idComment} className="border rounded p-4">
                  <div className="flex justify-between items-center mb-2">
                    <strong className="text-lg dark:text-white">{comment.commentCreator || 'Unauthenticated User'}</strong>
                    <span className="text-gray-500 text-sm">
                      {new Date(comment.created_at).toLocaleString()}
                    </span>
                  </div>

                  <GravatarComponent email={comment.commentCreator} size={75} />

                  <div>
                    <p className="text-gray-800 dark:text-white">{comment.comment}</p>
                    <div className="flex items-center gap-2">
                      <Rating rating={comment.note} readOnly={true} />
                    </div>
                    {comment.commentCreator === (user && user.email) && (
                      <div className="mt-2">
                        <button
                          className="bg-blue-500 text-white px-3 py-1 mr-2"
                          onClick={() => handleEditClick(comment.idComment, comment.comment)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 py-1"
                          onClick={() => handleDeleteClick(comment.idComment)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
