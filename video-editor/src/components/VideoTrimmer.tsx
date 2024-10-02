import React from 'react';
import TimelineSlider from './TimelineSlider';

interface VideoTrimmerProps {
  videoDuration: number;
  onTrimChange: (start: number, end: number) => void;
}

const VideoTrimmer: React.FC<VideoTrimmerProps> = ({ videoDuration, onTrimChange }) => {
  return (
    <div className="video-trimmer" style={{marginLeft: "30px"}}>
      <h3>Trim Video</h3>
      <TimelineSlider videoDuration={videoDuration} onTrimChange={onTrimChange} />
    </div>
  );
};

export default VideoTrimmer;
