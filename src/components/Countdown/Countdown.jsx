import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1);

    
  });

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Countdown has reached or passed the target date
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    } else {
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  }

  return (
    <div className="mb-5 ">
        <h3 className="text-5xl text-center mb-5 uppercase font-semibold">Countdown</h3>
      <div className="w-full min-h-[200px] flex flex-col items-center justify-center ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center auto-cols-max">
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-box text-neutral-content border-4 border-red   ">
            <span className="countdown ">
              <span style={{ "--value": 15 }}>{remainingTime.days}</span>
            </span>
            days
          </div>
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-box text-neutral-content border-4 border-red">
            <span className=" countdown">
              <span style={{ "--value": 10 }}>{remainingTime.hours}</span>
            </span>
            hours
          </div>
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-box text-neutral-content border-4 border-red">
            <span className="countdown ">
              <span className="" style={{ "--value": 24 }}>
                {remainingTime.minutes}
              </span>
            </span>
            min
          </div>
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-box text-neutral-content border-4 border-red">
            <span className="countdown ">
              <span style={{ "--value": 51 }}>{remainingTime.seconds}</span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
