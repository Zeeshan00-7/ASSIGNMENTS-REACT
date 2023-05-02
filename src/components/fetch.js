import React, { useState, useEffect } from 'react';

export default function Fetching() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.message);
        
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="Random dog" />
    </div>
  );
}