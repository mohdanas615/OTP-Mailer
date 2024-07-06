import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);

      return () => clearInterval(timerId); // Cleanup the interval on component unmount
    }
  }, [time]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
    </div>
  );
};

export default CountdownTimer;