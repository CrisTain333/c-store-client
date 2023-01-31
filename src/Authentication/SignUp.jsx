import React, { useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../images/c-logo.png";

const SignUp = () => {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  return (
    <div>
      <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-[50%] xl:w-5/12 p-6 sm:p-12">
          <div className="flex items-center justify-center ">
            <span className="text-3xl font-semibold">Sign up for</span>
            <img src={brandLogo} className="h-10 w-10" alt="" />
            <span className="text-3xl font-semibold">Store</span>
          </div>
          <div class="flex items-center justify-center my-5">
            <img
              class="object-cover w-20 h-20 rounded-full"
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : "https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png"
              }
              alt="profilePhoto"
            />
          </div>
          <div class="mt-5 flex flex-col items-center">
            <div class="w-full flex-1 mt-3">
              <div class="mx-auto max-w-xs">
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Name"
                />
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="Email"
                />
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <div className="  mt-5">
                  <label class="block">
                    <span class="sr-only">Choose File</span>
                    <input
                      onChange={imageChange}
                      type="file"
                      class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "
                    />
                  </label>
                </div>
                <button class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    class="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span class="ml-3">Sign Up</span>
                </button>
                <p className="mt-3">
                  All ready user{" "}
                  <Link to="/signIn">
                    <span className="text-red-400 underline">Login</span>
                  </Link>
                </p>
                <p class="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by C-store Terms of Service and its Privacy
                  Policy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;