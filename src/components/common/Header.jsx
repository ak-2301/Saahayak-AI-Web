import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const Header = (props) => {

  const { email, setEmail } = useState("Ankit");
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const handleLogout = async () => {
    setEmail(null)
    navigate('/')
  }
  return (
    <header
      className="sticky top-0 z-999 flex w-full bg-gray-100 border-b border-gray-100 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none"
    >
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11 shadow-2">
        <div className="flex items-center ">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-gray-200 p-1.5 shadow-sm lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!w-full delay-300'
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && 'delay-400 !w-full'
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!w-full delay-500'
                    }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!h-0 !delay-[0]'
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!h-0 !delay-200'
                    }`}
                ></span>
              </span>
            </span>
          </button>
          <div className="flex gap-2 sm:gap-4 items-center" to="/">
            <span className="hidden text-right sm:block">
              <span className="block text-sm font-medium text-black dark:text-black">
                <p className="text-base pl-2">Welcome, {email ? email : 'Guest'}!</p>
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <Link to="/" onClick={handleLogout} className="text-red-500 hover:underline">
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
