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
      <div className="w-full bg-[#6097CE] left-0 bottom-0 relative text-white">
        <div className="flex justify-center pb-2 w-screen gap-6 pt-4">
          {footerItems.map((el) => (
            <div className="w-16">
              <a href={el.link}>{el.label}</a>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img className="w-16" src={GitHub} alt="GitHub" />
        </div>

        <div className="flex justify-center pt-2 ">
          <p>2023 LSI2 - APP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
