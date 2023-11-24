import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import IdMealComponent from '../../components/IdMealComponent';
import CreateCommentComponent from '../../components/CreateCommentComponent';
import RatingComponent from '../../components/RatingComponent';
import CommentsComponent from '../../components/CommentsComponent';



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
        {id && <CommentsComponent mealId={id} />}
        </div>
        <div className="w-1/2 pl-4">
        <RatingComponent/>
          {id && <CreateCommentComponent mealId={id} />}
        </div>
        
        
      </div>
    </Layout>
  );
};

export default ArticlePage;
