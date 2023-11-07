"use client";
import React, { useEffect, useState } from "react";
const Footer = () => {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);

  return (
    <div className="mt-20">
      <footer>
        <div className="bg-black h-48">
          <div className="flex flex-row items-center justify-center text-white">
            <p className="flex flex-row items-center justify-center text-base mt-20 font-['Work_Sans'] ">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Rights Reserved{" "}
              <span className="font-semibold pl-2">
                {" "}
                RICHSON TECH. <span className="pl-2">{Year}</span>{" "}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
