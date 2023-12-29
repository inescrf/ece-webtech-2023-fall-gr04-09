import React, { useState, useEffect } from 'react';
import { createHash } from 'crypto';

const getGravatarURL = (email, size) => {
  const hash = createHash('md5').update(email.toLowerCase().trim()).digest('hex');
  return `https://www.gravatar.com/avatar/${hash}?s=${size}`;
};

const GravatarComponent = ({ email, size }) => {
  const [avatarURL, setAvatarURL] = useState('');

  useEffect(() => {
    displayGravatar();
  }, [email, size]);

  const displayGravatar = () => {
    if (email) {
      const gravatarURL = getGravatarURL(email, size);
      setAvatarURL(gravatarURL);
    } else {

      setAvatarURL(`https://www.gravatar.com/avatar/default?s=${size}`);
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
