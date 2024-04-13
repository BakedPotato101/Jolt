import React from "react";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-tan to-orange dark:bg-slate-900 w-full h-full pt-20 flex flex-col items-center justify-center dark:text-white" style={{ backgroundImage: 'linear-gradient(to bottom right, #FCD6A4, #FFA07A)'}}>
      <h1 className="text-7xl font-bold text-center mb-4">Welcome to Jolt</h1>
      <p className="text-lg text-center font-bold mb-8">Lightning Fast Stats</p>
      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
      </div>
    </div>
  );
}