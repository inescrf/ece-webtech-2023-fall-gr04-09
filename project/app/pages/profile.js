import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react';
import UserContext from '../components/UserContext'
import Layout from '../components/Layout.js'
import GravatarComponent from '../components/GravatarComponent';
import Link from 'next/link';


export default function Page() {
  const router = useRouter()
  const { user, logout } = useContext(UserContext)
  const onClickLogout = () => {
    logout()
    router.push('/')
  }
  useEffect(() => {
    if (user==null) {
      router.push('/');
    }
  }, [user, router]);

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
          <button
          className="rounded px-3 py-2 text-white bg-slate-500 hover:bg-blue-500"
          onClick={onClickLogout}
          
        >
          Sign out
        </button>
          </p>
        </div>

        <div className="border-t-2 border-gray-200 my-4"></div>

        <div className="space-y-4 space-x-4">
          <Link href="/profile/create-article"
            className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            Create an Article
          </Link>

          <Link href="/profile/my-articles"
            className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            My Articles
          </Link>

          <Link href="/profile/my-comments"
            className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            My Comments
          </Link>
        </div>
      </div>
    </Layout>
  );
}