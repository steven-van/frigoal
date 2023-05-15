import Logo from "../assets/imgs/png/OK.jpg";
import { ActionButton } from "../components/UI/Buttons";
import Footer from "../components/UI/Footer";
import NavBar from "../components/UI/NavBar";

const Profile = ({ firstName, lastName, email, password }) => {
  const inputItems = [
    { label: "First Name", value: firstName },
    { label: "Last Name", value: lastName },
    { label: "Email", value: email },
    { label: "Password", value: password },
  ];

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="grid md:w-full lg:w-full place-items-center pt-8 h-screen">
        <div className="text-center ">
          <img className="h-48 w-48 rounded-full" src={Logo} />
          <p className="text-xl font-bold">Mohamad RESLAN</p>
        </div>
        <div className="">
          <div className="">
            <p className="text-xl font-bold">Profile</p>
            <p className="text-xs ">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="grid grid-cols-2">
            {inputItems.map((item) => (
              <div className="mt-4">
                <div>{item.label}</div>
                <input
                  className="border-2 border-black-900"
                  type="text"
                  value={item.value}
                  id="name"
                  name="name"
                  required
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-5">
          <ActionButton title="Cancel" />
          <ActionButton title="Save" color="#24B26E" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
