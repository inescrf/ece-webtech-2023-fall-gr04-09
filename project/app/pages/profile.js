import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import UserContext from '../components/UserContext';
import Layout from '../components/Layout';
import GravatarComponent from '../components/GravatarComponent';
import Link from 'next/link';
import { FaPen, FaBook, FaUserEdit, FaSignOutAlt } from 'react-icons/fa';

export default function Page() {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);

  useEffect(() => {
    if (user == null || user.email == null) {
      console.error("Error in profile page: User or user email is undefined or null");
      router.push('/');
    }
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
      <div className="flex flex-col w-full h-full"> {/* Ajustement pour occuper toute la hauteur et largeur */}
        <h2 className="text-3xl font-extrabold mb-4 text-green-1 text-center">Your profile page</h2>
        <p><br /></p>
        <p><br /></p>
        <div className="flex flex-row w-full h-full"> {/* Ajustement pour occuper toute la hauteur et largeur */}
        
          {/* Colonne de gauche pour les informations de l'utilisateur */}
          <div className="flex flex-col items-center w-1/2 bg-beige-1 p-4 h-full">
            <GravatarComponent email={user.email} size={200} />
            <div className="text-lg text-camel my-4">
              <p>
                <span className="font-semibold">Username:</span> {user.user_metadata?.user_name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <button
                className="rounded px-4 py-3 text-white bg-green-1 hover:bg-green-2 flex items-center mt-4"
                onClick={onClickLogout}
              >
                <FaSignOutAlt className="mr-2" /> Sign out
              </button>
            </div>
          </div>


          {/* Colonne de droite pour les boutons d'action */}
          <div className="flex flex-col items-center w-1/2 space-y-6 self-center">
            <Link href="/articles/new" passHref>
              <span className="rounded py-3 px-4 text-camel border border-camel hover:bg-beige-2 hover:text-camel flex items-center cursor-pointer text-lg">
                <FaPen className="mr-3" /> Create an Article
              </span>
            </Link>
            <Link href="/articles/view" passHref>
              <span className="rounded py-3 px-4 text-camel border border-camel hover:bg-beige-2 hover:text-camel flex items-center cursor-pointer text-lg">
                <FaBook className="mr-3" /> My Articles
              </span>
            </Link>
            <Link href="/profile/edit" passHref>
              <span className="rounded py-3 px-4 text-camel border border-camel hover:bg-beige-2 hover:text-camel flex items-center cursor-pointer text-lg">
                <FaUserEdit className="mr-3" /> Edit profile
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
