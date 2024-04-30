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
const steps = ["Create an account", "Health","Finish"];

export function MultiStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step className="mb-8" key={label} {...stepProps}>
              <StepLabel className=" text-white" {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <div className=" bg-blue-600 rounded-3xl grid justify-center items-center ">
          <div className="mx-10  lg:mx-16 w-[30vh] lg:w-[37vh]">
            <div className="grid justify-center my-8">
              <img className="w-52" src={logo} alt="" />
            </div>
            {activeStep === 0 && <CreateAcount />}
            {activeStep === 1 && <Health />}
            {activeStep === 2 && <Finish />}
            <div className="flex gap-4">
              {activeStep > 0 && (
                <input
                  className=" text-white p-2 bg-blue-400 flex rounded-xl items-center justify-center w-full  cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-blue-400 text-base"
                  onClick={handleBack}
                  type="submit"
                  value="Back"
                />
              )}
              <input
                onClick={() => {
                  if (activeStep === 0) {
                    const isValid =
                      document.querySelector("#Fullname").value.length > 0 &&
                      document.querySelector("#Email").value.length > 0 &&
                      document.querySelector("#Password").value.length > 0 &&
                      document.querySelector("#Password").value.length > 0;
                    console.log("Prueba" + isValid);
                    if (isValid === true) handleNext();
                  } else {
                    handleNext();
                  }
                  // else alert("Please enter your name");}
                }}
                //onClick={handleNext}
                className="text-white p-2 bg-orange-500 flex rounded-xl items-center justify-center w-full  cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-orange-500 text-lg"
                type="submit"
                name="btn-login"
                value={activeStep === steps.length - 1 ? "Finish" : "Next"}
              />
            </div>

            <p className="text-white m-5 text-xl">
              Already create an account?
              <span className="text-orange-300  ml-[1px] cursor-pointer hover:text-orange-200">
                Login
              </span>
            </p>
          </div>
        </div>
      )}
    </Box>
  );
}
