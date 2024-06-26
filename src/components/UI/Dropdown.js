import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import defaultAvatar from "../../assets/images/svg/nathalie.svg";
import iconSignOut from "../../assets/images/svg/logo-sign-out.svg";
import iconAccountSettings from "../../assets/images/svg/logo-account-setting.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const { email } = useContext(AuthContext);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex bg-[#6097CE] overflow-hidden h-12 w-12 md:h-14 md:w-14 justify-center gap-x-1.5 rounded-full shadow-sm hover:ring-1 hover:ring--[#65C9FF]">
          <img
            className="object-center w-full"
            src={defaultAvatar}
            alt="Avatar"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="divide-y-1 absolute right-0 z-10 mt-2 w-56 origin-top-right overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <div class="text-gray-700 block px-4 py-2 text-sm font-medium">
              Signed in as {email}
            </div>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => navigate("/profile")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 w-full text-sm flex justify-start items-center"
                  )}
                >
                  <img
                    className="w-10 mr-3"
                    src={iconAccountSettings}
                    alt="Icon account settings"
                  />
                  Account settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    navigate("/");
                    isLoggedIn();
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 w-full text-sm flex justify-start items-center"
                  )}
                  type="submit"
                >
                  <img
                    class="w-10 mr-3"
                    src={iconSignOut}
                    alt="Icon sign out"
                  />
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
