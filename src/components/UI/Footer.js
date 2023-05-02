import GitHub from "../../assets/gitHubLogo.svg";

const Footer = () => {
  const footerItems = [
    {
      label: "Home",
      link: "",
    },
    {
      label: "About",
      link: "",
    },
    {
      label: "Team",
      link: "",
    },
  ];

  return (
    <footer>
      <div className="w-full  bg-[#62C9FD] left-0 bottom-0 relative z-50 h-auto right-0">
        <div className="flex justify-center pb-2 w-screen">
          {footerItems.map((el) => (
            <div className="w-16">
              <a href={el.link}>{el.label}</a>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img className="w-16" src={GitHub} alt="GitHub" />
        </div>
        <div className="flex justify-center pt-2">
          <p>2023 LSI2 - APP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
