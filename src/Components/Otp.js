import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

function Otp({ otpLength = 6 }) {
  const [Otpfields, setOtpfields] = useState(new Array(otpLength).fill(""));
  const ref=useRef([]);
  console.log(ref);
  const handlekeyDown = (e, index) => {
    const key = e.key;
    if(key==="ArrowLeft"){
        ref.current[index-1].focus();
    }
    if(key==="ArrowRight"){
ref.current[index+1].focus();
    }
    const copyOtpFields = [...Otpfields];
    if(key==="Backspace"){
        copyOtpFields[index]="";
        setOtpfields(copyOtpFields);
        if(index>0)
        ref.current[index-1].focus();
        return;
    }
        
    if (isNaN(key)) return;
    copyOtpFields[index] = key;
    if(index+1<Otpfields.length)
    ref.current[index+1].focus();
    setOtpfields(copyOtpFields);
    console.log(key);
  };
  useEffect(()=>{
ref.current[0].focus();
  },[])
  return (
    <>
      <div className="parent">
        <h1>OTP Mailer</h1>
        <p>Enter the Verification code send to:</p>
        <div className="parent-timer">
          {/* <h1>OTP Mailer:</h1> */}
          <h1>Time remaining:</h1>
          <Timer initialTime={300} />
        </div>

        <div className="container">
          {Otpfields.map((value, index) => {
            return (
              <input
                type="text"
                key={index}
                ref={(currentInput)=>ref.current[index]=currentInput}
                value={value}
                onKeyDown={(e) => handlekeyDown(e, index)}
              />
            );
          })}
        </div>
        <button id="verify-button">Verify</button>
      </div>
    </>
  );
}

export default Otp;
