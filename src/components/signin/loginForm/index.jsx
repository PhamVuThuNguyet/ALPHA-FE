import React from "react";
function  SignInForm() {
    return (
      <div className="h-screen grid grid-cols-12 justify-center">
        <div className="col-span-8 items-center">
            <img alt ="" className="h-full w-full object-cover" src="./assets/img/x-ray.png"/>
        </div>
        <div className="col-span-4 flex flex-auto justify-center bg-[#FFFFFF] rounded-3xl shadow-lg">
            <div className="mt-20 ">
              <img alt ="" className="w-16 h-14 absolute right-96" src="./assets/img/like.svg"/>
            </div>
            <div className="mt-20">
              <h1 className="text-[#36BD8C] font-sans font-bold text-xl">Alpha Heath</h1>
            </div>
            <div className="">
              <h3 class="text-xl_2 text-[#36BD8C] mt-72 absolute right-96 justify-center font-sans">Login</h3>
              <form action="POST"> 
                <div className="mt-4">
                  <div>
                    <label className="block text-[#36BD8C] text-xs mt-96 font-sans absolute right-96 bottom-80 mr-7" for="email">
                      Email
                    </label>
                    <div className="text-xs mt-96 font-sans absolute right-9 bottom-72 border-b-2 mr-7">
                      <input className="mt-8 w-96 focus:outline-none " type="text" placeholder="Email"></input>
                    </div>
                
                  </div>
                  <div className="mt-5">
                    <label className="block mt-96 pt-10 absolute right-96 text-[#36BD8C]">
                      Password
                    </label>
                    <div className="text-xs mt-96 pt-10 absolute right-9 mr-7 font-sans border-b-2 ">
                      <input className="mt-8 w-96 focus:outline-none " type="password" placeholder="Password"></input>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <a href="#" class="text-sm text-[#089BAB] hover:underline no-underline mt-96 absolute top-32 right-16">Forgot password?</a>
                  </div>
                  <button class="px-6 py-2 mt-96 w-96 text-white bg-[#36BD8C] absolute top-64 right-16 rounded-2xl hover:bg-[#6cb198] ">Login</button>
                  <div>
                    <div className="mt-96 absolute top-80 right-52">
                      <h4 className="text-sm font-sans">Don't have an account?</h4>
                    </div>
                    <div className="mt-80 absolute top-96 right-52">
                      <a href="#" class="text-sm text-[#089BAB] hover:underline no-underline absolute ">Sign Up</a>
                    </div>
                  </div>              
                </div>
              </form>
            </div>
        </div>
      </div>
); 
}

export default SignInForm;
