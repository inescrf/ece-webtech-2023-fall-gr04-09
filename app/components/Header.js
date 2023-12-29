import Link from 'next/link';
import GravatarComponent from '../components/GravatarComponent';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import UserContext from './UserContext';
import { ThemeContext } from './ThemeContext'; 
import { FaMoon, FaSun } from 'react-icons/fa';
import { SearchIcon } from '@heroicons/react/outline';



export default function Header() {
  const { user, logout } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Appliquer la classe dark au body
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  };

  // S'assurer que la classe est correcte au chargement de la page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  return (
    <header className="flex bg-green-1 px-10 py-2">
      <Link href={`/`} className="flex-grow flex items-center">
        <Image src="/adaltacook.png" className='cursor-pointer h-6 mr-5' alt="Adaltas Logo" width={50} height={200} />
        <span className="text-slate-100 rounded py-1 px-2 hover:bg-green-hover hover:text-slate-100">
          AdaltaCook
        </span>
      </Link>
      <ul className="flex gap-5">
        <li className="rounded py-1 px-2 hover:bg-green-hover hover:text-slate-100">
          <Link href="/articles/search">
            <span className="flex items-center cursor-pointer">
              <SearchIcon className="w-5 h-5 mr-2" />
            </span>
          </Link>
        </li>

        <li className="rounded py-1 px-2 hover:bg-green-hover hover:text-slate-100">
          <Link href="/articles">
            Random Meals Idea
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-green-hover hover:text-slate-100">
          <Link href="/categories">
            Meal Categories
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-green-hover hover:text-slate-100">
          <Link href="/about">
            About us
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-green-hover hover:text-slate-100">
          <Link href="/contacts">
            Contact us
          </Link>
        </li>
        {/* Bouton de basculement du thème */}
        <li className="py-1 px-2">
          <button onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </li>
        {user && (
          <li className="rounded py-1 px-2 text-black border border-beige-1 bg-beige-1 hover:bg-beige-2 hover:text-black">
            <Link href="/profile" className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              My profile : {user.user_metadata?.user_name}
              <GravatarComponent email={user.email} size={25} />
            </Link>
          </li>
        )}
        <li className="py-1 px-2 text-black hover:text-beige-1">
          {user ?
            <button onClick={() => logout()} className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              Sign out
            </button>
            :
            <Link href="/login" className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              Sign in
            </Link>
          }
        </li>
      </ul>
    </header>
  );
}
