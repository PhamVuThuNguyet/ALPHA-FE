import React, { useState } from "react";

import SideBar from "../../components/layouts/sidebar/SideBar";

function Dashboard() {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    return (
        <div>
            < SideBar />
            <div className="bg-slate-100 h-screen pl-28 flex flex-row overflow-y-auto">
                <div className=" bg-white rounded-3xl h-64 w-1/3 gap-2 mb-10">
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <img className="mt-10 w-24" alt="" src="./assets/img/photo.png" />
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="text-xs font-sans">Isbella Christ</h3>
                            <h3 className="text-xs text-[#888C96]">20 years, California</h3>
                        </div>
                    </div>
                    <div className="flex flex-row mt-10 justify-between">
                        <div className="flex flex-col ml-24">
                            <h3 className="text-xs text-[#36BD8C] font-sans">Blood</h3>
                            <h3 className="text-sm">-B</h3>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-xs text-[#36BD8C] font-sans">Height</h3>
                            <h3 className="text-sm">170cm</h3>
                        </div>
                        <div className="flex flex-col mr-24">
                            <h3 className="text-xs text-[#36BD8C] font-sans">Weight</h3>
                            <h3 className="text-sm">50kg</h3>
                        </div>
                    </div>
                    <div className="flex flex-row mt-16 justify-between items-center">
                        <h2 className="text-sm text-[#36BD8C] font-sans ml-20 ">Notifications</h2>
                        <h2 className="text-xs text-[#888C96] mr-24">26 Aug 2022</h2>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Dashboard;