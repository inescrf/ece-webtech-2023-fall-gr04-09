import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import IdMealComponent from '../../components/IdMealComponent';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div>
        {id && <IdMealComponent mealId={id} />}
      </div>
    </Layout>
  );
};

export default ArticlePage;
