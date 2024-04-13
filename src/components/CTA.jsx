import React from "react";
import Button from "../components/Button.jsx";

const CTA = () => {
  return (
    <>
      <div className="w-full rounded-xl bg-black-gradient-2 p-16">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="tracking-wide text-white text-3xl md:text-[36px] font-poppins font-semibold md:leading-[50px] text-center md:text-start">
              Let’s try our service now!
            </div>
            <div className="text-white/70 text-sm leading-[28px]">
              Everything you need to accept card payments{" "}
              <br className="hidden md:block" />
              and grow your business anywhere on the planet.
            </div>
          </div>
          <Button className={"w-[170px] h-[64px]"} />
        </div>
      </div>
    </>
  );
};

export default CTA;
