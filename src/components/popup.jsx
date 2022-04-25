import React from "react";
import { ImLocation2 } from "react-icons/im";
import { GoGlobe } from "react-icons/go";
import Image1 from "../assets/merlion-park20191008171420.jpg";

function Popup(props) {
  console.log(props, "ini props selected marker");
  const markerSelected = props.markerSelected;
  return (
    <div>
      <div className="bg-gray-700 h-screen w-[250px] ">
        <div className="flex flex-col">
          <div className="w-50px">
            <img src={Image1} height={50} width={250} alt="img-singapore" />
          </div>
          <div className="bg-sky-300 px-4 text-white text-lg font-semibold">
            <p> {markerSelected.place_name ? markerSelected.place_name : ""}</p>
          </div>
          <div className="text-left font-semibold text-xs px-4 py-5">
            <p className="pb-5 text-[11px]">
              {markerSelected.desc ? markerSelected.desc : ""}
            </p>
            <p className="text-[11px]">
              {" "}
              its name cobines "mer" meaning the sea and "lion". the fish body
              represents Singapore's origin as a fishing village when its was
              called Temasek, which means "sea town" in Javanese. the lion head
              represents singapore's original name-Singapura-meaning "lion city"
              or "kota singa".
            </p>
            <div className="flex gap-1 cursor-pointer text-[11px] pt-5">
              <ImLocation2 className="text-sky-300" size={15} />
              <p> 10 Bayfront Avenue, Singapore</p>
            </div>
            <div className="flex gap-1 cursor-pointer text-[11px] py-3 ">
              <GoGlobe className="text-green-300" size={15} />
              <p> http://www.marinabaysands.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
