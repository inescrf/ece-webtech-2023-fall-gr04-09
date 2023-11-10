import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoggedOut = () => {
  const { login } = useContext(UserContext); // Obtenez la fonction de connexion à partir du contexte

  const onClickLogin = async (e) => {
    const response = await fetch('/api/profile');
    const user = await response.json();
    login(user); // Appel de la fonction de connexion avec les données de l'utilisateur obtenues depuis l'API
  };

  return (
    <div>
      <h2>You are logged out</h2>
      <button onClick={onClickLogin}>Login</button>
    </div>
  );
};

export default LoggedOut;
