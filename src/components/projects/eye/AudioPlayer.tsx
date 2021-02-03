import React, { useRef, useState } from "react";

import AudioControls from "./AudioControls";
import styled from "styled-components";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 * src code is here: https://codesandbox.io/s/react-audio-player-demo-zwhoc?file=/src/AudioPlayer.jsx:300-306
 */

const Input = styled.input`
  cursor: pointer;
`;

const AudioPlayer = () => {
  const src = "src/assets/audio/podcast.mp3";
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(src));
  const { duration } = audioRef.current;

  return (
    <div>
      <AudioControls isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
      <Input
        type="range"
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
      />
    </div>
  );
};

export default AudioPlayer;
