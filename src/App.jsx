import React from 'react';
import './App.css';

import SideBar from './components/layouts/sidebar/SideBar';
import SignUp from './pages/auth/signUp/SignUp';
import SignUpForm from './pages/auth/signUp/SignUp'
import Result from './pages/result';
import SetAppointment from './pages/setAppointment/';
import SignInForm from './components/signin/loginForm';

import Doctor from './pages/doctor';
function App() {
  return (
    <div className="App">
      <SetAppointment/>
      {/* <SignInForm/> */}
    </div>
  );
}

export default App;
