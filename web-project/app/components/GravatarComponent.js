import React, { useState, useEffect } from 'react';
import { createHash } from 'crypto';
import md5 from 'md5';

const getGravatarURL = (email, size) => {
  const hash = createHash('md5').update(email.toLowerCase().trim()).digest('hex');
  return `https://www.gravatar.com/avatar/${hash}?s=${size}`;
};

const GravatarComponent = ({ email, size }) => {
  const [avatarURL, setAvatarURL] = useState('');

  useEffect(() => {
    displayGravatar();
  }, [email, size]); // Appeler displayGravatar lorsque l'email ou la taille changent

  const displayGravatar = () => {
    if (email.trim() !== '') {
      const gravatarURL = getGravatarURL(email, size);
      setAvatarURL(gravatarURL);
    } else {
      // Si aucun e-mail n'est saisi, affiche l'image par défaut de Gravatar
      setAvatarURL('https://www.gravatar.com/avatar/default?s=' + size);
    }
  };

  return (
    <div>
      <div id="gravatar-container">
        {avatarURL && <img src={avatarURL} alt="Gravatar" width={size} height={size} />}
      </div>
    </div>
  );
};

export default GravatarComponent;
