import React from "react";
import Button from "./Button.jsx";
import Star from "../assets/Star.svg";
import Shield from "../assets/Shield.svg";
import Send from "../assets/Send.svg";

const BusinessFeatureCard = ({ icon, text, subText }) => {
  // let subTextArr = subText.split(" ");
  // if (subTextArr.length > 6) {
  //   subTextArr = [...subTextArr.slice(0, 6), "\n", ...subTextArr.slice(6)];
  // }
  // let subTextNewline = subTextArr.join(" ");

  return (
    <>
      <div className="flex items-center gap-6 feature-card rounded-xl p-4 w-fit cursor-pointer">
        <div className="bg-dimBlue rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <img
            src={icon}
            alt="star svg"
            className="p-0 m-0 w-[50%] h-[50%] object-contain "
          />
        </div>
        <div className="flex flex-col gap-1 w-2/3">
          <div className="font-semibold text-sm">{text}</div>
          <div className="text-xs opacity-70 font-extralight tracking-wide leading-[20px]">
            {subText}
          </div>
        </div>
      </div>
    </>
  );
};

const Business = () => {
  return (
    <>
      <div className="py-16 font-poppins relative ">
        <div className="flex flex-col items-center  md:flex-row">
          <div className="flex flex-col gap-8 items-center md:items-start w-5/6">
            {/* text side */}
            <div className="tracking-wide text-white text-3xl md:text-[36px] font-poppins font-semibold md:leading-[50px] text-center md:text-start">
              You do the business, <br className="hidden md:block" /> we'll
              handle the money.
            </div>
            {/* sub-text */}
            <div className="text-white/70 text-sm leading-[28px] w-3/4">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </div>
            {/* get started button */}
            <Button />
          </div>
          {/* features business */}
          <div className="flex-col text-white space-y-8 ">
            <BusinessFeatureCard
              icon={Star}
              text="Rewards"
              subText="We take proactive steps make sure your information and transactions are secure."
            />
            <BusinessFeatureCard
              icon={Shield}
              text="100% Security"
              subText="We take proactive steps make sure your information and transactions are secure."
            />
            <BusinessFeatureCard
              icon={Send}
              text="Balance Transfer"
              subText="We take proactive steps make sure your information and transactions are secure."
            />
          </div>
        </div>
        {/* gradients */}
        <div className="w-[30%] absolute pink__gradient -z-1 h-[35%] top-0 left-0 " />
      </div>
    </>
  );
};

export default Business;
