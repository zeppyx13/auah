import React, { useEffect, useState } from "react";
import axios from "axios";
import Userinput from "../../components/input/userinput";
import "boxicons";

const Login = () => {
  const unsplash = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const [bgImage, setBgImage] = useState(
    "https://images.unsplash.com/photo-1513112300738-bbb13af7028e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDU3NjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzg3NzU5Nzd8&ixlib=rb-4.0.3&q=80&w=1080"
  );

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?query=night,star&client_id=${unsplash}`
        );
        setBgImage(response.data.urls.regular);
      } catch (error) {
        console.error("Gagal mengambil gambar latar belakang:", error);
      }
    };

    fetchBackground();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-12 backdrop-blur-md bg-opacity-90">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Welcome Back
        </h2>

        <form className="space-y-6">
          <Userinput
            label={"Username or Email"}
            type="text"
            id="usernameLogin"
            placeholder="Username or Email..."
            name="username"
            className="w-full"
          />

          {/* Input Password dengan Ikon Mata */}
          <div className="relative w-full">
            <Userinput
              label={"Password"}
              type={showPassword ? "text" : "password"}
              id="passwordLogin"
              placeholder="Password..."
              name="password"
              className="w-full pr-12"
            />
            {/* Ikon Toggle Password */}
          </div>
          <div
            className="absolute right-2 top-1/2 mt-[2%] transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <box-icon
              name={showPassword ? "hide" : "show-alt"}
              size="md"
            ></box-icon>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-purple-600 hover:text-purple-500"
            >
              Forgot password?
            </a>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all shadow-md">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <a
            href="#"
            className="text-blue-600 hover:text-blue-500 font-medium ml-1"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
