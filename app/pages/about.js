import Layout from '../components/Layout.js';

export default function Page() {
  return (
    <Layout
      title="About us"
    >
      <h1 className="text-3xl font-extrabold text-green-1 mb-4 text-center">About us</h1>

      <div className="container mx-auto p-8 max-w-3xl">
        <p className="text-center text-gray-700 mb-6 dark:text-white">
          We are a team of three engineering students who are passionate about food and find it endlessly fascinating to explore flavors from around the world. 
          The combination of tastes in cooking is infinite, which is why we decided to create a website that brings together all kinds of recipes.
        </p>
        <br /> <br />
        <div className="grid grid-cols-3 gap-4 text-center dark:text-white">
          <div>
            <img src="/hugo.jpeg" alt="Hugo Dalmasso" className="mx-auto h-40 w-40 rounded-full" />
            <p className="font-semibold mt-2">Hugo Dalmasso</p>
            <p>hugo.dalmasso@edu.ece.fr</p>
          </div>

          <div>
            <img src="/ines.png" alt="Ines Goulamhoussen" className="mx-auto h-40 w-40 rounded-full" />
            <p className="font-semibold mt-2">Ines Goulamhoussen</p>
            <p>ines.goulamhoussen@edu.ece.fr</p>
          </div>

          <div>
            <img src="/teo.png" alt="Tes Sialelli" className="mx-auto h-40 w-40 rounded-full" />
            <p className="font-semibold mt-2">Teo Sialelli</p>
            <p>teo.sialelli@edu.ece.fr</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
