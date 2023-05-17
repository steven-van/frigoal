import Nathalie from "./../../assets/images/svg/nathalie.svg";
import Mohamad from "./../../assets/images/svg/mohamad.svg";
import Steven from "./../../assets/images/svg/steven.svg";
import Christine from "./../../assets/images/svg/christine.svg";
import Maxime from "./../../assets/images/svg/maxime.svg";
import Fandresena from "./../../assets/images/svg/fandresena.svg";

const SectionTeam = () => {
  const font = "font-montserrat font-thin";

  return (
    <div
      id="team"
      className={`${font} font-thin flex justify-center items-center h-screen flex-col mb-60`}
    >
      {/* Affichage du titre de la section */}
      <div>
        <p className="text-3xl md:text-4xl lg:text-6xl text-center text-black font-bold pb-10 md:mt-9">
          Our Team
        </p>
        <p className="text-1xl md:text-2xl lg:text-4xl text-center text-black">
          LSI2 APP 2022-2023
        </p>
      </div>

      {/* Affichage des deux colonnes des membre */}
      <div className="flex">
        {/* Affichage de la premiere colonne */}
        <div className="w-1/2 p-10">
          <div className="flex flex-col">
            {/* Nathalie LIU */}
            <div className="flex justify-center items-center">
              <div className="w-1/2 p-5 pt-12">
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  Nathalie
                </p>
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  LIU
                </p>
                <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                  Software Engineer
                </p>
              </div>
              <div className="w-1/2 p-5 flex justify-center">
                <img
                  src={Nathalie}
                  width="150"
                  height="150"
                  alt="Nathalie profile avatar"
                />
              </div>
            </div>

            {/* Mohamad RESLAN */}
            <div className="flex justify-center items-center">
              <div className="w-1/2 p-5 pt-12">
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  Mohamad
                </p>
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  RESLAN
                </p>
                <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                  Software Engineer
                </p>
              </div>
              <div className="w-1/2 p-5 flex justify-center">
                <img
                  src={Mohamad}
                  width="150"
                  height="150"
                  alt="Mohamad profile avatar"
                />
              </div>
            </div>

            {/* Steven VAN */}
            <div className="flex justify-center items-center">
              <div className="w-1/2 p-5 pt-12">
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  Steven
                </p>
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  VAN
                </p>
                <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                  Software Engineer
                </p>
              </div>
              <div className="w-1/2 p-5 flex justify-center">
                <img
                  src={Steven}
                  width="150"
                  height="150"
                  alt="Steven profile avatar"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-10">
          <div className="flex flex-col">
            {/* Christine LI */}
            <div className="flex justify-center items-center">
              <div className="w-1/2 p-5 flex justify-center">
                <img
                  src={Christine}
                  width="150"
                  height="150"
                  alt="Christine profile avatar"
                />
              </div>
              <div className="w-1/2 p-5 pt-12">
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  Christine
                </p>
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  LI
                </p>
                <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                  Software Engineer
                </p>
              </div>
            </div>

            {/* Fandresena RAKOTOMAHEFA */}
            <div className="flex justify-center items-center">
              <div className="w-1/2 p-5 flex justify-center">
                <img
                  src={Fandresena}
                  width="150"
                  height="150"
                  alt="Fandresena profile avatar"
                />
              </div>
              <div className="w-1/2 p-5 pt-12">
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  Fandresena
                </p>
                <p className="text-[10px] md:text-[18px] lg:text-2xl text-black">
                  RAKOTOMAHEFA
                </p>
                <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                  Software Engineer
                </p>
              </div>
            </div>

            {/* Maxime WANG */}
            <div className="flex justify-center items-center">
              <div className="w-1/2 p-5 flex justify-center">
                <img
                  src={Maxime}
                  width="150"
                  height="150"
                  alt="Maxime profile avatar"
                />
              </div>
              <div className="w-1/2 p-5 pt-12">
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  Maxime
                </p>
                <p className="text-1xl md:text-2xl lg:text-3xl text-black">
                  WANG
                </p>
                <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTeam;
