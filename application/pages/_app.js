// pages/_app.js
import React from 'react';
import { UserContextProvider } from '../components/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;