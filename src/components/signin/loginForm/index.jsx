import React from "react";
import axiosClient from "../../../axiosClient";

function handleSubmit(event) {

  event.preventDefault();

  const target = event.target;
  
  const signinInfo = {
    email: target.email.value,
    password: target.password.value
  }

  axiosClient.post(`auth/signin`, signinInfo)
      .then(res => {
        console.log(res);
        console.log(res.data);
        if(res.status === 200) {
          localStorage.setItem('access_token', res.data.accessToken);
          localStorage.setItem('refresh_token', res.data.refreshToken);

          console.log(`access token: ${localStorage.getItem('access_token')} \n
                      refresh token: ${localStorage.getItem('refresh_token')}`);
        }
      })
}

function SignInForm() {
  return (
    <div className="h-screen grid grid-cols-12 justify-center relative">
      <div className="col-span-8 items-center max-h-screen">
        <img alt="" className="h-full w-full object-cover" src="./assets/img/x-ray.png" />
      </div>
      <div className="col-span-4 justify-center bg-[#FFFFFF] rounded-3xl shadow-lg absolute right-5 h-full">
        <div className="mt-20 px-16 flex justify-start items-center">
          <img alt="" className="mr-4" src="./assets/img/like.svg" />
          <h1 className="text-[#36BD8C] font-sans font-bold text-4xl">Alpha Heath</h1>
        </div>
        <div className="pt-20 px-16">
          <h3 className="text-3xl text-[#36BD8C] font-sans flex justify-start">Log In</h3>
          <form onSubmit={handleSubmit} className="py-5" action="">
            <label className="text-[#36BD8C] text-sm font-sans flex justify-start" htmlFor="email">Email</label>
            <div className="text-sm mt-2 font-sans mr-7">
              <input id="email" name="email" className="w-96 focus:outline-none focus: border-b-2 focus:border-green-500" type="text" placeholder="Type your email here"></input>
            </div>
            <label className="text-[#36BD8C] text-sm mt-5 font-sans flex justify-start" htmlFor="password">Password</label>
            <div className="text-sm mt-2 font-sans mr-7">
              <input id="password" name="password" className="w-96 focus:outline-none focus: border-b-2 focus:border-green-500" type="password" placeholder="Type your password here"></input>
            </div>
            <div className="flex justify-end pt-5">
              <a href="#" className="text-sm text-[#089BAB] hover:underline no-underline">Forgot password?</a>
            </div>
            <button className="px-6 py-2 mt-5 w-96 text-lg text-white bg-[#36BD8C] rounded-2xl hover:bg-[#6cb198]" type="submit" formMethod="post">Login</button>
            <div className="flex justify-center gap-2 pt-5">
              <h4 className="text-sm font-sans">Don't have an account?</h4>
              <a href="#" className="text-sm text-[#089BAB] hover:underline no-underline">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
