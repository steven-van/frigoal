import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import fridgeImg from "../../assets/images/svg/fridge-img-for-card.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Fridge = ({ id, name, color }) => {
  const navigate = useNavigate();

  return (
    <div
      class={`h-64 w-80 max-w-sm m-2 p-4 cursor-pointer overflow-hidden border border-gray-200 rounded-2xl relative shadow-md ${color} hover:shadow-lg`}
    >
      <div
        onClick={() => navigate("/Ingredients")}
        class={`h-64 w-80 max-w-sm`}
      >
        <div class={`flex flex-col h-auto w-auto items-left pb-10`}>
          <h5 class="mb-1 text-2xl z-10 w-2/3 font-black text-sky-950">
            {name}
          </h5>
          <span class="text-md text-gray-500">{id}</span>
          <img
            class="absolute top-12 left-16 z-0 w-full h-52 mb-3"
            src={fridgeImg}
            alt="Fridge image"
          />
        </div>
      </div>
      <div>
        <Menu as="div" className="flex absolute z-20 top-0 right-0 p-4">
          <Menu.Button className="inline-block relative text-gray-500 hover:bg-blue-50 focus:ring-slate-50 focus:ring-4 focus:outline-none rounded-lg text-sm p-1.5">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>

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
              <Menu.Items className="absolute right-0 mt-2.5 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-black",
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
                          active ? "bg-gray-100 text-gray-900" : "text-black",
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
                          active ? "bg-gray-100 text-gray-900" : "text-black",
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
          </Menu.Button>
        </Menu>
      </div>
    </div>
  );
};

export default Fridge;
