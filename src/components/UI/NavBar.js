import { Outlet, Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../../assets/images/svg/logo-with-text.svg";

const NavBar = () => {
    const btnClass = `inline-block text-lg px-5 py-2.5 leading-none rounded-full text-black 
                  hover:border-transparent hover:text-white hover:bg-[#65C9FF] 
                  active:border-transparent active:text-white active:bg-[#65C9FF] 
                  mt-4 lg:mt-0`;

    const btnPaddingClass = "pr-8";

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-[#FFFFFF] p-10">
                <div className="w-full flex relative justify-center items-center">
                    <div className="absolute left-0">
                        <Link
                            to="/"
                            replace
                        >
                            <div class="w-44">
                                <img src={logo} alt="Frigoal Logo" />
                            </div>
                        </Link>
                    </div>
                    <ul className="flex">
                        <li className={btnPaddingClass}>
                            <Link
                                to="/"
                                className={btnClass}
                                replace
                            >
                                Home
                            </Link>
                        </li>

                        <li className={btnPaddingClass}>
                            <Link
                                to="/fridges"
                                className={btnClass}
                                replace
                            >
                                Fridges
                            </Link>
                        </li>
                        <li className={btnPaddingClass}>
                            <Link
                                to="/recipes"
                                className={btnClass}
                                replace
                            >
                                Recipes
                            </Link>
                        </li>
                    </ul>
                    <div className="absolute right-0">
                        <Dropdown />
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default NavBar;