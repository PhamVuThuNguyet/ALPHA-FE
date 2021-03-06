import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './pages/auth/signUp/SignUp';

import Result from './pages/result'
import { RouterConfig } from './config/routerConfig';

import Doctor from './pages/doctor';
import Dashboard from './pages/dashboard';
import SetAppointment from './pages/setAppointment';
import Chat from './pages/chat';
import SignIn from './pages/auth/signin/SignIn';
import Map from './pages/map';
function App() {
  return (

    <Router>
        <Routes>
          <Route exact path={RouterConfig.result} element={<Result />} />
          <Route exact path={RouterConfig.dashboard} element={<Dashboard />} />
          <Route exact path={RouterConfig.doctor} element={<Doctor />} />
          <Route exact path={RouterConfig.chat} element={<Chat />} />
          <Route exact path={RouterConfig.appointment} element={<SetAppointment />} />
          <Route exact path={RouterConfig.signin} element={<SignIn />} />
          <Route exact path={RouterConfig.map} element={<Map />} />
          <Route exact path={RouterConfig.signup} element={<SignUp />} />
        </Routes>
    </Router>

  );
}

export default App;
