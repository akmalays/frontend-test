import React from "react";

function addressHeader() {
  return (
    <div>
      <div className="flex gap-2 px-2 py-2">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25px"
            viewBox="0 0 24 24"
            width="25px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </div>
        <div>
          <p className="uppercase text-[9px]"> alamat pengantaran</p>
          <div className="flex gap-1 cursor-pointer hover:opacity-80">
            <p className="font-bold capitalize"> tokopedia tower</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="red"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addressHeader;
