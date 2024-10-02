import { Slider } from '@mui/material';
import React, { useState } from 'react';

interface TimelineSliderProps {
  videoDuration: number;
  onTrimChange: (start: number, end: number) => void;
}

const TimelineSlider: React.FC<TimelineSliderProps> = ({ videoDuration, onTrimChange }) => {
  const [values, setValues] = useState<number[]>([0, videoDuration]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValues(newValue);
      onTrimChange(newValue[0], newValue[1]);
    }
  };

  return (
    <div className="timeline-slider">
      <Slider
        value={values}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={videoDuration}
        step={0.1}
        sx={{
            width: '88%',             
            marginLeft: '10px',        
            borderRadius: '12px',      
            boxSizing: 'content-box', 
            padding: '13px 0px',       
          }}
      />
    </div>
  );
};

export default TimelineSlider;
