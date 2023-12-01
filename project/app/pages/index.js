import Link from 'next/link';
import Layout from '../components/Layout.js';
import { useContext } from 'react';
import UserContext from '../components/UserContext';

export default function Page() {
  const { profile } = useContext(UserContext);

  return (
    <Layout description="Generated by create next app">
        <h1 className="text-3xl font-bold mb-4">
          {profile ? (
            <p>Welcome {profile.user_metadata?.user_name}!</p>
          ) : (
            <p>Welcome !</p>
          )}
        </h1>

        <ul className="list-disc pl-4">
          <li className="mb-2">
            <Link href="/articles">
              View our articles
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/about">
              About us
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/contacts">
              Contact us
            </Link>
          </li>
          <li>
            <Link href="https://github.com/adaltas/ece-webtech-2023-fall/blob/master/project-instructions.md">
              PROJECT INSTRUCTIONS
            </Link>
          </li>
        </ul>
      
    </Layout>
  );
}
