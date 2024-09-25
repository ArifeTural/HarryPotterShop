import React, { useContext, useState } from "react";
import logo from "../assets/magic-297332_1280.webp";
import { closeNavbar, logoutIcon, openNavbar } from "../helper/icons";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];
const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  // console.log(location);
  return (
    <nav className="bg-navbarColor md:text-sm  ">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8 ">
        <div className="flex items-center justify-between py-5  ">
          <a
            href="https://en.wikipedia.org/wiki/Harry_Potter"
            target="true"
            className="flex items-center gap-2"
          >
            <img src={logo} alt="wikipedia" width={70} height={70} />
            <span className="text-white hover:text-red-900 font-medium">
            The World of Harry Potter
            </span>
          </a>
          {/* //* icon md ekranlardan sonra gizlensin diyoruz */}
          <div className="md:hidden">
            <button
              onClick={() => setShow(!show)}
              className="hover:text-red-800 text-white"
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={`${
            show ? "flex flex-col pb-2" : "hidden"
          } md:flex md:flex-row flex-1 items-center `}
        >
          <ul className="md:flex md:space-x-6">
            {navigation.map((item) => (
              <li
                className="text-gray-400 font-medium flex justify-center "
                key={item.title}
                onClick={() => setShow(false)}
              >
                <NavLink
                  className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white ${
                    location.pathname === item.path
                      ? "underline scale-110 "
                      : ""
                  } `}
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;