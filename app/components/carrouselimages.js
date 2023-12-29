import React, { useState, useEffect } from 'react';

const CarrouselImages = () => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const fetchImages = async () => {
      const urls = await Promise.all(
        Array.from({ length: 10 }, () => 
          fetchDataFromApi('https://www.themealdb.com/api/json/v1/1/random.php'))
      );
      setImages(urls);
    };

    fetchImages();
  }, []);

  const fetchDataFromApi = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.meals[0].strMealThumb;
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  };

  return (
    <div className="carrousel overflow-hidden w-4/5">
      <div className="scrolling-wrapper flex whitespace-nowrap">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Recipe ${index + 1}`} className="inline-block w-1/2 h-auto" />
        ))}
      </div>

      <style jsx>{`
        .scrolling-wrapper {
          animation: scroll 57s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-500%); }
        }
      `}</style>
    </div>
  );
};

export default CarrouselImages;
