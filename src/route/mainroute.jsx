import React from "react";
import Header from "../components/header";
import Sidenav from "../components/sidenav";
import Maps from "../components/maps";

function Mainroute() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-2">
        <div className="">
          <Sidenav />
        </div>
        <div className="col-span-2">
          <div className=" inline-flex max-w-screen  pt-10">
            <Maps />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainroute;
