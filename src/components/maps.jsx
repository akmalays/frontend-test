import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import mapData from "../data/data.json";
import { ImLocation2 } from "react-icons/im";
import Popup from "./popup";

const token =
  "pk.eyJ1IjoiYWttYWxheXMiLCJhIjoiY2wwM3dxOWpzMWkwdDNpbHNoc3ViNGdvMCJ9.dK_FtvTA0JCkQ1TM3BYBtA";

function Maps() {
  const [isOpen, setIsOpen] = useState(false);
  const [markerSelected, setMarkerSelected] = useState("");

  const doSelectMarker = (statusOpen, dataSelected) => {
    setIsOpen(statusOpen);
    setMarkerSelected(dataSelected);
  };

  const coordinates = mapData.map((result) => ({
    longitude: result.longitude,
    latitude: result.latitude,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 15,
  });

  return (
    <div className="flex">
      <div className="w-[700px] h-screen z-0">
        <ReactMapGL
          mapStyle="mapbox://styles/akmalays/cl03wxb9p000w15qmc0va7d5x"
          mapboxAccessToken={token}
          {...viewport}
          onMove={(evt) => setViewport(evt.viewport)}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {mapData.map((result) => (
            <div key={result.latitude}>
              <Marker
                longitude={result.longitude}
                latitude={result.latitude}
                offsetLeft={-20}
                offsetTop={-10}
                className="hover:scale-150"
              >
                <div className="flex animate-bounce cursor-pointer ">
                  <div
                    className="flex hover:scale-150  "
                    onClick={() => {
                      doSelectMarker(true, result);
                    }}
                  >
                    <ImLocation2 className="text-red-800 " size={60} />
                    <span className="ml-[-42px] mt-1 bg-black hover:bg-green-600 h-7 rounded-l-full">
                      <p className=" px-4 py-1 font-bold text-[9px] text-white ">
                        {result.place_name}
                      </p>
                    </span>
                  </div>
                </div>
              </Marker>
            </div>
          ))}
        </ReactMapGL>
      </div>
      {isOpen ? (
        <div className="flex justify-end relative z-20">
          <Popup markerSelected={markerSelected} />
        </div>
      ) : null}
    </div>
  );
}

export default Maps;
