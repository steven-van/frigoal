import GitHub from "../../assets/images/svg/gitHubLogo.svg";

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

    return (
        <footer>
            <div className="w-full bg-[#6097CE] left-0 bottom-0 relative text-white">
                <div className="flex justify-center pb-2 gap-6 pt-4">
                    {footerItems.map((el) => (
                        <div className="w-16">
                            <a href={el.link}>{el.label}</a>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <a href="https://github.com/steven-van/frigoal/">
                        <img className="w-16" src={GitHub} alt="GitHub" />
                    </a>
                </div>
                <div className="flex justify-center pt-2 ">
                    <p>2023 LSI2 - APP</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
