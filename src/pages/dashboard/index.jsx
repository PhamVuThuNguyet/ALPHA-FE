import React, { useState } from "react";
import Calendar from 'react-calendar';

import SideBar from "../../components/layouts/sidebar/SideBar";
import axiosClient from "../../axiosClient";

function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function renderAppointmentBlock(appointments) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const enum_treatment = Object.keys(appointments);

    const html = enum_treatment.map(key =>
        <div className=" bg-white rounded-3xl h-64 w-2/3 gap-2 mb-10 ml-20 mt-12">
            <div className="flex flex-row">
                <div className="ml-4 w-10 mt-5">
                    <img className="" alt="" src={appointments[key].doctor.avatar} />
                </div>
                <div className="mt-6 text-left mx-5">
                    <h3 className="text-xs font-sans">
                        {
                            appointments[key].doctor.firstName + " " + appointments[key].doctor.lastName
                        }
                    </h3>
                    <h3 className="text-xs text-[#888C96]">{
                        appointments[key].doctor.workplace.address
                    }</h3>
                </div>
            </div>
            <div className="mx-5 mt-5">
                <h3 className="text-sm font-sans font-bold">
                    {
                        appointments[key].doctor.major.title
                    }
                </h3>
                <h3 className="text-xs text-[#888C96]">Spinal pain</h3>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col mx-5 mt-5">
                    <h3 className="text-xs text-[#36BD8C] font-sans">Date</h3>
                    <h3 className="text-sm font-sans">
                        {
                            (new Date(appointments[key].appointmentAt).getDate() + " " + monthNames[new Date(appointments[key].appointmentAt).getMonth()] + " " + new Date(appointments[key].appointmentAt).getFullYear())
                        }
                    </h3>
                </div>
                <div className="flex flex-col mx-10 mt-5">
                    <h3 className="text-xs text-[#36BD8C] font-sans">Time</h3>
                    <h3 className="text-sm font-sans">
                        {
                            formatAMPM(new Date(appointments[key].appointmentAt))
                        }
                    </h3>
                </div>
            </div>
        </div>
    )

    return html
}

