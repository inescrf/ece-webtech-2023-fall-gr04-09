import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout.js';
import UserContext from '../components/UserContext.js';
import Link from 'next/link';
import GravatarComponent from '../components/GravatarComponent';

export default function userLayout() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    // Rediriger vers localhost:3000 si le profil est null
    if (!user) {
      window.location.href = 'http://localhost:3000';
    }
  }, [user]);

  if (!user) {
    // Retourner null ou un indicateur de chargement si le profil est null
    return null;
  }

  const datePart = user.created_at.substring(0, 10);

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold mb-4">Your user :)</h2>
        
        <GravatarComponent email={user.email} size={250} />


        <div className="border-t-2 border-gray-200 my-4"></div>

        <div className="text-lg">
          <p>
            <span className="font-semibold">User Name:</span> {user.user_metadata?.user_name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Member Since:</span> {datePart}
          </p>
        </div>

        <div className="border-t-2 border-gray-200 my-4"></div>

        <div className="space-y-4 space-x-4">
          <Link href="/user/create-article"
            className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            Create an Article
          </Link>

          <Link href="/user/my-articles"
            className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            My Articles
          </Link>

          <Link href="/user/my-comments"
            className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            My Comments
          </Link>
        </div>
      </div>
    </Layout>
  );
}
