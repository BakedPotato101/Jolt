import React from "react";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-tan to-orange dark:bg-slate-900 w-full h-full pt-20 flex flex-col items-center justify-center dark:text-white" style={{ backgroundImage: 'linear-gradient(to bottom right, #FCD6A4, #FFA07A)'}}>
      <h1 className="text-7xl font-bold text-center mb-4">Welcome to Jolt</h1>
      <p className="text-lg text-center font-bold mb-8">Lightning Fast Stats</p>
      {/* Search bar */}
      <div className="w-4/5 lg:w-2/5 flex justify-center mb-8">
        <input
          type="text"
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full py-3 px-6 w-full md:w-2/3 lg:w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}