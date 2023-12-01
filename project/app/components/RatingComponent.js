import React, { useState, useEffect } from 'react';

const RatingComponent = ({ rating, readOnly, onChange }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleClick = (value) => {
    if (!readOnly) {
      setSelectedRating(value);
      onChange(value); // Appel de la fonction de rappel onChange
    }
  };

  useEffect(() => {
    setSelectedRating(rating);
  }, [rating]);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          style={{
            cursor: readOnly ? 'default' : 'pointer',
            color: star <= selectedRating ? 'gold' : 'gray',
            fontSize: '24px',
            marginRight: '5px',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingComponent;
