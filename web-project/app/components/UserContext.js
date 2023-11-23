import { createContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const Context = createContext();

export default Context;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const ContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Vérifiez si l'utilisateur est déjà connecté dans le stockage local
    const storedProfile = localStorage.getItem('supabaseProfile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }

    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        // Stockez le profil dans le stockage local lorsque l'utilisateur se connecte
        localStorage.setItem('supabaseProfile', JSON.stringify(session.user));
        setProfile(session.user);
      } else if (event === 'SIGNED_OUT') {
        // Retirez le profil du stockage local lorsque l'utilisateur se déconnecte
        localStorage.removeItem('supabaseProfile');
        setProfile(null);
      }
    });

    return () => {
      if (authListener && authListener.unsubscribe) {
        authListener.unsubscribe();
      }
    };
  }, []);

  const login = async () => {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    if (error) {
      console.error('Erreur de connexion avec GitHub:', error.message);
      return;
    }

  };

  const logout = async () => {
    await supabase.auth.signOut();
    // Ne retirez pas le profil du stockage local ici, cela doit être fait dans l'effet de changement d'état
  };

  return (
    <Context.Provider
      value={{
        profile: profile,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};
