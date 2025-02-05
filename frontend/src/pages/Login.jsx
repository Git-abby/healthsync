import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { token, setToken, baseURL } = useContext(AppContext);
  const [state, setState] = useState("sign-up");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state == "sign-up") {
      const { data } = await axios.post(baseURL + "/api/user/register", {
        name,
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        toast.success("Registration Successful");
      } else {
        toast.error(data.message);
      }
    } else {
      const { data } = await axios.post(baseURL + "/api/user/login", {
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        toast.success("Login Successful");
      } else {
        toast.error(data.message);
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              {state === "sign-up" ? "Create Account" : "Sign in"}
            </h2>
            <p className="text-gray-500 text-center text-sm">
              Please {state === "sign-up" ? "signup" : "signin"} to book an
              appointment
            </p>
            <form onSubmit={onSubmitHandler} className="mt-8 space-y-4">
              {state == "sign-up" && (
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      onChange={(e) => setname(e.target.value)}
                      type="text"
                      value={name}
                      required
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter user name"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4"
                      viewBox="0 0 24 24">
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              )}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  E-mail
                </label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    value={email}
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter user email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24">
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter user password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128">
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              {state === "sign-up" && (
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Confirm Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      value={confirmPassword}
                      required
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Confirm Password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128">
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              )}

              {state === "sign-in" && (
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="text-sm">
                    <a
                      href="jajvascript:void(0);"
                      className="text-blue-600 hover:underline font-semibold">
                      Forgot your password?
                    </a>
                  </div>
                </div>
              )}

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  {state === "sign-up" ? "Sign Up" : "SIgn In"}
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">
                {state === "sign-up" ? "Already" : "Don't"} have an account?
                {state === "sign-up" ? (
                  <a
                    onClick={() => setState("sign-in")}
                    className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold cursor-pointer">
                    Sign in
                  </a>
                ) : (
                  <a
                    onClick={() => setState("sign-up")}
                    className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold cursor-pointer">
                    Sign up
                  </a>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
