import React from "react";
import arrowUp from "../assets/arrow-up.svg";

const GetStarted = () => {
  return (
    <>
      <div className="border rounded-full w-28 h-28 bg-blue-gradient flex justify-center items-center p-[2px] cursor-pointer">
        <div className="bg-primary rounded-full w-[100%] h-[100%] flex items-center justify-center">
          <div className="font-poppins flex flex-col text-gradient">
            <div className="flex gap-1 items-center">
              <div>Get</div>
              <img src={arrowUp} alt="get started arrow" className="w-6 h-6" />
            </div>
            <div>Started</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
