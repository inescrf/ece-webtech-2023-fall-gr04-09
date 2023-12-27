import React from 'react';
import Layout from '../components/Layout.js';
import RandomMealComponent from '../components/articles/IdAPIRandom.js';
import UserRandomMealComponent from '../components/articles/IdRandomUser.js';

const RepasLayout = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mb-4 text-green-1">Random Meals Idea</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="p-4 bg-green-2 shadow-lg rounded-lg">
              <RandomMealComponent key={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-camel">User Meals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="p-4 bg-beige-1 shadow-lg rounded-lg">
              <UserRandomMealComponent key={index} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RepasLayout;
