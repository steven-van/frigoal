import logo from "../../assets/images/svg/logo-with-text.svg";
import burger from "../../assets/images/svg/burger.svg";
import Dropdown from "./Dropdown";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

const NavBar = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const btnClass = `inline-block lg:text-lg text-sm px-5 py-2 leading-none 
    rounded-full text-black hover:border-transparent hover:text-white font-black
    hover:bg-[#65C9FF] active:border-transparent active:text-white active:bg-[#65C9FF]
    focus:border-transparent focus:text-white focus:bg-[#65C9FF]`;


    const changeLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const handleRouteClick = (route) => {
        if (!isLoggedIn) {
            navigate("/login");
        } else {
            navigate(route);
        }
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-[#FFFFFF] m-10">
            <div className="w-full flex relative justify-center items-center">
                <div className="absolute left-0">
                    <button className="md:w-40 w-24" onClick={() => navigate("/")}>
                        <img src={logo} alt="Frigoal Logo" />
                    </button>
                </div>
                {/* Burger menu */}
                <div className="absolute right-0 md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-right px-3 py-2 w-12"
                    >
                        <img src={burger} alt="Burger icon" />
                    </button>
                </div>
                <div
                    className={`${menuOpen ? "" : "hidden"
                        } w-screen absolute top-10 md:relative md:top-0 md:flex py items-center md:w-auto flex-col bg-white md:bg-transparent`}
                >
                    <div className="flex flex-col justify-center px-8 gap-1 md:flex-row md:gap-4 text-sm lg:flex-grow">
                        <button onClick={() => navigate("/")} className={btnClass}>
                            Home
                        </button>
                        <button onClick={() => handleRouteClick("/fridges")} className={btnClass}>
                            Fridges
                        </button>
                        <button onClick={() => handleRouteClick("/recipes")} className={btnClass}>
                            Recipes
                        </button>
                    </div>
                    <div>
                        {isLoggedIn ? (
                            <div className="flex flex-col justify-center px-8 gap-1 mt-1 md:flex-row md:gap-4 text-sm lg:flex-grow visible md:hidden">
                                <button
                                    onClick={() => navigate("/profile")}
                                    className={btnClass}
                                >
                                    Profile
                                </button>
                                <button onClick={() => changeLoggedIn()} className={btnClass}>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center gap-1 mt-1 md:flex-row md:gap-4 text-sm lg:flex-grow visible md:hidden">
                                <button onClick={() => navigate("/login")} className={btnClass}>
                                    Login
                                </button>
                                <button
                                    onClick={() => navigate("/signup")}
                                    className={btnClass}
                                >
                                    Sign Up
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center absolute right-1 invisible md:visible">
                    {isLoggedIn ? (
                        <div className="flex justify-center items-center">
                            <Dropdown isLoggedIn={changeLoggedIn} />
                        </div>
                    ) : (
                        <div className="items-center rounded-lg ">
                            <div className="flex justify-center gap-4 text-sm lg:flex-grow">
                                <button
                                    onClick={() => navigate("/login")}
                                    className="inline-block lg:text-sm text-xs px-5 py-2 leading-none rounded-full text-white bg-[#6097CE] hover:bg-[#6097CE]/[.75]"
                                >
                                    Log In
                                </button>
                                <button
                                    onClick={() => navigate("/signup")}
                                    className="inline-block lg:text-sm text-xs px-5 py-2 leading-none rounded-full text-white bg-[#65C9FF] hover:bg-[#65C9FF]/[.75]"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
