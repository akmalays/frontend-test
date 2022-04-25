import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import mapData from "../data/data.json";
import { ImLocation2 } from "react-icons/im";

const token = process.env.REACT_APP_MAPS_TOKEN;

function Maps() {
  //   useEffect(() => {
  //     setViewport({
  //       width: "100%",
  //       height: "100%",
  //       latitude: latitude,
  //       longitude: longitude,
  //       zoom: 10,
  //     });
  //   }, [latitude]);

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
    zoom: 12,
  });

  return (
    <div className="w-screen h-screen">
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
            >
              <div className="flex flex-shrink-0 animate-bounce cursor-pointer">
                <ImLocation2 className="text-red-800" size={40} />
                <span className="bg-black h-7 rounded-l-full">
                  <p className=" px-4 py-1 font-bold text-[9px] text-white ">
                    {result.place_name}
                  </p>
                </span>
              </div>
            </Marker>
          </div>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default Maps;
