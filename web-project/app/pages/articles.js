import React from 'react';
import Layout from '../components/Layout.js'
import RandomMealComponent from '../components/RandomMealComponent.js';

const RepasLayout = () => {
  return (
    <Layout>
      <div className="flex justify-center items-stretch">
        {/* Première colonne */}
        <div className="flex-grow p-4 h-full">
        <h2 className="text-xl font-bold mb-4">Colonne 1</h2>
          {[...Array(4)].map((_, index) => (
            <RandomMealComponent key={index} />
          ))}
        </div>

        {/* Deuxième colonne */}
        <div className="flex-grow p-4 h-full">
          <h2 className="text-xl font-bold mb-4">Colonne 2</h2>
          {[...Array(4)].map((_, index) => (
            <RandomMealComponent key={index} />
          ))}
        </div>

        {/* Article de la communauté */}
        <div className="flex-grow p-4 h-full">
          <h2 className="text-xl font-bold mb-4">Colonne 3</h2>
          {[...Array(4)].map((_, index) => (
            <RandomMealComponent key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RepasLayout;
