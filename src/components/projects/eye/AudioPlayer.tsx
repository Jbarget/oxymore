import React, { useCallback } from "react";
import styled from "styled-components";

import { ReactComponent as Pause } from "../../../assets/pause.svg";
import { ReactComponent as Play } from "../../../assets/play.svg";

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 8px;
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
    <div>
      <Button type="button" onClick={play} aria-label="Play">
        <Play />
      </Button>
      <Button type="button" onClick={pause} aria-label="Pause">
        <Pause />
      </Button>
    </div>
  );
};

export default AudioPlayer;
