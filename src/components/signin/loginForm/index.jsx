import React from "react";
function  SignInForm() {
    return (
      <div className="h-screen grid grid-cols-12 items-center justify-center">
        <div className="col-span-8 items-center">
            <img alt ="" className="h-full w-full object-cover" src="./assets/img/x-ray.png"/>
        </div>
        <div className="col-span-4">
            <div><img alt ="" src="./assets/img/like.svg"/></div>
        </div>
      </div>
); 
}

export default SignInForm;
