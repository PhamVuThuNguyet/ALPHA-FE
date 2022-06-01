import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../components/layouts/sidebar/SideBar";
import { RouterConfig } from "../../config/routerConfig";
import axiosClient from "../../axiosClient";

function rederDiseasePredictBlock(predicts) {
  const enum_predicts = Object.keys(predicts);

  const html = enum_predicts.map((key) => (
    <div className="relative pt-1 my-16">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-sm font-semibold inline-block py-1 uppercase rounded-full">
            {predicts[key].disease}
          </span>
        </div>
        <div className="text-right">
          <span className="text-sm font-semibold inline-block text-orange-600">
            {predicts[key].prob}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
        <div
          style={{ width: predicts[key].disease + "%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#36BD8C]"
        ></div>
      </div>
    </div>
  ));

  return html;
}

function Result() {
  const [diseasePredicts, setPredict] = useState(0);
  const predictID = window.location.hash.replace("#", "");

  axiosClient.get(`/diagnosis/${predictID}`).then((res) => {
    console.log(res.data);
    setPredict(res.data.predicted_results);
  });

  const mainHTML = (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="bg-[#E4E4E4] h-screen flex">
        <div className="text-left overflow-auto pl-40 my-32 w-1/3 max-h-screen px-10">
          <h2 className="font-sans text-xl text-[#36BD8C]">Your diagnosis</h2>

          {rederDiseasePredictBlock(diseasePredicts)}
        </div>
        <div className="bg-white w-2/3 h-5/6 rounded-l-3xl overflow-y-auto my-20 ml-20 max-h-screen">
          <div className="px-10 py-5">
            <h2 className="text-xl text-[#36BD8C] font-sans text-left">
              Doctor For You:
            </h2>
            <div className="flex mb-2 items-center justify-between mt-10">
              <div>
                <span className="text-xs text-[#808288] font-sans inline-block py-1 uppercase rounded-full">
                  Doctor name / Location
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#888C96] font-sans">
                  Day of admission
                </span>
              </div>
            </div>
          </div>
          <Link to={RouterConfig.appointment}>
            <div
              className="grid grid-cols-12 gap-2 mb-10"
              style={{ alignItems: "center" }}
            >
              <div className="col-span-2 ml-8">
                <img className="" alt="" src="https://nyulangone.org/images/doctors/c/cohen/1831196526/jeffrey-m-cohen-square.jpg" />
              </div>
              <div className="col-span-7 text-left">
                <h3 className="text-sm font-sans">Nguyen Quang Chung</h3>
                <h3 className="text-sm text-[#888C96]">
                  470 Trần Đại Nghĩa, Đà Nẵng
                </h3>
              </div>
              <div className="">
                <div className="flex flex-row space-x-2">
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Mon</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Tue</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Wed</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Thur</h3>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-12 gap-2 mb-10"
              style={{ alignItems: "center" }}
            >
              <div className="col-span-2 ml-8">
                <img className="" alt="" src="https://nyulangone.org/images/doctors/c/cohen/1831196526/jeffrey-m-cohen-square.jpg" />
              </div>
              <div className="col-span-7 text-left">
                <h3 className="text-sm font-sans">Nguyen Quang Chung</h3>
                <h3 className="text-sm text-[#888C96]">
                  470 Trần Đại Nghĩa, Đà Nẵng
                </h3>
              </div>
              <div className="">
                <div className="flex flex-row space-x-2">
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Mon</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Tue</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Wed</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Thur</h3>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-12 gap-2 mb-10"
              style={{ alignItems: "center" }}
            >
              <div className="col-span-2 ml-8">
                <img className="" alt="" src="https://nyulangone.org/images/doctors/c/cohen/1831196526/jeffrey-m-cohen-square.jpg" />
              </div>
              <div className="col-span-7 text-left">
                <h3 className="text-sm font-sans">Nguyen Quang Chung</h3>
                <h3 className="text-sm text-[#888C96]">
                  470 Trần Đại Nghĩa, Đà Nẵng
                </h3>
              </div>
              <div className="">
                <div className="flex flex-row space-x-2">
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Mon</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Tue</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Wed</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Thur</h3>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-12 gap-2 mb-10"
              style={{ alignItems: "center" }}
            >
              <div className="col-span-2 ml-8">
                <img className="" alt="" src="https://nyulangone.org/images/doctors/c/cohen/1831196526/jeffrey-m-cohen-square.jpg" />
              </div>
              <div className="col-span-7 text-left">
                <h3 className="text-sm font-sans">Nguyen Quang Chung</h3>
                <h3 className="text-sm text-[#888C96]">
                  470 Trần Đại Nghĩa, Đà Nẵng
                </h3>
              </div>
              <div className="">
                <div className="flex flex-row space-x-2">
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Mon</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Tue</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Wed</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Thur</h3>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-12 gap-2 mb-10"
              style={{ alignItems: "center" }}
            >
              <div className="col-span-2 ml-8">
                <img className="" alt="" src="https://nyulangone.org/images/doctors/c/cohen/1831196526/jeffrey-m-cohen-square.jpg" />
              </div>
              <div className="col-span-7 text-left">
                <h3 className="text-sm font-sans">Nguyen Quang Chung</h3>
                <h3 className="text-sm text-[#888C96]">
                  470 Trần Đại Nghĩa, Đà Nẵng
                </h3>
              </div>
              <div className="">
                <div className="flex flex-row space-x-2">
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Mon</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Tue</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Wed</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Thur</h3>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-12 gap-2 mb-10"
              style={{ alignItems: "center" }}
            >
              <div className="col-span-2 ml-8">
                <img className="" alt="" src="https://nyulangone.org/images/doctors/c/cohen/1831196526/jeffrey-m-cohen-square.jpg" />
              </div>
              <div className="col-span-7 text-left">
                <h3 className="text-sm font-sans">Nguyen Quang Chung</h3>
                <h3 className="text-sm text-[#888C96]">
                  470 Trần Đại Nghĩa, Đà Nẵng
                </h3>
              </div>
              <div className="">
                <div className="flex flex-row space-x-2">
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Mon</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Tue</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Wed</h3>
                  </div>
                  <div className="rounded-xl h-10 w-10 border-[#36BD8C] border-2 flex items-center justify-center">
                    <h3 className="text-sm font-sans">Thur</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

  return mainHTML;
}

export default Result;
