import React from "react";

function dateHeader() {
  return (
    <div>
      <div className="flex gap-1 flex-wrap">
        <div
          className="grid hover:bg-gray-700 hover:text-white hover:px-2 hover:py-2
        hover:rounded-full"
        >
          <p className="font-light"> SEN</p>
          <p className="font-bold"> 10</p>
        </div>
      </div>
    </div>
  );
}

export default dateHeader;
