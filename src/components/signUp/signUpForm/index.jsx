import React from "react";
function SignUpForm() {
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
          <h3 className="text-3xl text-[#36BD8C] font-sans flex justify-start">Sign Up</h3>
          <form method="POST" className="py-5" action="">
            <div className="text-sm mt-2 font-sans mr-7">
              <input className="w-96 focus:outline-none focus: border-b-2 focus:border-green-500" type="text" placeholder="Enter your email"></input>
            </div>
            <div className="flex justify-between pt-4">
              <div className="text-sm mt-8 font-sans mr-3">
                <input className=" focus:outline-none focus: border-b-2 focus:border-green-500" type="text" placeholder="Your first name"></input>
              </div>
               <div className="text-sm mt-8 font-sans mr-7">
                <input className=" focus:outline-none focus: border-b-2 focus:border-green-500" type="text" placeholder="Your last name"></input>
              </div>
            </div>
            
            <div className="text-sm font-sans flex pt-11">
              <input className="w-80 focus:outline-none focus: border-b-2 focus:border-green-500" type="password" placeholder="Type your password here"></input>
              <img alt=""src="/assests/img/global.svg"/>
            </div>
            <button className="px-6 py-2 mt-24 w-96 text-lg text-white bg-[#36BD8C] rounded-2xl hover:bg-[#6cb198]" type="submit" formMethod="post">Continue</button>
            <div className="flex justify-center gap-2 pt-5">
              <h4 className="text-sm font-sans">Already have an account?</h4>
              <a href="#" class="text-sm text-[#089BAB] hover:underline no-underline">Log In</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
