import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Layout from '../../components/Layout.js';
import UserContext from '../../components/UserContext.js';

const areaOptions = [
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
  "French",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Jamaican",
  "Japanese",
  "Kenyan",
  "Malaysian",
  "Mexican",
  "Moroccan",
  "Polish",
  "Portuguese",
  "Russian",
  "Spanish",
  "Thai",
  "Tunisian",
  "Turkish",
  "Unknown",
  "Vietnamese",
];

export default function ModifyMyArticle() {
  const router = useRouter();
  const { strMeal } = router.query;
  
  const { user } = useContext(UserContext);

  const supabase = useSupabaseClient();
  const [formData, setFormData] = useState({
    strMeal: '',
    strCategory: '',
    strArea: '',
    strInstructions: '',
    strMealThumb: '',
    strTags: '',
    strYoutube: '',
    // Initialisation des ingrédients et mesures
    ...Object.fromEntries([...Array(20).keys()].map(i => [`strIngredient${i + 1}`, ''])),
    ...Object.fromEntries([...Array(20).keys()].map(i => [`strMeasure${i + 1}`, ''])),
  });

  const [categories, setCategories] = useState([]);
  const [ingredientCount, setIngredientCount] = useState(5);

  useEffect(() => {
    // Fetch article details based on strMeal
    const fetchArticleDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('strMeal', strMeal)
          .eq('emailCreator', user.email)
          .single();

        if (error) {
          console.error(error);
          return;
        }

        // Set formData with the retrieved data
        setFormData(data);
      } catch (error) {
        console.error('Error fetching article details:', error.message);
      }
    };

    if (strMeal) {
      fetchArticleDetails();
    }
  }, [strMeal]);

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const addIngredientField = () => {
    if (ingredientCount < 20) {
      setIngredientCount(ingredientCount + 1);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Update article in the database using formData
    const { data, error } = await supabase
      .from('articles')
      .update([
        {
          strMeal: formData.strMeal,
          strCategory: formData.strCategory,
          strArea: formData.strArea,
          strInstructions: formData.strInstructions,
          strMealThumb: formData.strMealThumb,
          strTags: formData.strTags,
          strYoutube: formData.strYoutube,
          ...Object.fromEntries([...Array(20).keys()].map(i => [`strIngredient${i + 1}`, formData[`strIngredient${i + 1}`]])),
          ...Object.fromEntries([...Array(20).keys()].map(i => [`strMeasure${i + 1}`, formData[`strMeasure${i + 1}`]])),
        },
      ])
      .eq('strMeal', formData.strMeal)
      .eq('emailCreator', user.email);

    if (error) {
      console.error('Error updating article:', error.message);
      return;
    }

    // Redirect to the previous page after updating
    router.back();
  };

  const onCancel = () => {
    // Redirect to the previous page without making any changes
    router.back();
  };

  return (
    <Layout>
      <h1 className="text-3xl font-extrabold mb-4 text-green-1 text-center">Modify Article</h1>
      <p><br /></p>
      <form className="[&_span]:block grid gap-3" onSubmit={onSubmit}>
        <div>
          <label>
            <span className="block font-bold mb-1 dark:text-white">Meal name</span>
            <input
              type="text"
              name="strMeal"
              value={formData.strMeal}
              onChange={(e) => setFormData({ ...formData, strMeal: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1 dark:text-white">Category</span>
            <select
              name="strCategory"
              value={formData.strCategory}
              onChange={(e) => setFormData({ ...formData, strCategory: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            >
              <option value=""></option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1 dark:text-white">Area</span>
            <select
              name="strArea"
              value={formData.strArea}
              onChange={(e) => setFormData({ ...formData, strArea: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            >
              <option value=""></option>
              {areaOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1 dark:text-white">Instructions</span>
            <textarea
              name="strInstructions"
              value={formData.strInstructions}
              onChange={(e) => setFormData({ ...formData, strInstructions: e.target.value })}
              rows={6}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1 dark:text-white">Meal Thumb (Image URL)</span>
            <input
              type="text"
              name="strMealThumb"
              value={formData.strMealThumb}
              onChange={(e) => setFormData({ ...formData, strMealThumb: e.target.value })}
              placeholder="Enter image URL"
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1 dark:text-white">Meal Tags</span>
            <input
              type="text"
              name="strTags"
              value={formData.strTags}
              onChange={(e) => setFormData({ ...formData, strTags: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1 dark:text-white">Youtube Video Link</span>
            <input
              type="text"
              name="strYoutube"
              value={formData.strYoutube}
              onChange={(e) => setFormData({ ...formData, strYoutube: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </label>
        </div>

        {/* Génération dynamique des champs pour les ingrédients et mesures */}
        {[...Array(ingredientCount).keys()].map((index) => (
          <div key={index}>
            <label>
              <span className="block font-bold mb-1 dark:text-white">{`Ingredient ${index + 1}`}</span>
              <input
                type="text"
                name={`strIngredient${index + 1}`}
                value={formData[`strIngredient${index + 1}`]}
                onChange={(e) => setFormData({ ...formData, [`strIngredient${index + 1}`]: e.target.value })}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </label>
            <label>
              <span className="block font-bold mb-1 dark:text-white">{`Measure ${index + 1}`}</span>
              <input
                type="text"
                name={`strMeasure${index + 1}`}
                value={formData[`strMeasure${index + 1}`]}
                onChange={(e) => setFormData({ ...formData, [`strMeasure${index + 1}`]: e.target.value })}
                style={{ marginLeft: '10px' }}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </label>
          </div>
        ))}

        {/* Bouton pour ajouter un nouvel ingrédient */}
        <div className='text-center'>
          <button
            type="button"
            onClick={addIngredientField}
            className="bg-camel hover:bg-green-hover text-white font-bold py-2 px-4 rounded"
          >
            Add an Ingredient
          </button>
        </div>
        <br />
        <div>
          <button
            type="submit"
            className="bg-green-1 hover:bg-green-hover text-white font-bold py-2 px-4 rounded w-full"
          >
            Save Changes
          </button>
        </div>

        <button
          type="button"
          onClick={() => onCancel()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </form>
    </Layout>
  );
}
