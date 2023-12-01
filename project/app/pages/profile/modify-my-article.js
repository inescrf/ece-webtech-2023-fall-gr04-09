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
          strIngredient1: formData.strIngredient1,
          strIngredient2: formData.strIngredient2,
          strIngredient3: formData.strIngredient3,
          strIngredient4: formData.strIngredient4,
          strIngredient5: formData.strIngredient5,
          strIngredient6: formData.strIngredient6,
          strIngredient7: formData.strIngredient7,
          strIngredient8: formData.strIngredient8,
          strIngredient9: formData.strIngredient9,
          strIngredient10: formData.strIngredient10,
          strIngredient11: formData.strIngredient11,
          strIngredient12: formData.strIngredient12,
          strIngredient13: formData.strIngredient13,
          strIngredient14: formData.strIngredient14,
          strIngredient15: formData.strIngredient15,
          strIngredient16: formData.strIngredient16,
          strIngredient17: formData.strIngredient17,
          strIngredient18: formData.strIngredient18,
          strIngredient19: formData.strIngredient19,
          strIngredient20: formData.strIngredient20,
          strMeasure1: formData.strMeasure1,
          strMeasure2: formData.strMeasure2,
          strMeasure3: formData.strMeasure3,
          strMeasure4: formData.strMeasure4,
          strMeasure5: formData.strMeasure5,
          strMeasure6: formData.strMeasure6,
          strMeasure7: formData.strMeasure7,
          strMeasure8: formData.strMeasure8,
          strMeasure9: formData.strMeasure9,
          strMeasure10: formData.strMeasure10,
          strMeasure11: formData.strMeasure11,
          strMeasure12: formData.strMeasure12,
          strMeasure13: formData.strMeasure13,
          strMeasure14: formData.strMeasure14,
          strMeasure15: formData.strMeasure15,
          strMeasure16: formData.strMeasure16,
          strMeasure17: formData.strMeasure17,
          strMeasure18: formData.strMeasure18,
          strMeasure19: formData.strMeasure19,
          strMeasure20: formData.strMeasure20,
        },])
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

  // Inside the return statement of ModifyMyArticle component
  return (
    <Layout>
      <h1 className="wt-title">Modify Article</h1>
      <form className="[&_span]:block grid gap-3" onSubmit={onSubmit}>
        <div>
          <label>
            <span className="block font-bold mb-1">Meal name</span>
            <input
              type="text"
              name="strMeal"
              value={formData.strMeal}
              onChange={(e) => setFormData({ ...formData, strMeal: e.target.value })}
            />
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1">Category</span>
            <select
              name="strCategory"
              value={formData.strCategory}
              onChange={(e) => setFormData({ ...formData, strCategory: e.target.value })}
            >
              <option value=""></option>
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1">Area</span>
            <select
              name="strArea"
              value={formData.strArea}
              onChange={(e) => setFormData({ ...formData, strArea: e.target.value })}
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
            <span className="block font-bold mb-1">Instructions</span>
            <textarea
              name="strInstructions"
              value={formData.strInstructions}
              onChange={(e) => setFormData({ ...formData, strInstructions: e.target.value })}
              rows={6}
            />
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1">Meal Thumb</span>
            <input
              type="text"
              name="strMealThumb"
              value={formData.strMealThumb}
              onChange={(e) => setFormData({ ...formData, strMealThumb: e.target.value })}
            />
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1">Meal Tags</span>
            <input
              type="text"
              name="strTags"
              value={formData.strTags}
              onChange={(e) => setFormData({ ...formData, strTags: e.target.value })}
            />
          </label>
        </div>

        <div>
          <label>
            <span className="block font-bold mb-1">Youtube Video Link</span>
            <input
              type="text"
              name="strYoutube"
              value={formData.strYoutube}
              onChange={(e) => setFormData({ ...formData, strYoutube: e.target.value })}
            />
          </label>
        </div>

        {[...Array(20).keys()].map((index) => (
          <div key={index}>
            <label>
              <span className="block font-bold mb-1">{`Ingredient ${index + 1}`}</span>
              <input
                type="text"
                name={`strIngredient${index + 1}`}
                value={formData[`strIngredient${index + 1}`]}
                onChange={(e) => setFormData({ ...formData, [`strIngredient${index + 1}`]: e.target.value })}
              />
            </label>
          </div>
        ))}

        {[...Array(20).keys()].map((index) => (
          <div key={index}>
            <label>
              <span className="block font-bold mb-1">{`Measure ${index + 1}`}</span>
              <input
                type="text"
                name={`strMeasure${index + 1}`}
                value={formData[`strMeasure${index + 1}`]}
                onChange={(e) => setFormData({ ...formData, [`strMeasure${index + 1}`]: e.target.value })}
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
        ))}

        <div>
          <button
            className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
            type="submit"
          >
            Update my article
          </button>
        </div>

        <button
          className="rounded py-1 px-3 text-white bg-red-500 hover:bg-red-700"
          type="button"
          onClick={() => onCancel()}
        >
          Cancel the update
        </button>
      </form>
    </Layout>
  );

}
