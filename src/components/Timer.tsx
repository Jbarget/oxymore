import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import {
  TypographyProps,
  typography,
  FlexboxProps,
  flexbox,
  SpaceProps,
  space,
} from "styled-system";

const Container = styled.div<FlexboxProps & SpaceProps & TypographyProps>`
  ${flexbox};
  ${space};
  ${typography};
  display: flex;
`;

const H1 = styled.h1<TypographyProps & FlexboxProps>`
  ${typography};
  ${flexbox};
  text-transform: uppercase;
`;

const Timer = () => {
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
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <Fragment>
      <Container alignItems="center" textAlign="center" p={6}>
        <H1 fontSize={6} fontFamily="SangBleu OG Serif Light">
          {" "}
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </H1>
      </Container>
    </Fragment>
  );
};

export default Timer;
