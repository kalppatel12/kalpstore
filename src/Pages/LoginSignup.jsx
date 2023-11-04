import React from "react";

const LoginSignup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-red-500 p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-white mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label for="name" className="block text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 bg-white text-gray-800 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label for="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 bg-white text-gray-800 border rounded-lg"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label for="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 bg-white text-gray-800 border rounded-lg"
              placeholder="Password"
            />
          </div>
          
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              className="mr-2"
            />
            <label for="acceptTerms" className="text-white">
              I accept the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="bg-white text-red-500 font-semibold py-2 px-4 rounded-lg w-full hover:bg-red-600 hover:text-white"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-white text-sm">
          Already registered?{" "}
            Login
          
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
