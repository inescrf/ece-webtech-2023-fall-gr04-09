import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import IdMealComponent from '../../components/articles/idAPI';
import NewComment from '../../components/comments/NewComment';
import RatingComponent from '../../components/comments/Rating';
import Comment from '../../components/comments/Comment';



RatingComponent

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="flex">
        <div >
          {id && <IdMealComponent mealId={id} />}
        </div>
        <div className="w-1/2 pl-4">
          {id && <Comment mealId={id} />}
        </div>
        <div className="w-1/2 pl-4">
          {id && <NewComment mealId={id} />}
        </div>


      </div>
    </Layout>
  );
};

export default ArticlePage;
