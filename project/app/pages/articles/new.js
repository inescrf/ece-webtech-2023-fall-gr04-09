import { useContext, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import Layout from '../../components/Layout.js'
import UserContext from '../../components/UserContext.js';
export default function CreateArticle() {
  const { profile } = useContext(UserContext);
  const supabase = useSupabaseClient();
  const [message, setMessage] = useState(null);
  const categoryOptions = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];
  const areaOptions = ["American", "British", "Canadian", "Chinese", "Croatian", "Dutch", "Egyptian", "Filipino", "French", "Greek", "Indian", "Irish", "Italian", "Jamaican", "Japanese", "Kenyan", "Malaysian", "Mexican", "Moroccan", "Polish", "Portuguese", "Russian", "Spanish", "Thai", "Tunisian", "Turkish", "Unknown", "Vietnamese",
  ];

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
  const fieldNames = [
    'Meal name',
    'Category',
    'Area',
    'Instructions',
    'Meal Thumb',
    'Meal Tags',
    'Youtube video link',
    'Ingredient 1',
    'Ingredient 2',
    'Ingredient 3',
    'Ingredient 4',
    'Ingredient 5',
    'Ingredient 6',
    'Ingredient 7',
    'Ingredient 8',
    'Ingredient 9',
    'Ingredient 10',
    'Ingredient 11',
    'Ingredient 12',
    'Ingredient 13',
    'Ingredient 14',
    'Ingredient 15',
    'Ingredient 16',
    'Ingredient 17',
    'Ingredient 18',
    'Ingredient 19',
    'Ingredient 20',
    'Measure 1',
    'Measure 2',
    'Measure 3',
    'Measure 4',
    'Measure 5',
    'Measure 6',
    'Measure 7',
    'Measure 8',
    'Measure 9',
    'Measure 10',
    'Measure 11',
    'Measure 12',
    'Measure 13',
    'Measure 14',
    'Measure 15',
    'Measure 16',
    'Measure 17',
    'Measure 18',
    'Measure 19',
    'Measure 20',

  ];

  const onSubmit = async function (e) {
    e.preventDefault();

    const userEmail = profile.email;

    // Extracting relevant fields from formData
    const {
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient16,
      strIngredient17,
      strIngredient18,
      strIngredient19,
      strIngredient20,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
      strMeasure16,
      strMeasure17,
      strMeasure18,
      strMeasure19,
      strMeasure20,

    } = formData;

    // Insert article record into the article database
    const { data, error } = await supabase
      .from('articles')
      .upsert([
        {

          strMeal,
          strCategory,
          strArea,
          strInstructions,
          strMealThumb,
          strTags,
          strYoutube,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15,
          strIngredient16,
          strIngredient17,
          strIngredient18,
          strIngredient19,
          strIngredient20,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6,
          strMeasure7,
          strMeasure8,
          strMeasure9,
          strMeasure10,
          strMeasure11,
          strMeasure12,
          strMeasure13,
          strMeasure14,
          strMeasure15,
          strMeasure16,
          strMeasure17,
          strMeasure18,
          strMeasure19,
          strMeasure20,
          emailCreator: userEmail

        },
      ]);

    setMessage('Article record inserted successfully!');

    setFormData({
      // Resetting form fields after submission
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
  };

  return (
    <Layout title="create-article" description="Generated by create next app">
      <div className="flex justify-between items-center mb-4">
        <Link href="/profile">
          Back to Profile
        </Link>
      </div>
      <h1 className="wt-title">Article Creation</h1>




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
            Create Article
          </button>
        </div>

        <button
          className="rounded py-1 px-3 text-white bg-red-500 hover:bg-red-700"
          type="button"
          onClick={() => setFormData({
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
          })}
        >
          Cancel
        </button>

      </form>





      {message && (
        <div
          aria-label="Overlow below the drawer dialog"
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setMessage(null)}
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
          >
            {message}
          </div>
        </div>
      )}
    </Layout>
  );
}
