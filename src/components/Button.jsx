import React from "react";

const Button = ({ className }) => {
  return (
    <>
      <button
        className={`text-black bg-blue-gradient  px-6 py-3 rounded-xl text-sm hover:scale-105 transition duration-300 ${className}`}
      >
        Get Started
      </button>
    </>
  );
};

export default Button;
