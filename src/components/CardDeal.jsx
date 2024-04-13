import React from "react";
import Cards from "../assets/card.png";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";

const CardDeal = () => {
  return (
    <>
      {/* billing container */}
      <div className="flex flex-col md:flex-row w-full font-poppins gap-20 items-center justify-between">
        {/* billing content */}
        <div className="flex flex-col gap-8 items-center md:items-start">
          <div className="tracking-wide text-white text-3xl md:text-[36px] font-poppins font-semibold md:leading-[50px] text-center md:text-start">
            Find a better card deal <br />
            in few easy steps.
          </div>
          {/* subtext billing content */}

          <div className="text-white/70 text-sm text-justify">
            Elit enim sed massa etiam. Mauris eu adipiscing
            <br className="hidden md:block" /> ultrices ametodio aenean neque.
            Fusce ipsum orci rhoncus
            <br className="hidden md:block" />
            aliporttitor integer platea placerat.
          </div>
          <div>
            <Button />
          </div>
        </div>
        {/* billing img */}
        <motion.img
          initial={{ y: 0 }}
          animate={{
            y: 10,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          src={Cards}
          alt="card png"
          className="object-contain w-[70%] md:w-[40%]"
        />
        <div className="blue__gradient w-[10%] h-[50%] absolute right-0" />
      </div>
    </>
  );
};

export default CardDeal;
