import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import fridgeImg from "../../assets/imgs/svg/fridge-img-for-card.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Fridge = ({ id, name }) => {
  return (
    <div class="w-full max-w-sm m-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Menu as="div" className="flex justify-end px-4 pt-4">
        <Menu.Button className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/* Dropdown menu */}
          <Menu.Items className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "px-4 py-2 w-full text-sm flex justify-start items-center"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "px-4 py-2 w-full text-sm flex justify-start items-center"
                    )}
                  >
                    Export Data
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
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div class="flex flex-col items-center pb-10">
        <img class="w-full h-56 mb-3" src={fridgeImg} alt="Fridge image" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{id}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#65C9FF] rounded-lg hover:bg-[#65C9FF] focus:ring-4 focus:outline-none focus:ring-[#65C9FF] dark:bg-[#65C9FF] dark:hover:bg-[#65C9FF] dark:focus:ring-[#65C9FF]"
          >
            Open
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fridge;
