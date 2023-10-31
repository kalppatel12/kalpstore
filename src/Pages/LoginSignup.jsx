import React from "react";

const LoginSignup = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-red-500 p-8 shadow-lg rounded-lg w-96">
        <h2 class="text-2xl font-semibold text-white mb-6">Sign Up</h2>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full px-3 py-2 bg-white text-gray-800 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-3 py-2 bg-white text-gray-800 border rounded-lg"
              placeholder="Email Address"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full px-3 py-2 bg-white text-gray-800 border rounded-lg"
              placeholder="Password"
            />
          </div>
          
          <div class="mb-4 flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              class="mr-2"
            />
            <label for="acceptTerms" class="text-white">
              I accept the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            class="bg-white text-red-500 font-semibold py-2 px-4 rounded-lg w-full hover:bg-red-600 hover:text-white"
          >
            Sign Up
          </button>
        </form>
        <p class="mt-4 text-white text-sm">
          Already registered?{" "}
            Login
          
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
