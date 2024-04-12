import React from "react";
import discount from "../assets/Discount.svg";
import GetStarted from "./GetStarted.jsx";
import robotHero from "../assets/robot.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      {/* hero container */}
      <section id="home" className="w-full">
        {/* text section hero */}
        <div className="flex flex-col md:flex-row text-white font-poppins  w-full justify-between items-center gap-8">
          <div className="flex flex-col gap-8 items-center sm:items-start justify-center ">
            {/* payment badge */}
            <div className="flex items-center gap-2 bg-discount-gradient max-w-fit px-4 rounded-full py-1">
              <img src={discount} alt="discount" className="w-8" />
              <div className="tracking-tighter text-sm sm:text-base">
                20% <span className="opacity-70">Discount For</span> 1MONTH{" "}
                <span className="opacity-70">Account</span>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-10">
                {/* hero section main text */}
                <p className="tracking-wide text-3xl sm:text-[52px] text-center sm:text-start font-semibold sm:leading-[72px]">
                  The Next
                  <br className="sm:block hidden" />{" "}
                  <span className="text-gradient">Generation</span>
                </p>
                {/* get started button */}
                <motion.div className="sm:flex hidden md:mr-4 mr-0">
                  <GetStarted />
                </motion.div>
              </div>
              {/* payment method text */}
              <div className="tracking-wide text-3xl sm:text-[52px] text-center sm:text-start font-semibold sm:leading-[72px]">
                Payment Method
              </div>
            </div>

            {/* subheading text */}
            <div className="font-poppins text-sm max-w-[500px] mt-5 opacity-70 leading-[28px]">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </div>
          </div>
          <div className="w-2/3 md:w-1/2">
            <motion.img
              src={robotHero}
              alt="robot hero"
              className="w-[100%] h-[100%] relative z-10"
              initial={{ y: 0 }}
              animate={{
                y: 25,
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <div className="w-1/2 absolute pink__gradient -z-1 h-[35%] md:right-0 md:top-20 left-0 top-0 md:left-[50%]" />
            <div className="w-[30%] absolute white__gradient -z-1 h-[40%] md:right-0 md:bottom-20 left-0 top-0 md:left-[40%]" />
            <div className="w-1/2 absolute blue__gradient -z-1 h-[40%] md:right-0 md:bottom-20 left-0 top-0 md:left-[50%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
