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

const getInterval = (number: number, intervalType: string) => {
  const label = number === 1 ? intervalType : `${intervalType}`;
  return `${number} ${label}`;
};

interface TimerProps {
  endDate: string;
}

const Timer: React.FC<TimerProps> = (props) => {
  const endDate = props;

  const calculateTimeLeft = () => {
    const difference = Number(new Date(`${endDate}`)) - Number(new Date());
    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((difference / 1000 / 60) % 60);
    const secondsLeft = Math.floor((difference / 1000) % 60);

    const timeLeft = {
      days: daysLeft < 0 ? 0 : daysLeft,
      hours: hoursLeft < 0 ? 0 : hoursLeft,
      minutes: minutesLeft < 0 ? 0 : minutesLeft,
      seconds: secondsLeft < 0 ? 0 : secondsLeft,
    };
    return timeLeft;
  };

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
          flexDirection={["column", "column", "column", "column", "row"]}
        >
          <Span mr={[0, 3]}>{getInterval(timeLeft.days, "D")}</Span>
          <Span mr={[0, 3]}>{getInterval(timeLeft.hours, "H")}</Span>
          <Span mr={[0, 3]}>{getInterval(timeLeft.minutes, "M")}</Span>
          <Span>{getInterval(timeLeft.seconds, "S")}</Span>
        </H1>
      </Container>
    </Fragment>
  );
};

export default Timer;
