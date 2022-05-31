import React, { useState } from "react";
import SideBar from "../../components/layouts/sidebar/SideBar";
import axiosClient from "../../axiosClient";

function renderDoctorBlock(doctors) {
    const enum_doctor = Object.keys(doctors);

    const html = (
        enum_doctor.map(key =>
            <div className="flex flex-col ml-20 mt-14 items-center ">
                <img src={doctors[key].avatar ? doctors[key].avatar : "https://cansagevideos.com/wp-content/uploads/2022/03/CanSAGE-Videos-AvatarPlaceholder-01.jpg"} className="w-20 rounded-full" alt="avatar" />
                <h3 className="text-sm font-sans font-bold mt-2">Dr. {doctors[key].firstName + " " + doctors[key].lastName}</h3>
                <h3 className="text-xs font-san text-[#888C96] mt-1">
                    {
                        doctors[key].major ? doctors[key].major.title : "unregistered"
                    }
                    </h3>
                <img src="./assets/img/line.png" className="mt-6" alt="avatar" />
                <h3 className="text-xs font-san text-[#888C96] w-28 text-center">
                    {
                        doctors[key].workplace ? doctors[key].workplace.address : "unregistered"
                    }
                    </h3>
            </div>
        )
    )

    return html
}

function Doctor() {

    const [doctors, setDoctors] = useState(0);

    axiosClient.get("/doctor")
        .then(res => {
            setDoctors(res.data);
            console.log(res.data);
        })

    const mainHTML = (
        <div>
            < SideBar />
            <div className="bg-slate-100 h-screen pl-40 flex flex-row overflow-y-auto">
                <div className="w-1/3 text-left pt-20 flex flex-col">
                    <h2 className="text-xl text-[#36BD8C] font-sans">Your Treatment</h2>
                    <div className="treatment-block">
                        <div className="flex mt-10 items-center">
                            <h3 className="text-[#888C96]">26 Aug 2019</h3>
                            <div className="ml-5"><img src="./assets/img/line.png" /></div>
                        </div>
                        <div className="mt-5 bg-white rounded-3xl h-64 w-2/3 gap-2 mb-10">
                            <div className="flex flex-row">
                                <div className="ml-4 w-10 mt-5">
                                    <img className="" alt="" src="./assets/img/photo.png" />
                                </div>
                                <div className="mt-6 text-left mx-5">
                                    <h3 className="text-xs font-sans">Dr. Isbella</h3>
                                    <h3 className="text-xs text-[#888C96]">California Hospital Medical Center</h3>
                                </div>
                            </div>
                            <div className="mx-5 mt-5">
                                <h3 className="text-sm font-sans font-bold">Surgeon</h3>
                                <h3 className="text-xs text-[#888C96]">Spinal pain</h3>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col mx-5 mt-5">
                                    <h3 className="text-xs text-[#36BD8C] font-sans">Date</h3>
                                    <h3 className="text-sm font-sans">26 Aug 2019</h3>
                                </div>
                                <div className="flex flex-col mx-10 mt-5">
                                    <h3 className="text-xs text-[#36BD8C] font-sans">Time</h3>
                                    <h3 className="text-sm font-sans">12:45 AM</h3>
                                </div>
                            </div>
                            <div className="float-right flex flex-row items-center gap-2 mt-4 mx-4">
                                <a href="#" className="text-sm font-sans text-[#36BD8C] font-bold">See Details</a>
                                <div>
                                    <img src="./assets/img/eye.png" />
                                </div>
                            </div>
                        </div>
                        <div className=" bg-white rounded-3xl h-64 w-2/3 gap-2 mb-10">
                            <div className="flex flex-row">
                                <div className="ml-4 w-10 mt-5">
                                    <img className="" alt="" src="./assets/img/photo.png" />
                                </div>
                                <div className="mt-6 text-left mx-5">
                                    <h3 className="text-xs font-sans">Dr. Isbella</h3>
                                    <h3 className="text-xs text-[#888C96]">California Hospital Medical Center</h3>
                                </div>
                            </div>
                            <div className="mx-5 mt-5">
                                <h3 className="text-sm font-sans font-bold">Surgeon</h3>
                                <h3 className="text-xs text-[#888C96]">Spinal pain</h3>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col mx-5 mt-5">
                                    <h3 className="text-xs text-[#36BD8C] font-sans">Date</h3>
                                    <h3 className="text-sm font-sans">26 Aug 2019</h3>
                                </div>
                                <div className="flex flex-col mx-10 mt-5">
                                    <h3 className="text-xs text-[#36BD8C] font-sans">Time</h3>
                                    <h3 className="text-sm font-sans">12:45 AM</h3>
                                </div>
                            </div>
                            <div className="float-right flex flex-row items-center gap-2 mt-4 mx-4">
                                <a href="#" className="text-sm font-sans text-[#36BD8C] font-bold">See Details</a>
                                <div>
                                    <img src="./assets/img/eye.png" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="treatment-block">
                        <div className="flex mt-5 items-center mb-5">
                            <h3 className="text-[#888C96]">26 Aug 2019</h3>
                            <div className="ml-5"><img src="./assets/img/line.png" /></div>
                        </div>
                        <div className=" bg-white rounded-3xl h-64 w-2/3 gap-2 mb-10">
                            <div className="flex flex-row">
                                <div className="ml-4 w-10 mt-5">
                                    <img className="" alt="" src="./assets/img/photo.png" />
                                </div>
                                <div className="mt-6 text-left mx-5">
                                    <h3 className="text-xs font-sans">Dr. Isbella</h3>
                                    <h3 className="text-xs text-[#888C96]">California Hospital Medical Center</h3>
                                </div>
                            </div>
                            <div className="mx-5 mt-5">
                                <h3 className="text-sm font-sans font-bold">Surgeon</h3>
                                <h3 className="text-xs text-[#888C96]">Spinal pain</h3>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col mx-5 mt-5">
                                    <h3 className="text-xs text-[#36BD8C] font-sans">Date</h3>
                                    <h3 className="text-sm font-sans">26 Aug 2019</h3>
                                </div>
                                <div className="flex flex-col mx-10 mt-5">
                                    <h3 className="text-xs text-[#36BD8C] font-sans">Time</h3>
                                    <h3 className="text-sm font-sans">12:45 AM</h3>
                                </div>
                            </div>
                            <div className="float-right flex flex-row items-center gap-2 mt-4 mx-4">
                                <a href="#" className="text-sm font-sans text-[#36BD8C] font-bold">See Details</a>
                                <div>
                                    <img src="./assets/img/eye.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col w-2/3 h-screen fixed ml-96 rounded-l-3xl overflow-y-auto ">
                    <h2 className="text-left text-xl text-[#888C96] font-sans pl-24 mt-20">Make an appointment that will help you! Choose a doctor.</h2>
                    <div className="flex flex-row gap-4 mt-10 ml-24">
                        <img src="./assets/img/search.svg" />
                        <input className=" focus:outline-none focus: border-b-2 focus:border-green-500 w-3/5 placeholder-[#36BD8C]" type="text" placeholder="Find your doctor"></input>
                    </div>
                    <div className="w-2/3">
                        <h2 className="text-left text-xl text-[#36BD8C] font-sans pl-24 mt-20">Popular searches</h2>
                        <div className="flex flex-row overflow-x-auto ml-24 w-full">
                            {renderDoctorBlock(doctors)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return mainHTML
}
export default Doctor;