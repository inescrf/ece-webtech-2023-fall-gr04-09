import { useContext, useState, useEffect } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import UserContext from '../../components/UserContext.js'
import Link from 'next/link'
import Layout from '../../components/Layout.js'

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const supabase = useSupabaseClient();
  const { user } = useContext(UserContext);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  const handleDeleteClick = async (article) => {
    setDeleteConfirmation(article);
  };

  const handleDeleteConfirmation = async (confirmation) => {
    if (confirmation) {
      // Supprimer l'article
      const { data, error } = await supabase
        .from('articles')
        .delete()
        .eq('strMeal', confirmation.strMeal);

      if (error) {
        console.error('Erreur lors de la suppression de l\'article :', error.message);
        return;
      }
      // Supprimer tous les commentaires liés à l'article
      const { commentData, commentError } = await supabase
        .from('comments')
        .delete()
        .eq('idMeal', confirmation.idMeal);

      if (commentError) {
        console.error('Erreur lors de la suppression des commentaires de l\'article :', commentError.message);
        return;
      }

      // Mettre à jour la liste des articles après la suppression d'un article
      const updatedArticles = articles.filter((article) => article.strMeal !== confirmation.strMeal);
      setArticles(updatedArticles);
    }

    // Réinitialisation de la variable de confirmation après la confirmation ou l'annulation
    setDeleteConfirmation(null);
  };

  useEffect(() => {
    // Charger les articles
    (async () => {
      if (user) {
        let { data, error } = await supabase
          .from('articles')
          .select(`*`)
          .eq('emailCreator', user.email);

        setArticles(data);
        console.log('Résultat de la requête Supabase :', { data, error });
      }
    })();
  }, [user, supabase]);

  return (
    <Layout
      title="Articles de l'utilisateur"
      description="Généré par l'application Next.js"
    >

      <h1 className="text-3xl font-extrabold mb-4 text-green-1 text-center">My articles</h1>
      <p><br /></p>
      <div className="bg-beige-1 min-h-screen py-8">
        <div className="container mx-auto">

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-slate-300">
              <thead className="bg-green-1">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                    Category
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                    Area
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                    View
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                    Modify
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                    Delete
                  </th>
                </tr>
              </thead>


              <tbody className="divide-y divide-slate-200">
                {articles.map((article) => (
                  <tr key={article.strMeal}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{article.strMeal}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{article.strCategory}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{article.strArea}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">

                      <Link
                        href={`/articles/${encodeURIComponent(article.idMeal)}`}
                      >
                        <span className="text-camel hover:text-beige-2 cursor-pointer">View</span>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <Link
                        href={`/articles/edit?strMeal=${encodeURIComponent(article.strMeal)}`}
                      >
                        <span className="text-camel hover:text-beige-2 cursor-pointer">Modify</span>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span
                        onClick={() => handleDeleteClick(article)}
                        className="text-red-500 hover:text-red-700 cursor-pointer">Delete</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p><br /></p>
          <p><br /></p>
          <div className="flex justify-center mt-4">
            <Link href="/profile">
              <span className="text-white hover:text-beige-2 cursor-pointer bg-camel rounded px-4 py-3">Back to Profil page</span>
            </Link>
          </div>
        </div>
      </div>
      {deleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-camel text-lg mb-4">Are you sure you want to delete the article named &quot;{deleteConfirmation.strMeal}&quot; and all the comments ?</p>
            <div className="flex justify-end">
              <button
                onClick={() => handleDeleteConfirmation(deleteConfirmation)}
                className="bg-red-500 text-white px-4 py-2 mr-2 rounded hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={() => handleDeleteConfirmation(null)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
