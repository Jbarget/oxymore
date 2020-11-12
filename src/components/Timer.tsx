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

import calculateTimeLeft from "../helpers/calculateTimeLeft";

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

const H1 = styled.h1<TypographyProps>`
  ${typography};
`;

const getInterval = (number: number, intervalType: string) => {
  const label = number === 1 ? intervalType : `${intervalType}`;
  return `${number}${label}`;
};

interface TimerProps {
  launchDate: string;
}

const Timer: React.FC<TimerProps> = (props) => {
  const { launchDate } = props;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(launchDate)
  );
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(launchDate));
    }, 1000);
  });

  return (
    <Fragment>
      <Container alignItems="center" textAlign="center" p={6}>
        <H1 fontSize={[4, 5, 6, 8]} fontFamily="secondary">
          <span>
            {getInterval(timeLeft.days, "d")}
            {getInterval(timeLeft.hours, "h")}
            {getInterval(timeLeft.minutes, "m")}
            {getInterval(timeLeft.seconds, "s")}
          </span>
        </H1>
      </Container>
    </Fragment>
  );
};

export default Timer;
