import React, { useEffect, useState, useRef } from 'react';
import './Ue.css';
export default function ImageChange()
{
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
  ];
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.src = images[imageIndex];
  }, [imageIndex]);

  const changeImage = () => {
    if(imageIndex<images.length-1){
        setImageIndex(imageIndex+1);

    }
    else{
        alert('no more image')
        setImageIndex(0)
    }
  };

  return (
    <div className='wrapper'>
      <img  ref={imageRef} alt="Current Image" /><br>
      </br>
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
};