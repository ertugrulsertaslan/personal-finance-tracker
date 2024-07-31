import React from "react";
import Menu from "./Common/Menu.jsx";

export default function Layout({ children }) {
  return (
    <div className="bg-customBgColor min-h-screen">
      <div className="container mx-auto ">
        <div className="w-full grid grid-cols-12 gap-4 p-2 min-h-screen">
          <div className="col-span-12 md:col-span-3 xl:col-span-2 h-full">
            <Menu />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
