import React from "react";
import { clients } from "../constants/index.js";

const Clients = () => {
  return (
    <>
      <div className="font-poppins flex justify-evenly w-full items-center flex-wrap gap-8">
        {clients.map((client) => {
          return (
            <div key={client.id}>
              <img
                src={client.logo}
                className="w-[192px] object-contain h-[60px]"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Clients;
