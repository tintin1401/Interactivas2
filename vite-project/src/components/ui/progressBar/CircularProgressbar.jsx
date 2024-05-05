import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const CircularProgressBar = ({ percentage }) => {
    return (
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            root: {},
            
            path: {
              stroke: `rgba(0, 47, 233)`,
              strokeLinecap: 'butt', 
            },
            
            trail: {
              stroke: '#FFFFFF',
              strokeLinecap: 'butt',
              strokeWidth: 5,
            },

            text: {
              fill: '#FFFFFF',
              fontSize: '1.70rem',
              fontWeight: 'bold',
              fontFamily: 'Rubik, sans-serif',
            },
          }}

        />
    );
  };