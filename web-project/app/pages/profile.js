import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout.js';
import UserContext from '../components/UserContext.js';
import Link from 'next/link'


export default function ProfileLayout() {
  const { profile } = useContext(UserContext);

  useEffect(() => {
    // Redirect to localhost:3000 if the profile is null
    if (!profile) {
      window.location.href = 'http://localhost:3000';
    }
  }, [profile]);

  if (!profile) {
    // Return null or a loading indicator if the profile is null
    return null;
  }

  const datePart = profile.created_at.substring(0, 10);
  return (
    <Layout>
      <div className="flex justify-center items-stretch">
        <div>
          <h2>Your Profile :)</h2>
          <p> --</p>
          <p>Member since : {datePart} </p>
          <p> --</p>
          <p>Email : {profile.email}</p>
          <p> --</p>
          <p> <Link className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500" href="/profile/create-article">Create an article</Link> </p>
          <p> --</p>
          <p> <Link className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500" href="/profile/my-articles">My articles</Link> </p>
          <p> --</p>
          <p> <Link className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500" href="/profile/my-comments">My comments</Link> </p>


        </div>
      </div>
    </Layout>
  );

}
