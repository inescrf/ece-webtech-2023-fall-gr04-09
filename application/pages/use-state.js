// pages/use-state.js
import React from 'react';
import Layout from '../components/Layout';  // Assurez-vous d'avoir un composant Layout pour organiser votre page
import Counter from '../components/Counter';

const UseStatePage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Use State Page</h1>
        <Counter />
      </div>
    </Layout>
  );
};

export default UseStatePage;
