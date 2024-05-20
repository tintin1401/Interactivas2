import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/**
 * Renders a circular progress bar component with a given percentage value.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.percentage - The percentage value to display on the progress bar.
 * @return {JSX.Element} The circular progress bar component.
 */
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