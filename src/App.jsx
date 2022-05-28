import React from 'react';
import './App.css';

import SideBar from './components/layouts/sidebar/SideBar';
import SignUp from './pages/auth/signUp/SignUp';
import SignUpForm from './pages/auth/signUp/SignUp'
import Result from './pages/result';
import SignIn from './pages/auth/signIn/SignIn';
import SignInForm from './components/signin/loginForm';

function App() {
  return (
    <div className="App">
      <SignInForm/>
    </div>
  );
}

export default App;
