import React from "react";
import { footerLinks } from "../constants/index.js";
import { socialMedia } from "../constants/index.js";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-8 md:gap-0">
        {/* logo and logo statement */}
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-2xl flex gap-1">
            <div className="bg-blue-gradient h-8 w-8 rounded-full"></div>
            <div className="text-white">
              Div<span className="text-gradient">Bank</span>
            </div>
          </div>
          <div className="text-sm text-white/70 tracking-wide">
            A new way to make the payments <br /> easy, reliable and secure.
          </div>
        </div>
        {footerLinks.map((footerLink) => {
          return (
            <div className="text-white" key={footerLink.title}>
              <div className="flex flex-col gap-2">
                <div className="mb-2">{footerLink.title}</div>
                {footerLink.links.map((link) => {
                  return (
                    <div
                      key={link.name}
                      className="text-sm opacity-70 cursor-pointer hover:opacity-100 transition duration-300"
                    >
                      {link.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* hr */}
      <hr className="border-slate-700 w-full rounded-md" />
      {/* copyright */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between w-full items-center">
        <div className="text-white text-sm opacity-70">
          Copyright DivBank. All Rights Reserved.
        </div>
        {/* social media */}
        <div className="flex gap-6">
          {socialMedia.map((sm) => {
            return (
              <a key={sm.id} href={sm.link}>
                <img
                  src={sm.icon}
                  alt="sm icon"
                  className="w-6 h-6 object-contain"
                />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
