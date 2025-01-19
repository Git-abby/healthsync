import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState("Admin");

  const { setAToken, baseURL } = useContext(AdminContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(baseURL + "/api/admin/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full border border-gray-600 rounded-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full border border-gray-600 rounded-full p-2 mt-1"
            type="email"
            required
          />
        </div>

        <button className="w-full bg-primary text-white py-2 rounded-lg text-base">
          Login
        </button>

        {state === "Admin" ? (
          <p className="cursor-pointer">
            Doctor Login?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => setState("Doctor")}>
              here
            </span>
          </p>
        ) : (
          <p className="cursor-pointer">
            Admin Login?{" "}
            <span
              className="text-primary  cursor-pointer"
              onClick={() => setState("Admin")}>
              here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
