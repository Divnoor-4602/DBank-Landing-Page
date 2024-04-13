import React from "react";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards.jsx";
import people1 from "../assets/people01.png";
import people2 from "../assets/people02.png";
import people3 from "../assets/people03.png";

const Testimonials = () => {
  const items = [
    {
      quote:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Charles Dickens",
      title: "Businessman",
      avatar: people1,
    },

    {
      quote:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      avatar: people2,
    },
    {
      quote:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Jane Austen",
      title: "Founder & Leader",
      avatar: people3,
    },
  ];

  return (
    <>
      {/* container */}
      <div className="w-full flex flex-col gap-6 relative">
        {/* text content */}
        <div className="flex justify-between items-center w-full">
          <div className="tracking-wide text-white text-3xl md:text-[36px] font-poppins font-semibold md:leading-[50px] text-center md:text-start">
            What people are <br />
            saying about us
          </div>
          <div className="text-white/70 text-sm">
            Everything you need to accept card payments
            <br /> and grow your business anywhere on the planet.
          </div>
        </div>
        {/* testimonials */}
        <div className="mt-12">
          <InfiniteMovingCards items={items} />
        </div>
        <div className="w-[20%] absolute blue__gradient -z-1 h-[80%] right-0 top-0" />
        <div className="w-[30%] absolute white__gradient -z-1 h-[20%] right-0 top-0" />
      </div>
    </>
  );
};

export default Testimonials;
