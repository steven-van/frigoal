import { useState } from "react";
import Logo from "../assets/imgs/png/OK.jpg";
import { ActionButton } from "../components/UI/Buttons";
import Footer from "../components/UI/Footer";
import NavBar from "../components/UI/NavBar";
import EditIcon from "@mui/icons-material/Edit";

const Profile = ({ firstName, lastName, email, password }) => {
  const [isModified, setModified] = useState(true);

  const inputItems = [
    { label: "First Name", value: firstName, type: "text" },
    { label: "Last Name", value: lastName, type: "text" },
    { label: "Email", value: email, type: "email" },
    { label: "Password", value: password, type: "password" },
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
          <div className="grid grid-cols-2 gap-6">
            {inputItems.map((item) => (
              <div className="mt-6 relative">
                <div>{item.label}</div>
                <div className="flex items-center">
                  <input
                    autoFocus
                    disabled={isModified}
                    className="border-2 pl-2 border-black-900 relative h-10 w-96"
                    type={item.type}
                    value={item.value}
                    id="name"
                    name="name"
                    required
                  />
                  <div
                    className="absolute cursor-pointer right-0 pr-2"
                    onClick={() => {
                      setModified(!isModified);
                    }}
                  >
                    <EditIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-5">
          <ActionButton title="Cancel" color="white" />
          <ActionButton title="Save" color="#74ceff" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
