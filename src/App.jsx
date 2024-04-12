import React from "react";
import { Navbar, Hero, Stats, Business, Billing } from "./components";

const App = () => {
  return (
    // Website container
    <div className="bg-primary w-full overflow-hidden">
      {/* navbar container */}
      <div className="text-white sm:px-16 px-6 w-full max-w-[1280px]">
        <Navbar />
      </div>

      {/* main hero section */}
      <div className="flex flex-start sm:pl-16 px-6 bg-primary">
        <Hero />
      </div>

      {/* statistics bank */}
      <div className="flex flex-start sm:px-16 px-6 bg-primary">
        <Stats />
      </div>

      {/* business */}
      <div className="flex flex-start sm:px-16 px-6 bg-primary">
        <Business />
      </div>
    </div>
  );
};

export default App;
