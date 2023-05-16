import logo from "../../assets/imgs/svg/logo-with-text.svg";
import burger from "../../assets/imgs/svg/burger.svg";
import Dropdown from "./Dropdown";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = (url, title) => {
  return (
    <a
      href={url}
      class="inline-block lg:text-lg text-sm px-5 py-2 leading-none rounded-full text-black hover:border-transparent hover:text-white hover:bg-[#65C9FF] active:border-transparent active:text-white active:bg-[#65C9FF]"
    >
      {title}
    </a>
  );
};

const NavBar = () => {
  var isLoggedIn = false;
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const LogoOnClick = () => {
    navigate("/");
  };

  return (
    <nav class="flex items-center justify-between flex-wrap bg-[#FFFFFF] pl-10 fixed w-[100vw] lg:w-[100vw] -mt-1 py-6 z-50 lg:mb-[900px]">
      <div className="w-full flex relative justify-center items-center mr-10">
        <div className="absolute left-0">
          <div class="md:w-40 w-24" onClick={() => LogoOnClick()}>
            <img src={logo} alt="Frigoal Logo"></img>
          </div>
        </div>
        {/* Burger menu */}
        <div className="absolute right-0 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-right px-3 py-2 w-12"
          >
            <img src={burger}></img>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "" : "hidden"
          } w-full absolute top-10 md:relative md:top-0 md:flex items-center md:w-auto flex-col`}
        >
          <div class="flex flex-col justify-center gap-1 md:flex-row md:gap-4 text-sm lg:flex-grow">
            {Button("/", "Home")}
            {Button("#Fridges", "Fridges")}
            {Button("#Recipes", "Recipes")}
          </div>
          {isLoggedIn ? (
            <div class="flex flex-col justify-center gap-1 mt-1 md:flex-row md:gap-4 text-sm lg:flex-grow visible md:hidden">
              {Button("/Profile", "Account Settings")}
              {Button("#", "Sign out")}
            </div>
          ) : (
            <div class="flex flex-col justify-center gap-1 mt-1 md:flex-row md:gap-4 text-sm lg:flex-grow visible md:hidden">
              {Button("/Login", "Log In")}
              {Button("/SignUp", "Sign Up")}
            </div>
          )}
        </div>

        <div className="flex flex-row justify-center items-center absolute right-1 invisible md:visible">
          {isLoggedIn ? (
            <div className="flex justify-center items-center">
              <Dropdown />
            </div>
          ) : (
            <div className="items-center rounded-lg ">
              <div class="flex justify-center gap-4 text-sm lg:flex-grow">
                <a
                  href="/Login"
                  class="inline-block lg:text-sm text-xs px-5 py-2 leading-none rounded-full text-white bg-[#6097CE] hover:bg-[#6097CE]/[.75]"
                >
                  Log In
                </a>
                <a
                  href="/SignUp"
                  class="inline-block lg:text-sm text-xs px-5 py-2 leading-none rounded-full text-white bg-[#65C9FF] hover:bg-[#65C9FF]/[.75]"
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
