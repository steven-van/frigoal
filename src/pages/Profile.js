import { useContext, useState, useEffect } from "react";
import ProfileImg from "../assets/images/svg/avatar.svg";
import Footer from "../components/UI/Footer";
import NavBar from "../components/UI/NavBar";
import EditIcon from "@mui/icons-material/Edit";
import { useRef } from "react";
import { AuthContext } from "../AuthContext";

const Profile = () => {
  const [isDisabled, setDisabled] = useState(true);
  const { email } = useContext(AuthContext);
  const [user, setUser] = useState([
    { email: "", firstName: "", lastName: "", password: "" },
  ]);

  function fetchUserInformations() {
    fetch(`http://localhost:3001/user/userInformations/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des recettes :",
          error
        );
      });
  }

  const inputItems = [
    { label: "First Name", value: user[0].firstName, type: "text" },
    { label: "Last Name", value: user[0].lastName, type: "text" },
    { label: "Email", value: user[0].email, type: "email" },
    { label: "Password", value: user[0].password, type: "password" },
  ];

  useEffect(() => {
    fetchUserInformations();
  }, []);

  const ref = useRef([1, 2, 3, 4]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="grid md:w-full lg:w-full place-items-center pt-8 h-screen">
        <div className="text-center ">
          <img
            className="h-48 w-48 rounded-full"
            src={ProfileImg}
            alt="Profile img"
          />
          <p className="text-xl font-bold">
            {user[0].firstName} {user[0].lastName}
          </p>
        </div>
        <div>
          <div>
            <p className="text-xl font-bold">Profile</p>
            <p className="text-xs ">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {inputItems.map((item, index) => (
              <div className="mt-6 relative">
                <div>{item.label}</div>
                <div className="flex items-center">
                  <input
                    disabled={isDisabled}
                    className="border-2 pl-2 border-black-900 relative h-10 w-96"
                    type={item.type}
                    value={item.value}
                    id={item.label}
                    name="name"
                    required
                    ref={(el) => (ref[index] = el)}
                  />
                  <div
                    className="absolute cursor-pointer right-0 pr-2"
                    onClick={() => {
                      setDisabled(false);
                      ref[index].focus();
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
          <button
            className={`grid place-items-center border-[#E5E7E9] border-2 w-20 h-10 rounded-md text-center`}
          >
            Cancel
          </button>
          <button
            className={`grid place-items-center  bg-[#74ceff] w-20 h-10 text-white rounded-md text-center`}
            onClick={() => {
              setDisabled(true);
            }}
          >
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
