import React from "react";
import ReactDOM from "react-dom/client";

import { Card } from "./components/cards/Card.jsx";
import { Login } from "./components/auth/Login.jsx";
import { Auth } from "./components/ui/landing/Auth.jsx";
//import { Practice } from "./Practice.jsx";
//import { MultiStepper } from "./components/MultiStepper.jsx";
import { Landing } from "./components/ui/landing/Principal.jsx";
import App from "./App.jsx";
import {Calendar} from "./components/calender/Calendar.jsx";
import {EventCardCta} from "./components/cards/EventCardCta.jsx";
import {ChangePassword} from "./components/profile/ChangePassword.jsx";
import {UserProfile} from "./components/profile/UserProfile.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
<App/>
);
