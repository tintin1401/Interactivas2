import React, { useState, useEffect } from 'react';
import Home from './components/routes/Home.jsx';
import { EventCardCta } from './components/routes/EventCardCta.jsx';
import { Landing } from './components/routes/Principal.jsx';
import { Auth } from './components/routes/Auth.jsx';
import { Routes, Route, Navigate } from "react-router-dom";
import { UserProfile } from './components/routes/UserProfile.jsx';

export function App() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calender" element={<EventCardCta />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    )
}
