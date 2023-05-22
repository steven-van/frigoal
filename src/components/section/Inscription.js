import SignIn from "../../assets/images/svg/SignIn.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Inscription = () => {
  const cercle1 = {
    position: "relative",
    width: "15vw",
    height: "15vw",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  };
  const cercle2 = {
    position: "relative",
    width: "15vw",
    height: "15vw",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  };
  const cercle3 = {
    position: "relative",
    width: "6vw",
    height: "6vw",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  };

  const font = "font-montserrat";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  function handleConfirmPasswordChange(event) {
    const confirmPassword = event.target.value;
    const match = password === confirmPassword;
    setPasswordMatch(match);
    setConfirmPassword(confirmPassword);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (passwordMatch) {
      fetch("http://localhost:3001/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, firstName, lastName }),
      })
        .then((response) => {
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div class="container mx-auto px-20">
      <div class="box-border border-1 shadow-2xl">
        <div class="flex min-h-0">
          <div className="flex-1">
            <div>
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2
                    className={`mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 ${font}`}
                  >
                    Sign Up
                  </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    method="POST"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <label
                          htmlFor="fName"
                          className={`block text-sm font-medium leading-6 text-gray-900 ${font}`}
                        >
                          First Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="firstName"
                            name="firstName"
                            type="firstName"
                            value={firstName}
                            onChange={(event) =>
                              setFirstName(event.target.value)
                            }
                            required
                            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="lName"
                          className={`block text-sm font-medium leading-6 text-gray-900 ${font}`}
                        >
                          Last Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="lastName"
                            name="lastName"
                            type="lastName"
                            value={lastName}
                            onChange={(event) =>
                              setLastName(event.target.value)
                            }
                            required
                            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium leading-6 text-gray-900 ${font}`}
                      >
                        Email adress
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className={`block text-sm font-medium leading-6 text-gray-900 ${font}`}
                        >
                          Your password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className={`block text-sm font-medium leading-6 text-gray-900 ${font}`}
                        >
                          Confirm your password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {!passwordMatch && (
                          <p className="text-sm font-medium text-red-800">
                            Password does not match
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <br></br>
                      <br></br>
                      <button
                        type="submit"
                        className={`flex w-full justify-center rounded-md bg-[#65C9FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#6097CE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${font}`}
                      >
                        Sign Up
                      </button>
                    </div>
                    <p
                      class={`mt-10 text-center text-sm text-gray-500 ${font}`}
                    >
                      Already have an account ?
                      <button
                        onClick={() => {
                          navigate("/login");
                        }}
                        class={`font-semibold leading-6 text-[#65C9FF] hover:text-[#6097CE] ${font}`}
                      >
                        &nbsp; Log In
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-[#6097CE] relative">
            <div className="z-5 absolute">
              <div
                className="bg-stone-400 rounded-s-3xl left-10 top-28 sm:left-10 sm:top-20 md:left-12 md:top-20 lg:left-20 lg:top-16"
                style={cercle1}
              ></div>
              <div
                className="bg-stone-400 rounded-s-3xl left-16 top-20 sm:left-[80px] sm:top-[50px] md:left-28 md:top-8 lg:left-48 lg:top-0"
                style={cercle2}
              ></div>
              <div
                className="bg-stone-400 rounded-s-3xl left-32 top-[330px] shadow-2xl sm:left-[180px] sm:top-[200px] md:left-56 md:top-32 lg:left-[27vw] lg:top-2"
                style={cercle3}
              ></div>
            </div>

            <div class="flex z-8 absolute">
              <div
                className={`flex-1 font-bold text-[20px] text-slate-50 ml-6 mt-[450px] lg:text-[35px] lg:mt-[510px] lg:ml-[50px] ${font}`}
              >
                Hey<br></br>Welcome<br></br>To Frigoal !
              </div>
            </div>

            <div class="flex z-10 absolute">
              <img
                className="flex-1 justify-center items-center -mb-[150px] w-[30vw] mt-[250px] ml-3 lg:ml-[110px] md:mt-[150px] lg:mt-[100px]"
                src={SignIn}
                alt="SignIn Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inscription;
