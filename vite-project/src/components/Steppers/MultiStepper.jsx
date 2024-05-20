import  {useStepper} from '../hooks/useStepper.js';

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../../assets/imgs/logo-white.svg";
import { CreateAcount } from "../auth/CreateAcount.jsx";
import { Health } from "../Steppers/Health.jsx";
import { Finish } from "../Steppers/Finish.jsx";
import { NavLink } from "react-router-dom";
import { useComponentContext } from "../hooks/useComponentContext.jsx";

const steps = ["Create an account", "Health","Finish"];


/**
 * Renders a multi-step form component with a stepper and different steps based on the active step.
 *
 * @return {JSX.Element} The rendered MultiStepper component.
 */
export function MultiStepper() {
  const { setCurrentComponent } = useComponentContext();
  const { activeStep, handleNext, handleBack } = useStepper();
  

  return (
    <Box>
      <Stepper activeStep={activeStep}>
      
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          return (
            <Step className="mb-8" key={label} {...stepProps}>
              <StepLabel className=" text-white" {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
        <div className=" bg-blue-600 rounded-3xl grid justify-center items-center ">
          <div className="mx-10  lg:mx-16 lg:w-[37vh]">
            <div className="grid justify-center my-8">
              <img className="w-52" src={logo} alt="" />
            </div>
            {activeStep === 0 && <CreateAcount addEvent = {handleNext} />}
            {activeStep === 1 && <Health addEvent = {handleNext} AddBack={handleBack} />}
            {activeStep === 2 && <Finish AddBack={handleBack} />}
            <p className="text-white m-5 text-base ff-main">
              Already create an account?
              <NavLink
                to="/auth"
                className="text-orange-300 m-5 ml-1 cursor-pointer hover:text-orange-200 ff-main"
                onClick={() => setCurrentComponent('Login')}
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
    </Box>
  );
}
