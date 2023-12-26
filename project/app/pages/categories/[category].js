import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import CategoryMealComponent from '../../components/articles/Category';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Layout>
      <div className="p-4 bg-beige-1">
        <h1 className="text-2xl font-bold text-camel mb-4">Meals in category: {category}</h1>
        <CategoryMealComponent mealCat={category} />
      </div>
    </Layout>
  );
};

export default CategoryPage;
