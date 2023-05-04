import React from 'react';
import './App.css'
import { useRef } from 'react';

export default function App() {
  const apiUrl = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';

  const inputref = useRef(' ')

  function mobileOtp() {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile:parseInt(inputref.current.value),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div>
      <input type="number" ref={inputref} placeholder='number' />
      <button onClick={mobileOtp}>OTP</button>
    </div>
  );
}
