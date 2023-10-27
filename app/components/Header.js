import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-center text-[#93b1a7] text-6xl">
      <br />
      <p> Welcome to BigDataPulse ! </p>
      <br />
      <nav className="bg-[#5C785C] border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
          <ul className="font-medium flex flex-row space-x-8">
            <li className="bg-[#5C785C]">
              <Link href="/" passHref>
                <span className="block py-2 pl-3 pr-4 text-[#93b1a7] rounded hover:text-[#93b1a7] text-4xl" aria-current="page">Home</span>
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
