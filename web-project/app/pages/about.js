import Layout from '../components/Layout.js';

export default function Page() {
  return (
    <Layout
      title="About us"
    >
      <h1 className='wt-title'>
        Welcome to nom-de-site-a-trouver
      </h1>

      <div className="container mx-auto p-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to nom-de-site-a-trouver</h1>

        <p className="text-gray-700 mb-6">
          Embark on a culinary journey with nom-de-site-a-trouver, your ultimate destination for a world of delightful recipes! Whether you are a seasoned chef or a kitchen novice, our site offers a treasure trove of gastronomic inspiration.
        </p>

        <h2 className="text-2xl font-bold text-indigo-700 mb-2">Explore and Create:</h2>
        <p className="text-gray-700 mb-6">
          Dive into our extensive collection of curated recipes, spanning cuisines from every corner of the globe. From mouthwatering mains to delectable desserts, our user-friendly interface ensures you can easily find the perfect recipe for any occasion.
        </p>

        <h2 className="text-2xl font-bold text-indigo-700 mb-2">Join the Community:</h2>
        <p className="text-gray-700 mb-6">
          What sets nom-de-site-a-trouver apart is our vibrant community of home cooks, chefs, and food enthusiasts. Create an account using your GitHub credentials, and unlock the ability to not only browse recipes but also contribute your culinary masterpieces. Share your unique creations with the world, and let your fellow foodies savor the flavors of your expertise.
        </p>

        <h2 className="text-2xl font-bold text-indigo-700 mb-2">Engage and Connect:</h2>
        <p className="text-gray-700 mb-6">
          Even without an account, you can still be a part of the nom-de-site-a-trouver experience. Leave comments on recipe splats, sharing your thoughts, tips, and modifications. It is a space where food lovers come together to celebrate the art of cooking.
        </p>

        <h2 className="text-2xl font-bold text-indigo-700 mb-2">Why nom-de-site-a-trouver?</h2>
        <ul className="list-disc text-gray-700 mb-6 ml-6">
          <li><span className="text-red-600 font-bold">Diverse Recipes:</span> Explore a diverse range of recipes, from traditional favorites to innovative creations.</li>
          <li><span className="text-red-600 font-bold">User-Generated Content:</span> Contribute your own recipes and become a part of a dynamic culinary community.</li>
          <li><span className="text-red-600 font-bold">Engagement for All:</span> Whether you are a seasoned chef or a kitchen beginner, there is a place for you at nom-de-site-a-trouver.</li>
        </ul>
      </div>
    </Layout>
  );
}
