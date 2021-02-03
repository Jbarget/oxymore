import { ReactComponent as Pause } from "../../../assets/pause.svg";
import { ReactComponent as Play } from "../../../assets/play.svg";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

type AudioControls = {
  isPlaying: any;
  onPlayPauseClick: any;
};

const AudioControls = ({ isPlaying, onPlayPauseClick }: AudioControls) => (
  <div>
    {isPlaying ? (
      <Button
        type="button"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </Button>
    ) : (
      <Button
        type="button"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </Button>
    )}
  </div>
);

export default AudioControls;
