import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoggedIn = () => {
  const { user, logout } = useContext(UserContext); // Obtenez l'objet utilisateur et la fonction de déconnexion à partir du contexte

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default LoggedIn;
