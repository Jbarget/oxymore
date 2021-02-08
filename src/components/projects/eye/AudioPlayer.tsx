import { PositionProps, SpaceProps, position, space } from "styled-system";
import React, { useCallback } from "react";

import Flex from "../../Flex";
import { ReactComponent as Pause } from "../../../assets/project-page/eye/pause.svg";
import { ReactComponent as Play } from "../../../assets/project-page/eye/play.svg";
import styled from "styled-components";

const Container = styled(Flex)<PositionProps>`
  ${position};
`;

const Button = styled.button<SpaceProps>`
  background: none;
  border: none;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
  ${space};
`;

const AudioPlayer = () => {
  const audioSrc = "/podcast.mp3";
  const audio = new Audio(audioSrc);

  const play = useCallback(() => {
    audio.play();
  }, [audio]);

  const pause = useCallback(() => {
    audio.pause();
  }, [audio]);

  return (
    <Container flexDirection="row" position="absolute" bottom={0} left={15}>
      <Button type="button" onClick={play} aria-label="Play" mr={1}>
        <Play />
      </Button>
      <Button type="button" onClick={pause} aria-label="Pause" ml={1}>
        <Pause />
      </Button>
    </Container>
  );
};

export default AudioPlayer;
