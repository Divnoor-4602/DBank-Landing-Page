import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonals,
  Clients,
  CTA,
  Footer,
} from "./components";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    // Website container
    <div className="bg-primary w-full overflow-hidden">
      {/* navbar container */}
      <div className="text-white sm:px-16 px-6 w-full max-w-[1280px] ">
        <Navbar />
      </div>

      {/* main hero section */}
      <div className="flex flex-start sm:pl-16 px-6 bg-primary">
        <Hero />
      </div>

      {/* statistics bank */}
      <div className="flex flex-start sm:px-16 px-6 bg-primary py-12 sm:py-16">
        <Stats />
      </div>

      {/* business */}
      <div className="flex flex-start sm:px-16 px-6 bg-primary">
        <Business />
      </div>

      {/* billings */}
      <div className="flex flex-start sm:px-16 px-6 bg-primary py-12 sm:py-16">
        <Billing />
      </div>

      {/* Card Deal */}
      <div className="flex flex-start sm:px-16 px-6 bg-primary py-12 sm:py-16">
        <CardDeal />
      </div>

      {/* Feedback website */}
      <div className="flex flex-start sm:px-16 px-6 bg-primary py-12 sm:py-16">
        <Testimonials />
      </div>

      {/* Affiliated Clients */}
      <div className="flex flex-start sm:px-16 px-6 bg-primary py-12 sm:py-16">
        <Clients />
      </div>

      {/* Service try now */}
      <div className="flex flex-start sm:px-16 px-6 bg-primary py-12 sm:py-16">
        <CTA />
      </div>

      {/* Footer now */}
      <div className="flex flex-start sm:px-16 px-6 bg-primary py-12 sm:py-16">
        <Footer />
      </div>
    </div>
  );
};

export default App;
