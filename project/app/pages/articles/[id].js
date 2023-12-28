import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import IdMealComponent from '../../components/articles/IdAPI';
import NewComment from '../../components/comments/NewComment';
import Comment from '../../components/comments/Comment';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div>
        {id && <IdMealComponent mealId={id} />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div>
          {id && <Comment mealId={id} />}
        </div>
        <div>
          {id && <NewComment mealId={id} />}
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
