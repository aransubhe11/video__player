import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled'; 
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { Player } from '@remotion/player';
import React, { useRef } from 'react';
import MyVideoComposition from './MyVideoComposition';

const ResponsiveVideoPlayer: React.FC<{ videoUrl: string; trimRange: [number, number] }> = ({ videoUrl, trimRange }) => {
  const playerRef = useRef<any>(null);  

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.pause();
    }
  };

  return (
    <div className="video-container" style={{ margin: "20px" }}>
      <Player
        ref={playerRef}  
        component={MyVideoComposition} 
        durationInFrames={1500}  
        compositionWidth={1400}
        compositionHeight={500}
        fps={30}
        inputProps={{ videoUrl, trimRange }} 
        className="responsive-player"
      />
      <div className="video-controls" style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>
        <button onClick={handlePlay} style={{ display: "flex", alignItems: "center" }}>
          <PlayCircleFilledWhiteIcon style={{ marginRight: "8px" }} /> 
          Play
        </button>
        <button onClick={handlePause} style={{ marginLeft: "10px", display: "flex", alignItems: "center" }}>
          <PauseCircleFilledIcon style={{ marginRight: "8px" }} /> 
          Pause
        </button>
      </div>
    </div>
  );
};

export default ResponsiveVideoPlayer;
