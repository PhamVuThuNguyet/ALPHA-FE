import { GoogleMap, Marker } from "react-google-maps";
import React from "react";
import MyMapComponent from "./MyMapComponent";

function Map(){  
    return(
        <div>
            <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-row">
                    <div className="flex flex-col mt-20 ml-10 w-24 w-1/3">
                        <button>
                            <img src="./assets/img/back_arrow.svg" />
                        </button>
                        <h3 className="font-sans text-sm text-[#36BD8C]">Back</h3>
                    </div>
                    <div className="w-2/3 flex flex-col">
                        <div className="flex flex-col items-center mt-14">
                            <img src="./assets/img/place_ggmap_searched.jpg" />
                            <h3 className="font-sans text-xl font-bold mt-4">Benh vien A</h3>
                            <h3 className="font-sans text-sm text-[#888C96] mt-2">49 Nguyen Van Linh, Hai Chau, Da Nang</h3>
                        </div>
                        <div className="flex flex-row mt-20 ml-8">
                            <div className="flex flex-col">
                                <h3 className="font-sans text-sm text-[#888C96]">Rate</h3>
                            </div>
                            <div className="flex flex-col ml-28">
                                <h3 className="font-sans text-sm text-[#888C96]">Type</h3>
                                <h3 className="font-sans text-sm mt-5">Clinic</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-20 ml-24">
                    <h2 className="text-2xl font-sans text-[#36BD8C]">Map</h2>
                    <div className="flex flex-row items-center mt-3">
                        <input className="focus:outline-none focus:border-green-500 w-3/5 placeholder-[#36BD8C]" type="text" placeholder="Location"></input>
                        <button>
                            <img className="" src="./assets/img/search_nobackground.svg" />
                        </button>
                    </div>
                    <div className="mt-10">
                        <MyMapComponent />
                    </div>                    
                </div>
                <div className="flex flex-col mt-20 ml-24">
                    <div className="flex flex-row gap-28">
                        <h2 className="text-2xl font-sans text-[#36BD8C]">Your History</h2>
                        <button>
                            <img className="w-10" src="./assets/img/drop_menu.svg" />
                        </button>
                    </div>
                    <div className="flex flex-row gap-2 mt-10"> 
                        <img src="./assets/img/location_marker.svg" />
                        <h2 className="text-xl font-sans">Benh vien Hoan My</h2>
                    </div>
                    <div className="flex flex-row gap-2 mt-8"> 
                        <img src="./assets/img/location_marker.svg" />
                        <h2 className="text-xl font-sans">Benh vien Hoan My</h2>
                    </div>
                    <div className="flex flex-row gap-2 mt-8"> 
                        <img src="./assets/img/location_marker.svg" />
                        <h2 className="text-xl font-sans">Benh vien Hoan My</h2>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
export default Map;