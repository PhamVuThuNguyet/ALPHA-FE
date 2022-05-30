import React from "react";
import {
  Link
} from "react-router-dom";
import { RouterConfig } from "../../../config/routerConfig";
function SideBar() {
  return (
    <div className="fixed top-0 left-0 bottom-0 bg-[#36BD8C] flex flex-col items-center justify-center w-28">
      <Link to={RouterConfig.dashboard}>
        <div className="flex flex-col items-center justify-center py-7">
          <div>
            <img src="./assets/img/dashboard.svg" />
          </div>
          <div className="text-white pt-2">Dashboard</div>
        </div>
      </Link>
      <Link to={RouterConfig.doctor}>
        <div className="flex flex-col items-center justify-center  py-7">
          <div>
            <img src="./assets/img/doctor.svg" />
          </div>
          <div className="text-white pt-2">Doctor</div>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center  py-7">
        <div>
          <img src="./assets/img/contact.svg" />
        </div>
        <div className="text-white pt-2">Contact</div>
      </div>

      <div className="flex flex-col items-center justify-center  py-7">
        <div>
          <img src="./assets/img/tracker.svg" />
        </div>
        <div className="text-white pt-2">Tracker</div>
      </div>
    </div>
  );
}

export default SideBar;
