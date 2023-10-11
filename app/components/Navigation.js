// components/Navigation.js
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <div className="title">  <Link href="/">Home</Link> </div>

        <div className="title"> <Link href="/about">About</Link> </div>

        <div className="title"> <Link href="/contacts">Contacts</Link> </div>

        <div className="title"> <Link href="/articles">Articles</Link> </div>

      </ul>
    </nav>
  );
};

export default Navigation;

