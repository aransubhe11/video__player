declare module 'react-range-slider' {
    import React from 'react';
  
    export interface RangeProps {
      min: number;
      max: number;
      values: number[];
      onChange: (values: number[]) => void;
      renderTrack: (params: { props: any; children: React.ReactNode }) => React.ReactNode;
      renderThumb: (params: { props: any }) => React.ReactNode;
    }
  
    export const Range: React.FC<RangeProps>;
  }
  