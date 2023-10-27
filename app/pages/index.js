import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';


const Home = () => {
  return (
    <Layout>
      <h1 className="text-center font-bold text-[#5C785C] text-2xl">Home Page</h1>
      <br></br>
      <nav className=" border-gray-200 dark:bg-gray-900">
        <div className=" max-w-screen-xl flex items-center justify-center mx-auto p-4">
          <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row space-x-0 md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/about" passHref>
                <span className="block py-2 pl-3 pr-4 text-[#93b1a7] rounded hover:text-[#5C785C] md:hover-bg-transparent md:border-0 md:hover-text-[#93b1a7] md:p-0 dark:text-white md:dark:hover-text-sky-700 dark:hover-text-[#93b1a7] dark:hover-text-white md:dark:hover-bg-transparent text-xl">About</span>
              </Link>
            </li>
            <li>
              <Link href="/contacts" passHref>
                <span className="block py-2 pl-3 pr-4 text-[#93b1a7] rounded hover:text-[#5C785C] md:hover-bg-transparent md:border-0 md:hover-text-[#93b1a7] md:p-0 dark:text-white md:dark:hover-text-sky-700 dark:hover-text-sky-700 dark:hover-text-white md:dark:hover-bg-transparent text-xl">Contacts</span>
              </Link>
            </li>
            <li>
              <Link href="/articles" passHref>
                <span className="block py-2 pl-3 pr-4 text-[#93b1a7] rounded hover:text-[#5C785C] md:hover-bg-transparent md:border-0 md:hover-text-[#93b1a7] md:p-0 dark:text-white md:dark:hover-text-sky-700 dark:hover-text-sky-700 dark:hover-text-white md:dark:hover-bg-transparent text-xl">Articles</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Layout>
  );
};

export default Home;
