import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Send, FileText, User, Users, Bell , Calendar,Settings} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-gray-100 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="items-center justify-between ps-12 pt-5.5 lg:pt-4.5">
        <NavLink to="/" className="flex">
          {/* <img src={Logo} alt="Logo" width={"70%"} /> */}
          <h1 className="text-2xl font-semibold">Saahayak</h1>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        ></button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-3">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-5 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/dashboard"
                  className={`group relative flex items-center gap-4.5 mb-2 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-purple-100  ${
                    pathname.includes("dashboard") && "bg-purple-200"
                  }`}
                >
                  
                  <Home/>

                  Dashboard
                </NavLink>
                <NavLink
                  to="/saahayak-ai"
                  className={`group relative flex items-center gap-4.5 mb-2  rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-purple-100  ${
                    pathname.includes("sales") && "bg-purple-200"
                  }`}
                >
                  
                <Send/>
                Saahayak AI
                </NavLink>
                 <NavLink
                  to="/schedule"
                  className={`group relative flex items-center gap-4.5 mb-2  rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-purple-100  ${
                    pathname.includes("schedule") && "bg-purple-200"
                  }`}
                >
                  
                <Calendar/>
                Schedule Manager
                </NavLink>
                <NavLink
                  to="/content-analyze"
                  className={`group relative flex items-center gap-4.5 mb-2  rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-purple-100  ${
                    pathname.includes("customers") && "bg-purple-200"
                  }`}
                >
                  <FileText/>
                  Content Analyzer
                </NavLink>
                <NavLink
                  to="/settings"
                  className={`group relative flex items-center gap-4.5 mb-2  rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-purple-100  ${
                    pathname.includes("bills") && "bg-purple-200"
                  }`}
                >
                  <Settings/>
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
