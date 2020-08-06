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

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Container = styled.div<FlexboxProps & SpaceProps & TypographyProps>`
  ${flexbox};
  ${space};
  ${typography};
  display: flex;
`;

const H1 = styled.h1<TypographyProps & FlexboxProps>`
  ${typography};
  ${flexbox};
  display: flex;
  text-transform: uppercase;
`;

const Span = styled.span<SpaceProps>`
  ${space}
`;
const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference = +new Date(`${year}-09-1`) - +new Date();
  const timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };

  return timeLeft;
};

const getInterval = (number: number, intervalType: string) => {
  const label = number === 1 ? intervalType : `${intervalType}s`;

  return `${number} ${label}`;
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <Fragment>
      <Container alignItems="center" textAlign="center" p={6}>
        <H1
          fontSize={6}
          fontFamily="SangBleu OG Serif Light"
          flexDirection={[
            "column",
            "column",
            "column",
            "column",
            "column",
            "column",
            "column",
            "row",
          ]}
        >
          <Span mr={3}>{getInterval(timeLeft.days, "day")}</Span>
          <Span mr={3}>{getInterval(timeLeft.hours, "hour")}</Span>
          <Span mr={3}>{getInterval(timeLeft.minutes, "minute")}</Span>
          <Span>{getInterval(timeLeft.seconds, "second")}</Span>
        </H1>
      </Container>
    </Fragment>
  );
};

export default Timer;
