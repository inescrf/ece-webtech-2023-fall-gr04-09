// components/LoginFormControlled.js
import React, { useState, useContext } from 'react';
import { useUser } from './UserContext'; // Assurez-vous d'importer le hook ou le contexte utilisateur

const LoginFormControlled = () => {
  const { login } = useUser(); // Utilisez le hook pour accéder au contexte utilisateur

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Utilisez l'objet formData ici pour envoyer les données au serveur ou effectuer d'autres traitements

    // Une fois que l'utilisateur est connecté, appelez la fonction de connexion du contexte utilisateur
    login(formData);

    // Réinitialisez le formulaire ou effectuez d'autres actions si nécessaire

    console.log('Submitted Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginFormControlled;
