import React, { useState } from 'react';

const RatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <h1 className='wt-title'>Comment</h1>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleClick(star)}
            style={{
              cursor: 'pointer',
              color: star <= rating ? 'gold' : 'gray',
              fontSize: '24px', 
              marginRight: '5px'
            }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;
