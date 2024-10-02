import React, { useEffect, useRef } from 'react';
import { Video, useCurrentFrame, useVideoConfig } from 'remotion';

const MyVideoComposition: React.FC<{ videoUrl: string, trimRange: [number, number] }> = ({ videoUrl, trimRange }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { width, height, fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const startFrame = Math.floor(trimRange[0] * fps);
  const endFrame = Math.floor(trimRange[1] * fps);

  useEffect(() => {
    if (videoRef.current) {
      const currentTime = frame / fps;
      if (currentTime > trimRange[1]) {
        videoRef.current.currentTime = trimRange[0]; 
      } else if (currentTime < trimRange[0]) {
        videoRef.current.currentTime = trimRange[0]; 
      }
    }
  }, [frame, trimRange, fps]);

  return (
    <div style={{ width, height }}>
      <Video
        ref={videoRef}
        src={videoUrl}
        startFrom={startFrame} 
        endAt={endFrame}  
      />
    </div>
  );
};

export default MyVideoComposition;
