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

  const styleFooter = {
    backgroundColor: "#F8BB17",
    position: "fixed",
    left: 0,
    bottom: 0,
    padding: "10px",
  };

  return (
    <div className="w-full" style={styleFooter}>
      <div className="flex">
        {footerItems.map((el) => (
          <div className="flex-auto w-64 ">
            <a href={el.link}>{el.label}</a>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <img className="w-10" src={GitHub} alt="GitHub" />
      </div>
    </div>
  );
};

export default Footer;
