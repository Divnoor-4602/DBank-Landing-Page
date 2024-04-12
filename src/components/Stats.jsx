import React from "react";
import { stats } from "../constants/index.js";

const Stats = () => {
  return (
    <>
      {/* statistics container */}
      <div className="flex flex-row justify-evenly w-full pb-8 flex-wrap">
        {stats.map((stat) => {
          return (
            <div key={stat.id} className="text-white flex gap-4 items-center">
              <div className="font-semibold text-[30px]">{stat.value}</div>
              <div className="uppercase text-[15px] text-gradient">
                {stat.title}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stats;
