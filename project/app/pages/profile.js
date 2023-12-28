import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../components/UserContext';
import Layout from '../components/Layout';
import GravatarComponent from '../components/GravatarComponent';
import Link from 'next/link';
import { FaPen, FaBook, FaUserEdit, FaSignOutAlt } from 'react-icons/fa';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Page() {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);
  const [adminStatus, setAdminStatus] = useState(null);

  useEffect(() => {
    if (user == null || user.email == null) {
      console.error("Error in profile page: User or user email is undefined or null");
      router.push('/');
      return;
    }

    const fetchStatus = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('admin')
          .eq('email', user.email);

        if (error) {
          console.error(error);
          return;
        }

        // Set the admin status in state
        setAdminStatus(data[0]?.admin);
      } catch (error) {
        console.error('Error fetching admin status:', error.message);
      }
    };

    fetchStatus();
  }, [user, router]);

  const onClickLogout = () => {
    logout();
    router.push('/');
  };

  if (user == null || user.email == null) {
    return null;
  }

  return (
    <Layout>
      <div className="flex flex-col w-full h-full">
        <h2 className="text-3xl font-extrabold mb-4 text-green-1 text-center">Your profile page</h2>
        <p><br /></p>
        <p><br /></p>
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col items-center w-1/2 bg-beige-1 p-4 h-full">
            <GravatarComponent email={user.email} size={200} />
            <div className="text-lg text-camel my-4">
              <p>
                <span className="font-semibold">Username:</span> {user.user_metadata?.user_name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {adminStatus ? ' Admin' : ' User'}
              </p>

              <button
                className="rounded px-4 py-3 text-white bg-green-1 hover:bg-green-2 flex items-center mt-4"
                onClick={onClickLogout}
              >
                <FaSignOutAlt className="mr-2" /> Sign out
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center w-1/2 space-y-6 self-center">
            <Link href="/articles/new" passHref>
              <span className="rounded py-3 px-4 text-camel border border-camel hover:bg-beige-2 hover:text-camel flex items-center cursor-pointer text-lg dark:bg-beige-2 dark:hover:bg-beige-1">
                <FaPen className="mr-3" /> Create an Article
              </span>
            </Link>
            <Link href="/articles/view" passHref>
              <span className="rounded py-3 px-4 text-camel border border-camel hover:bg-beige-2 hover:text-camel flex items-center cursor-pointer text-lg dark:bg-beige-2 dark:hover:bg-beige-1">
                <FaBook className="mr-3" /> My Articles
              </span>
            </Link>

            {adminStatus && (
              <Link href="/admin/contacts" passHref>
                <span className="rounded py-3 px-4 text-camel border border-camel hover:bg-beige-2 hover:text-camel flex items-center cursor-pointer text-lg dark:bg-beige-2 dark:hover:bg-beige-1">
                  <FaPen className="mr-3" /> Admin page
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
