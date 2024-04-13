import React from "react";
import Bill from "../assets/bill.png";
import Apple from "../assets/apple.svg";
import Google from "../assets/google.svg";
import { motion } from "framer-motion";

const Billing = () => {
  return (
    <>
      {/* billing container */}
      <div className="flex flex-col md:flex-row w-full font-poppins gap-20 items-center">
        {/* billing img */}
        <motion.img
          initial={{ y: 0 }}
          animate={{
            y: 20,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          src={Bill}
          alt="bill png"
          className="object-contain w-[70%] md:w-[50%]"
        />

        {/* billing content */}
        <div className="flex flex-col gap-8">
          <div className="tracking-wide text-white text-3xl md:text-[36px] font-poppins font-semibold md:leading-[50px] text-center md:text-start">
            Easily control your <br />
            billing & invoicing.
          </div>
          {/* subtext billing content */}

          <div className="text-white/70 text-sm text-justify">
            Elit enim sed massa etiam. Mauris eu adipiscing
            <br className="hidden md:block" /> ultrices ametodio aenean neque.
            Fusce ipsum orci rhoncus
            <br className="hidden md:block" />
            aliporttitor integer platea placerat.
          </div>
          <div className="flex gap-8 justify-center md:justify-start w-full">
            <img
              src={Apple}
              alt="download from apple"
              className="cursor-pointer"
            />
            <img
              src={Google}
              alt="download from google"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="blue__gradient w-[10%] h-[50%] absolute left-0" />
        <div className="pink__gradient w-[30%] h-[30%] absolute left-0" />
      </div>
    </>
  );
};

export default Billing;
