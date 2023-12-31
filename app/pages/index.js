import Link from 'next/link';
import Layout from '../components/Layout.js';
import { useContext } from 'react';
import UserContext from '../components/UserContext';
import CarrouselImages from '../components/carrouselimages.js';

export default function Page() {
  const { profile } = useContext(UserContext);

  return (
    <Layout description="Generated by create next app">
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-3xl font-extrabold mb-4 text-green-1 text-center">
          {profile ? (
            <p>Welcome {profile.user_metadata?.user_name}!</p>
          ) : (
            <p>Welcome to AdaltaCook !</p>
          )}
        </h1>
        <p><br /></p>
        {/* Titre du carrousel */}
        <h2 className="text-2xl font-bold mb-2 text-camel">
          Feel like cooking? Check out a recipe you like
        </h2>
        <p><br /></p>
        <div className="w-full flex justify-center">
          <CarrouselImages />
        </div>


        <ul className="list-disc pl-4 mt-4">
          {/* Reste des liens et contenu */}
          <div className="w-full flex justify-center space-x-6 mt-6">
            <button className="bg-camel text-beige-1 font-bold py-3 px-6 rounded text-lg hover:bg-green-hover">
              <Link href="/about">
                About Us
              </Link>
            </button>
            <button className="bg-green-1 text-beige-2 font-bold py-3 px-6 rounded text-lg hover:bg-green-hover dark:text-dark-color">
              <Link href="/contacts">
                Contact Us
              </Link>
            </button>
            <button className="bg-beige-1 text-camel font-bold py-3 px-6 rounded text-lg hover:bg-green-hover">
              <Link href="https://github.com/adaltas/ece-webtech-2023-fall/blob/master/project-instructions.md">
                Project Instructions
              </Link>
            </button>
          </div>


        </ul>
      </div>
    </Layout>
  );
}
