import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Layout from '../../components/Layout.js';
import UserContext from '../../components/UserContext.js'

export default function ModifyMyArticle() {
  const router = useRouter();
  const { strMeal } = router.query;
  const categoryOptions = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];
  const areaOptions = ["American", "British", "Canadian", "Chinese", "Croatian", "Dutch", "Egyptian", "Filipino", "French", "Greek", "Indian", "Irish", "Italian", "Jamaican", "Japanese", "Kenyan", "Malaysian", "Mexican", "Moroccan", "Polish", "Portuguese", "Russian", "Spanish", "Thai", "Tunisian", "Turkish", "Unknown", "Vietnamese"];
  const { profile } = useContext(UserContext)
  const supabase = useSupabaseClient();
  const [formData, setFormData] = useState({
    strMeal: '',
    strCategory: '',
    strArea: '',
    strInstructions: '',
    strMealThumb: '',
    strTags: '',
    strYoutube: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strIngredient6: '',
    strIngredient7: '',
    strIngredient8: '',
    strIngredient9: '',
    strIngredient10: '',
    strIngredient11: '',
    strIngredient12: '',
    strIngredient13: '',
    strIngredient14: '',
    strIngredient15: '',
    strIngredient16: '',
    strIngredient17: '',
    strIngredient18: '',
    strIngredient19: '',
    strIngredient20: '',
    strMeasure1: '',
    strMeasure2: '',
    strMeasure3: '',
    strMeasure4: '',
    strMeasure5: '',
    strMeasure6: '',
    strMeasure7: '',
    strMeasure8: '',
    strMeasure9: '',
    strMeasure10: '',
    strMeasure11: '',
    strMeasure12: '',
    strMeasure13: '',
    strMeasure14: '',
    strMeasure15: '',
    strMeasure16: '',
    strMeasure17: '',
    strMeasure18: '',
    strMeasure19: '',
    strMeasure20: '',
  });

  useEffect(() => {
    // Fetch article details based on strMeal
    const fetchArticleDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('strMeal', strMeal)
          .eq('emailCreator', profile.email)
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

  // Filter out empty ingredients and measures
  const ingredients = Object.keys(formData)
    .filter(key => key.startsWith('strIngredient') && formData[key] !== '')
    .map(key => formData[key]);

  const measures = Object.keys(formData)
    .filter(key => key.startsWith('strMeasure') && formData[key] !== '')
    .map(key => formData[key]);

  // Function to add a new empty ingredient and measure field
  const addIngredient = () => {
    const emptyIngredientKey = [...Array(20).keys()]
      .map(index => `strIngredient${index + 1}`)
      .find(key => !formData[key]);
    
    const emptyMeasureKey = [...Array(20).keys()]
      .map(index => `strMeasure${index + 1}`)
      .find(key => !formData[key]);

    if (emptyIngredientKey && emptyMeasureKey) {
      setFormData({
        ...formData,
        [emptyIngredientKey]: '',
        [emptyMeasureKey]: '',
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Update article in the database using formData
    const { data, error } = await supabase
      .from('articles')
      .update([
        // Your update fields here...
      ])
      .eq('strMeal', formData.strMeal)
      .eq('emailCreator', profile.email);

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
        {/* Display non-empty ingredients and measures */}
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <label>
              <span className="block font-bold mb-1">{`Ingredient ${index + 1}`}</span>
              <input
                type="text"
                name={`strIngredient${index + 1}`}
                value={ingredient}
                onChange={(e) => setFormData({ ...formData, [`strIngredient${index + 1}`]: e.target.value })}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </label>
            <label>
              <span className="block font-bold mb-1">{`Measure ${index + 1}`}</span>
              <input
                type="text"
                name={`strMeasure${index + 1}`}
                value={measures[index]}
                onChange={(e) => setFormData({ ...formData, [`strMeasure${index + 1}`]: e.target.value })}
                style={{ marginLeft: '10px' }}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </label>
          </div>
        ))}

        {/* Button to add a new ingredient */}
        <div>
          <button
            className="bg-camel hover:bg-green-hover text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={addIngredient}
          >
            Add Ingredient
          </button>
        </div>

        <div>
          <button
            className="bg-camel hover:bg-green-hover text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Update my article
          </button>
        </div>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => onCancel()}
        >
          Cancel the update
        </button>
      </form>
    </Layout>
  );
}
