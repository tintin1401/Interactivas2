import '../../index.css'
import { Login } from '../auth/Login.jsx'; 
import { CreateAcount } from "../auth/CreateAcount.jsx";
import { MultiStepper } from '../Steppers/MultiStepper.jsx';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useComponentContext } from '../../components/hooks/useComponentContext.jsx';

//<Login /> 
export function Auth() {

  const { currentComponent } = useComponentContext();
  const [isAuthVisible, setIsAuthVisible] = useState(false);

  useEffect(() => {
    const authTimer = setTimeout(() => {
      setIsAuthVisible(true);
    }, 500);

    return () => {
      clearTimeout(authTimer);
    };
  }, []);

  return (
    <div
      className="bg-no-repeat bg-cover flex justify-center items-center h-[100vh]"
      style={{ backgroundImage: "url(../src/assets/imgs/bg-register.png" }}
    >
      <div className="grid justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAuthVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentComponent === 'MultiStepper' ? (
            <MultiStepper />
          ) : (
            <Login />
          )}
        </motion.div>
      </div>
    </div>
  );
}
