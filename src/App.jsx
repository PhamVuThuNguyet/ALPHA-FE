import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SideBar from './components/layouts/sidebar/SideBar';
import SignUp from './pages/auth/signUp/SignUp';
import SignUpForm from './pages/auth/signUp/SignUp'

import Result from './pages/result'
import { RouterConfig } from './config/routerConfig';

import Doctor from './pages/doctor';
import Dashboard from './pages/dashboard';
import SetAppointment from './pages/setAppointment';
import Chat from './pages/chat';
import Map from './pages/map';
function App() {
  return (

    <Router>
        <Routes>
          <Route exact path={RouterConfig.result} element={<Result />} />
          <Route exact path={RouterConfig.dashboard} element={<Dashboard />} />
          <Route exact path={RouterConfig.doctor} element={<Doctor />} />
          <Route exact path={RouterConfig.chat} element={<Chat />} />
          <Route exact path={RouterConfig.map} element={<Map />} />
        </Routes>
    </Router>

  );
}

export default App;
