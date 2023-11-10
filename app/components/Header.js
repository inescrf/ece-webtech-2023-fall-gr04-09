import React, { useContext } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './UserContext'; // Importez le UserContext

const Header = () => {
  const { user, login, logout } = useContext(UserContext);

  const onClickLogout = () => {
    logout();
  };

  return (
    <header className="text-center text-[#93b1a7] text-6xl">
      <br />
      <p> Welcome to BigDataPulse ! </p>
      <br />
      {user ? (
        // Affiche l'icône d'utilisateur, le nom d'utilisateur et le bouton de déconnexion si l'utilisateur est connecté
        <div className="flex items-center justify-center mb-4">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-black text-lg mr-2"
            style={{ width: '60px', height: '60px' }}
          />
          <div className="flex flex-col">
            <p className="mb-1 text-black text-sm">Welcome, {user.username}!</p>
            <p className="text-black text-xs">Email: {user.email}</p>
            <button onClick={onClickLogout}>Logout</button>
          </div>
        </div>
      ) : (
        // Affiche le bouton de connexion si l'utilisateur n'est pas connecté
        <div>
          <button onClick={login}>Login</button>
        </div>
      )}
      <nav className="bg-[#5C785C] border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
          <ul className="font-medium flex flex-row space-x-8">
            <li className="bg-[#5C785C]">
              <Link href="/" passHref>
                <span className="block py-2 pl-3 pr-4 text-[#93b1a7] rounded hover:text-[#93b1a7] text-4xl" aria-current="page">
                  Home
                </span>
              </Link>
            </li>
            <li className="bg-[#5C785C]">
              <Link href="/about" passHref>
                <span className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#93b1a7] text-4xl">About</span>
              </Link>
            </li>
            <li className="bg-[#5C785C]">
              <Link href="/contacts" passHref>
                <span className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#93b1a7] text-4xl">Contacts</span>
              </Link>
            </li>
            <li className="bg-[#5C785C]">
              <Link href="/articles" passHref>
                <span className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#93b1a7] text-4xl">Articles</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
