import React, { useState } from "react";

import SideBar from "../../components/layouts/header/SideBar";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

import "react-datepicker/dist/react-datepicker.css";
function SetAppointment() {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    return (
        <div>
            < SideBar />
            <div className="bg-slate-100 h-screen pl-40 flex flex-row overflow-y-auto">
                <div className="w-1/3 text-left pt-20 flex flex-col">
                    <h2 className="text-xl text-[#36BD8C] font-sans">Your Treatment</h2>
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
                <div className="bg-white w-2/3 h-screen fixed ml-96 rounded-l-3xl overflow-y-auto">
                    <h2 className="text-xl text-[#36BD8C] font-sans text-left pl-14 mt-20">Your Doctor:</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-col mt-16 ml-28 gap-y-4">
                            <img className="w-20" src="./assets/img/photo.png" />
                            <div className="">
                                <h3 className="text-sm font-sans font-bold">Dr. Issabella</h3>
                                <h3 className="text-xs text-[#888C96] font-sans">Therapist</h3>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <div className="flex flex-col mt-10">
                                    <h3 className="text-sm text-[#36BD8C] font-sans">Appointment Day</h3>
                                    <div className="relative ml-24 mt-5">
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <img className="w-5 h-5 text-[#36BD8C] " src="./assets/img/day_icon.svg"/>
                                        </div>
                                        <DatePicker className="bg-gray-50 w-1 border border-[#36BD8C] text-gray-900 sm:text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" selected={startDate} onChange={(date: Date) => setStartDate(date)} />                                    
                                    </div>
                                </div>
                                <div className="flex flex-col mt-10">
                                    <h3 className="text-sm text-[#36BD8C] font-sans">Appointed Time</h3>
                                    <div className="relative ml-24 mt-5">
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <img className="w-5 h-5 text-[#36BD8C] " src="./assets/img/clock_icon.svg"></img>
                                        </div>
                                        <TimePicker onChange={onChange} value={value} />                                   
                                    </div>
                                </div>
                            </div>
                            <div >

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default SetAppointment;