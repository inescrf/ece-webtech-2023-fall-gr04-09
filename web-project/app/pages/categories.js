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

  return (
    <Layout>
      <div className="flex flex-wrap justify-center items-stretch">
        {categories.map((category) => (
          <div key={category.strCategory} className="flex-grow p-4 h-full w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/7">
            <h2 className="text-xl font-bold mb-4">{category.strCategory}</h2>
            <Link href={`/categories/${category.strCategory}`}>
              
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="w-full h-40 object-cover mb-4"
                />
              
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CategoriesPage;
