import { useState } from 'react';
import ResponsiveVideoPlayer from './components/ResponsiveVideoPlayer';
import VideoTrimmer from './components/VideoTrimmer';

function App() {
  const [trimRange, setTrimRange] = useState<[number, number]>([0, 60]); 

  const handleTrimChange = (start: number, end: number) => {
    setTrimRange([start, end]);
  };

  return (
    <div className="App">
      <ResponsiveVideoPlayer videoUrl="https://media.w3.org/2010/05/sintel/trailer.mp4" trimRange={trimRange} />
      <VideoTrimmer videoDuration={60} onTrimChange={handleTrimChange} />
    </div>
  );
}

export default App;
