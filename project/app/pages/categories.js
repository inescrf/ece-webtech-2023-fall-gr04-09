import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const colors = ['camel', 'beige-2', 'beige-1', 'green-2', 'green-1'];

  return (
    <Layout>
      <h1 className="text-3xl font-extrabold mb-4 text-green-1 text-center"> Meals Categories </h1>
      <div className="flex flex-wrap justify-center items-stretch">
        {categories.map((category, index) => (
          <div
            key={category.strCategory}
            className={`m-4 p-4 shadow-lg rounded-lg w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 bg-${colors[index % 5]} relative`}
          >
            <Link href={`/categories/${category.strCategory}`}>
              <span className="cursor-pointer block relative">
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="w-full h-40 object-cover mb-4 rounded-t-lg"
                />
                <h2
                  className={`text-xl font-bold mb-4 text-center relative z-10 transition-colors duration-300 hover:text-green-hover ${
                    colors[index % 5] === 'camel' ? 'text-white' : 'text-camel'
                  }`}
                >
                  {category.strCategory}
                </h2>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CategoriesPage;
