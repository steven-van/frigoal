import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import defaultAvatar from "../../assets/images/svg/avatar.svg";
import logoLogin from "../../assets/images/svg/logo-login.svg";
import logoSignUp from "../../assets/images/svg/logo-sign-up.svg";
import logoSignOut from "../../assets/images/svg/logo-sign-out.svg";
import logoAccountSettings from "../../assets/images/svg/logo-account-setting.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const notLoggedIn = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex bg-[#6097CE] overflow-hidden h-14 w-14 justify-center gap-x-1.5 rounded-full shadow-sm hover:ring-1 hover:ring--[#65C9FF]">
          <img
            class="object-center w-full"
            src={defaultAvatar}
            alt="Avatar"
          ></img>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#LogIn"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 w-full text-sm flex justify-start items-center"
                  )}
                >
                  <img class="w-10 mr-3" src={logoLogin} alt="logo login"></img>
                  Log in
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#SignUp"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 w-full text-sm flex justify-start items-center"
                  )}
                >
                  <img
                    class="w-10 mr-3"
                    src={logoSignUp}
                    alt="logo sign up"
                  ></img>
                  Sign up
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const loggedIn = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex bg-[#6097CE] overflow-hidden h-14 w-14 justify-center gap-x-1.5 rounded-full shadow-sm hover:ring-1 hover:ring--[#65C9FF]">
          <img
            class="object-center w-full"
            src={defaultAvatar}
            alt="Avatar"
          ></img>
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
              Signed in as nom@example.com
            </div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#AccountSettings"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 w-full text-sm flex justify-start items-center"
                  )}
                >
                  <img
                    class="w-10 mr-3"
                    src={logoAccountSettings}
                    alt="logo account settings"
                  ></img>
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 w-full text-sm flex justify-start items-center"
                  )}
                >
                  <img
                    class="w-10 mr-3"
                    src={logoSignOut}
                    alt="logo sign out"
                  ></img>
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

export default function Dropdown() {
  var login = false;
  if (login === true) {
    return loggedIn();
  } else {
    return notLoggedIn();
  }
}
