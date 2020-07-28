import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div``;

const Loading = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-09-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: {} | null | any = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}
      </span>
    );
  });
  return (
    <Main>
      <div>
        <h1>Oxymore Launch Countdown</h1>
        <h2>With React Hooks!</h2>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </Main>
  );
};

export default Loading;
