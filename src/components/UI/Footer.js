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
    <div className="w-full bg-[#F8BB17] left-0 bottom-0 p-2 fixed">
      <div className="flex justify-center pb-2 ">
        {footerItems.map((el) => (
          <div className="w-32">
            <a href={el.link}>{el.label}</a>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <img className="w-16" src={GitHub} alt="GitHub" />
      </div>
      <div className="justify-center pt-2">
        <p>2023 LSI2 - APP</p>
      </div>
    </div>
  );
};

export default Footer;
