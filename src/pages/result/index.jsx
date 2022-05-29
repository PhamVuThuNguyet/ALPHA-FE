import React from "react";
import SideBar from "../../components/layouts/sidebar/SideBar";
function Result() {
  return (
    <div>
      <div>
        < SideBar />
      </div>
      <div className="bg-[#E4E4E4] h-screen static">
        <div className="absolute left-48 top-28 w-1/3 text-left">
          <h2 className="font-sans text-xl text-[#36BD8C]">Your diagnosis</h2>

          <div className="relative pt-1 my-16">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-sm font-semibold inline-block py-1 uppercase rounded-full">
                  Disease 1
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold inline-block text-orange-600">
                  66%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
              <div className="w-2/3 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#36BD8C]"></div>
            </div>
          </div>

          <div className="relative pt-1 my-16">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-sm font-semibold inline-block py-1 uppercase rounded-full">
                  Disease 1
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold inline-block text-orange-600">
                  30%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
              <div className="w-1/3 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#36BD8C]"></div>
            </div>
          </div>

          <div className="relative pt-1 my-16">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-sm font-semibold inline-block py-1 uppercase rounded-full">
                  Disease 1
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold inline-block text-orange-600">
                  15%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
              <div className="w-1/6 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#36BD8C]"></div>
            </div>
          </div>

        </div>
        <div className="bg-white w-1/2 h-5/6 absolute right-0 bottom-4 rounded-l-3xl overflow-y-auto">

          <div className="px-10 py-5">
            <h2 className="text-xl text-[#36BD8C] font-sans text-left">Doctor For You:</h2>
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

          <div className="grid grid-cols-12 gap-2 mb-10" style={{ alignItems: 'center' }}>
            <div className="col-span-2 ml-8">
              <img className="" alt="" src="./assets/img/photo.png" />
            </div>
            <div className="col-span-7 text-left">
              <h3 className="text-sm font-sans">Dr. Isbella</h3>
              <h3 className="text-sm text-[#888C96]">California Hospital Medical Center</h3>
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

          <div className="grid grid-cols-12 gap-2 mb-10" style={{ alignItems: 'center' }}>
            <div className="col-span-2 ml-8">
              <img className="" alt="" src="./assets/img/photo.png" />
            </div>
            <div className="col-span-7 text-left">
              <h3 className="text-sm font-sans">Dr. Isbella</h3>
              <h3 className="text-sm text-[#888C96]">California Hospital Medical Center</h3>
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

          <div className="grid grid-cols-12 gap-2 mb-10" style={{ alignItems: 'center' }}>
            <div className="col-span-2 ml-8">
              <img className="" alt="" src="./assets/img/photo.png" />
            </div>
            <div className="col-span-7 text-left">
              <h3 className="text-sm font-sans">Dr. Isbella</h3>
              <h3 className="text-sm text-[#888C96]">California Hospital Medical Center</h3>
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

          <div className="grid grid-cols-12 gap-2 mb-10" style={{ alignItems: 'center' }}>
            <div className="col-span-2 ml-8">
              <img className="" alt="" src="./assets/img/photo.png" />
            </div>
            <div className="col-span-7 text-left">
              <h3 className="text-sm font-sans">Dr. Isbella</h3>
              <h3 className="text-sm text-[#888C96]">California Hospital Medical Center</h3>
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

          <div className="grid grid-cols-12 gap-2 mb-10" style={{ alignItems: 'center' }}>
            <div className="col-span-2 ml-8">
              <img className="" alt="" src="./assets/img/photo.png" />
            </div>
            <div className="col-span-7 text-left">
              <h3 className="text-sm font-sans">Dr. Isbella</h3>
              <h3 className="text-sm text-[#888C96]">California Hospital Medical Center</h3>
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

          <div className="grid grid-cols-12 gap-2 mb-10" style={{ alignItems: 'center' }}>
            <div className="col-span-2 ml-8">
              <img className="" alt="" src="./assets/img/photo.png" />
            </div>
            <div className="col-span-7 text-left">
              <h3 className="text-sm font-sans">Dr. Isbella</h3>
              <h3 className="text-sm text-[#888C96]">California Hospital Medical Center</h3>
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

        </div>
      </div>

    </div>
  );
}

export default Result;