import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import '@/styles/globals.css';
import { ContextProvider } from '../components/UserContext';
import { ThemeProvider } from '../components/ThemeContext'; // Importez ThemeProvider

export default function App({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ContextProvider>
        <ThemeProvider> {/* Ajoutez ThemeProvider ici */}
          <Component {...pageProps}/>
        </ThemeProvider>
      </ContextProvider>
    </SessionContextProvider>
  );
}
