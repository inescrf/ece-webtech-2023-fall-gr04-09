import GravatarComponent from '../components/GravatarComponent';

const MyPage = () => {
  return (
    <div>
      <h1>Ma Page</h1>
      <GravatarComponent email="teo.sialelli@edu.ece.fr" size={250} displayGravatar/>
    </div>
  );
};

export default MyPage;


