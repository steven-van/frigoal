import GitHub from "../../assets/images/svg/gitHubLogo.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const footerItems = [
        {
            label: "Home",
            link: "#home",
        },
        {
            label: "About",
            link: "#about",
        },
        {
            label: "Team",
            link: "#team",
        },
    ];
    const navigate = useNavigate();

    // eslint-disable-next-line
    const [pathname, setPathname] = useState(window.location.pathname)

    const linkElements = footerItems.map(route => {
        const isHome = pathname === "/";

        return isHome ? (
            <a href={route.link}>{route.label}</a>
        ) : (
            <button onClick={() => { navigate("/") }}>{route.label}</button>
        )
    })

    return (
        <footer>
            <div className="w-full bg-[#6097CE] left-0 bottom-0 relative text-white">
                <div className="flex justify-center pb-2 gap-6 pt-4">
                    <div className="flex w-16 justify-center gap-24">
                        {linkElements}
                    </div>
                </div>
                <div className="flex justify-center">
                    <a href="https://github.com/steven-van/frigoal/">
                        <img className="object-contain h-9 w-16 mb-4 mt-4" src={GitHub} alt="GitHub" />
                    </a>
                </div>
                <div className="flex justify-center pt-2">
                    <p className="mb-3">2023 LSI2 - APP</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
