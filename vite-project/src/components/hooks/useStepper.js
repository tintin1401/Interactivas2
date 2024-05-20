import { useState }  from "react";

/**
 * Returns an object containing the current active step, a function to move to the next step, and a function to move to the previous step.
 *
 * @return {Object} An object with the following properties:
 *   - activeStep: The current active step (number)
 *   - handleNext: A function to move to the next step (function)
 *   - handleBack: A function to move to the previous step (function)
 */
export const useStepper = () => {
    
    const [activeStep, setActiveStep] =useState(0);
    
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return {activeStep,handleNext,handleBack};
    
}