function Dashboard() {
    // const [startDate, setStartDate] = useState(new Date());
    // const [value, onChange] = useState('10:00');
    const [userData, setUserData] = useState(0);
    const userId = localStorage.getItem("id");
    const [appointments, setAppointments] = useState(0);

    axiosClient.get(`/user/6290eef7f0dc8c7d02856941`)
        .then(res => {
            setUserData(res.data);
        })

    axiosClient.get("/appointment/user/userId")
        .then(res => {
            setAppointments(res.data)
        });

    const mainHTML = (
        <div>
            < SideBar />
            <div className="bg-slate-100 h-screen pl-28 flex flex-row overflow-y-auto">
                <div className="w-1/3 gap-2 mb-10">
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <img className="mt-10 w-24" alt="" src="./assets/img/photo.png" />
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="text-xs font-sans font-bold">
                                {
                                    userData.firstName + " " + userData.lastName
                                }
                            </h3>
                            <h3 className="text-xs text-[#888C96]">{getAge(userData.dateOfBirth)} years, California</h3>
                        </div>
                    </div>
                    <div className="flex flex-row mt-10 justify-between">
                        <div className="flex flex-col ml-24">
                            <h3 className="text-xs text-[#36BD8C] font-sans">Blood</h3>
                            <h3 className="text-sm text-center font-bold">{
                                userData.data ? userData.data.blood : "?"
                            }</h3>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-xs text-[#36BD8C] font-sans">Height</h3>
                            <h3 className="text-sm text-center font-bold">
                                {
                                    userData.data ? userData.data.height : "?"
                                }
                            </h3>
                        </div>
                        <div className="flex flex-col mr-24">
                            <h3 className="text-xs text-[#36BD8C] font-sans">Weight</h3>
                            <h3 className="text-sm text-center font-bold">{
                                userData.data ? userData.data.weight : "?"
                            }
                            </h3>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <a href={
                            "http://127.0.0.1:5001#" + localStorage.getItem("access_token") + "&" + localStorage.getItem("id")
                        }
                            className="rounded-full bg-[#e17055] hover:bg-[#f1c40f] text-[#ecf0f1] py-2 px-4 inline-flex items-center"
                        >
                            <span className="mr-1">Make a diagnosis</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ecf0f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </a>
                    </div>
                    <div className="flex flex-row mt-16 justify-between items-center">
                        <h2 className="text-sm text-[#36BD8C] font-sans ml-20 ">Notifications</h2>
                        <h2 className="text-xs text-[#888C96] mr-24">26 Aug 2022</h2>
                    </div>
                    <div className="flex flex-row mt-16 justify-between items-center">
                        <div className="bg-[#36BD8C] rounded-full w-2 h-2 ml-24"></div>
                        <h2 className="text-sm font-sans font-bold mr-40 ">Kognum</h2>
                        <h2 className="text-xs mr-24">10mg</h2>
                    </div>
                    <div className="flex flex-col ml-24 mt-5">
                        <div className="flex flex-row items-center gap-6">
                            <h3 className="text-xs text-[#36BD8C] font-sans">Mon</h3>
                            <h3 className="text-xs text-[#36BD8C] font-sans">Wed</h3>
                            <h3 className="text-xs text-[#36BD8C] font-sans">Fri</h3>
                            <h3 className="text-xs text-[#36BD8C] font-sans">Sun</h3>
                        </div>
                        <h3 className="text-xs text-[#888C96] font-sans mt-3">2 times in a day before food</h3>
                    </div>
                        {renderAppointmentBlock(appointments)}
                </div>
                <div className="w-2/3 gap-2 mb-10">
                    <div className="flex flex-row items-center justify-between">
                        <h2 className="text-xl text-[#36BD8C] font-sans ml-20 mt-20">Diagnosis History</h2>
                        <div className=" flex flex-row items-center gap-2 mt-20 mr-24">
                            <div>
                                <img src="./assets/img/eye.png" />
                            </div>
                            <a href="#" className="text-sm font-sans text-[#36BD8C] font-bold">See All</a>
                        </div>
                    </div>
                    <div className="flex flex-row mt-10">
                        <div className="flex flex-row">
                            <div className="w-2 h-24 bg-[#1DCECE] rounded-full ml-14">
                            </div>
                            <div className="flex flex-col ml-4 mt-5">
                                <h3 className="text-xs text-[#888C96] font-sans">21 Jul, 2022</h3>
                                <h2 className="text-sm font-sans font-bold mt-2">Hypertensive crisis</h2>
                            </div>
                        </div>
                        <div className="flex flex-row ml-10">
                            <div className="w-2 h-24 bg-[#FD988B] rounded-full ml-14">
                            </div>
                            <div className="flex flex-col ml-4 mt-5">
                                <h3 className="text-xs text-[#888C96] font-sans">18 Jul, 2022</h3>
                                <h2 className="text-sm font-sans font-bold mt-2">Hypertensive crisis</h2>
                                <h3 className="text-xs text-[#888C96] font-sans mt-2">Incurable</h3>
                            </div>
                            <div className="flex flex-col ml-4 mt-5">
                                <h3 className="text-xs text-[#FEAD54] font-sans font-bold">Need analyze</h3>
                                <div className="bg-[#FEAD54] w-2 h-2 rounded-full mt-10"></div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-2 h-24 bg-[#C8C8C8] rounded-full ml-14">
                            </div>
                            <div className="flex flex-col ml-4 mt-5">
                                <h3 className="text-xs text-[#888C96] font-sans">21 Jul, 2022</h3>
                                <h2 className="text-sm font-sans font-bold mt-2">Hypertensive crisis</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-xl text-[#36BD8C] font-sans ml-20 mt-20">Nearest Treatment</h2>
                        <div className="flex flex-row ml-20 mt-10">
                            {/* <h3 className="text-sm font-sans font-bold">January 2022</h3>
                            <button className="ml-5">
                                <img src="./assets/img/selectDate_button.svg" />
                            </button> */}
                            <Calendar />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
    return mainHTML
}
export default Dashboard;