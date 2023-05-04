import React, { useState } from "react";

function OtpGenerate() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[6-9]\d{9}$/;
    if (!regex.test(mobile)) {
      setError("Please enter a valid 10-digit Indian mobile number");
      return;
    }
    fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        setOtpSent(true);
        setError("");
      })
      .catch((error) => {
        setError("Failed to send OTP. Please try again later.");
      });
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleResendOtp = () => {
    setOtpSent(false);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Mobile Number:
          <input type="tel" value={mobile} onChange={handleMobileChange} />
        </label>
        <button type="submit">Send OTP</button>
      </form>
      {error && <p>{error}</p>}
      {otpSent && (
        <div>
          <p>OTP sent successfully to {mobile}</p>
          <button onClick={handleResendOtp}>Resend OTP</button>
        </div>
      )}
    </div>
  );
}

export default OtpGenerate;