import React, { useState } from "react";


import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

const DefaultLayout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  


  return (
    <div >
      <div className="flex h-screen overflow-hidden ">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 w-full">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
