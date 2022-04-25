import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { RiSettings5Fill } from "react-icons/ri";
import { BsFillXCircleFill } from "react-icons/bs";

function Header() {
  return (
    <div>
      <div className="bg-white py-5 h-16 drop-shadow-lg">
        <div className="flex justify-end gap-40 items-center mx-10">
          <div className="font-bold text-lg uppercase">
            top-rated tourist attractions in singapore
          </div>
          <div className="text-gray-500 flex gap-5">
            <AiFillQuestionCircle className="cursor-pointer" size={20} />
            <RiSettings5Fill className="cursor-pointer" size={20} />
            <BsFillXCircleFill className="cursor-pointer" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
